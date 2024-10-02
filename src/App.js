import React from 'react';
import { Route, Routes } from 'react-router-dom';
import All from './pages/All';
import About from './pages/About';
import Connect from './pages/Connect';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Project from './components/Project';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <main>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/project" element={<Project />} />
          <Route path="*" element={<All />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
