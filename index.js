const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});
var server = app.listen(8081, function () {
  var port = server.address().port;
  console.log("server is listening at port: " + port);
});
