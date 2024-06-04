import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="JL.jpg" className="App-logo" alt="logo" />
        <h1>Welcome to My Personal Page</h1>
        <p>
          Hi, I'm juncheng Lu. I'm a [Your Profession]. Welcome to my personal page.
        </p>
        <div className="App-links">
          <a
            className="App-link"
            href="https://github.com/luirsyi1028"
            target="_blank"
            rel="noopener noreferrer"
          >
            My GitHub
          </a>
          <a
            className="App-link"
            href="https://www.linkedin.com/in/juncheng-lu-7510b8228/"
            target="_blank"
            rel="noopener noreferrer"
          >
            My LinkedIn
          </a>
          <a
            className="App-link"
            href="juncheng.lu@mail.utoronto.ca"
          >
            Contact Me
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;

