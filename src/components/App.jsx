import { useState } from 'react';

export const App = () => {
  const [value, setValue] = useState(0);
  return (
    <div
      className="container"
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React exercices
      <div className="container">
        <button type="button" onClick={() => setValue(value - 1)}>
          Decrease value by 1
        </button>
        {value}
        <button type="button" onClick={() => setValue(value + 1)}>
          Increment value by 1
        </button>
      </div>
    </div>
  );
};
