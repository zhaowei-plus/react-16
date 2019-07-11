import React, { Component } from 'react';

import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    console.log('ParentComponent - constructor');

    this.state = {
      name: '张三',
      age: 12,
      obj: {
        user: {
          name: '张三',
          age: 12,
        },
      },
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('ParentComponent - getDerivedStateFromProps:', nextProps, prevState);
    console.log('ParentComponent result:', (!!nextProps.name && nextProps.name !== prevState.name));
    if (nextProps.name && nextProps.name !== prevState.name) {
      return {
        name: nextProps.name,
      };
    }
    return null;
  }

  getSnapshotBeforeUpdate() {
    console.log('ParentComponent - getSnapshotBeforeUpdate');
    return 1000;
  }

  componentDidMount() {
    console.log('ParentComponent - componentDidMount');
  }

  /**
   * PureComponent - :
   *  PureComponent shouldComponentUpdate 只做了浅比较
   * */
  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('ParentComponent - shouldComponentUpdate:', nextProps, nextState);
  //
  //   //
  //
  //   return true;
  // }

  componentDidUpdate(prevProps, prevState, extraParams) {
    console.log('ParentComponent - componentDidUpdate:', extraParams);
    console.log('--------------------------------------------------------------------------');
  }

  componentWillUnmount() {
    console.log('ParentComponent - componentWillUnmount');
  }

  handleAgeClick = () => {
    this.setState(({ age }) => ({
      age: age + 10,
    }));
  }

  handleNameClick = () => {
    this.setState(({ name }) => ({
      name: name + '1',
    }));
  }

  handleObjClick = () => {
    const { obj } = this.state;
    obj.user.name = '李四';
    obj.user.age = 24;

    // 当修改深层次的对象属性时，由于PureComponent只做了浅比较，所以不会刷新页面
    this.setState({
      obj,
    });
  }

  render() {
    console.log('ParentComponent - render');
    const { name, age, obj } = this.state;
    return (
      <div>
        <p>ParentComponent name: {name} - age: {age}</p>
        <p>ParentComponent name: {obj.user.name} - age: {obj.user.age}</p>
        <button onClick={this.handleAgeClick}>Set Age</button>
        <button onClick={this.handleNameClick}>Set Name</button>
        <button onClick={this.handleObjClick}>Set Obj</button>
        <ChildComponent name={name} />
      </div>
    );
  }
}

export default ParentComponent;
