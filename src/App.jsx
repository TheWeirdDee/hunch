/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Waitlist from './Pages/Waitlist/Waitlist'

function App() {
  return (
    <BrowserRouter>
       
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='waitlist' element={<Waitlist />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
