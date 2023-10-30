import React, { useState } from 'react'
import { NavLink as Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Validation from './loginValidation';
// // const navigate = useNavigate(); 
// const handleSubmit = (event) =>{
//     event.preventDefault()
//     // navigate('/home')  
// }

function Login() {
  const navigate = useNavigate();
  // usestate hook to change the values in function component
  const [values, setValues] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const handleValues = (event) => {
    const typeofInput = event.target.name;
    setValues(userValues => ({ ...userValues, [typeofInput]: [event.target.value] }));
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    //  validation for form 
    setErrors(Validation(values));
    if (errors.email === '' && errors.password === '') {
      axios.post("http://localhost:8081/login", values).then(res => {

        if (res.data === "success") {
          navigate('/navbar')
        }
        else {
          setErrors(Validation(values));
          console.log("errrrrr")

        }
      }).catch(err => {
        console.log(err)
      })
    }
    //  console.log(values)
  }

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <form action='' onSubmit={handleSubmit} className='bg-white p-3 rounded w-25'>
        <h2>LOGIN</h2>
        <div className='mb-3'>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' placeholder='Email' className='form-control' onChange={handleValues} />
          {errors.email && <span className='text-danger'>{errors.email}</span>}
        </div>
        <div className='mb-3'>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' placeholder='Password' className='form-control' onChange={handleValues} />
          {errors.password && <span className='text-danger'>{errors.password}</span>}
        </div>
        <button type='submit' className='btn btn-success w-100'>Log In</button>
        <p className='text-center my-2'>Create an New Account</p>
        <Link to="/signup" className='w-100 btn btn-default border rounded bg-light' >Create Account</Link>
      </form>
    </div>
  )
}

export default Login
