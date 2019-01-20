const path = require("path"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  rxPaths = require("rxjs/_esm5/path-mapping"),
  webpack = require("webpack"),
  {
    AngularCompilerPlugin
  } = require("@ngtools/webpack");

const config = require("../project.config"),
  port = config.devServer.port,
  mode = config.envTypes.DEVELOPMENT;

const rootDir = path.resolve(__dirname, "../../"),
  cwd = process.cwd();

module.exports = {
  mode: mode,
  resolve: {
    extensions: [".ts", ".js"],
    modules: ["./node_modules"],
    symlinks: true,
    mainFields: ["browser", "module", "main"]
  },

  resolveLoader: {
    modules: ["./node_modules"],
    alias: rxPaths()
  },

  entry: {
    app: ["reflect-metadata", "zone.js", path.resolve(rootDir, "demo/main.ts")]
  },

  output: {
    path: path.resolve(rootDir, "dist"),
    publicPath: `http://localhost:${port}/`,
    filename: "[name].bundle.js",
    chunkFilename: "[name].chunk.js",
    crossOriginLoading: false
  },

  module: {
    rules: [{
        test: /\.ts$/,
        exclude: [/node_modules/, /src/],
        use: [{
          loader: "@ngtools/webpack"
        }],
        include: [path.resolve(rootDir, "demo")]
      },
      {
        test: /\.html$/,
        use: [{
          loader: "raw-loader",
          options: {
            minimize: true
          }
        }]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: "file-loader?name=pubic/fonts/[name].[ext]"
      },
      {
        test: /\.scss$/,
        use: ["to-string-loader", "style-loader", "css-loader", "sass-loader"]
      }
    ]
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map[query]",
      moduleFilenameTemplate: "[resource-path]",
      fallbackModuleFilenameTemplate: "[resource-path]?[hash]",
      sourceRoot: "webpack:///"
    }),
    new webpack.NamedModulesPlugin({}),
    new webpack.HotModuleReplacementPlugin(),
    new AngularCompilerPlugin({
      mainPath: path.resolve(rootDir, "demo/main.ts"),
      sourceMap: true,
      tsConfigPath: path.resolve(rootDir, "config/tsconfig.json"),
      skipCodeGeneration: true
    }),
    new HtmlWebpackPlugin({
      template: "demo/index.html",
      filename: "./index.html",
      inject: "body"
    })
  ],

  node: {
    fs: "empty",
    global: true,
    crypto: "empty",
    tls: "empty",
    net: "empty",
    process: true,
    module: false,
    clearImmediate: false,
    setImmediate: false
  },

  devServer: {
    contentBase: cwd,
    compress: true,
    hot: true,
    inline: true,
    port: port,
    historyApiFallback: true,
    stats: {
      chunks: false,
      chunkModules: false
    }
  },

  optimization: {
    splitChunks: {
      chunks: "all"
    }
  }
};