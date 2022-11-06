import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import iconStethoscope from '../../assets/icons/stethoscope.png';

const StyledSection = styled.div`
  margin: 48px;
`;
const StyledHeading = styled.div`
  display: flex;
  gap: 16px;
`;

const StyledLogin = styled.div`
  width: 100%;
  height: 100%;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledLoginContainer = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;

    input,
    button {
      min-width: 20%;
      padding: 16px;
      border-radius: 10px;
    }

    button {
      background-color: #bd9a60;
      border: none;
      cursor: pointer;
    }
  }
`;

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();

  const loginUrl = 'https://db-med-supply.herokuapp.com/auth/signin';

  const onEmailChange = (e) => setEmail(e.target.value);
  const onPasswordChange = (e) => setPassword(e.target.value);
  const onLoginSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Email and password are required!');
      return;
    }
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
        if (!res.data.admin) {
          alert('You do not have permission!');
          return;
        }
        localStorage.setItem('userId', res.data.id);
        navigate('/items');
      }
    } catch (e) {
      alert('Something went wrong');
    }
  };

  return (
    <StyledSection>
      <StyledHeading>
        <img alt='steth' src={iconStethoscope} width='60px' height='60px' />
        <h1>K and J Medical Supply</h1>
      </StyledHeading>
      <StyledLogin>
        <StyledLoginContainer>
          <form className='login-form' onSubmit={onLoginSubmit}>
            <h2>Login</h2>
            <input
              placeholder='Enter email'
              name='email'
              onChange={onEmailChange}
            />
            <input
              placeholder='Enter password'
              name='password'
              type='password'
              onChange={onPasswordChange}
            />
            <button type='submit' onClick={onLoginSubmit}>
              Login
            </button>
          </form>
        </StyledLoginContainer>
      </StyledLogin>
    </StyledSection>
  );
};

export default Login;
