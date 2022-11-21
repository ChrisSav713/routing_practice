import './App.css';
import React from 'react'
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom'

const Home = (props) => { 
  return (
    <div>
      <h1 style={{color: "red"}}>Home Component</h1>
      <a href="/about">Go to About </a>
    </div>
  );
}
    
const About = (props) => {
  return (
    <div>
        <h1 style={{color: "blue"}}>About Component</h1>
        <Link to={"/"}>Go Home</Link> 
    </div>
  );
}

const Location = (props) => {
  return (
    <h1>Location Component Loaded!</h1>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <p>
        <Link to="/location/seattle">Seattle</Link>
        <Link to="/location/chicago">Chicago</Link>
        <Link to="/location/burbank">Burbank</Link>
      </p>
        <Routes>
          <Route path="/location/:city" element={<Location />}/>
          <Route path="/about" element={<About />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
