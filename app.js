var express = require("express");
var app = express();

app.use(express.static("public"));
app.use(express.static("yelpAPI"));

app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.render("home");
});

app.get("/cinemas",function(req,res){
    res.render("cinemas");
});

app.listen(3000,function(){
    console.log("Sever is listening");
});