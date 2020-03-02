import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput } from './styled';
import { Label } from '../Label';

const Input = props => {
  const { label, message, ...styles } = props;
  return (
    <div>
      <Label className="input__label" text={label} />
      <StyledInput {...styles} />
      <Label className="input__message" text={message} />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  message: PropTypes.string
};

Input.defaultProps = {
  label: 'Text Input',
  message: 'Text input message'
};

export { Input };
