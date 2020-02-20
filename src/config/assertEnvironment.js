const assert = require("assert");

module.exports = function assertEnvironment() {
  if (!process.env.NODE_ENV) {
    console.warn("NODE_ENV not set, defaulting to development");
    process.env.NODE_ENV = "development";
  }

  assert(
    ["test", "development", "production"].indexOf(process.env.NODE_ENV) !== -1
  );

  if (process.env.NODE_ENV === "production") {
    if (!process.env.CONFIG) {
      console.warn("CONFIG not set, defaulting to staging");
      process.env.CONFIG = "staging";
    }

    assert(["staging", "production"].indexOf(process.env.CONFIG) !== -1);
  }
};
