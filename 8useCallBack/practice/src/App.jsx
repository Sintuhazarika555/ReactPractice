import { useState } from 'react'
import './App.css'
import Comp from './comp.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>UseCallBack</h1>
      <p>While useMemo caches a result (a number, a string, or an object), useCallback caches the function itself.</p>
      <p>useCallback is used when you want to prevent a function from being recreated on every render, which can be 
        useful for performance optimization, especially when passing functions as props to child components.</p>
      <p>When your component re-renders, React creates a "new" func1. If that function is a prop for a child 
        component, that child says, "Hey, I got a new prop! I better re-render." useCallback stops this by keeping the function "stable</p>
      <Comp/>
    </>
  )
}

export default App
