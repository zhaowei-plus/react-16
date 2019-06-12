import React from 'react';
import './index.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Profile from '../Profile';
import ErrorBoundary from '../ErrorBoundary';
import Overlay from '../Overlay';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: '张三',
        info: {
          desc: "自我介绍",
        },
      }
    };
  }

  componentDidCatch(err, info) {
    console.log(err, info);
  }

  onErrorBoundaryTest = () => {
    this.setState({
      user: {
        name: '张三',
      }
    });
  }
  render(){
    const { user } = this.state;

    return (
      <div>
        <ErrorBoundary>
          <Profile user={user} />
        </ErrorBoundary>
        <button onClick={this.onErrorBoundaryTest}>ErrorBoundary测试</button>

        <Overlay />
      </div>
    )
  }
}