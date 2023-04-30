import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProgressContextProvider from './contexts/ProgressContext';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <div>
      <ThemeContextProvider>
        
        <ProgressContextProvider>
              <Navbar />
          </ProgressContextProvider>

      </ThemeContextProvider>
       
    </div>
  );
}

export default App;
