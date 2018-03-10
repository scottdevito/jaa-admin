import React, { Component } from 'react';
import styled from 'styled-components';
// import firebase from 'firebase';

import Login from './components/login/login';
import AdminConsoleContainer from './containers/admin_console.C';

class App extends Component {
  // componentWillMount() {
  //   // Listen for Auth Changes
  //   firebase.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       this.props.loginPersist(user);
  //     } else {
  //       //this.props.logout();
  //     }
  //   });
  // }

  render() {
    return (
      <StyledApp>
        {this.props.loggedIn ? (
          <AdminConsoleContainer />
        ) : (
          <Login Login={this.props.Login} />
        )}
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
