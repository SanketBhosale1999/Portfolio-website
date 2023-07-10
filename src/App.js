import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './Sidebar';
import Home from './Home';
import Education from './Education';
import Certification from './Certification';
import WorkExperience from './WorkExperience';
import Footer from './Footer';
import Form from './Form';
import './App.css';
import './form.css';

const App = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [theme, setTheme] = useState('light');

  const handleFormSubmit = (name, email) => {
    setIsSubmitted(true);
    setName(name);
    setEmail(email);
  };

  const handleThemeToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`app ${theme}`}>
      <Router>
        {isSubmitted ? (
          <>
            <Sidebar handleThemeToggle={handleThemeToggle} theme={theme}/>
            <Routes>
              <Route path="/" element={<Home theme={theme} />} />
              <Route path="/Education" element={<Education theme={theme} />} />
              <Route path="/Certifications" element={<Certification theme={theme} />} />
              <Route path="/WorkExperience" element={<WorkExperience theme={theme} />} />
            </Routes>
            <Footer theme={theme} />
          </>
        ) : (
          <Form onSubmit={handleFormSubmit} />
        )}
      </Router>
    </div>
  );
};

export default App;
