import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import translationEN from "./localo/en.json";
import translationAR from "./localo/ar.json";
import translationTR from "./localo/tr.json";

const resources = {
  EN: {
    translation: translationEN,
  },
  AR: {
    translation: translationAR,
  },
  TR: {
    translation: translationTR,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "EN",
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
