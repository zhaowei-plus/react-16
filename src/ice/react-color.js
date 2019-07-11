import React from 'react';
import { SketchPicker, SwatchesPicker, PhotoshopPicker } from 'react-color';

// react-color - 颜色选择器组件

class Component extends React.Component {
  state = {
    background: '#fff',
  };

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
  };

  render() {
    return (
      <SketchPicker
        color={ this.state.background }
        onChangeComplete={ this.handleChangeComplete }
      />
    );
  }
}

export default Component;
