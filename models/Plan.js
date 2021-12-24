const {Schema, model} = require('mongoose');

const schema = new Schema({
    type: {type: Number}
    //types {0: basic, 1: advanced, 2: maximum}
});

module.exports = model('Plan', schema);