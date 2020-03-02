import React from 'react';
import PropTypes from 'prop-types';
import { StyledIcon } from './styled';

const Icon = ({ icon, size, rotate, onClick, ...styles }) => {
  const svg = require(`!raw-loader!./icons/${icon}.svg`);

  return (
    <StyledIcon
      size={size}
      rotate={rotate}
      onClick={onClick}
      {...styles}
      dangerouslySetInnerHTML={{ __html: svg.default }}
    />
  );
};

Icon.propTypes = {
  action: PropTypes.string,
  icon: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
  rotate: PropTypes.string,
  onClick: PropTypes.func,
};
Icon.defaultProps = {
  action: '',
  size: '24',
  color: 'black',
  rotate: '0',
};

export { Icon };
