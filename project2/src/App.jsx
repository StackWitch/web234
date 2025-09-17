import React from 'react';
import './App.css'
import Picture1 from './Component1';
import { Picture2, Picture3 } from './Component2';
import AllThePictures from './Component2';

function App() {
  return (
    <div className="app-container">
      <h1>🟠 My Orange Gremlins 🟠</h1>
      <Picture1 />
      <Picture2 />
      <Picture3 />
      <AllThePictures Picture1Component={Picture1} Picture3Component={Picture3} />
    </div>
  );
}

export default App;
