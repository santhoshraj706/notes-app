require('dotenv').config()
const express=require('express')
const cors = require('cors')
const app=express()

app.use(express.json())
app.use(cors())

const authRoutes=require('./routes/auth')
app.use('/auth',authRoutes)
const mongoose=require('mongoose')

mongoose.connect(process.env.MONGO_URI).then(()=>console.log("MongoDB connected")).catch((err)=>console.log(err))


app.get('/',(req,res)=>{
    res.json({message:'Note app is running'})
})

app.listen(5000,()=>{
    console.log('Server is running in 5000')
})
