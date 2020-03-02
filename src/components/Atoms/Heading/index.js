import React from 'react';
import PropTypes from 'prop-types';
import { headingStyles } from './styled';

const Heading = ({ as, ...props }) => {
  const HeadingStyles = headingStyles(as);
  return <HeadingStyles {...props}>{props.children}</HeadingStyles>;
};

Heading.propTypes = {
  as: PropTypes.number,
  children: PropTypes.string
};

Heading.defaultProps = {
  as: 1,
  children: 'Lorem ipsum dolor sit amet'
};

export { Heading };
