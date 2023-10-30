import React from 'react'
import { Link } from 'react-router-dom'



const handleSignupForm = (event) =>{
        event.preventDefault();
}


function signup() {
  return (
    <div  className='d-flex justify-content-center align-items-center vh-100'>
     <form action='' className='w-25 bg-light p-3 rounded' onSubmit={handleSignupForm}>
     <h2>SIGNUP</h2>
     <div className='mb-3'>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' placeholder='Name' className='form-control'/>
        </div>
        <div className='mb-3'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' placeholder='Email' className='form-control'/>
        </div>
        <div className='mb-3'>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' placeholder='Password' className='form-control'/>
        </div>
        <button className='btn btn-primary w-100'>Register</button>
        <div className='my-2'>
        <Link to="/" className='w-100 btn btn-white border rounded-0 bg-light' >Already have an Account</Link>
        </div>
     </form>
    </div>
  )
}

export default signup
