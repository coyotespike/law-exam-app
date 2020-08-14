import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login'
import TextField from './TextField'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          And then do other stuff
        </p>
        <Login/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <TextField />
      </header>
    </div>
  );
}

export default App;
