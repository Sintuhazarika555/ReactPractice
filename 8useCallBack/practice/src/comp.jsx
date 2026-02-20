import React, { useState, useCallback } from 'react';
import './comp.css';

// React.memo tells the child: "Only re-render if your props ACTUALLY change"
const ResetButton = React.memo(({ onReset }) => {
  console.log("Child (ResetButton) rendered!");
  return <button onClick={onReset}>Reset Counter</button>;
});

function comp() {
  const [count, setCount] = useState(0);

  // Without useCallback, this function is "new" every time count changes.
  // That would cause the ResetButton to re-render every single time you click "Add".
  const handleReset = useCallback(() => {
    setCount(0);
  }, []); // Empty array means this function never changes

  return (
    <div id="body">
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <ResetButton onReset={handleReset} />
    </div>
  );
}

export default comp