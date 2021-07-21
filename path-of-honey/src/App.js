import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home/Home';
import Blog from './components/Pages/Blog/Blog';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Route path="/" exact component={Home} />
          <Route path="/blog/" exact component={Blog} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
