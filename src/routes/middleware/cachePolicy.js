const standardCache = (_, res, next) => {
  res.set("Cache-control", "public, max-age=31557600, immutable");
  next();
};

const noCache = (_, res, next) => {
  res.set("Cache-control", "no-cache");
  next();
};

module.exports = { standardCache, noCache };
