import React from 'react';
import './App.css';
import 'fontsource-roboto';
import SideMenu from '../Components/SideMenu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello world! - Caleb Ren
        </p>
        <SideMenu />
      </header>
    </div>
  );
}

export default App;
