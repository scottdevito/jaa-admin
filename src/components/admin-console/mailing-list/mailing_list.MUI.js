import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    maxHeight: '18rem',
    backgroundColor: theme.palette.background.paper,
    overflow: 'auto',
  },
});

function MailingList(props) {
  const { classes, mailingListData } = props;

  const renderMailingListData = () => {
    if (Object.keys(mailingListData).length !== 0) {
      return mailingListData.map(person => {
        return (
          <ListItem button key={person.email}>
            <ListItemText primary={person.email} />
          </ListItem>
        );
      });
    }
  };

  return (
    <div className={classes.root}>
      <List component="nav">{renderMailingListData()}</List>
    </div>
  );
}

MailingList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MailingList);
