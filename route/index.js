



const express = require("express");
const axios =require("axios");
var bodyParser = require("body-parser");
const path = require("path");
const app = express();



const base_url = "https://env-4019120.proen.app.ruk-com.cloud/";

app.set("views", path.join(__dirname, "/public/view"));
app.set(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));