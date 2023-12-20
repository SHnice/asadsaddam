import React, { useContext } from 'react';
import './App.css'
import Nav from "./Components/NavBar/Nav";
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom'
import Home from '../src/Components/Home/Home'
import About from '../src/Components/About/About'
import Project from '../src/Components/Project/Project'
import Certificate from '../src/Components/Certificate/Certificate'
import Footer from './Components/Footer/Footer';
import Gallery from './Components/Home/Gallery';


function App() {


  return (
    <>
       <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}></Route>
        <Route path='/projects' element={<Project />}></Route>
        <Route path='/certificates' element={<Certificate />}></Route>
        <Route path='/gallery' element={<Gallery/>}></Route>

        <Route
          path="*"
          element={
            <h1>
              404 page not found. <Link to="/">Go to home</Link>
              <br />
              <Link to={-1}>⬅ go back</Link>
            </h1>
          }
        />
      </Routes>
     <Footer />
     
    </>
  );
}

export default App;
