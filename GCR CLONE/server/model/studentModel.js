const mongoose = require('mongoose');
const studenSchema = new mongoose.Schema({
    name : {
        type :String
    },
    email:{
        type:String,
        unique:true
    },
    file: {
        type: String, // Field to store the file path
    },


})

const Student = mongoose.model('GCR CLONE',studenSchema)
module.exports = Student