import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import About from './components/About_Me';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact_Me';
import StyleContext from './context_providers/styleContext';
import SettingContext from './context_providers/settingContext';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path='/' element={<StyleContext><SettingContext><App /></SettingContext></StyleContext>}>
        <Route path='/' element={<Navigate to={"/home"}></Navigate>} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
    
);