import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../img/logo.png';

const Register = () => {
  return (
    <div className='auth'>
      <div className='register-container'>

      <img src={logo} alt="Logo" className="logo" />
        
        <h1 className='title'>Register</h1>
        <form className='form'>
          <input required type="text" placeholder='Username' className='input' />
          <input required type="text" placeholder='Unique Character' className='input' />
          <input required type="email" placeholder='Email' className='input' />
          <input required type="password" placeholder='Password' className='input' />
          <button className='button'>Register</button>
          <p className='error-message'>This is an issue</p>
        </form>
        <div className='options'>
          <span className='login-link'>Already have an account? <Link to='/login' className='link'>Login</Link></span>
        </div>
      </div>
    </div>
  );
};

export default Register;
