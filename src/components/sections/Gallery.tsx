import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../hooks/useLanguage';

const Gallery: React.FC = () => {
  const { t } = useLanguage();

  const images = [
    'https://picsum.photos/seed/food1/800/800',
    'https://picsum.photos/seed/food2/800/800',
    'https://picsum.photos/seed/food3/800/800',
    'https://picsum.photos/seed/food4/800/800',
    'https://picsum.photos/seed/food5/800/800',
    'https://picsum.photos/seed/food6/800/800',
  ];

  return (
    <section id="gallery" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl text-white mb-4">
            {t('gallery_title')}
          </h2>
          <div className="w-24 h-[1px] bg-white/20 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="aspect-square overflow-hidden rounded-sm group relative"
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-110 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
