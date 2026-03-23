const express=require('express')
const router=express.Router()
const bcryptjs=require('bcryptjs')
const jsonwebtoken=require('jsonwebtoken')
const User=require('../models/User')

router.post('/signup',async(req,res)=>{
    const {name,email,password}=req.body
    const hashedPassword=await bcryptjs.hash(password,10)
    const user=new User({name,email,password:hashedPassword})
    await user.save()
    res.json({message:'user created'})
})
router.post('/login',async(req,res)=>{
    const {email,password}=req.body
    const user=await User.findOne({email})
    const isMatch=await bcryptjs.compare(password,user.password)
    if(isMatch){
        const token=jsonwebtoken.sign({id:user._id},process.env.JWT_SECRET)
        res.json({message:'login sucessful!',token})
    }else{
        res.json({message:'Not created failed'})
    }
})
module.exports=router