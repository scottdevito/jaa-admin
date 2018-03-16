import React, { Component } from 'react';
import styled from 'styled-components';

import StandardInput from '../../common/standard_input.MUI';
import Button from 'material-ui/Button';

class WorkshopsTabContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: '',
      descriptionHeader: '',
      descriptionMain: '',
      regularPrice: '',
      location: '',
      name: '',
      ticketLink: '',
      timeStart: '',
      timeEnd: '',
      venue: '',
      venueLink: '',
      date: '',
    };
  }

  onInputChange = (event, inputType) => {
    let value = event.target.value;

    this.setState((prevState, props) => {
      return { [inputType]: value };
    });
  };

  clearFields = () => {
    this.setState((prevState, props) => {
      return {
        address: '',
        descriptionHeader: '',
        descriptionMain: '',
        regularPrice: '',
        location: '',
        name: '',
        ticketLink: '',
        timeStart: '',
        timeEnd: '',
        venue: '',
        venueLink: '',
        date: '',
      };
    });
  };

  render() {
    return (
      <WorkshopsTabContainerWrapper>
        <StyledHeader>Add New Workshop</StyledHeader>
        <StandardInput
          label="Name"
          placeholder="Name of workshop"
          labelType="name"
          onInputChange={this.onInputChange}
          value={this.state.name}
        />
        <StandardInput
          label="Date"
          placeholder="01/01/2018"
          labelType="date"
          onInputChange={this.onInputChange}
          value={this.state.date}
        />
        <StandardInput
          label="Venue"
          placeholder="Name of venue"
          labelType="venue"
          onInputChange={this.onInputChange}
          value={this.state.venue}
        />
        <StandardInput
          label="Venue Link"
          placeholder="Link to venue's site"
          labelType="venueLink"
          onInputChange={this.onInputChange}
          value={this.state.venueLink}
        />
        <StandardInput
          label="Ticket Link"
          placeholder="Direct link to tickets"
          labelType="ticketLink"
          onInputChange={this.onInputChange}
          value={this.state.ticketLink}
        />
        <StandardInput
          label="Venue Address"
          placeholder="899 Something Street"
          labelType="address"
          onInputChange={this.onInputChange}
          value={this.state.address}
        />
        <StandardInput
          label="Town, City"
          placeholder="Denver, CO"
          labelType="location"
          onInputChange={this.onInputChange}
          value={this.state.location}
        />
        <StandardInput
          label="Start Time"
          placeholder="4pm"
          labelType="timeStart"
          onInputChange={this.onInputChange}
          value={this.state.timeStart}
        />
        <StandardInput
          label="End Time"
          placeholder="6pm"
          labelType="timeEnd"
          onInputChange={this.onInputChange}
          value={this.state.timeEnd}
        />
        <StandardInput
          label="Price"
          placeholder="30"
          labelType="regularPrice"
          onInputChange={this.onInputChange}
          value={this.state.regularPrice}
        />
        <StandardInput
          label="Description Header"
          placeholder="Tag line for workshop"
          labelType="descriptionHeader"
          onInputChange={this.onInputChange}
          value={this.state.descriptionHeader}
        />
        <StandardInput
          label="Description Body"
          placeholder="Description of workshop"
          labelType="descriptionMain"
          onInputChange={this.onInputChange}
          value={this.state.descriptionMain}
        />
        <Button
          style={{ marginTop: '1rem' }}
          onClick={() => {
            if (Object.keys(this.props.email).length !== 0) {
              this.props
                .addNewEpisode(
                  this.state.title,
                  this.state.date,
                  this.state.url
                )
                .then(() => {
                  this.clearFields();
                });
            }
          }}
        >
          Submit
        </Button>
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
  padding-bottom: 4rem;
`;

const StyledHeader = styled.h2`
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  color: #6f79a8;
`;
