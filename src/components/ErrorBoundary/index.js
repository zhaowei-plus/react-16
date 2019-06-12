//最佳实践：将ErrorBoundary抽象为一个公用的组件类

import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  /**
   * 这里使用 React 16的 error boundary（即错误边界）捕获组件错误，
   *
   * 并坐优雅处理
   *
   * 当组件以及子组件渲染错误时，之前版本的做法：一旦某个组件发生错误，整个组件树将会从根节点被unmount下来
   *
   * 新版本：Error Boundary可以看作是一种特殊的React组件，新增了componentDidCatch这个生命周期函数，
   * 它可以捕获自身及子树上的错误并对错误做优雅处理，包括上报错误日志、展示出错提示，而不是卸载整个组件树
   * 类似于 try catch处理
   * */
  componentDidCatch(err, info) {
    console.log('error:', err);
    console.log('info:', info);

    this.setState({
      hasError: true,
    })

    //sendErrorReport(err,info)
  }
  render(){
    if(this.state.hasError){
      return <div>呀，组件渲染出错了呢。。。。。</div>
    }
    return this.props.children
  }
}