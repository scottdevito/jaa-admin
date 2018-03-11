import React, { Component } from 'react';
import styled from 'styled-components';
import AdminTabs from './admin_tabs.MUI';

class AdminConsole extends Component {
  componentDidMount() {
    this.props
      .getWorkshopsData()
      .then(() => {
        this.props.getPodcastData();
      })
      .then(() => {
        this.props.getMailingListData();
      });
  }

  render() {
    return (
      <AdminConsoleWrapper>
        <AdminTabs {...this.props} />
      </AdminConsoleWrapper>
    );
  }
}

export default AdminConsole;

const AdminConsoleWrapper = styled.div`
  height: 35rem;
  width: 35rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);

  /* Styling for mobile screens */
  @media (max-width: 425px) {
    width: 85vw;
  }

  /* Styling for large screens */
  @media (min-width: 768px) {
    height: 25rem;
    width: 45vw;
  }
`;
