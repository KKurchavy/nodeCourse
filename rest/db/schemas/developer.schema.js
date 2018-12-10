const {Schema} = require('mongoose');

exports.DeveloperSchema = new Schema({
    name: String,
    surname: String,
    level: String,
    linesCount: Number,
    salary: Number
});