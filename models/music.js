const mongoose = require('mongoose');
const { schema } = require('./musician');

const musicSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        validate: {
            validator: function (v) {
                return v.length >= 5
            },
            message: "Name minimum 5 charater required"
        },
        required: [true, 'Name required'],

    },
    genre: {
        type: String,
        trim: true,
        required: [true, "genre is required"]
    },
    price: {
        type: Number,
        trim: true,
        validate: {
            validator: function (v) {
                return v >= 100 && v <= 1000
            },
            message: "price should be beween 100 to 1000"
        },
        required: [true, 'price is required']
    },
    musicians: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Musician'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String
    }
});

module.exports = mongoose.model('Music', musicSchema);