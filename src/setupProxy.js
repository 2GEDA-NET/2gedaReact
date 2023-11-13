// src/setupProxy.js
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/register",
    createProxyMiddleware({
      target: "https://eab6-102-88-37-219.ngrok-free.app",
      changeOrigin: true,
    })
  );
};
// const { createProxyMiddleware } = require("http-proxy-middleware");

// module.exports = function (app) {
//   app.use(
//     "/api", // Adjust the path according to your backend API
//     createProxyMiddleware({
//       target: "https://eab6-102-88-37-219.ngrok-free.app",
//       changeOrigin: true,
//     })
//   );
// };
