import React, {useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { createContext } from 'react';
import All from './pages/All';
import About from './pages/About';
import Connect from './pages/Connect';
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import './App.css';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <div className="App" id={theme}>
      <div className='resize'>
      <Header />
      <Nav />
      <main>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<All />} />
        </Routes>
      </main>
      <Footer />
      </div>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
