const http = require("http");

const server = http.createServer((req, res) => {
  console.log("test");
  console.log(req.url);
});

// server.listen(8080);

module.exports = server;
