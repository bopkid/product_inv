const db  = require('../models')


const index = (req, res) =>{
    db.Item.find({}, (err, foundItems) =>{
        if(err) console.log('Error in Item#index ', err )

        if(!foundItems) return res.json({
            message: "no Item found in database"
        })
        res.status(200).json({items: foundItems})
    })
}

module.exports ={
 index
}