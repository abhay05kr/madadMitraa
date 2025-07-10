import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button 
      className="language-switcher"
      onClick={toggleLanguage}
      aria-label={`Switch to ${language === 'hi' ? 'English' : 'Hindi'}`}
    >
      <span className="language-flag">
        {language === 'hi' ? '🇺🇸' : '🇮🇳'}
      </span>
    </button>
  );
};

export default LanguageSwitcher; 