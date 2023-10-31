import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import signupValidation from './signupValidation'


function Signup() {
  const navigate = useNavigate();
  // const userData = { name: '', email: '', password: '' }
  const [values, setValues] = useState({ name: '', email: '', password: ''})
  const [errors,setErrors]= useState({});

  const handleInputs = (event) => {
    const type = event.target.name
    const valueofall = event.target.value
    setValues((userValues) => ({...userValues , [type]: valueofall }))
  }
  const handleSignupForm = (event) => {
    event.preventDefault();
    setErrors(signupValidation(values));
    if(errors.name === "" && errors.email === "" && errors.password === ""){
     axios.post("http://localhost:8081/signup",values)
      .then(res=>{
        alert("sucess")
        navigate('/');
        console.log(res)
      }).catch(err=>console.log(err))
    }
    // console.log(values);
  }
  return (
    <div  className='d-flex justify-content-center align-items-center vh-100'>
     <form action='' className='w-25 bg-light p-3 rounded' onSubmit={handleSignupForm}>
     <h2>SIGNUP</h2>
     <div className='mb-3'>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' placeholder='Name' className='form-control' onChange={handleInputs}/>
            {errors.name && <span className='text-danger'>{errors.name}</span>}
        </div>
        <div className='mb-3'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' placeholder='Email' className='form-control'onChange={handleInputs}/>
            {errors.email && <span className='text-danger'>{errors.email}</span>}
        </div>
        <div className='mb-3'>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' placeholder='Password' className='form-control' onChange={handleInputs}/>
            {errors.password && <span className='text-danger'>{errors.password}</span>}
        </div>
        <button className='btn btn-primary w-100'>Register</button>
        <div className='my-2'>
        <Link to="/login" className='w-100 btn btn-white border rounded-0 bg-light' >Already have an Account</Link>
        </div>
     </form>
    </div>
  )
}

export default Signup;
