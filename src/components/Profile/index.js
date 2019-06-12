import React, { Component } from 'react';

export default class Profile extends Component {
  render() {
    const { user } = this.props;
    const { info, name } = user;

    return (
      <div>{info.desc}</div>
    );
  }
}