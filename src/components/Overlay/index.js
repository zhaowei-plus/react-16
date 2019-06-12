import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Overlay extends Component {
  constructor(props) {
    super(props);

    this.container = document.createElement('div');
    document.body.appendChild(this.container);
  }

  componentWillUnmount() {
    document.body.removeChild(this.container);
  }

  render() {
    return ReactDOM.createPortal(
      <div>Overlay</div>,
      this.container
    );
  }
}