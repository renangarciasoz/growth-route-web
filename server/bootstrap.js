// Libs
const express = require("express");

// Routing
const routes = require("../routes");
const { standardCache, noCache } = require("../routes/middleware/cachePolicy");

function bootstrapServer(app) {
  const server = express();
  const handler = routes.getRequestHandler(app);

  server.get("/static|_next/*", standardCache, (req, res) => handler(req, res));
  server.get("*", noCache, (req, res) => handler(req, res));

  return server;
}

module.exports = bootstrapServer;
