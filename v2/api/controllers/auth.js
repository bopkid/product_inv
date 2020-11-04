const db =require('../models')
const bcrypt = require('bcrypt')


const register = (req,res) => {
    if(!req.body.name || !req.body.email || !req.body.password){
        return res.status(400).json({
            status:400,
            message: "please enter a name , email,password"
        })
    }
    db.User.findOne({email: req.body.email} , (err,foundUser)=>{
        if(err) return res.status(500).json({
            status:500,
            message: "something went wrong. Please try agian."
        })
        if (foundUser) return res.status(400).json({
            status: 400,
            message: "A user with that email address already exists!"
          })
          bcrypt.genSalt(10,(err,salt) =>{
              if(err) return res.status(500).json({
                  status:500,
                  message: 'Something went wrong.Please try again'
              })
           bcrypt.hash(req.body.password , salt , (err ,hash) =>{
               if(err) return res.status(500).json({
                   status:500,
                   message: 'Something went wrong.Please try agian.'
               })
               const newUser = {
                   name: req.body.name,
                   email: req.body.email,
                   password: hash
               }
               db.User.create(newUser , (err, savedUser) =>{
                if(err) return res.status(500).json({status: 500 , message: err})
                return res.status(200).json({status:200, message: "User register"})
                })
           })
        })
    })
}

const login = (req,res) =>{
    if(!req.body.email ||!req.body.password){
        return res.send(400).json({status: 400, message: "please enter a email and password "})
    }
    db.User.findOne({email:req.body.email} , (err,foundUser) =>{
        if(err) return res.status(500).json({status: 500 , message: 'Something went worng. Please try again'});

        if (!foundUser) {
            return res.status(400).json({
                status:400,
                message: "Email or password is incorrect "
            });
        }

        bcrypt.compare(req.body.password , foundUser.password , (err,isMatch) =>{
            if(err) return res.status(500).json({
                status:500,
                message:'Something went wrong. Try again'
            })
            if(isMatch) {
                req.session.currentUser = {id: foundUser._id}
                return res.status(200).json({
                    status:200,
                    message: 'Success',
                    data:foundUser._id
                })
            } else{
                return res.status(400).json({
                    status: 400,
                    message: 'Email or password is incorect'
                })
            }
        });
    });
}


const verify = (req,res) =>{
    if(!req.session.currentUser) return res.status(401).json({
        message: 'Unauthorized'
    })
    res.status(200).json({
        message: `Current user verifed woth ID ${ req.session.currentUser.id}`
    })
}

const logout = (req, res) => {
    if (!req.session.currentUser) return res.status(401).json({
      message: 'No user to log out!'
    })
    req.session.destroy(err => {
      if (err) return res.status(500).json({
        message: 'Something went wrong. Please try again.'
      })
      res.sendStatus(200)
    })
  }

module.exports = {
   register,
   login,
   verify,
   logout
}