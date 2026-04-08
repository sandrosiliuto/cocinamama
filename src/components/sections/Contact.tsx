import React from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  const whatsappUrl = `https://wa.me/34621262055?text=${encodeURIComponent(t('whatsapp_message'))}`;

  return (
    <section id="contact" className="py-24 px-6 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h2 className="text-6xl md:text-8xl text-white mb-12">
            {t('contact_title')}
          </h2>

          <div className="space-y-10">
            <div className="flex items-start space-x-6 group">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white transition-colors">
                <MapPin size={20} className="text-zinc-400 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-2">{t('location')}</h3>
                <p className="text-xl text-white font-light">{t('address')}</p>
              </div>
            </div>

            <div className="flex items-start space-x-6 group">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white transition-colors">
                <Phone size={20} className="text-zinc-400 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-2">Teléfono</h3>
                <p className="text-xl text-white font-light">+34 621 26 20 55</p>
              </div>
            </div>

            <div className="flex items-start space-x-6 group">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white transition-colors">
                <Clock size={20} className="text-zinc-400 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-2">{t('hours')}</h3>
                <p className="text-xl text-white font-light">{t('hours_val')}</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-4 px-10 py-5 bg-white text-black text-sm font-bold uppercase tracking-widest hover:bg-zinc-200 transition-all duration-300"
            >
              <span>{t('whatsapp_cta')}</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Map Placeholder / Visual */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative h-[500px] md:h-full min-h-[400px] bg-zinc-900 overflow-hidden rounded-sm"
        >
          {/* In a real app, use Google Maps here. For now, a stylized visual */}
          <div className="absolute inset-0 opacity-40">
            <img
              src="https://picsum.photos/seed/tenerife-map/1000/1000?grayscale"
              alt="Map Location"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full animate-ping"></div>
            <div className="w-2 h-2 bg-white rounded-full absolute"></div>
          </div>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        <div className="text-2xl font-handmade text-white tracking-wider">
          Cocina Mamá
        </div>
        
        <div className="flex items-center space-x-8">
          <a href="#" className="text-zinc-500 hover:text-white transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-zinc-500 hover:text-white transition-colors">
            <Facebook size={20} />
          </a>
        </div>

        <div className="text-[10px] uppercase tracking-[0.4em] text-zinc-600">
          © {new Date().getFullYear()} Cocina Mamá. El Médano, Tenerife.
        </div>
      </div>
    </section>
  );
};

export default Contact;
