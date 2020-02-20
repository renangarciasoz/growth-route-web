const path = require("path");

module.exports = {
  resolve: {
    alias: {
      pages: path.resolve(__dirname, "./pages"),
      public: path.resolve(__dirname, "./public"),
      theme: path.resolve(__dirname, "./theme")
    }
  }
};
