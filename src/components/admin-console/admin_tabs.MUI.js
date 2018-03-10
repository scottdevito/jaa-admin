import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import styled from 'styled-components';

import WorkshopsTabContainer from './workshops/workshops_tab_container';
import PodcastsTabContainer from './podcasts/podcasts_tab_container';
import MailingListTabContanier from './mailing-list/mailing_list_tab_container';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 2 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
    height: '100%',
  },
});

class FullWidthTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="Workshops" />
            <Tab label="Podcasts" />
            <Tab label="Mailing List" />
          </Tabs>
        </AppBar>
        <StyledSwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <StyledTabContainer dir={theme.direction}>
            <WorkshopsTabContainer />
          </StyledTabContainer>
          <StyledTabContainer dir={theme.direction}>
            <PodcastsTabContainer />
          </StyledTabContainer>
          <StyledTabContainer dir={theme.direction}>
            <MailingListTabContanier />
          </StyledTabContainer>
        </StyledSwipeableViews>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);

const StyledSwipeableViews = styled(SwipeableViews)`
  height: 100%;
`;

const StyledTabContainer = styled(TabContainer)`
  height: 100%;
`;
