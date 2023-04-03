const http = require("http");

const server = http.createServer((req, res) => {
  console.log("test server");
  console.log(req.url);
  if (req.url == "/wiki/Main_Page") {
    res.end("This is wikipedia main page");
  } else if (req.url == "/about") {
    res.end(
      "<html><head><title>About</title></head><body><h1>This is About page</h1></body>"
    );
  } else {
    res.end("This page does not exist!");
  }
});

console.log("Server is started");
server.listen(8080);
