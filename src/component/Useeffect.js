import React, { useState, useEffect } from 'react';
// console.log("whaebdyujas")
function Example() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("nueajzdncujskcz"),[]
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
export default Example;