import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { Counter } from './buttons/counter';
import { ChangeValue } from './buttons/changeValue';
import { Title } from './common/Title';
import { Alert } from './common/Alert';

export const App = () => {
  const [value1] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${value1} times`;
  });
  return (
    <div
      className="container"
      style={{
        height: '100%',
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
      <div
        style={{
          // height: '100vh',
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          // fontSize: 40,
          // color: '#010101'
          backgroundColor: 'black',
          padding: 10,
        }}
      >
        <Alert> ALERT!!!</Alert>
        <Alert type="info" modifiers={[]}>
          {' '}
          INFO!!!
        </Alert>
        <Alert type="success" modifiers={['is-outlined']}>
          {' '}
          SUCCESS!!!
        </Alert>
        <Alert type="error" modifiers={['is-elevated', 'is-outlined']}>
          {' '}
          Error!!!
        </Alert>
        <Alert type="warning" modifiers={['is-elevated']}>
          {' '}
          Warning!!!
        </Alert>
      </div>
      <Title tag="h1" title="Filmoteka" />
      <Title tag="h2" title="Filmoteka" />
      <Title tag="h3" title="Filmoteka" />
      <Title tag="h4" title="Filmoteka" />
    </div>
  );
};
