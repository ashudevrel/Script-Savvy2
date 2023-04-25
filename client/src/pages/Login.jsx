import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../img/logo.png';

const Login = () => {
  return (
    <div className='auth'>
      <div className='login-container'>

        <img src={logo} alt="Logo" className="logo" />

        <h1 className='title'>Welcome back!</h1>
        <form className='form'>
          <input required type="text" placeholder='Username' className='input' />
          <input required type="password" placeholder='Password' className='input' />
          <button className='button'>Sign in</button>
          <p class='error-message'> If Invalid username or password. <button class='error-button'>Retry</button></p>

        </form>
        <div className='options'>
          <span className='register-link'>Don't have an account? <Link to='/register' className='link'>Register</Link></span>
          <span className='forgot-password-link'> | <Link to='/forgot-password' className='link'>Forgot Password</Link></span>
        </div>
      </div>
    </div>
  );
};

export default Login;
