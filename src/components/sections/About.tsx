import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../hooks/useLanguage';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="order-2 md:order-1"
        >
          <h2 className="text-5xl md:text-7xl text-white mb-8 leading-tight">
            {t('about_title')}
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed mb-10">
            {t('about_text')}
          </p>
          <div className="flex items-center space-x-6">
            <div className="w-12 h-[1px] bg-white/30"></div>
            <span className="text-xs uppercase tracking-[0.4em] text-zinc-500">
              Tradición & Sabor
            </span>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative order-1 md:order-2"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src="https://picsum.photos/seed/kitchen/800/1000"
              alt="Cocina Real"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l border-b border-white/20"></div>
          <div className="absolute -top-6 -right-6 w-32 h-32 border-r border-t border-white/20"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
