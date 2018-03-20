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
      timeStartHour: '',
      timeStartMinutes: '',
      timeStartAMPM: '',
      timeEndHour: '',
      timeEndMinutes: '',
      timeEndAMPM: '',
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
        timeStartHour: '',
        timeStartMinutes: '',
        timeStartAMPM: '',
        timeEndHour: '',
        timeEndMinutes: '',
        timeEndAMPM: '',
        venue: '',
        venueLink: '',
        date: '',
      };
    });
  };

  render() {
    let {
      address,
      descriptionHeader,
      descriptionMain,
      regularPrice,
      location,
      name,
      ticketLink,
      timeStartHour,
      timeStartMinutes,
      timeStartAMPM,
      timeEndHour,
      timeEndMinutes,
      timeEndAMPM,
      venue,
      venueLink,
      date,
    } = this.state;

    return (
      <WorkshopsTabContainerWrapper>
        <StyledHeader>Add New Workshop</StyledHeader>
        <StandardInput
          label="Name"
          placeholder="Name of workshop"
          labelType="name"
          onInputChange={this.onInputChange}
          value={name}
        />
        <StandardInput
          label="Date"
          placeholder="01/01/2018"
          labelType="date"
          onInputChange={this.onInputChange}
          value={date}
        />
        <StandardInput
          label="Venue"
          placeholder="Name of venue"
          labelType="venue"
          onInputChange={this.onInputChange}
          value={venue}
        />
        <StandardInput
          label="Link to venue's site"
          placeholder="http://www.venuesitelink.com"
          labelType="venueLink"
          onInputChange={this.onInputChange}
          value={venueLink}
        />
        <StandardInput
          label="Direct Link to Tickets"
          placeholder="http://www.directticketlink.com"
          labelType="ticketLink"
          onInputChange={this.onInputChange}
          value={ticketLink}
        />
        <StandardInput
          label="Venue Address"
          placeholder="899 Something Street"
          labelType="address"
          onInputChange={this.onInputChange}
          value={address}
        />
        <StandardInput
          label="Town, City"
          placeholder="Denver, CO"
          labelType="location"
          onInputChange={this.onInputChange}
          value={location}
        />
        <StandardInput
          label="Start Hour"
          placeholder="4"
          labelType="timeStartHour"
          onInputChange={this.onInputChange}
          value={timeStartHour}
        />
        <StandardInput
          label="Start Minutes"
          placeholder="30"
          labelType="timeStartMinutes"
          onInputChange={this.onInputChange}
          value={timeStartMinutes}
        />
        <StandardInput
          label="Start AM/PM"
          placeholder="AM or PM"
          labelType="timeStartAMPM"
          onInputChange={this.onInputChange}
          value={timeStartAMPM}
        />
        <StandardInput
          label="End Hour"
          placeholder="6"
          labelType="timeEndHour"
          onInputChange={this.onInputChange}
          value={timeEndHour}
        />
        <StandardInput
          label="End Minutes"
          placeholder="00"
          labelType="timeEndMinutes"
          onInputChange={this.onInputChange}
          value={timeEndMinutes}
        />
        <StandardInput
          label="End AM/PM"
          placeholder="AM or PM"
          labelType="timeEndAMPM"
          onInputChange={this.onInputChange}
          value={timeEndAMPM}
        />
        <StandardInput
          label="Price"
          placeholder="30"
          labelType="regularPrice"
          onInputChange={this.onInputChange}
          value={regularPrice}
        />
        <StandardInput
          label="Description Header"
          placeholder="Tag line for workshop"
          labelType="descriptionHeader"
          onInputChange={this.onInputChange}
          value={descriptionHeader}
        />
        <StandardInput
          label="Description Body"
          placeholder="Description of workshop"
          labelType="descriptionMain"
          onInputChange={this.onInputChange}
          value={descriptionMain}
        />
        <Button
          style={{ marginTop: '1rem' }}
          onClick={() => {
            if (
              (address &&
                descriptionHeader &&
                descriptionMain &&
                regularPrice &&
                location &&
                name &&
                ticketLink &&
                timeStartHour &&
                timeStartMinutes &&
                timeStartAMPM &&
                timeEndHour &&
                timeEndMinutes &&
                timeEndAMPM &&
                venue &&
                venueLink &&
                date) !== ''
            ) {
              this.props.addNewWorkshop(this.state).then(() => {
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
