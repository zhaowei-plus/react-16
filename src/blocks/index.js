import React from 'react';
import blocks from './blocks';
import SortableList from './SortableList';
import SortableComponent from './sortableHoc';

const items = require('./config');

function sort() {
  return (
    <SortableList items={items} />
  );
}

export default sort;
