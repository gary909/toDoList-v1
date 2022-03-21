// In the console you installed:
// npm i express body-parser

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res){
    // res.send("Hello");
    var today = new Date();

    if (today.getDay() === 6 || today.getDay() === 0) {
        res.send("<h3>Yay it's the weekend</h3>")
    } else {
        // res.send("<h3>Boo! I have to work</h3>");
        res.sendFile(__dirname + "/index.html");
    }
});


app.listen(3000, function(){
    console.log("Server started on port 3000");
});