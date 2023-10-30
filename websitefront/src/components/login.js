import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { NavLink as Link,  useNavigate } from 'react-router-dom'

 
// const navigate = useNavigate(); 
 // navigate('/home')  
 


function Login() {

  const [values, setValues] = useState({ email : '', password : '' });

  const handleValues = (event)=>{
    const typeofInput = event.target.name
     setValues(userValues => ({...userValues, [typeofInput]:[event.target.value]})); 
  }

  const handleSubmit = (event) =>{
    event.preventDefault()
   console.log(values)
}

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <form action=''  onSubmit={handleSubmit} className='bg-white p-3 rounded w-25'>
        <h2>LOGIN</h2>
        <div className='mb-3'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' placeholder='Email' className='form-control'  onChange={handleValues}/>
        </div>
        <div className='mb-3'>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' placeholder='Password' className='form-control' onChange={handleValues}/>
        </div>
        <button type='submit' className='btn btn-success w-100'>Log In</button>
        <p className='text-center my-2'>Create an New Account</p>
        <Link to="/signup" className='w-100 btn btn-default border rounded bg-light' >Create Account</Link>
      </form>
    </div>
  )
}

export default Login
