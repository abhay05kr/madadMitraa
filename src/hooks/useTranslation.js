import { useLanguage } from '../context/LanguageContext';
import { hi } from '../translations/hi';
import { en } from '../translations/en';

export const useTranslation = () => {
  const { language } = useLanguage();
  
  const t = (key) => {
    const keys = key.split('.');
    let translation = language === 'hi' ? hi : en;
    
    for (const k of keys) {
      if (translation && translation[k] !== undefined) {
        translation = translation[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }
    
    return translation;
  };

  return { t, language };
}; 