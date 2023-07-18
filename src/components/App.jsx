import { useState } from 'react';
import { useEffect } from 'react';


export const App = () => {
  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0);
  const [username, setUsername] = useState('');
  const [todos, setTodos] = useState([{ text: 'Learn hooks' }]);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      <div className="container">
        <button type="button" onClick={() => setValue(value + 1)}>
          Increment value by 1
        </button>

        {value}
        <button type="button" onClick={() => setValue(value - 1)}>
          Decrease value by 1
        </button>
      </div>
      <div>
        <p>You clicked {value1} times</p>
        <button onClick={() => setValue1(value1 + 1)}>Click me</button>
      </div>
    </div>
  );
};
