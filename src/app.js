const express = require("express");
const app = express();

const path = require("path");

app.listen(3030,function(){
    console.log("server started");
});

app.get("/home",function(req,res){
    res.sendFile(path.join(__dirname,"views/home.html"));
});


app.use(express.static("public"));