import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import C1 from './component/c1.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <C1/>
    </div>
  )
}

export default App
