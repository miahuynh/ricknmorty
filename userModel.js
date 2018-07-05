const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema ({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    favorites: { type: [String] },
});



module.exports =  mongoose.model("user", User);