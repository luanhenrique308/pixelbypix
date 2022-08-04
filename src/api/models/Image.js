const mongoose = require("mongoose");

const PostSChema = new mongoose.Schema({
    name: String,
    size: Number,
    key: String, 
    url: String, 
    index: Number,
    createdAt : {
        type : Date, 
        default: Date.now
    }
});

module.exports= mongoose.model("Image", PostSChema);