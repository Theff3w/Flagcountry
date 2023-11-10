import { useState } from 'react';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('light-theme');
  };

  return (
    <header className={`header ${darkMode ? 'dark-theme' : ''}`}>
      <div>
        <h1>Where in the World?</h1>
      </div>
      <div onClick={toggleDarkMode} style={{ cursor: 'pointer' }}>
        <i className="fas fa-moon"></i> Dark Mode
      </div>
    </header>
  );
};

export default Header;
