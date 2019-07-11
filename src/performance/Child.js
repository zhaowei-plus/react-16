import React, { Component } from 'react';
import pureRender from 'pure-render-decorator';

// 函数组件，使用React.memo

@pureRender
class Child extends Component {
  render() {
    const { person } = this.props;
    console.log('child render: ', person);

    return (
      <div>Person: {person.user.name} {person.user.age}</div>
    );
  }
};

export default Child;
