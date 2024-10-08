import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

  const[userData , setUserData] = useState({
    email: '',
    password: ''
  })

  const changeInputHandler = (e) => {
    setUserData(prevState => {
      return {...prevState, [e.target.name]: e.target.value}
    })
  }
  return (
    <section className='login'>
      <div className="container">
        <h2>Sign In!</h2>
        <form className='form login_form'>
          <p className='form_error-message'>Ops!! , An Unwanted Error Occur</p>
          <input type="text" placeholder='E-mail' name='email' value={userData.email} onChange={changeInputHandler} />
          <input type="password" placeholder='Password' name='password' value={userData.password} onChange={changeInputHandler} />
          <button type='submit' className='btn primary'>Login</button>
        </form>
        <small>hey there , Dont have an account ? <Link to="/register">Sign In</Link></small>
      </div>
    </section>
  )
}

export default Login