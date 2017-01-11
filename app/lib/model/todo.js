let mongoose = require('mongoose'),
    Schema = mongoose.Schema
    schema = new Schema({
        username: String,
        todo: String
    });

module.exports = mongoose.model('Todo', schema);
