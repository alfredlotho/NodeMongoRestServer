// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// add currency type to mongoose schema types
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

// create a schema
var leaderSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    abbr: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

var Leaders = mongoose.model('Leader', leaderSchema);

// make this available to our Node applications
module.exports = Leaders;