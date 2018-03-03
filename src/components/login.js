import React, { Component } from 'react';
import styled from 'styled-components';

class Login extends Component {
  render() {
    return (
      <StyledLogin>
        <StyledLoginHeader>Login</StyledLoginHeader>
      </StyledLogin>
    );
  }
}

export default Login;

const StyledLogin = styled.div`
  height: 50vh;
  width: 50vw;
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
  }

  /* Styling for large screens */
  @media (min-width: 1440px) {
    width: 35vw;
  }
`;

const StyledLoginHeader = styled.h1`
  font-family: Tahoma;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 18px;

  color: #6f79a8;
`;
