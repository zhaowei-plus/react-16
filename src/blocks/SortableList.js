import React from 'react';
import SortableItem from './SortItem';

class SortableList extends React.Component {
  state = {
    items: this.props.items,
    overIndex: -1,
  };

  onSortItems = (items) => {
    console.log('onSortItems:', items);
    this.setState({
      items: items
    });
  }

  onDragStart = (...params) => {
    // console.log('onDragStart:', params);
  }

  onDragOver = (e) => {
    // const overIndex = e.currentTarget.dataset.id;
    // console.log('onDragOver:', e.currentTarget.dataset.id);
    // this.setState({
    //   overIndex,
    // });
  }

  render() {
    const { items, overIndex } = this.state;
    const listItems = items.map((item, i) => {
      return (
        <SortableItem
          key={i}
          onSortItems={this.onSortItems}
          // onDragOver={this.onDragOver}
          items={items}
          sortId={i}
        >
          <div className="block">
            <span>{item.name} - {item.title}</span>
            <img src={item.screenshots} />
          </div>

        </SortableItem>
      );
    });

    return (
      <ul className='blocks-wrapper' style={{ display: 'flex' }}>
        {listItems}
      </ul>
    )
  }
};

export default SortableList;
