import { useState } from 'react';

export const Counter = () => {
    const [value1, setValue1] = useState(0);
    return (<div className="container">
        <p>You clicked {value1} times</p>
        <button onClick={() => setValue1(value1 + 1)}>Click me</button>
    </div>);

};
