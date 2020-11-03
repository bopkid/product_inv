const mongoose =require('mongoose');

const Schema  = mongoose.Schema;


const itemSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    description:{
        type: String, 

    },
    seller: {
        type: String, 
        required: true

    },
    quantity: {
        type: Number, 
        required: true
  
    },
    price: {
        type: Number,
        required: true
        
    }
})


const Item = mongoose.model('Item', itemSchema)
module.exports = Item;