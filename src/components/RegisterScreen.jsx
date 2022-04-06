import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/authContext'
import Swal from 'sweetalert2'

export const RegisterScreen = () => {

  const [formValues, setFormValues] = useState({
    email: "",
    password: ""
  })
  const {signup} = useAuth()
  const navigate = useNavigate();

  const handleChangeForm = ({target: {name, value}}) => {
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await signup(formValues.email, formValues.password)
      navigate('/')
    } catch (error) {
      console.log(error.code);
    }
  }

  return (
    <div className='register-container-main'>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className='register-input-label'>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder='youremail@company.com' onChange={handleChangeForm} />
        </div>

        <div className='register-input-label'>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder='Password' onChange={handleChangeForm} />
        </div>

        <button>Register</button>
        <p>You have an account? <span>Login</span></p>
      </form>
    </div>
  )
}
