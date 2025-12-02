import i18n from 'i18next';
import { initReactI18next } from '../node_modules/react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector/cjs';

import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';

const resources = {
    en: {
        translation: translationEN
    },
    es: {
        translation: translationES
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'es', // Default language
        interpolation: {
            escapeValue: false // React already safes from xss
        }
    });

export default i18n;
