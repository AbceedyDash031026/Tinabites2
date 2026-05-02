import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../../constants';

const Footer = () => {
  return (
    <footer className="bg-brand-stone border-t border-brand-beige py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 text-center md:text-left">
        <div className="space-y-8">
          <h3 className="font-serif text-3xl tracking-[0.1em] text-brand-gold">Tina Bites</h3>
          <p className="text-[11px] text-brand-charcoal/40 leading-relaxed uppercase tracking-[0.2em] font-medium">
            Artisanal Gifting Experience.<br />
            Handcrafted with precision in {CONTACT_INFO.location}.
          </p>
        </div>

        <div className="space-y-8">
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold">Experience</h4>
          <ul className="space-y-5">
            <li><Link to="/shop" className="text-[11px] uppercase tracking-[0.2em] text-brand-charcoal hover:text-brand-gold transition-colors font-medium">Collections</Link></li>
            <li><Link to="/bespoke" className="text-[11px] uppercase tracking-[0.2em] text-brand-charcoal hover:text-brand-gold transition-colors font-medium">Bespoke Pieces</Link></li>
            <li><Link to="/about" className="text-[11px] uppercase tracking-[0.2em] text-brand-charcoal hover:text-brand-gold transition-colors font-medium">Our Story</Link></li>
          </ul>
        </div>

        <div className="space-y-8">
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold">Concierge</h4>
          <ul className="space-y-5">
            <li className="flex items-center justify-center md:justify-start space-x-3 text-[11px] text-brand-charcoal/70 uppercase tracking-widest font-medium">
              <Phone size={14} className="text-brand-gold" />
              <span>{CONTACT_INFO.whatsapp}</span>
            </li>
            <li className="flex items-center justify-center md:justify-start space-x-3 text-[11px] text-brand-charcoal/70 uppercase tracking-widest font-medium">
              <Mail size={14} className="text-brand-gold" />
              <span>concierge@tinasbites.com</span>
            </li>
          </ul>
        </div>

        <div className="space-y-8">
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold">Social</h4>
          <div className="flex justify-center md:justify-start space-x-8">
            <a 
              href={CONTACT_INFO.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-brand-charcoal/40 hover:text-brand-gold transition-all duration-300 transform hover:scale-110"
            >
              <Instagram size={22} />
            </a>
            <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} className="text-brand-charcoal/40 hover:text-brand-gold transition-all duration-300 transform hover:scale-110">
              <Phone size={22} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-brand-offwhite text-center">
        <p className="text-[9px] uppercase tracking-[0.4em] font-bold text-brand-charcoal/20">
          © {new Date().getFullYear()} TINA BITES LUXURY • HANDCRAFTED MOMENTS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
