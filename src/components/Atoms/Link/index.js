import React from 'react';
import PropTypes from 'prop-types';
import { StyledLink } from './styled';

export const Link = props => {
  const { text, href, ...other } = props;
  return (
    <StyledLink href={href} {...other}>
      {text}
    </StyledLink>
  );
};

Link.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string,
  disable: PropTypes.bool
};

Link.defaultProps = {
  text: 'Link to',
  href: '/#'
};

export default Link;
