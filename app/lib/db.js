let mongoose = require('mongoose');

module.exports = (dbhost) =>
    mongoose.connect('mongodb://'+dbhost+'/todoapp');

mongoose.Promise = Promise;
