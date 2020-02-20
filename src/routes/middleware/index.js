const { default: getConfig } = require("next/config");

const {
  serverRuntimeConfig: {
    cookie: { domain }
  }
} = getConfig();

const getInitialRoute = (req, res, next) => {
  // TODO: Centralize the cookie settings responsibility
  if (!req.cookies[INITIAL_ROUTE]) {
    const cookieValue = req.url;
    res.cookie(INITIAL_ROUTE, cookieValue, pickBy({ domain }));
    req.cookies.initialRoute = cookieValue;
  }
  next();
};

module.exports = {
  getInitialRoute
};
