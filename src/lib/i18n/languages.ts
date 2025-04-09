export const languages = {
    en: {
      name: "English",
      nativeName: "English",
      flag: "🇺🇸"
    },
    pt: {
      name: "Portuguese",
      nativeName: "Português",
      flag: "🇧🇷"
    },
    es: {
      name: "Spanish",
      nativeName: "Español",
      flag: "🇪🇸"
    }
  };
  
  export type Language = keyof typeof languages;