import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const [error, setError] = useState('')
  const navigate = useNavigate()

  const changeInputHandler = (e) => {
    setUserData(prevState => {
      return { ...prevState, [e.target.name]: e.target.value }
    })
  }

  const registerUser = async (e) => {
    e.preventDefault();
    setError('');
    try {
      // Send POST request to register user
      const response = await axios.post(
        `http://localhost:5000/api/users/register`,
        {
          name:userData.name,
          email:userData.email,
          password:userData.password,
          password2:userData.password2

        }
      );

      // const newUser = response.data; // Get the response data

      console.log(response); // Log the registered user

      // if (!newUser) {
      //   setError("Could not register user. Please try again.");
      // } else {
        navigate('/'); // Redirect on successful registration
      // }
    } catch (err) {
      // Log the full error response for debugging
      console.log("Error registering user:", err);
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message); // Display error from server
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };


  return (
    <section className='register'>
      <div className="container">
        <h2>Sign Up!</h2>
        <form className='form register_form' onSubmit={registerUser}>
          {error && <p className='form_error-message'>{error}</p>}
          <input type="text" placeholder='Full Name' name='name' value={userData.name} onChange={changeInputHandler} />
          <input type="text" placeholder='E-mail' name='email' value={userData.email} onChange={changeInputHandler} />
          <input type="password" placeholder='Password' name='password' value={userData.password} onChange={changeInputHandler} />
          <input type="password" placeholder='Confirm Password' name='password2' value={userData.password2} onChange={changeInputHandler} />
          <button type='submit' className='btn primary'>Register</button>
        </form>
        <small>hey there , Already have an account ? <Link to="/login">Sign In</Link></small>
      </div>
    </section>
  )
}

export default Register