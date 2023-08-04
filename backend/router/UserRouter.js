const UserRouter = require('express').Router();
const Employee = require('../model/Employee');

UserRouter.post('/employeereg',async(req,res)=>{
    try{
        const data = await Employee(req.body);
        data.save();
        res.json("Success");
    }
    catch(err){
        res.status(500).json(err);
    }
})

UserRouter.post('/login' ,(req,res)=>{
    const {email,password}=req.body;
    Employee.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password == password){
                res.json("Success");

            }
            else{
                res.json("The Password is incorrect");
            }
        }
        else{
            res.json("user not found");
        }
    })
    .catch(err=>{
        res.status(500).json(err);
    });
    
} );

module.exports = UserRouter;