import React, {useState} from 'react';
import './App.css';
import ContactMe from './components/Forms/ContactMe';
import Modal from './components/UI/Modal';

import Header from './components/Layout/Header';

import Navbar from './components/sections/Navbar';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';

function App() {
  
  return (
    // <div className="App">   
    // {/* <ContactMe />    */}
    //    <Header />      
    //    {/* <Modal /> */}
    // </div>
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}

export default App;
