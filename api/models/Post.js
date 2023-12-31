const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    title:{
        type: String,
        required : true,
        unique: true
    },
    desc:{
        type: String,
        required : true,
    },
    photo:{
        type:String,
        required:false,
    },
    username:{
        type: String,  //this is a string
        requires: true
    },
    categories:{
        type:Array,
        required:false
    },
    },
    {timestamps: true}
)

module.exports = mongoose.model("Post", PostSchema)