module.exports = function getServeRuntimeConfig() {
  return {
    port: 3000,
    cookie: {
      domain: undefined,
      expires: 365 * 24 * 60 * 60 * 1000 // One year in ms
    }
  };

  throw new Error(
    ["NODE_ENV: " + process.env.NODE_ENV, "CONFIG: " + process.env.CONFIG].join(
      ". "
    )
  );
};
