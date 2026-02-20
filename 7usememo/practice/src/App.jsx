import { useState } from 'react'
import Comp from './comp'
import './App.css'

function App() {
  return (
    <>
      <h1>USEMEMO</h1>
      <p>While useRef is for "remembering" a value without re-rendering, useMemo is for "remembering" a calculation so you don't have to do it again unless something changes.
        <br />
        Think of it like a calculator with a "History" button. If you ask it to calculate a complex math problem you've done before, it doesn't do the math again; it just gives you the answer it already saved.</p>
      <p>The useMemo hook takes two arguments: a function that returns a value and a dependency array.</p>
      <p>You don't need useMemo for every variable. Use it in these two specific scenarios:
        1:Skipping Expensive Calculations
        2:Referential Equality
      </p>
      <p>example : word counter app . it will have two parts :
        1: A "heavy" calculation that counts how many times a specific word appears in a large block of text.
        2: A simple theme toggle (Light/Dark mode).
      </p>
      <p>syntax: let const = usememo(( ) = > expensivetask/function( ) , [input])</p>
      <div id="body">
        <Comp />
      </div>
    </>
  )
}

export default App
