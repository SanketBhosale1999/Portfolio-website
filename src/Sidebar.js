import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ handleThemeToggle },{theme}) => {
  const location = useLocation();
  const [isThemeToggled, setIsThemeToggled] = useState(false);

  const toggleTheme = () => {
    setIsThemeToggled((prevState) => !prevState);
    handleThemeToggle();
  };

  return (
    <div className={`sidebar ${theme}`}>
      
      <ul>
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === '/Education' ? 'active' : ''}>
          <Link to="/Education">Education</Link>
        </li>
        <li className={location.pathname === '/Certifications' ? 'active' : ''}>
          <Link to="/Certifications">Certification</Link>
        </li>
        <li className={location.pathname === '/WorkExperience' ? 'active' : ''}>
          <Link to="/WorkExperience">Work Experience</Link>
        </li>
      </ul>
      <div className="theme-toggle">
        <input
          type="checkbox"
          id="themeToggle"
          checked={isThemeToggled}
          onChange={toggleTheme}
        />
        <label htmlFor="themeToggle" className='icon'>
          {isThemeToggled ? (
          <FontAwesomeIcon icon={faMoon} />
          ) : (
          <FontAwesomeIcon icon={faSun} />
          )}
        </label>
      </div>
    </div>
  );
};

export default Sidebar;
