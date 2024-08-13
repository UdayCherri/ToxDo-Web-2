const express = require("express");

const PORT = 8000;
const app = express(); //init app

app.set("view engine", "ejs"); //view engine

app.listen(PORT, ()=> {        //listen server
    console.log("Server is running on port ${PORT}")
});