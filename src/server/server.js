// server.js
const next = require("next");

const app = next({ dir: './src', dev: process.env.NODE_ENV !== "production" });

const bootstrapServer = require("./bootstrap");
const { default: getConfig } = require("next/config");

const {
  serverRuntimeConfig: { port }
} = getConfig();

app.prepare().then(() => {
  const server = bootstrapServer(app);

  server.listen(3000, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
