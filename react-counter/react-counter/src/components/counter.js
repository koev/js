import React, { useState } from 'react';

console.log('c');

function Counter({ val }) {
    const [counter, setCounter] = useState(val);

    return (
      <div>
        <h2 className={'counter'}>{counter}</h2>
        <button className={'counter-button'} onClick={() => setCounter(counter + 1)}>Click</button>
      </div>
    );
  }

export default Counter;