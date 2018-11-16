import express from "express";
import request from "request";
import Config from "./project.config";

const sockets = [];

export default function Server(projectConfig) {
  let server, closeCB;

  function start(port, staticDirPaths, middleWares, onCloseCB) {
    closeCB = onCloseCB;

    const httpPort = port;

    if (!httpPort || httpPort === 0) {
      httpPort = Config.devServer.defaultPort;
    }

    const app = express();

    if (middleWares) {
      middleWares.forEach(function(plugin) {
        if (plugin) {
          if (plugin.path) {
            app.use(plugin.path, plugin.proxyFunction);
          } else {
            app.use(plugin);
          }
        }
      });
    }

    app.use(express.static("./"));
    app.use("/node_modules", express.static("node_modules"));

    if (Array.isArray(staticDirPaths)) {
      staticDirPaths.forEach(item => {
        if (typeof item === "string") {
          express.static(item);
        } else {
          app.use(item.pathUrl, express.static(item.path));
        }
      });
    } else {
      app.use(express.static(staticDirPaths));
    }

    if (projectConfig.serverConfig.pathsToProxy) {
      projectConfig.serverConfig.pathsToProxy.forEach(path => {
        if (typeof path === "string") {
          app.use(path, proxyMiddleware);
        } else {
          app.use(path.path, path.proxyFunction);
        }
      });
    }

    server = app.listen(httpPort);

    server.on("connection", function(socket) {
      sockets.push(socket);

      socket.on("close", function() {
        sockets.splice(sockets.indexOf(socket), 1);
      });
    });

    return server;
  }

  function close() {
    onClose();
  }

  function proxyMiddleware(req, res) {
    const url = projectConfig.serverConfig.apiServerHost + req.originalUrl;
    req.pipe(request(url)).pipe(res);
    console.log(url);
  }

  process.on("exit", function() {
    onClose();
  });

  // catches ctrl+c event
  process.on("SIGINT", function() {
    onClose();
  });

  process.on("SIGTERM", function() {
    onClose();
  });

  process.on("SIGABRT", function() {
    onClose();
  });

  process.on("SIGHUP", function() {
    onClose();
  });

  // catches uncaught exceptions
  process.on("uncaughtException", function() {
    onClose();
  });

  function onClose() {
    if (sockets) {
      sockets.forEach(function(socket) {
        socket.destroy();
      });
    }

    if (server) server.close();

    if (closeCB) {
      closeCB();
    }
  }

  return {
    start: start,
    close: close
  };
}
