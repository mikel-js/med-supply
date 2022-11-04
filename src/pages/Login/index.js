import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthChecker from '../../components/Authentication/AuthChecker';

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();

  const loginUrl = 'https://db-med-supply.herokuapp.com/auth/signin';

  const onEmailChange = (e) => setEmail(e.target.value);
  const onPasswordChange = (e) => setPassword(e.target.value);
  const onLoginSubmit = async (e) => {
    e.preventDefault();
    const reqBody = {
      email,
      password,
    };
    try {
      const res = await axios({
        method: 'post',
        url: loginUrl,
        data: reqBody,
      });
      if (res) {
        console.log('res', res.data.id);
        localStorage.setItem('userId', res.data.id);
        navigate('/items');
      }
    } catch (e) {
      alert('Something went wrong');
    }
  };

  return (
    <form className='login-form' onSubmit={onLoginSubmit}>
      <h2>Please login to continue</h2>
      <input placeholder='Enter email' name='email' onChange={onEmailChange} />
      <input
        placeholder='Enter password'
        name='password'
        onChange={onPasswordChange}
      />
      <button type='submit' onClick={onLoginSubmit}>
        Login
      </button>
    </form>
  );
};

export default Login;
