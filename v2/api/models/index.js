const mongoose = require('mongoose');


const connectionString  =  process.env.MONGO_URI 
|| 'mongodb+srv://test_user:MQLUfxfGHJZXNZQx@cluster0.zywo1.mongodb.net/shop?retryWrites=true&w=majority';


const configOptions ={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}

mongoose.connect(connectionString, configOptions)
.then(() => console.log('mongodb is working'))
.catch((err) => console.log(err))


module.exports ={
    Item: require("./item")
}