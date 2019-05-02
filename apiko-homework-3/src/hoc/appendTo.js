import React from 'react';
import ReactDOM from 'react-dom';

const appendTo = (selector) => (BaseComponent) => () => {
  return (
    ReactDOM.createPortal(<BaseComponent />, selector)
  )
}

export default appendTo;