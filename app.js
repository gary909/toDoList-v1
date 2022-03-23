// In the console you installed:
// npm i express body-parser
//run server
//
//with nodemon app.js 

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res){
    // res.send("Hello");
    var today = new Date();
    var currentDay = today.getDay();
    // var day = "";
    var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    


    // if (currentDay === 6 || currentDay === 0) {
    //     // res.send("<h3>Yay it's the weekend</h3>")
    //     day = "Weekend";
    // } else {
    //     // res.send("<h3>Boo! I have to work</h3>");
    //     // res.sendFile(__dirname + "/index.html");
    //     day = today.getDay();;
    // }
    res.render("list", {kindOfDay: dayOfWeek[currentDay]});
});


app.listen(3000, function(){
    console.log("Server started on port 3000");
});