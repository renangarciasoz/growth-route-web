const cli = require("./cli");
const getPublicRuntimeConfig = require("./config/public.config.js");
const getServerRuntimeConfig = require("./config/server.config.js");
const assertEnvironment = require("./config/assertEnvironment");

assertEnvironment();

const cliFlags = cli.parse(process.argv);
const publicRuntimeConfig = getPublicRuntimeConfig(cliFlags);
const serverRuntimeConfig = getServerRuntimeConfig(cliFlags);

module.exports = {
  target: "serveless",
  publicRuntimeConfig,
  serverRuntimeConfig
};
