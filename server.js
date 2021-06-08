// const config = require("./config.json");
const morgan = require("morgan");
const mongoose = require("mongoose");
require('dotenv').config();
const ejs = require("ejs");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

mongoose.connect(process.env.MONGODB_SRV, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})	

app.use(morgan("short"));
app.use(morgan("combined"));


const routes = require("./routes/api.js") // new

app.use("/api", routes)

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));
app.set('views', __dirname + '/views');

app.get("/", function (req, res) {
  res.render("index.ejs");
});

app.get("/about", function (req, res) {
res.render("about.ejs");

});

app.get("/news", function (req, res) {
    res.render("news.ejs");
    });

app.get("/support", function (req, res) {
  res.redirect("support.ejs");
});

app.get("/invite", function (req, res) {
  res.redirect("add.ejs");
});

app.get('*', function(req, res){
res.status(404).render("404.ejs")
});

var listener = app.listen(process.env.PORT, function () {
    console.log("Your app is listening on port " + listener.address().port);
  });
