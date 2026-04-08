import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../hooks/useLanguage';

const Specialties: React.FC = () => {
  const { t, language } = useLanguage();

  const specialties = [
    {
      id: 'carne-cabra',
      name: { es: 'Carne de Cabra', en: 'Goat Meat', de: 'Ziegenfleisch' },
      description: {
        es: 'Guiso tradicional de cabra con papas.',
        en: 'Traditional goat stew with potatoes.',
        de: 'Traditioneller Ziegeneintopf mit Kartoffeln.'
      },
      image: 'https://picsum.photos/seed/goat-meat/600/800'
    },
    {
      id: 'escaldon',
      name: { es: 'Escaldón de Gofio', en: 'Escaldón de Gofio', de: 'Escaldón de Gofio' },
      description: {
        es: 'Gofio escaldado con caldo de pescado y cebolla roja.',
        en: 'Gofio mixed with fish broth and red onion.',
        de: 'Gofio mit Fischbrühe und roten Zwiebeln vermischt.'
      },
      image: 'https://picsum.photos/seed/escaldon/600/800'
    },
    {
      id: 'papas-mojo',
      name: { es: 'Papas con Mojo', en: 'Canarian Potatoes', de: 'Kanarische Kartoffeln' },
      description: {
        es: 'Papas arrugadas con mojo rojo y verde tradicional.',
        en: 'Wrinkled potatoes with traditional red and green mojo sauce.',
        de: 'Runzelkartoffeln mit traditioneller roter und grüner Mojo-Sauce.'
      },
      image: 'https://picsum.photos/seed/papas-mojo/600/800'
    }
  ];

  return (
    <section id="specialties" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl text-white mb-4">
            {t('specialties_title')}
          </h2>
          <div className="w-24 h-[1px] bg-white/20 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {specialties.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-sm mb-8 relative">
                <img
                  src={item.image}
                  alt={item.name[language]}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <h3 className="text-3xl text-white mb-3 tracking-wide">
                {item.name[language]}
              </h3>
              <p className="text-sm text-zinc-400 font-light leading-relaxed tracking-wider uppercase">
                {item.description[language]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
