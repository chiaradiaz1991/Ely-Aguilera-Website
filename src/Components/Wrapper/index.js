import React from 'react';

const Wrapper = (props) => {
  return (
    <div className="main-container-wrapper">
      {props.children}
    </div>
  )
}

export default Wrapper;