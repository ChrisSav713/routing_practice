import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';
import Location from './components/Location';
// import ContactUs from './components/ContactUs';
import Words from './components/Words';
// import Survey from './components/Survey'

function App() {
  const Home = (props) => { 
    return (
      <div>
        <h1 style={{color: "red"}}>Home Component</h1>
      </div>
    );
  }
      
  const About = (props) => {
    return (
      <div>
        <h1 style={{color: "blue"}}>About Component</h1>
      </div>
    );
  }

  const Survey = (props) => {
    const [name, setName] = useState("")
    const [comment, setComment] = useState("")
    const navigate = useNavigate();

    const sendSurvey = (e) => {
      e.preventDefault()
      navigate("-1")
    }

    return(
        <form onSubmit={ sendSurvey }>
            <label>Your Name:</label>
            <input type="text" onChange={ (e) => setName(e.target.value) } value={ name } />
            <label>Your Comment:</label>
            <textarea onInput={ (e) => setComment(e.target.value) } rows="2" value={ comment }></textarea>
            <input type="submit" value="Submit Survey" />
        </form>
      )
  }

  return (

    <BrowserRouter>
      <>
        <div className="grid-container">
          <h3>Routing Examples</h3>
          <h4> </h4>
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <ul>
            <li><Link to={"/location/seattle"}>Seattle</Link></li>
            <li><Link to={"/location/chicago"}>Chicago</Link></li>
            <li><Link to={"/location/burbank"}>Burbank</Link></li>
          </ul>
          <Link to={"/survey"}>Survey</Link>
        </div>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/location/:loc" element={<Location/>} />
          <Route path="/:word" element={<Words/>} />
          <Route path="/:word/:color/:back" element={<Words/>} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App
