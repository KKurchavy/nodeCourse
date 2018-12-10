const mongoose = require('mongoose');
const {DeveloperSchema} = require('../schemas/developer.schema');

exports.DevelopertModel = mongoose.model('Developer', DeveloperSchema);