import { createContext, useState, ReactNode } from "react";

interface LanguageContextType {
  langswitch: boolean;
  setLangswitch: (langswitch: boolean) => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [langswitch, setLangswitch] = useState(false);

  return (
    <LanguageContext.Provider value={{ langswitch, setLangswitch }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageProvider, LanguageContext };
