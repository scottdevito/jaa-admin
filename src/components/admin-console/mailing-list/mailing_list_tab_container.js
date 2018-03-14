import React, { Component } from 'react';
import styled from 'styled-components';

import MailingList from './mailing_list.MUI';

class MailingListTabContainer extends Component {
  render() {
    return (
      <MailingListTabContainerWrapper>
        <MailingList {...this.props} />
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
