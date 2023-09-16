import classes from './register.module.css'
import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const navigate = useNavigate()

  const handleRegister = async (e) ={
    try {
      //prevent the form's default submission behavior
      e.preventDefault()
    } catch (error) {
      
    }
  }
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <input type="text"  placeholder='Username...'/>
          <input type="email"  placeholder='Email...'/>
          <input type="password"  placeholder='Password...'/>
          <button type="submit">Register</button>
          <p>Already have an account? <Link to='/login'>Login</Link> </p>
        </form>
      </div>
    </div>
  )
}

export default Register
