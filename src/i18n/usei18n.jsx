import { createContext } from "preact";
import { useContext, useState } from "preact/hooks";
import { fr } from "./fr";
import { en } from "./en";
import { ko } from "./ko";

const LOCALES = { fr, en, ko };

export const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  const [locale, setLocale] = useState("fr");
  const t = LOCALES[locale];

  return (
    <I18nContext.Provider value={{ t, locale, setLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
