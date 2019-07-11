import React, { Component } from 'react';

export default class ClassChild extends Component {

  componentDidMount(){
    this.props.onRef(this);
  }

  say = () => {
    console.log('class child say: hello');
  }

  render() {
    return (
      <div>Class - Child</div>
    );
  }
}
