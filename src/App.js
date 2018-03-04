import React, { Component } from 'react';
import styled from 'styled-components';

import Login from './components/login/login';

class App extends Component {
  render() {
    return (
      <StyledApp>
        <Login />
      </StyledApp>
    );
  }
}

export default App;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin: 0;
  background: linear-gradient(
    132.3deg,
    rgba(111, 121, 168, 0.78) 0%,
    rgba(159, 168, 218, 0.49) 30.39%,
    rgba(229, 115, 115, 0.51) 75.14%,
    rgba(175, 68, 72, 0.72) 100%
  );
`;
