import React from 'react';

import { sortable } from 'react-sortable';

function block(props) {
  const { info } = props;

  return (
    <div className="block">
      <span>{info.name} - {info.title}</span>
      <img src={info.screenshots} />
    </div>
  );
}

export default sortable(block);
