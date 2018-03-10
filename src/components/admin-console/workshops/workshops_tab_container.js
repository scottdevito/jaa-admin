import React, { Component } from 'react';
import styled from 'styled-components';

class WorkshopsTabContainer extends Component {
  render() {
    return (
      <WorkshopsTabContainerWrapper>
        WorkshopsTabContainer
      </WorkshopsTabContainerWrapper>
    );
  }
}

export default WorkshopsTabContainer;

const WorkshopsTabContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100%;
  width: 100%;
`;
