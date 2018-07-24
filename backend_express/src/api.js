const express = require("express");
const app = express();
const cors = require("cors");
const functions = require("../../function/shorten");
const fs = require("fs");

app.use(cors()); // to send CORS headers.
app.use(express.urlencoded()); // to support URL-encoded bodies.
app.use(express.json());


app.get("/shortcodes/:shortcode", (req, res) => {

 
  let shortcode_data=functions.unshorten(req.params.shortcode);

  res.send(shortcode_data);

});

module.exports = app;
