const mongoose = require("mongoose")

const DB_URL = 'mongodb://kkurchavy:IQ4511octa@ds127634.mlab.com:27634/game';

exports.initConnection = () => {
    mongoose.connect(DB_URL);
    mongoose.Promise = global.Promise;

    const {connection} = mongoose;
    
    connection.on('error', err => {
        console.error(err);
    })

    return connection;
}