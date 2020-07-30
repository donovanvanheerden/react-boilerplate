import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import DE from './de.json';
import EN from './en.json';

const resources = {
  de: {
    translation: DE,
  },
  en: {
    translation: EN,
  },
};

i18n.use(initReactI18next).init({
  debug: process.env.NODE_ENV === 'development',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  lng: 'en',
  resources,
});

export default i18n;
