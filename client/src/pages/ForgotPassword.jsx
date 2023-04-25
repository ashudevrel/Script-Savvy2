import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import logo from '../img/logo.png';





const containerVariants = {
  hidden: {
    opacity: 0,
    y: -50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 15,
      mass: 0.75
    }
  }
};


/*const inputVariants = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 15,
      mass: 0.75,
      delay: 0.5
    }
  }
};*/


const buttonVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      damping: 15,
      mass: 0.75,
      delay: 1
    }
  }
};


const ForgotPassword = () => {
  return (
    <div style={{ 
      background: 'linear-gradient(to bottom, #bdc3c7, #2c3e50)', 
      height: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      flexDirection: 'column',
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
      color: '#fff',
      textShadow: '2px 2px #333'
    }}>
      <motion.div
      

        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <img src={logo} alt="Logo" style={{ 
            marginRight: '1rem',
            width: '50px',
            height: '50px'
          }} />
        <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Forgot Password</h2>
        <input type="email" placeholder="Email" style={{ 
          padding: '1rem',
          fontSize: '1.5rem',
          marginBottom: '1rem',
          borderRadius: '0.5rem',
          border: 'none',
          boxShadow: '2px 2px #333'
        }} />
        <motion.button
          variants={buttonVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ 
            padding: '1rem 2rem',
            fontSize: '1.5rem',
            background: '#333',
            color: '#fff',
            borderRadius: '0.5rem',
            border: 'none',
            cursor: 'pointer',
            margin: '1rem 0',
            boxShadow: '2px 2px #333'
          }}
        >
          Submit
        </motion.button>
        <Link to="/" style={{ 
          fontSize: '1.5rem',
          textDecoration: 'none',
          color: '#fff',
          marginTop: '1rem',
          textShadow: '2px 2px #333'
        }}>
          Back to Login
        </Link>
      </motion.div>
    </div>
  );
};


export default ForgotPassword;