const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://8.137.56.156:8080",
      changeOrigin: true,
    })
  );
};


