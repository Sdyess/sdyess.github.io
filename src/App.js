import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import FullBlogPost from './components/FullBlogPost';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/blog/:id">
              <FullBlogPost/>
            </Route>
          </Switch>
        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
