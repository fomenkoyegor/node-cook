const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(3000, () => {
  console.log("Server listening on port 3000");
  setInterval(() => {
    console.log("Server listening...");
  }, 3000);
});
//NODE_DEBUG=timer node server.js
//NODE_DEBUG=http node server.js
// NODE_DEBUG=http,timer node server.js
