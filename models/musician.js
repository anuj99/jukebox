const mongoose = require('mongoose');
const musicianSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        validate: {
            validator: function (v) {
                return v.length >= 3
            },
            message: "minimum 3 characters required"
        },
        required: [true, "please enter musician name"]
    },
    musics: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Music"
    }],
    musicianType: {
        trim: true,
        type: String,
        required: [true, "please enter mucisian type"]
    }
});



module.exports = mongoose.model('Musician', musicianSchema);