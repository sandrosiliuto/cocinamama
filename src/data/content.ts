import { MenuCategory, Translation } from '../types';

export const menuData: MenuCategory[] = [
  {
    id: 'entrantes',
    title: {
      es: 'Entrantes',
      en: 'Starters',
      de: 'Vorspeisen'
    },
    items: [
      {
        id: 'papas-mojo',
        name: {
          es: 'Papas con Mojo',
          en: 'Canarian Potatoes with Mojo',
          de: 'Kanarische Kartoffeln mit Mojo'
        },
        description: {
          es: 'Papas arrugadas con mojo rojo y verde tradicional.',
          en: 'Wrinkled potatoes with traditional red and green mojo sauce.',
          de: 'Runzelkartoffeln mit traditioneller roter und grüner Mojo-Sauce.'
        },
        price: 7.50
      },
      {
        id: 'queso-asado',
        name: {
          es: 'Queso Asado',
          en: 'Grilled Cheese',
          de: 'Gegrillter Käse'
        },
        description: {
          es: 'Queso canario a la plancha con mojo y miel de palma.',
          en: 'Grilled Canarian cheese with mojo and palm honey.',
          de: 'Gegrillter kanarischer Käse mit Mojo und Palmenhonig.'
        },
        price: 9.00
      },
      {
        id: 'croquetas',
        name: {
          es: 'Croquetas Caseras',
          en: 'Homemade Croquettes',
          de: 'Hausgemachte Kroketten'
        },
        description: {
          es: 'Receta de mamá, variadas según el día.',
          en: "Mom's recipe, variety depends on the day.",
          de: 'Mamas Rezept, Sorte variiert je nach Tag.'
        },
        price: 8.50
      }
    ]
  },
  {
    id: 'tradicionales',
    title: {
      es: 'Platos Tradicionales',
      en: 'Traditional Dishes',
      de: 'Traditionelle Gerichte'
    },
    items: [
      {
        id: 'escaldon',
        name: {
          es: 'Escaldón de Gofio',
          en: 'Escaldón de Gofio',
          de: 'Escaldón de Gofio'
        },
        description: {
          es: 'Gofio escaldado con caldo de pescado y cebolla roja.',
          en: 'Gofio mixed with fish broth and red onion.',
          de: 'Gofio mit Fischbrühe und roten Zwiebeln vermischt.'
        },
        price: 10.50
      },
      {
        id: 'carne-fiesta',
        name: {
          es: 'Carne de Fiesta',
          en: 'Carne de Fiesta',
          de: 'Carne de Fiesta'
        },
        description: {
          es: 'Dados de cerdo adobados y fritos con papas.',
          en: 'Marinated and fried pork cubes with potatoes.',
          de: 'Marinierte und frittierte Schweinefleischwürfel mit Kartoffeln.'
        },
        price: 13.50
      }
    ]
  },
  {
    id: 'carnes',
    title: {
      es: 'Carnes',
      en: 'Meats',
      de: 'Fleischgerichte'
    },
    items: [
      {
        id: 'carne-cabra',
        name: {
          es: 'Carne de Cabra',
          en: 'Goat Meat',
          de: 'Ziegenfleisch'
        },
        description: {
          es: 'Guiso tradicional de cabra con papas.',
          en: 'Traditional goat stew with potatoes.',
          de: 'Traditioneller Ziegeneintopf mit Kartoffeln.'
        },
        price: 15.50
      },
      {
        id: 'conejo',
        name: {
          es: 'Conejo en Salmorejo',
          en: 'Rabbit in Salmorejo',
          de: 'Kaninchen in Salmorejo'
        },
        description: {
          es: 'Conejo marinado en salsa salmorejo canaria.',
          en: 'Rabbit marinated in Canarian salmorejo sauce.',
          de: 'Kaninchen mariniert in kanarischer Salmorejo-Sauce.'
        },
        price: 16.00
      }
    ]
  },
  {
    id: 'pescados',
    title: {
      es: 'Pescados',
      en: 'Fish',
      de: 'Fischgerichte'
    },
    items: [
      {
        id: 'cherne',
        name: {
          es: 'Cherne con Papas',
          en: 'Cherne with Potatoes',
          de: 'Cherne mit Kartoffeln'
        },
        description: {
          es: 'Pescado blanco local con papas arrugadas y mojo.',
          en: 'Local white fish with wrinkled potatoes and mojo.',
          de: 'Lokaler Weißfisch mit Runzelkartoffeln und Mojo.'
        },
        price: 17.50
      }
    ]
  },
  {
    id: 'postres',
    title: {
      es: 'Postres',
      en: 'Desserts',
      de: 'Nachspeisen'
    },
    items: [
      {
        id: 'quesillo',
        name: {
          es: 'Quesillo Canario',
          en: 'Canarian Quesillo',
          de: 'Kanarischer Quesillo'
        },
        description: {
          es: 'Flan canario con leche condensada y miel de palma.',
          en: 'Canarian flan with condensed milk and palm honey.',
          de: 'Kanarischer Flan mit Kondensmilch und Palmenhonig.'
        },
        price: 5.50
      },
      {
        id: 'polvito',
        name: {
          es: 'Polvito Uruguayo',
          en: 'Polvito Uruguayo',
          de: 'Polvito Uruguayo'
        },
        description: {
          es: 'Postre de suspiros, dulce de leche y galleta.',
          en: 'Dessert with meringue, dulce de leche, and biscuit.',
          de: 'Nachtisch mit Baiser, Dulce de Leche und Keks.'
        },
        price: 6.00
      }
    ]
  }
];

export const translations: Translation = {
  hero_title: {
    es: 'Cocina Mamá',
    en: 'Cocina Mamá',
    de: 'Cocina Mamá'
  },
  hero_subtitle: {
    es: 'Sabores de Canarias, como en casa',
    en: 'Canarian Flavors, just like home',
    de: 'Kanarische Aromen, wie zu Hause'
  },
  cta_reserve: {
    es: 'Reservar mesa',
    en: 'Book a table',
    de: 'Tisch reservieren'
  },
  nav_about: {
    es: 'Sobre Nosotros',
    en: 'About Us',
    de: 'Über uns'
  },
  nav_specialties: {
    es: 'Especialidades',
    en: 'Specialties',
    de: 'Spezialitäten'
  },
  nav_menu: {
    es: 'Carta',
    en: 'Menu',
    de: 'Speisekarte'
  },
  nav_gallery: {
    es: 'Galería',
    en: 'Gallery',
    de: 'Galerie'
  },
  nav_contact: {
    es: 'Contacto',
    en: 'Contact',
    de: 'Kontakt'
  },
  about_title: {
    es: 'Aquí se cocina como antes',
    en: 'Cooking like the old days',
    de: 'Kochen wie früher'
  },
  about_text: {
    es: 'En Cocina Mamá, cada plato es un homenaje a nuestras raíces. Utilizamos recetas familiares transmitidas de generación en generación, con producto local de El Médano y todo el cariño que solo una madre sabe poner en la cocina.',
    en: 'At Cocina Mamá, every dish is a tribute to our roots. We use family recipes passed down through generations, with local products from El Médano and all the love that only a mother knows how to put into cooking.',
    de: 'Bei Cocina Mamá ist jedes Gericht eine Hommage an unsere Wurzeln. Wir verwenden Familienrezepte, die über Generationen weitergegeben wurden, mit lokalen Produkten aus El Médano und all der Liebe, die nur eine Mutter ins Kochen stecken kann.'
  },
  specialties_title: {
    es: 'Nuestras Especialidades',
    en: 'Our Specialties',
    de: 'Unsere Spezialitäten'
  },
  menu_title: {
    es: 'Nuestra Carta',
    en: 'Our Menu',
    de: 'Unsere Speisekarte'
  },
  gallery_title: {
    es: 'Galería de Sabores',
    en: 'Flavor Gallery',
    de: 'Geschmacks-Galerie'
  },
  contact_title: {
    es: 'Encuéntranos',
    en: 'Find Us',
    de: 'Finden Sie uns'
  },
  whatsapp_cta: {
    es: 'Reservar por WhatsApp',
    en: 'Book via WhatsApp',
    de: 'Per WhatsApp reservieren'
  },
  whatsapp_message: {
    es: 'Hola, quiero reservar mesa en Cocina Mamá',
    en: 'Hello, I would like to book a table at Cocina Mamá',
    de: 'Hallo, ich möchte einen Tisch im Cocina Mamá reservieren'
  },
  hours: {
    es: 'Horario',
    en: 'Opening Hours',
    de: 'Öffnungszeiten'
  },
  hours_val: {
    es: 'Martes a Domingo: 13:00 - 23:00',
    en: 'Tuesday to Sunday: 1:00 PM - 11:00 PM',
    de: 'Dienstag bis Sonntag: 13:00 - 23:00'
  },
  location: {
    es: 'Ubicación',
    en: 'Location',
    de: 'Standort'
  },
  address: {
    es: 'El Médano, Tenerife',
    en: 'El Médano, Tenerife',
    de: 'El Médano, Tenerife'
  }
};
