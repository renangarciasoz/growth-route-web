const routes = require("next-routes");

module.exports = routes()
  .add("index", "/")
  .add("login", "/entrar")
  .add("next", "/next-documentacao");
