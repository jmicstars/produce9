import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Profile from './pages/Profile';
import Header from './ui-components/Header';
import './App.scss';

function App() {
  return (
    <div>
    <BrowserRouter> 
    <div className='navbar'>
    <Header/>
    </div>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/profile" element={<Profile />} /> 
    <Route path="/projects" element={<Projects />} />   
    <Route path="/skills" element={<Skills />} /> 
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;