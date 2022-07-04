import React from 'react';
import { Pixelboard } from './features/board/Pixelboard';
import { Navbar } from './features/nav-menu/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Pixelboard />
      <br/>
      <div className="Nav-bar">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
