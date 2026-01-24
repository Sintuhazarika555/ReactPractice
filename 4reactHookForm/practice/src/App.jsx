import { useState } from 'react'
// 1. Capitalized the 'F' in the import name
import RegistrationForm from './registrationform.jsx' 

import './App.css'

function App() {

  return (
    <>
      <div>
        <h1>React Hook Form Practice</h1>
        <p>
          React Hook Form (RHF) is the next logical step. In standard React, managing forms with useState becomes a nightmare as the form grows. Every time you type a character, the whole page re-renders.
          React Hook Form fixes this by using "Uncontrolled Components." It only re-renders when absolutely necessary (like when an error message needs to appear).
          <br/>
          <br/>
          To use React Hook Form, you need to
          first install the library via npm or yarn:
          <b>npm install react-hook-form</b>
        </p>
        
        <p>When you call useForm(), it gives you a few essential tools:</p>
        <ul>
          <li>Register: A function that connects an input to the library. It handles the value, the change events, and the validation rules.</li>
          <li>HandleSubmit: A wrapper function. It prevents the default browser reload and only runs your "submit" logic if the form is valid.</li>
          <li>formState: An object that holds all your validation errors.</li>
        </ul>

        <p>
          In a standard "Controlled" form using useState, the component renders on every single keystroke.
          In React Hook Form, the component stays "still" while you type. It only "wakes up" and re-renders if:
        </p>
        <ul>
          <li>You submit the form.</li>
          <li>A validation error is triggered.</li>
          <li>A validation error is cleared.</li>
        </ul>
        <p>This makes it incredibly fast for large forms with 20+ inputs.</p>
        
        {/* 2. Capitalized the 'F' in the tag name */}
        <RegistrationForm /> 
      </div>
    </>
  )
}

export default App