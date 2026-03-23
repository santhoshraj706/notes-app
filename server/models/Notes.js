const mongoose=require('mongoose')
const NotesSchema=mongoose.Schema({
    title:String,content:String,user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})
const Notes=mongoose.model('Notes',NotesSchema)
module.exports=Notes