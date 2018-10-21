'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PlayerSchema = new Schema({
    id: Number,
    name: String,
    position: String,
    skills: String,
    shirtNumber: { type: Number, min: 1, max: 99 },
    status: String,
});

module.exports = mongoose.model('Players', PlayerSchema);