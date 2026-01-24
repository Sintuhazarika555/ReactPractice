import { useState } from 'react'
import { CountProvider } from "./component/CountContext";
import Display from "./component/Display";
import Controls from "./component/Controls";
import './App.css'


function App() {

  return (
    <>
      <h1>USE-CONTEXT</h1>
      <h3>Pop-drilling is the problem when
        we have to pass props through multiple levels of components
        just to get data to a deeply nested component.
        <br />
        parent - child - grandchild - great-grandchild
        <br />
        Use-Context helps to solve this problem by providing a way to share values
        between components without having to explicitly pass a prop through every
        level of the tree.
      </h3>
      <h3>
        use context is used in three steps:
        <li>step1:Create a context using React.createContext()</li>
        <li>step2:Provide the context value using a Context.Provider component , parent</li>
        <li>step3:Consume the context value using the useContext hook , great-grandchild</li>
      </h3>
      <div id="body">
      <CountProvider>
        <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
          <h1>Global Counter</h1>
          <Display />
          <Controls />
        </div>
      </CountProvider>
      </div>
    </>
  )
}

export default App


