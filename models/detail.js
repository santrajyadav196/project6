const mongoose = require('mongoose');

const detailSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        min: 0
    },
    number: {
        type: Number,
        required: true,
        min: 0
    }
})

const Detail = mongoose.model('Detail', detailSchema);

module.exports = Detail;