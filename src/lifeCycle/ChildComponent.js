import React, { Component } from 'react';

class ChildComponent extends Component {
  constructor(props) {
    super(props);

    console.log('ChildComponent - constructor');
    this.state = {
      name: '',
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('ChildComponent - getDerivedStateFromProps:', nextProps, prevState);
    console.log('ChildComponent result:', (!!nextProps.name && nextProps.name !== prevState.name));
    if (nextProps.name && nextProps.name !== prevState.name) {
      return {
        name: nextProps.name,
      };
    }
    return null;
  }

  getSnapshotBeforeUpdate() {
    console.log('ChildComponent - getSnapshotBeforeUpdate');
    return 1000;
  }

  componentDidMount() {
    console.log('ChildComponent - componentDidMount');
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('ChildComponent - shouldComponentUpdate:', nextProps, nextState);
  //   return true;
  // }

  componentDidUpdate(prevProps, prevState, extraParams) {
    console.log('ChildComponent - componentDidUpdate:', extraParams);
    console.log('--------------------------------------------------------------------------');
  }

  componentWillUnmount() {
    console.log('ChildComponent - componentWillUnmount');
  }

  handleClickName = () => {
    this.setState(({ name }) => ({
      name: name + '1',
    }));
  }

  render() {
    console.log('ChildComponent - render');
    const { name, age } = this.state;

    return (
      <div>
        <p>ChildComponent name: {name} - age: {age}</p>
        <button onClick={this.handleClickName}>Set Name</button>
      </div>
    );
  }
}

export default ChildComponent;
