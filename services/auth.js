var express = require("express");
var models = require("../models");
var router = express.Router();

router.post('/register', function (req, res) {   
    console.log(req.body)
    var user = new models.User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
    });
    user.save(function (err) {
        if (err) {
            var error = 'Something bad happened! Please try again.';

            if (err.code === 11000) {
                error = 'That email is already taken, please try another.';
            }

            res.send(user);
        } else {
            utils.createUserSession(req, res, user);
            res.sendView('/dashboard');
        }
    });
});
router.post('/login', function (req, res) {
    console.log(req.body)
    models.User.findOne({ email: req.body.email }, function (err, user) {
        if (!user) {
            res.send({ status: "OK", msg: "Invalid Email id", url: "/login" });
        } else {
            console.log(req.body.password === user.password)
            if (req.body.password == user.password) {
                console.log(user)
                utils.createUserSession(req, res, user);
                res.send({ status: "OK", msg: "Sucess login", url: "/dashboard" });
            }
            else {
                res.send({ status: "OK", msg: "Invalid Password", url: "/login" });
            }
        }
    });
});

module.exports = router;