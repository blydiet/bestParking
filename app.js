var express = require("express");
var request = require("request");
var app = express();
app.set("view engine", "ejs");

app.get("/results", function(req, res) {
    // res.send("hello, it works");

    var city = "newyork";

    request('https://api.parkwhiz.com/search/?city=' + city + '&key=62d882d8cfe5680004fa849286b6ce20', function(error, response, body) {

        var parsedData = JSON.parse(body);
        //var parking = parsedData["parking_listings"];
        if(!error && response.statusCode == 200) {
            //res.send(parsedData["parking_listings"][0]["city"]);
            // res.send(parsedData["parking_listings"][0]["city"]);
            res.render("results", {parsedData: parsedData});
        }
    });
});


app.listen(process.env.PORT, process.env.IP, function() {
    console.log("parking app has started!!");
});