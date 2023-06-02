import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavMenu from './components/nav-menu/NavMenu';
import Footer from './components/footer/Footer';
import About from './pages/about/About';
import Project from './pages/project/Project';
import Skills from './pages/skills/Skills';
import Work from './pages/work/Work';
import Contacts from './pages/contacts/Contacts';
import { LanguageProvider } from "./context/LanguageContext";


function App() {

  return (
    <LanguageProvider>
      <div className="App">
        <NavMenu />
        <About />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
