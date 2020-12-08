const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        const con = await mongoose.connect('mongodb+srv://anuj_gupta91:masspaizama1.@cluster0.jhnyl.mongodb.net/expensetracker?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
        console.log(`mongodb connected ${con.connection.host}`);
    } catch (error) {
        console.log(`error ${error.message}`)
    }
};

module.exports = connectDB;