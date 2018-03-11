import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

function StandardInput(props) {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <TextField
        id="with-placeholder"
        label={props.label}
        placeholder={props.placeholder}
        className={classes.textField}
        margin="normal"
        onChange={event => {
          props.onInputChange(event, props.labelType);
        }}
      />
    </div>
  );
}

StandardInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StandardInput);
