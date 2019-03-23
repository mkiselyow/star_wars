import React from 'react';

import './Spinner.css';

const Spinner = () => {
  return (
    <div className="lds-css ng-scope mt-3">
      <div className="lds-spinner" style={{width: '100%', height: '100%'}}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
};

export default Spinner;