import React from 'react'
import { Button } from 'react-bootstrap'
import { NavLink as Link,  useNavigate } from 'react-router-dom'

 
// const navigate = useNavigate(); 
const handleSubmit = (event) =>{
    event.preventDefault()
    // navigate('/home')  
}
 
function Login() {
  
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <form action=''  onSubmit={handleSubmit} className='bg-white p-3 rounded w-25'>
        <h2>LOGIN</h2>
        <div className='mb-3'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' placeholder='Email' className='form-control'/>
        </div>
        <div className='mb-3'>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' placeholder='Password' className='form-control'/>
        </div>
        <button type='submit' className='btn btn-success w-100'>Log In</button>
        <p className='text-center my-2'>Create an New Account</p>
        <Link to="/signup" className='w-100 btn btn-default border rounded bg-light' >Create Account</Link>
      </form>
    </div>
  )
}

export default Login
