const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min:6
    },
    gender: {
        type: String,
        required: true,
        min:3
    }
});

module.exports = mongoose.model('User',userSchema)