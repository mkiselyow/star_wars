import React, {Component} from 'react';

import './Spinner.css';

export default class Spinner extends Component {

  render() {
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
  }
}