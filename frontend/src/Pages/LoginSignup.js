import React from 'react'
import './CSS/loginsignup.css'
const LoginSignup = () => {
  return (
    <div className='loginsignup'>

      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type='text' placeholder='Your Name'></input>
          <input type='email' placeholder='Email Address'></input>
          <input type='password' placeholder='Password'></input>

        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Alredy have an account ?<span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type='checkbox' name='' id=''></input>
          <p>By Continuing i agree to the terms and policies</p>
        </div>
      
      </div>
      
    </div>
  )
}

export default LoginSignup
