const {Schema, model} = require('mongoose');

const schema = new Schema({
    // email: {type: String, required: true, unique: true},
    // password: {type: String, required: true},
    name: {type: String, required: true},
    // country: {type: String, required: true},
    // plan: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Plan',
    //     required: true
    //     //default = basic (0)
    // }
    // currency - future
    // balance - future
});

module.exports = model('User', schema);