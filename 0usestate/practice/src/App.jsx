//first we have to import useState from react
import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)
  //here setCount is the function that will update the count variable 
  //and useState(0) initializes the count variable to 0 
  //useState is a hook that allows us to have state variables in functional components

  const reset =() =>{
    setCount(0)
  }
  //reset function to set count back to 0
  
  return (

    <div id='body' >

      <h1>Counter App</h1>
      <h2>{count}</h2>

      <button 
      onClick={() => setCount(count + 1)}>
      Click Me
      </button>

      <button 
      onClick={reset}>
      Reset
      </button>

    </div>

  )
}

export default App
