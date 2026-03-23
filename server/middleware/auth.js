const jsonwebtoken=require('jsonwebtoken')
const auth=(req,res,next)=>{
    const token=req.headers.authorization?.split(' ')[1]
    if(!token){
        return res.status(401).json({message:"blocked"})
    }
    try{
        const decoded=jsonwebtoken.verify(token,process.env.JWT_SECRET)
        req.user=decoded
        next()
    }
    catch(err){
        return res.status(401).json({message:'Inavlid token'})
    }
}
module.exports=auth

