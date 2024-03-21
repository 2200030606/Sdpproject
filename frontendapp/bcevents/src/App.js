import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainRouting from './main/MainRouting'; 
import profile from './src_images/bg.jpg';

function App() {
  return (
    <div className="App" style={{ 
      backgroundImage: `url(${profile})`,
      width: '100%',
      minHeight: '100vh',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed', 
    }}>
    <div className="App">
      <BrowserRouter>
        <MainRouting />
      </BrowserRouter>
    </div>
  </div>
  );
}

export default App;
