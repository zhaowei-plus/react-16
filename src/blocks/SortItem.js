import React from 'react';
import { sortable } from 'react-sortable';

class Item extends React.Component {
  render() {
    const { children, over, ...rest } = this.props;
    console.log('Item:', over);

    const opacity = 1;

    return (
      <li {...this.props} style={{ opacity }}>
        {this.props.children}
      </li>
    )
  }
}

export default sortable(Item);
