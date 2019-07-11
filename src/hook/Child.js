import React, { useState, useEffect, useRef } from 'react';

function Child(props) {
  const [count, setCount] = useState(0);
  const latestCount = useRef(count);

  useEffect(() => {
    latestCount.current = count;
    setTimeout(() => {
      // console.log('child count:', count); // 由于函数组件使用了闭包，所以正常打印：1、2、3
      // console.log('child props-count:', props.counter); // 这里期望打印：3，3，3，则使用useRef
      console.log('child useRef-count:', latestCount.current);
    }, 3000);
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        点击 3 次
      </button>
    </div>
  );
}

export default Child;
