var express = require("express");
require("dotenv").config();
var envVar = require("./index.js")

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

console.log(`ENV VAR: ${process.env.JAWSDB_URL}`)
var dbUrl = envVar.envVar();
console.log(`ENV VAR1: ${dbUrl}`)
app.get('/', (req, res) => {
  console.log("Get route");
  res.json({url:dbUrl, string:"xyz"})
});

app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });

module.exports = app;
