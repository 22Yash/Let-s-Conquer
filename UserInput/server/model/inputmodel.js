const mongoose = require('mongoose');

const inputSchema = new mongoose.Schema({
    name: {
        type : String

    },
    email:{
        type:String

    },
    contactno:{
        type:Number

    }

})

const Input = mongoose.model('input',inputSchema)  // const variable1 = mongoose.model('collectionname',reference for that we create in above)

module.exports= Input