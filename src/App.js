import React from 'react';
import './App.css';
import About from './componets/about/index';
import Nav from './componets/nav';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
