const express = require("express");
const app = express();
const debug = require("debug")("my-server");
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(3000, () => {
  debug("HTTP GET request to /");
  console.log("Server listening on port 3000");
});

// DEBUG=my-server node debug-server.js
