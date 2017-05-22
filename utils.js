var express = require("express");

module.exports.createApp = function () {
    var app = express();

    //middlewires
    app.use(require("./services/main"))
    app.use(require("./services/auth"))

    return app;
}

function sendViewTomiddlewire() {

}