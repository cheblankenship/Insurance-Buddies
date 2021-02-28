
const express   = require("express");
const app       = express();
const server    = require('http').createServer(app);
const path      = require("path");
const fs        = require("fs");
const port      = 3000;



// set static
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));

// set the view engine to ejs
app.set("views", "./views");
app.set("view engine", "ejs");

// main page
app.get('/', function(req, res) {
    // render the main page

    res.render("group",{
        data: "Matydduututudttta"
    });
});

// User page
app.get('/user', function(req, res) {
  // render the main page
  
  res.render("user",{
      data: "1000"
  });
});

// request page
app.get('/request', function(req, res) {
  // render the main page
  
  res.render("request",{
      data: "xfgjxfgj"
  });
});

// rules page
app.get('/rules', function(req, res) {
  // render the main page
  
  res.render("rules",{
      data: "xfgjxfgj"
  });
});

//
server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
