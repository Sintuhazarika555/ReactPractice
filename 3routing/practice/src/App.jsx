import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
//BrowserRouter: This is the "brain." It keeps track of the URL in the address bar and syncs it with your app.
//Routes: A container that looks at all the possible paths you've defined and picks the best match.
//Route: A single rule. It says, "If the URL looks like this, show this component."
//Link: The "magic button." Unlike a standard <a> tag which forces the page to reload, Link just tells React to swap the content.
import Home from './component/Home'
import About from './component/About'

function App() {

  return (
    <>
      <BrowserRouter>
      {/*browserRouter wraps around the part of your app where you want to use routing. */}
      {/* poora app ko wrap karna hota hai */}


      <h1>Routing Practice</h1>
      <p>Routing is a fundamental concept in React applications,
        allowing users to navigate between different views or components.</p>
      <p>In a standard website, when you click a link, the browser
        refreshes and loads an entirely new HTML page from a server.
        In React, we build Single Page Applications (SPAs).
        This means the page never actually refreshes.</p>
      <p>
        Steps to implement routing in React using React Router:
        <br />
        1. Install React Router
        <br />
        2. Set Up the Router
        <br />
        3. Create Components for Different Routes
        <br />
        4. Define Routes
        <br />
        5. Add Navigation Links
        <br />
        6. Test the Application
      </p>

      


        {/* NAVigation bar -------------------------------- */}
        <nav style={{ border: '1px solid black', padding: '10px', background: '#eee' }}>
          {/* Use Link instead of <a href=""> to prevent refresh */}
          <button><Link to="/" >Home:Click</Link></button>
          <br/>
          <button><Link to="/about">About:Click</Link></button>
        </nav>



        <p>routing block below which will switch:--------------------</p>
        {/* BODY PART jha pages switch krna hai voh Routes tag ke andar aaega*/}
        <Routes>
          {/* Define the routes and their corresponding components */}
          {/* creating path /(jha show hoga) for home component */}
          <Route path="/" element={<Home />} />
          {/* creating path /about(jha show hoga vha about show hoga) for about component */}
          <Route path="/about" element={<About />} />
        </Routes>

        {/* Directly rendering components without routing */}
        <p>non-routing block below:--------------------</p>
        <Home />
        <About />


      </BrowserRouter>
    </>
  )
}

export default App
