var express = require("express");
//var models = require("../models");
//var login = require("../models/login");
var router = express.Router();
var mongoose = require('mongoose');
var modelschema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        index: true
    },
    Password: { type: String, required: true }
})
var User = mongoose.model('logins', modelschema)
//connect to mongoose

mongoose.connect('mongodb://localhost:27017/Newlogin');


router.post('/register', function (req, res) {   
    console.log(req.body)
    var user = new User({
        email: req.body.emailid,
        Password: req.body.password
    })
    user.save(function (err) {
        if (err) {
            var error = 'Something bad happened! Please try again.';

            if (err.code === 11000) {
                error = 'That email is already taken, please try another.';
            }

            res.send(user);
        } else {
            //utils.createUserSession(req, res, User);
            res.sendView('/dashboard');
        }
    });
});
router.post('/login', function (req, res) {    
    User.findOne({email: req.body.email }, function (err, user) {
        if (!user) {
            res.send({ status: "OK", msg: "Invalid Email id", url: "/login" });
        } else {
            console.log(req.body.password === user.password)
            if (req.body.password == user.password) {
                console.log(user)
                //utils.createUserSession(req, res, user);
                res.send({ status: "OK", msg: "Sucess login", url: "/dashboard" });
            }
            else {
                res.send({ status: "OK", msg: "Invalid Password", url: "/login" });
            }
        }
    });
});

module.exports = router;