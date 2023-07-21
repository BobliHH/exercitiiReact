import { useState } from 'react';
import { useEffect } from 'react';
import { Counter } from './buttons/counter';
import { ChangeValue } from './buttons/changeValue';


export const App = () => {
  
  const [value1] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${value1} times`;
  });
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
      <ChangeValue />
      <Counter />
      
    </div>
  );
};
