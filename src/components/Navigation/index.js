import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import iconUser from '../../assets/icons/user.png';

const StyledNav = styled.div`
  margin-bottom: 48px;
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style-type: none;

  li {
    cursor: pointer;
  }
`;

const StyledSignout = styled.li`
  display: flex;
  align-items: center;
`;

const Navigation = () => {
  const navigate = useNavigate();
  const onLogout = async () => {
    const logoutUrl = 'https://db-med-supply.herokuapp.com/auth/signout';
    try {
      const res = await axios({
        method: 'post',
        url: logoutUrl,
      });
      if (res) {
        localStorage.setItem('userId', null);
        navigate('/');
      }
    } catch (e) {
      alert('Something went wrong');
    }
  };
  return (
    <StyledNav>
      <StyledUl>
        <StyledSignout onClick={onLogout}>
          <img alt='user' src={iconUser} width='30px' />
          Sign Out
        </StyledSignout>
      </StyledUl>
    </StyledNav>
  );
};

export default Navigation;
