import React, { useState } from 'react';
import Popup from './Popup';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app">
      <h1>React Popup Modal</h1>
      <p>Click the button below to open the popup.</p>
      <button className="open-btn" onClick={() => setIsOpen(true)}>
        Open Popup
      </button>

      <Popup isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Welcome!</h2>
        <p>This is a reusable popup modal built with React.</p>
        <p>Click the close button or the overlay to dismiss.</p>
      </Popup>
    </div>
  );
}

export default App;
