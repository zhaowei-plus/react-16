import React, { Component } from 'react';
import Child from './Child';
import Demo from './Demo';
import ClassChild from './ClassChild';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    const newCount = this.state.count;
    setTimeout(() => {
      console.log(`App count：${this.state.count}`);
      // console.log(`App count：${newCount}`);
    }, 3000);
  }
  componentDidUpdate() {
    const newCount = this.state.count;
    setTimeout(() => {
      console.log(`App count：${this.state.count}`);
      // console.log(`App count：${newCount}`);
    }, 3000);
  }
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.handleClick}>
          点击 3 次
        </button>

        <Child counter={this.state.count}/>
        <Demo />
        <ClassChild onRef={this.onRef}/>
      </div>
    );
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    });

    // 调用子组件方法
    this.child.say()
  }

  onRef = (ref) => {
    this.child = ref;
  }
}

export default App;
