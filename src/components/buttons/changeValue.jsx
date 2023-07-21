import { useState } from 'react';
export const ChangeValue = () => {
  const [value, setValue] = useState(0);
  return (
    <div className="container">
      <button type="button" onClick={() => setValue(value + 1)}>
        Increment value by 1
      </button>
      {value}
      <button type="button" onClick={() => setValue(value - 1)}>
        Decrease value by 1
      </button>
    </div>
  );
};
