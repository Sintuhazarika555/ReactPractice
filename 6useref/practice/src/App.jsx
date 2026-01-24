import { useRef } from 'react';
import './App.css'
import Clicktracker from './clicktracker';

function App() {
  const inputRef = useRef(null); // 1. Create the "ref"

  const handleBtnClick = () => {
    // 3. Use .current to access the actual DOM node
    inputRef.current.focus();
  };

  return (
    <><div>
      <h1>UseRef Practice</h1>
      <p>The useRef hook is often called the "escape hatch" of React. It allows you to create a "box" that holds a value for the entire life of a component, but changing that value does not trigger a re-render.
        Think of it like a sticky note on a whiteboard: you can change what is written on the note at any time, but the whiteboard doesn't get wiped clean and redrawn just because you changed the note.</p>
      <p>useRef returns an object with exactly one property: current.</p>
        <ul><li>To read the value: myRef.current</li>
          <li>To update the value: myRef.current = 10</li></ul>
      <p>In React, we usually let the library handle the UI. However, sometimes you need to "reach out" and touch the actual HTML elements (the DOM) for things like:</p>
        <ul><li>Focusing an input field manually.</li>
          <li>Measuring the size or position of an element.</li>
          <li>Using a non-React library (like a charting tool).</li></ul>
      <p>
        You can also use useRef to store information that you need to remember, but that shouldn't affect the UI. This is useful for:</p>
        <ul><li>Storing Timer IDs (for setInterval).</li>
          <li>Tracking if a component has mounted for the first time.</li>
          <li>Storing the "previous" value of a prop or state.</li></ul>
      
      <p>use state get re render on trigger but useref is not</p>
      <p>usestate tb use krte hai jb screen main change show krna hai , and useref tb jb screen main show na krna ho but actually main change ho  : </p>

      {/* 2. Attach the ref to the input element */}
      <input ref={inputRef} type="text" placeholder="Type here..." />
      <button onClick={handleBtnClick}>Focus the Search Box</button>

      <p>example:</p>

      <Clicktracker />
      </div>
    </>
  )
}

export default App
