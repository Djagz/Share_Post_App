var mongoose = require('mongoose');
var Schema = mongoose.Schema

var UserSchema = new Schema ({
    firstName: {type: String, required: [true, "First name is missing"], minlength: 3, index: true},
    lastName: {type: String, required: [true, "Last name is missing"], minlength: 3, index: true},
    email: {type: String, required: [true, "Email is needed"], index: true},
    password: {type: String, required: [true, "Password missing"], minlength: 5, index: true},
    _information: [{type: Schema.Types.ObjectId,
        ref: 'Information'}]
}, {timestamps: true, index: true})

mongoose.model('User', UserSchema);