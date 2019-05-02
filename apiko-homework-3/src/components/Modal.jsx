import React from 'react';
import appendTo from '../hoc/appendTo';

function Modal(){
  return(
    <div>Modal window with ReactDOM.createPortal</div>
  )
}

export default appendTo(document.body)(Modal);
