// web.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());

/*
app.get('/', function(req, res) {
  res.send('Hello World!');
});
*/

//app.use("" + __dirname + "/dist");


app.use(express.static("" + __dirname + "/dist"));

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});