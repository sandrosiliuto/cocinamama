export interface MenuItem {
  id: string;
  name: {
    es: string;
    en: string;
    de: string;
  };
  description: {
    es: string;
    en: string;
    de: string;
  };
  price: number;
}

export interface MenuCategory {
  id: string;
  title: {
    es: string;
    en: string;
    de: string;
  };
  items: MenuItem[];
}

export type Language = 'es' | 'en' | 'de';

export interface Translation {
  [key: string]: {
    es: string;
    en: string;
    de: string;
  };
}
