import {useState} from 'react'
import {useNavigate,Link} from 'react-router-dom'
import {login} from '../controllers/authController'
function Login(){
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [message,setMessage]=useState('')
  const navigate=useNavigate()
  const handleLogin=async()=>{
    try{
      const data=await login(email,password)
      localStorage.setItem('token',data.token)
      navigate('/notes')
    }catch(err){
      setMessage('Login failed!')
    }
  }
  return(
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card p-4 shadow">
            <h2 className="text-center mb-4">Login</h2>
            <input className="form-control mb-3" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
            <input className="form-control mb-3" placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
            <button className="btn btn-success w-100" onClick={handleLogin}>Login</button>
            {message && <p className="text-center mt-3 text-danger">{message}</p>}
            <p className="text-center mt-3">Don't have an account? <Link to='/signup'>Signup</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login