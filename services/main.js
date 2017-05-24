var express = require("express");
<<<<<<< HEAD
var utils = require('../utils');
var path = require("path");// path is require for getting path frm middelware
var userSession = require("../usersession");
var router = express.Router();


router.get("/", function (req, res) {
    res.sendView("index.html");
});
router.get("/login", function (req, res) {
    res.sendView("index.html");
});
router.get('/dashboard', utils.requireLogin, function (req, res) {
    res.sendView("Dashboard.html");
});

=======
var router = express.Router();

router.get("/", function (req, res) {
    res.sendFile("index.html");
});


>>>>>>> 5fb2d4db9b14c7c97024544477a4655e1fb7a323
module.exports = router;