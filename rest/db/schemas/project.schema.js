const {Schema} = require('mongoose');

exports.ProjectSchema = new Schema({
    name: String,
    cost: Number,
    linesCount: Number,
});