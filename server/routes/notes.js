const express=require('express')
const router=express.Router()
const Note=require('../models/Notes')
const auth=require('../middleware/auth')
router.get('/',auth,async(req,res)=>{
    const notes=await Note.find({user:req.user.id})
    res.json({notes:notes})
})
router.post('/',auth,async(req,res)=>{
    const {title,content}=req.body
    const note=new Note({title:title,content:content,user:req.user.id})
    await note.save()
    res.json({message:'note saved',note:note})
})
router.delete('/:id',auth,async(req,res)=>{
    await Note.findByIdAndDelete(req.params.id)
    res.json({message:'note deleted'})
})
router.put('/:id',auth,async(req,res)=>{
    const {title,content}=req.body
    await Note.findByIdAndUpdate(req.params.id,{title,content})
    res.json({message:'updated',upadted:content})
})
module.exports=router