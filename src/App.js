import React from 'react';
import Header from './components/Header';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Projects from './components/Projects';
import About from './components/About';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Blog/>
      
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
