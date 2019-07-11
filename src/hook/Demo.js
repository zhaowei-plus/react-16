import React, { useState, useRef, Fragment, useEffect } from 'react';

// 使用 useRef 获取真实Dom节点
function Demo({ count: propsCount = 1 }) {
  const [count, setCount] = useState(propsCount);
  const refContainer = useRef(null); // 如同之前的 React.createRef();

  useEffect(() => {
    console.log(refContainer.current, '>>>>>>>>>>>');
  });

  return (
    <Fragment>
      <button onClick={() => { setCount(count + 1); }}>Click Me</button>
      <p ref={refContainer}>You click {count} times</p>
    </Fragment>
  );
}

export default Demo;
