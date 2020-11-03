const express = require('express')

const app = express();


const port = process.env.PORT || 3001


app.get('/', (req,res) => {
    res.send('hello there!!')
})


app.listen(process.env.PORT|| port, () =>{
    console.log(`server is running at port ${port}`)
})

