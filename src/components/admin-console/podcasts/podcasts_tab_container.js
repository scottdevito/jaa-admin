import React, { Component } from 'react';
import styled from 'styled-components';

import StandardInput from '../../common/standard_input.MUI';
import Button from 'material-ui/Button';

class PodcastsTabContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      date: '',
      url: '',
    };
  }

  onInputChange = (event, inputType) => {
    let value = event.target.value;

    this.setState((prevState, props) => {
      return { [inputType]: value };
    });
  };

  render() {
    return (
      <PodcastsTabContainerWrapper>
        <StyledHeader>Add New Podcast</StyledHeader>
        <StandardInput
          label="Title"
          placeholder="Title"
          labelType="title"
          onInputChange={this.onInputChange}
        />
        <StandardInput
          label="Date"
          placeholder="01/01/2018"
          labelType="date"
          onInputChange={this.onInputChange}
        />
        <StandardInput
          label="URL Numbers"
          placeholder="000000000"
          labelType="url"
          onInputChange={this.onInputChange}
        />
        <Button
          style={{ marginTop: '1rem' }}
          onClick={() => {
            //this.props.addNewEpisode(this.state.title, this.state.date, this.state.url);
          }}
        >
          Submit
        </Button>
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

const StyledHeader = styled.h2`
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  color: #6f79a8;
`;
