
const express   = require("express");
const app       = express();
const server    = require('http').createServer(app);
const path      = require("path");
const fs        = require("fs");
const port      = 3000;
const axios     = require('axios');



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
  console.log('Hello');
  axios.get('http://api.nessieisreal.com/atms?lat=38.9283&lng=-77.1753&rad=1&key=bd9e719a5ca27b4da145879542172042')
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
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
