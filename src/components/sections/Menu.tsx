import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../hooks/useLanguage';
import { menuData } from '../../data/content';

const Menu: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="menu" className="py-24 px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-6xl md:text-8xl text-white mb-6">
            {t('menu_title')}
          </h2>
          <div className="w-32 h-[1px] bg-white/20 mx-auto"></div>
        </motion.div>

        <div className="space-y-24">
          {menuData.map((category, catIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: catIndex * 0.1 }}
            >
              <h3 className="text-4xl md:text-5xl text-white mb-12 border-b border-white/10 pb-4 inline-block">
                {category.title[language]}
              </h3>
              
              <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
                {category.items.map((item) => (
                  <div key={item.id} className="group">
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="text-xl text-zinc-200 group-hover:text-white transition-colors tracking-wide">
                        {item.name[language]}
                      </h4>
                      <div className="flex-grow border-b border-dotted border-zinc-800 mx-4"></div>
                      <span className="text-lg text-zinc-400 group-hover:text-white transition-colors font-light">
                        {item.price.toFixed(2)}€
                      </span>
                    </div>
                    <p className="text-sm text-zinc-500 font-light italic tracking-wider">
                      {item.description[language]}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
