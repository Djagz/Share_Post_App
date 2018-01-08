var mongoose = require('mongoose');
// var User = require('../models/userModel')
var Schema = mongoose.Schema

var InformationSchema = new Schema ({
    title: {type: String, required: [true, "Title missing"], minlength: 3},
    description: {type: String, required: [true, "Description missing"], maxlength: 200},
    location: {type: String, required: [true, "Password missing"]},
    image: {type: String},
    _creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "_creator is missing"]
        }
}, {timestamps: true});

mongoose.model('Information', InformationSchema);