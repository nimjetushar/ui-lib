const webpack = require('webpack'),
  OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"),
  path = require('path'),
  {
    AngularCompilerPlugin
  } = require('@ngtools/webpack');

const rootDir = path.resolve(__dirname, "../../"),
  entryPoint = "src/index.ts";

const config = require("../project.config"),
  mode = config.envTypes.PRODUCTION;

module.exports = {
  mode: mode,
  devtool: 'source-map',
  entry: {
    app: ["reflect-metadata", "zone.js", path.resolve(rootDir, entryPoint)]
  },

  resolve: {
    extensions: [".ts", ".js"],
    modules: ["./node_modules"],
    symlinks: true,
    mainFields: ["browser", "module", "main"]
  },

  output: {
    path: path.resolve(rootDir, "dist"),
    publicPath: '',
    filename: "[name].bundle.js",
    chunkFilename: "[name].chunk.js",
    crossOriginLoading: false
  },

  module: {
    rules: [{
        "test": /\.ts$/,
        "loader": "@ngtools/webpack"
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
        test: /\.(png|jpe?g|gif|cur|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[ext]'
      },
      {
        test: /\.scss$/,
        use: ["css-loader", "sass-loader"]
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
      mainPath: path.resolve(rootDir, entryPoint),
      sourceMap: true,
      tsConfigPath: path.resolve(rootDir, "config/tsconfig.json"),
      skipCodeGeneration: true
    }),
    new OptimizeCSSAssetsPlugin({})
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

  optimization: {
    splitChunks: {
      chunks: "all"
    }
  }
};