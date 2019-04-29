import React from 'react';

function MoreButton({ onClick }) {
  return (
    <React.Fragment>
      <button onClick={onClick} className="waves-effect blue-grey darken-1 btn-large">More...</button>
    </React.Fragment>
  )
}

export default MoreButton;