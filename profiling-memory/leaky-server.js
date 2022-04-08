const http = require("http");
const server = http.createServer((req, res) => {
  server.on("connection", () => {
    console.log("connected");
  });
  res.end("Hello World!");
});
server.listen(3000, () => {
  console.log("Server listening on port 3000");
});

// node --max-old-space-size=10 leaky-server.js
// autocannon http://localhost:3000
// 51k requests in 10.05s, 6.94 MB read

//  node --inspect leaky-server.js
//  autocannon http://localhost:3000
//  47k requests in 10.06s, 6.33 MB read
