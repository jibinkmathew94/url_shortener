const express = require("express");
const app = express();
const cors = require("cors");
const functions = require("../../function/shorten");
const fs = require("fs");

app.use(cors()); // to send CORS headers.
app.use(express.urlencoded()); // to support URL-encoded bodies.
app.use(express.json());


app.post("/shortcodes", function(req, res) { //post method for returning short code for given urls

  let shortened='';
  
  shortened=functions.shorten(req.body.url,req.body.shortcode);
  
  res.send(shortened);


});



app.get("/shortcodes/:shortcode", (req, res) => {   //get method for returning url for given shortcode

 
  let shortcode_data=functions.unshorten(req.params.shortcode);

  res.send(shortcode_data);

});





module.exports = app;
