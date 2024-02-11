const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/teampilotDB');

app.listen(5000, function(){
    console.log("Server set on port 5000");
})