import React from 'react'
import {BrowserRouter as Router } from 'react-router-dom';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import About from './components/About';

import './App.css';

function App() {
  return (
    <Router>
      <div >
        <Banner />
        <About />
        <Carousel />
        <Gallery />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
