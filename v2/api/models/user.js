const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        requried: [true ,'Name is required']
    },
    email:{
        type:String,
        requried:[true, 'email is required ']
    },
    password:{
        type:String, 
        required: [true , 'password is required']
    }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;