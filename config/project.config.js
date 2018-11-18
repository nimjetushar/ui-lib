const Config = {
  envTypes: {
    DEVELOPMENT: "development",
    TEST: "test",
    PRODUCTION: "production"
  },
  devServer: {
    port: 5200,
    defaultPort: 5200
  },
  srcDirName: "src",
  distDirName: "dist",
  docDirName: "docs"
};

module.exports = Config;
