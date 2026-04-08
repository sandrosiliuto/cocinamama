/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams, useNavigate } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './hooks/useLanguage';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Specialties from './components/sections/Specialties';
import Menu from './components/sections/Menu';
import Gallery from './components/sections/Gallery';
import Contact from './components/sections/Contact';
import { Language } from './types';

const MainContent: React.FC = () => {
  const { lang } = useParams<{ lang: string }>();
  const { setLanguage, language } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    if (lang && ['es', 'en', 'de'].includes(lang)) {
      if (lang !== language) {
        setLanguage(lang as Language);
      }
    } else {
      navigate(`/${language}`, { replace: true });
    }
  }, [lang, language, setLanguage, navigate]);

  return (
    <div className="min-h-screen bg-black selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Specialties />
        <Menu />
        <Gallery />
        <Contact />
      </main>
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/:lang" element={<MainContent />} />
          <Route path="/" element={<Navigate to="/es" replace />} />
          <Route path="*" element={<Navigate to="/es" replace />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}
