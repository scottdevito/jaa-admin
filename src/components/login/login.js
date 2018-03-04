import React, { Component } from 'react';
import styled from 'styled-components';
import Button from 'material-ui/Button';
import LoginField from './login_field.MUI';

class Login extends Component {
  render() {
    return (
      <StyledLogin>
        <StyledLoginHeader>Login</StyledLoginHeader>
        <LoginField labelName={'Username'} labelType={'username'} />
        <LoginField labelName={'Password'} labelType={'password'} />

        <Button style={{ marginTop: '1rem' }}>Login</Button>
      </StyledLogin>
    );
  }
}

export default Login;

const StyledLogin = styled.div`
  height: 20rem;
  width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);

  /* Styling for mobile screens */
  @media (max-width: 425px) {
    width: 85vw;
    height: 22rem;
  }

  /* Styling for large screens */
  @media (min-width: 1440px) {
    width: 35vw;
  }
`;

const StyledLoginHeader = styled.h2`
  font-family: Tahoma;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  color: #6f79a8;
`;
