import {useState} from 'react'
import {Link} from 'react-router-dom'
import {signup} from '../controllers/authController'
function Signup(){
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [message,setMessage]=useState('')
  const handleSignup=async()=>{
    try{
      const data=await signup(name,email,password)
      setMessage(data.message)
    }catch(err){
      setMessage('Signup failed!')
    }
  }
  return(
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card p-4 shadow">
            <h2 className="text-center mb-4">Signup</h2>
            <input className="form-control mb-3" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
            <input className="form-control mb-3" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
            <input className="form-control mb-3" placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
            <button className="btn btn-primary w-100" onClick={handleSignup}>Signup</button>
            {message && <p className="text-center mt-3 text-success">{message}</p>}
            <p className="text-center mt-3">Already have an account? <Link to='/login'>Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Signup