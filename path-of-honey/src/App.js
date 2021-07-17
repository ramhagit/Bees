import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <header className="App-header">
        <p>
          Hello Bees
        </p>
        <a
          className="App-link"
          href="https://honeypath.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          real site
        </a>
      </header>
    </div>
  )
}

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
