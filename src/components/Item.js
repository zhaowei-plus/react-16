import React, { Component } from 'react';

export default class Item extends Component {
  render() {
    const { item } = this.props;

    return (
      <div>{item.catch.info}</div>
    );
  }
}