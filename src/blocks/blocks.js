import React, { Component } from 'react';
import cx from 'classnames';

import SortBlock from './block';

const blockConfig = require('./config');

import './index.less';

export default class BlockList extends Component {
  render() {
    return (
      <div className="blocks-wrapper">
        {
          blockConfig.map((b, i) =>
            <SortBlock
              sortId={i}
              key={i}
              info={b}
            />
          )
        }
      </div>
    );
  }
}
