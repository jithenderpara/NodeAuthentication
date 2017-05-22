var express = require("express");
var utils = require('../utils');
var path = require("path");// path is require for getting path frm middelware
var router = express.Router();



router.get("/", function (req, res) {
    res.sendView("index.html");
});


module.exports = router;