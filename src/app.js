const express = require("express");
const app = express();

const path = require("path");

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`servidor corriendo en el puerto ${port}`));

app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname, "views/home.html"));
});

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "views/home.html"));
});

app.get("/registro", function (req, res) {
    res.sendFile(path.join(__dirname, "views/register.html"));
});

app.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname, "views/login.html"));
});


app.use(express.static("public"));