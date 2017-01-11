let mongoose = require('mongoose'),
    Schema = mongoose.Schema
    schema = new Schema({
        username: String,
        password: String
    });

module.exports = mongoose.model('User', schema);
