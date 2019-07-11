import React, { Component } from 'react';
import SImmutable from 'seamless-immutable';
import pureRender from 'pure-render-decorator';

import Child from './Child';

@pureRender
class Parent extends Component {
  state = {
    count: 10,
    user: {
      name: '张三',
      age: 22,
    },
    person: SImmutable({
      user: {
        name: '张三',
        age: 22,
      },
    }),

    normalArray: [
      { name: '11',  },
    ],
  };

  setCount = () => {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  }

  setUser = () => {
    this.setState(({ user }) => ({
      user: {
        ...user,
        name: user.name + '1',
      },
    }));
  }

  setPerson = () => {
    const { person } = this.state;
    // Immutable对象操作
    const newPerson = person.merge({
      user: {
        name: person.user.name + '李四',
      }
    });

    this.setState({
      person: newPerson,
    });
  }

  render() {
    console.log('Person render');
    const { count, user, person } = this.state;

    return (
      <div>
        <div>Count:{count}</div>
        <div>User: {user.name} {user.age}</div>
        <button onClick={this.setCount}>Set Count</button>
        <button onClick={this.setUser}>Set User</button>
        <button onClick={this.setPerson}>Set Person</button>
        <Child person={person} />
      </div>
    );
  }
}

export default Parent;
