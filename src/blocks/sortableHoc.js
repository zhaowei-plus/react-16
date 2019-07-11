import React, {Component} from 'react';
/*
* 注意：目前react-sortable-hoc 横向排序支持不是很好，竖向支持效果比较好
*
* */
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';

import './index.less';

const blockConfig = require('./config');

const SortableItem = SortableElement(({ value }) => {
  console.log('value:', value);
  return (
    <div className="block">
      <span>{value.name} - {value.title}</span>
      <img src={value.screenshots} />
    </div>
  );
});

const SortableList = SortableContainer(({items}) => {
  return (
    <ul>
      {
        items.map((value, index) => (
          <SortableItem key={`item-${index}`} index={index} value={value} />
        ))
      }
    </ul>
  );
});

class SortableComponent extends Component {
  state = {
    items: blockConfig,
  };

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({ items }) => ({
      items: arrayMove(items, oldIndex, newIndex),
    }));
  };

  render() {
    return (
      <div className='blocks-wrapper'>
        <SortableList
          items={this.state.items}
          onSortEnd={this.onSortEnd}
        />
      </div>
    );
  }
}

export default SortableComponent;
