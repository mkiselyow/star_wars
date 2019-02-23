import React, {Component} from 'react';

import './Spinner.css';
import CssGoesOverChars from "../../services/CssGoesOverChars/CssGoesOverChars";

export default class Spinner extends Component {
  componentDidMount() {
    this.updateImages();
  }

  updateImages() {
    let spinners = document.getElementsByClassName("lds-css ng-scope");
    let nodes = [];

    for ( var i = 0; i < spinners.length; i++) {
      nodes.push(
        Array.from(spinners[i].parentElement.childNodes)
      );
    }

    let images = [];
    nodes = nodes.flat();

    for ( var i = 0; i < nodes.length; i++) {
      if (nodes[i].tagName === "IMG")
        nodes[i].style.zIndex = '1';
        images.push(nodes[i]);
    }

    console.log(images);
  };

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