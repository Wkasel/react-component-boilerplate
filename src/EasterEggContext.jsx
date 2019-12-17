import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const EasterEggContext = (props) => {
  const { text } = props;

  return <div>Example Component: {text}</div>;
};

EasterEggContext.propTypes = {
  text: PropTypes.string.isRequired,
};
EasterEggContext.defaults = {
  text: '',
};

export default EasterEggContext;
