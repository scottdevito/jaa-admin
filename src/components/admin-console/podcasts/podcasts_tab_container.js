import React, { Component } from 'react';
import styled from 'styled-components';

class PodcastsTabContainer extends Component {
  render() {
    return (
      <PodcastsTabContainerWrapper>
        PodcastsTabContainer
      </PodcastsTabContainerWrapper>
    );
  }
}

export default PodcastsTabContainer;

const PodcastsTabContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100%;
  width: 100%;
`;
