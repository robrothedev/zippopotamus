/**
 * TextInput.js
 *
 * Reusable Material UI label and input for the form
 */
import React from "react";
import PropTypes from "prop-types";
import { FormControl, InputLabel, Input } from "@material-ui/core";

/**
 * @param {Object} props
 */
const TextInput = props => {
  let { id, label, value, disabled } = props;
  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Input id={id} type="text" value={value} disabled={disabled} />
    </FormControl>
  );
};

TextInput.propTypes = {
  props: PropTypes.object
};

// text inputs are disabled by default
TextInput.defaultProps = {
  disabled: true
};

export default TextInput;
