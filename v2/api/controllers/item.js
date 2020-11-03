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

        if(!foundItem) return res.json({
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
const update  = (req,res) =>{
    const options = {new:true}
    db.Item.findByIdAndUpdate(req.params.id , req.body, options, (err,updatedItem) =>{
        if(err) console.log(`Error in Item#update`. err)

        if(!updatedItem) return res.json({
            message: "No game with that ID found"
        })

        res.status(200).json({item: updatedItem})
    })
}


const destory = (req,res) =>{
    db.Item.findByIdAndDelete(req.params.id , (err, deletedItem) =>{
        if(err) console.log(`Error in item#delete ` , err)

        if(!deletedItem) return res.json({
            message: "No Item with that Id found"
        })
        res.status(200).json({
            item: deletedItem
        })
    })
}
module.exports ={
 index,
 create,
 show,
 destory, 
 update
}