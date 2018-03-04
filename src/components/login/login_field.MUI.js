import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  inputLabelFocused: {
    color: '#6f79a8',
  },
  inputInkbar: {
    '&:after': {
      backgroundColor: '#6f79a8',
    },
  },
});

function LoginField(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <FormControl className={classes.formControl}>
        <InputLabel
          FormControlClasses={{
            focused: classes.inputLabelFocused,
          }}
          htmlFor="custom-color-input"
        >
          {props.labelName}
        </InputLabel>
        <Input
          classes={{
            inkbar: classes.inputInkbar,
          }}
          id="custom-color-input"
          type={props.labelType}
        />
      </FormControl>
    </div>
  );
}

LoginField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginField);
