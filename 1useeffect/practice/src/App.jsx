import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('component mounted or count changed:', count);
    });
  //useEffect are used to handle side effects in functional components.
  //Side effects are operations that can affect other components and cannot be done during rendering,
  //such as data fetching, subscriptions, or manually changing the DOM.

  return (
    <>
      <h1>USE-EFFECT</h1>
      <h3>If useState is for remembering data,
        useEffect is for doing things—specifically,
        things that happen outside the normal flow of rendering
        (we call these "side effects").
      </h3>
      <h3>The useEffect hook takes two arguments:
        <br />
        A function: The code you want to run.
        <br />
        A dependency array: A list of variables
        that tell the effect when to run.
      </h3>
      <h3>
        If event happens in the component, generating the side effect logic.
      </h3>

      {/* THis is the syntax: 
        useEffect(() => {
          // Your code goes here...
        }, [dependencies]); */}


      <h3>
        Types:
        <br/>
        Scenario A: No Dependency Array
        The effect runs after every single render. (Rarely used because it can cause performance issues).
        <br />
        Scenario B: Empty Dependency Array []
        The effect runs only once, immediately after the component "mounts" (appears on the screen). This is perfect for API calls.
        <br />
        Scenario C: Array with Variables [count]
        The effect runs on mount and whenever that variable changes.
      </h3>

      <div id="body">
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>


    </>
  )
}

export default App
