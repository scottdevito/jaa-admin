import React, { Component } from 'react';
import styled from 'styled-components';

class MailingListTabContainer extends Component {
  render() {
    return (
      <MailingListTabContainerWrapper>
        MailingListTabContainer
      </MailingListTabContainerWrapper>
    );
  }
}

export default MailingListTabContainer;

const MailingListTabContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100%;
  width: 100%;
`;
