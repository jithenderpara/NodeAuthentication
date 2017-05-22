var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/Employee');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

module.exports.User = mongoose.model('login', new Schema({
    id: ObjectId,
    firstName: { type: String, required: '{PATH} is required.' },
    lastName: { type: String, required: '{PATH} is required.' },
    email: { type: String, required: '{PATH} is required.', unique: true },
    password: { type: String, required: '{PATH} is required.' },
    data: Object,
}));



