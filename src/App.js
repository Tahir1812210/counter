import React, { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleAddCounter = () => {
    setCounter(counter + 1);
  };

  const handleDecrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const handleDecrementByFive = () => {
    if (counter > 0) {
      setCounter(counter - 5);
    }
  };

  return (
    <>
      <span
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 100,
        }}
      >
        {counter}
      </span>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <button
          onClick={handleDecrementByFive}
          style={{
            backgroundColor: 'grey',
            width: '200px',
            height: '50px',
            borderRadius: '10px',
            margin: 100,
          }}
        >
          -5
        </button>
        <button
          onClick={handleDecrementCounter}
          style={{
            backgroundColor: 'grey',
            width: '200px',
            height: '50px',
            borderRadius: '10px',
            margin: 100,
          }}
        >
          -1
        </button>
        <button
          onClick={handleAddCounter}
          style={{
            backgroundColor: 'grey',
            width: '200px',
            height: '50px',
            borderRadius: '10px',
            margin: 100,
          }}
        >
          +1
        </button>
      </div>
    </>
  );
};

export default App;
