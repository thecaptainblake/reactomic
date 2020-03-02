import React from 'react';
import PropTypes from 'prop-types';
import { StyledParagraph } from './styled';

const Paragraph = props => {
  const { text, ...other } = props;

  return <StyledParagraph {...other}>{text}</StyledParagraph>;
};

Paragraph.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string
};

Paragraph.defaultProps = {
  text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fringilla et lorem ac facilisis. Donec tincidunt rhoncus condimentum. Mauris vel justo bibendum, euismod nulla sed, lobortis quam.'
};

export { Paragraph };
