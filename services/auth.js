﻿
var express = require("express");
var utils = require('../utils');
var mongoose = require('mongoose');
//var models = require("../models");
var login = require("../models/login");
var userSession = require("../usersession");
var router = express.Router();

// To connect mongoDB
mongoose.connect('mongodb://localhost/Newlogin');

router.post('/register', function (req, res) {
    var user = new login.User({
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    })
    user.save(function (err) {
        if (err) {
            var error = 'Something bad happened! Please try again.';
            if (err.code === 11000) {
                error = 'That email is already taken, please try another.';
            }
            res.send({ status: "Fail", msg: "That email is already taken, please try another.", url: "/login" });
        } else {
            utils.createUserSession(req, res, user);
            res.send({ status: user, msg: "Sucess Register", url: "/Dashboard" });
        }
    });
});
router.post('/login', function (req, res) {
    login.User.findOne({ email: req.body.email }, function (err, user) {
        if (!user) {
            res.send({ status: "Fail", msg: "Invalid Email id", url: "/login" });
        } else {
            if (req.body.password == user.password) {              
                utils.createUserSession(req, res, user);
                res.send({ status: "OK", msg: "Sucess login", url: "/dashboard" });
            }
            else {
                res.send({ status: "Fail", msg: "Invalid Password", url: "/login" });
            }
        }
    });
});

/**
 * Log a user out of their account, then redirect them to the home page.
 */
router.get('/logout', function (req, res) {
    if (req.session) {
        req.session.reset();
    }
    res.redirect('/');
});


module.exports = router;
