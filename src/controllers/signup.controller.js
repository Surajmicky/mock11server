const User=require('../models/user.model');
const express= require('express');
const bcrypt = require('bcrypt');

const signuprouter= express.Router();

signuprouter.post('/signup',async(req,res)=>{
  
    const alreadyExists= await User.findOne({email:req.body.email});
    if(alreadyExists){
        return res.json({message:'Email already exists'})
    } 
    let {email,password}= req.body;
   const hashedPassword=  bcrypt.hashSync(password, 10);
    const user= await User.create({email:email,password:hashedPassword});
    return res.status(201).send({message:'User created successfully'})
})
module.exports= signuprouter;