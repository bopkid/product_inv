const express = require('express')

const cors = require('cors')
// // const session = require('express-session')
// const MongoStore = require('connect-mongo')(session)


const routes = require('./routes')

const app = express();

app.use(express.json())
// const corsOptions ={
//     origin:[`http://localhost:3000`,`https://protected-headland-41056.herokuapp.com`],
//     credentials: true, // allows our session cookie to be sent back and forth from server to client
//     optionsSuccessStatus: 200 // some older browsers choke on the default 204 code  
// }

// app.use(cors(corsOptions))

const port = process.env.PORT || 3001


app.get('/', (req,res) => {
    res.send('hello there!!')
})

app.use('/api/items' , routes.items)


app.listen(process.env.PORT|| port, () =>{
    console.log(`server is running at port ${port}`)
})

