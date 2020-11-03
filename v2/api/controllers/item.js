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

const show = (req, res) =>{
    db.Item.findById(req.params.id, (err, foundItem) =>{

        if(err) console.log(`Error in Item#show`, err)

        if(!foundItems) return res.json({
            message: "no Item found in database"
        })
        
        res.status(200).json({item: foundItem})
    })
}

const create  = (req,res) =>{
    db.Item.create(req.body, (err, savedItem)=>{
 

        if(err) console.log(`Error in item#create`, err)
        
        res.status(200).json({item: savedItem})
        console.log(savedItem)
    })
}

module.exports ={
 index,
 create
}