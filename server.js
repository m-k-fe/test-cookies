const express = require("express");
const path = require("path");

const app = express();
app.get("/", (req, res) => {
  //res.setHeader("Set-Cookie", "token=abc123; Path=/; Domain=127.0.0.1");
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(5000, console.log("Server Running On Port 5000"));
