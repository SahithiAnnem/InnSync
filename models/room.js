const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({
    type :{
        type: String,
        required: true
},
    maxPersons:{
        type : Number,
        required: true

    },
    rentperday:{
        type: Number,
        required: true
    },
    name:{
        type:String,
        required: true
    },
    imageurls:[],
    currentbookings: [],
    description:{
        type: String,
        required: true
    }


    
},{
    timestamps: true,
})

const roomModel = mongoose.model('rooms', roomSchema)
module.exports = roomModel