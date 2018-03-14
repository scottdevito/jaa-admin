import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

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
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem button>
          <ListItemText primary="Chelsea Otakan" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Eric Hoffman" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Eric Hoffman" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Eric Hoffman" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Eric Hoffman" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Eric Hoffman" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Eric Hoffman" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Eric Hoffman" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Eric Hoffman" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Eric Hoffman" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Eric Hoffman" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Eric Hoffman" />
        </ListItem>
      </List>
    </div>
  );
}

MailingList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MailingList);
