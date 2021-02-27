<<<<<<< HEAD
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
    res.render("index",{
        data: "Matta"
    });
});

//
server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
=======
console.log('heoouyguy');
>>>>>>> d2abb4ce5727d63afabca4084bec952f5fb2d0db
