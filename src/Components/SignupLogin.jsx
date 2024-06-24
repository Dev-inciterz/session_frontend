import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup, login } from '../Services/AuthServices';
import Plans from './Plans';

import './SignupLogin.css';

function SignupLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [formType, setFormType] = useState('login');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (formType === 'signup') {
      await handleSignup();
    } else {
      await handleLogin();
    }
  };

  const handleSignup = async () => {
    const data = await signup(email, password);
    localStorage.setItem('token', data.token);
    localStorage.setItem('expiresIn', data.expiresIn);
    navigate('/time-left');
  };

  const handleLogin = async () => {
    const data = await login(email, password);
    // console.log("qwertyuiop", data)
    localStorage.setItem('token', data.token);
    localStorage.setItem('expiresIn', data.expiresIn);
    navigate('/time-left');
  };

  const handleSignupClick = () => {
    setFormType('signup');
  };

  const handleLoginClick = () => {
    setFormType('login');
  };

  const handleSignupLinkClick = (e) => {
    e.preventDefault();
    handleSignupClick();
  };

  return (
    <div className='allinloginsignup'>
      {/* <h1>Signup / Login</h1> */}

      <div className="loginonform">


   
      <div className="wrapper">
        <div className="title-text">
          <div className={`title ${formType === 'login' ? 'login' : 'signup'}`}>
            {formType === 'login' ? 'Login Form' : 'Signup Form'}
          </div>
        </div>
        <div className="form-container">
          <div className="slide-controls">
            <input
              type="radio"
              name="slide"
              id="login"
              checked={formType === 'login'}
              onChange={handleLoginClick}
            />
            <input
              type="radio"
              name="slide"
              id="signup"
              checked={formType === 'signup'}
              onChange={handleSignupClick}
            />
            <label htmlFor="login" className="slide login" onClick={handleLoginClick}>
              Login
            </label>
            <label htmlFor="signup" className="slide signup" onClick={handleSignupClick}>
              Signup
            </label>
            <div className="slider-tab"></div>
          </div>
          <div className="form-inner">
            <form onSubmit={handleFormSubmit}>
              <div className="field">
                <input
                  type="text"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="field">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {formType === 'signup' && (
                <div className="field">
                  <input
                    type="password"
                    placeholder="Confirm password"
                    required
                    // Implement confirm password logic if needed
                  />
                </div>
              )}
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value={formType === 'login' ? 'Login' : 'Signup'} />
              </div>
              {formType === 'login' && (
                <div className="pass-link">
                  <a href="/">Forgot password?</a>
                </div>
              )}
              <div className="signup-link">
                {formType === 'login' ? (
                  <span>Not a member? <a href="/" onClick={handleSignupLinkClick}>Signup now</a></span>
                ) : (
                  <span>Already have an account? <a href="/" onClick={handleLoginClick}>Login</a></span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>



      </div>

      <Plans />
    </div>
  );
}

export default SignupLogin;
