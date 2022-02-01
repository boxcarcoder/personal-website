import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//import components
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='about' element={<About />} />
          <Route path='projects' element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
