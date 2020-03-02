import React from 'react';
import PropTypes from 'prop-types';
import { StyledCheckbox } from './styled';

const Checkbox = props => {
  const { disabled, label, name, value, ...styles } = props;
  return (
    <StyledCheckbox {...styles}>
      <input
        className="checkbox__input"
        disabled={disabled}
        name={name}
        value={value}
        type="checkbox"
      />
      <span className="checkbox__label">{label}</span>
    </StyledCheckbox>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool
};

Checkbox.defaultProps = {
  label: 'Checkbox',
  name: 'Checkbox'
};

export { Checkbox };
