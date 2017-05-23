var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


module.exports.createApp = function () {
    var app = express();


    //Middlewares
    
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(express.static(path.join(__dirname, 'public')))
    
    app.use(require("./services/auth"))
    app.use(sendViewMiddleware)

    app.use(require("./services/main"))
    return app;
}
//sending a path to Get methods
function sendViewMiddleware(req, res, next) {
    res.sendView = function (view) {
        return res.sendFile(__dirname + "/views/" + view)
    }
    return next();
}