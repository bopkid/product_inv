const express = require('express')

const cors = require('cors')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)


const routes = require('./routes')

const app = express();

app.use(express.json())
// const corsOptions ={
//     origin:[`http://localhost:3000`,`https://protected-headland-41056.herokuapp.com`],
//     credentials: true, // allows our session cookie to be sent back and forth from server to client
//     optionsSuccessStatus: 200 // some older browsers choke on the default 204 code  
// }

// app.use(cors(corsOptions))

const port = process.env.PORT || 3001;


app.use(session({
    store: new MongoStore({url:process.env.MONGODB_URI 
        ||'mongodb+srv://test_user:MQLUfxfGHJZXNZQx@cluster0.zywo1.mongodb.net/shop?retryWrites=true&w=majority'}),
    secret: "BigScrectsDontTake",
    resave:false,
    saveUninitialized: false,
    cookie:{
        maxAge: 1000 * 60 * 60 *24
    }
}))





app.get('/', (req,res) => {
    res.send('hello there!!')
});

app.use('/api/items' , routes.items);
app.use('/api/users' , routes.users);
app.use('/api/auth' , routes.auth);



app.listen(process.env.PORT|| port, () =>{
    console.log(`server is running at port ${port}`)
});

