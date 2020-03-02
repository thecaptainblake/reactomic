import React from 'react';
import PropTypes from 'prop-types';
import { StyledCol } from './styled';

const Col = props => {
  const { span, ...styles } = props;
  return (
    <StyledCol span={span} {...styles}>
      {props.children}
    </StyledCol>
  );
};

Col.propTypes = {
  span: PropTypes.string,
  left: PropTypes.bool,
  right: PropTypes.bool,
  center: PropTypes.bool
};

Col.defaultProps = {
  span: ''
};

export { Col };
