import React from 'react';
import {Route, Routes } from 'react-router-dom';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
   
        
        <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/About' element={<About/>} />
          <Route path='/Services' element={<Services/>} />
          <Route path='/Projects' element={<Projects/>} />
          <Route path='/Contact' element={<Contact/>} />
       </Routes>
        </div>
      
    
  );
}

export default App;
