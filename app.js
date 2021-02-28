
const express   = require("express");
const app       = express();
const server    = require('http').createServer(app);
const path      = require("path");
const fs        = require("fs");
const port      = process.env.PORT;
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
  axios.get('http://api.nessieisreal.com/accounts/603b0e094a4a8605712848dd?key=9c938dc5d4b4b1e2841d67335f3e5553')
    .then(response => {
      console.log(response.data.balance);
      var amount = response.data.balance.toString();
      res.render("group",{
          data: amount
      });
    })
    .catch(error => {
      console.log(error);
    });
    // render the main page


});

// User page
app.get('/user/:account_id', function(req, res) {
  // render the main pa
  var dynamicName;
  var balance;
  var account_id = req.param("account_id");
  console.log("req >> ", account_id);
  var url = "http://api.nessieisreal.com/accounts/" + account_id + "?key=9c938dc5d4b4b1e2841d67335f3e5553"
  axios.get(url)
    .then(response => {
      console.log(response.data.balance);
      balance = response.data.balance
      console.log(typeof balance);
      dynamicName = response.data.nickname;
      console.log(typeof dynamicName);

      res.render("user",{
          data: balance,
          name: dynamicName
      });

    })
    .catch(error => {
      console.log(error);
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
