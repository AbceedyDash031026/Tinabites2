import { motion } from 'motion/react';
import { CONTACT_INFO } from '../constants';
import { ArrowRight, Instagram, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-40"
    >
      {/* Editorial Header */}
      <section className="relative h-[70vh] min-h-[500px]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-charcoal/20 z-10" />
          <img
            src="https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=2000&auto=format&fit=crop"
            alt="Founder atelier"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="bg-brand-stone/80 backdrop-blur-md p-10 md:p-20 text-center max-w-2xl mx-6 space-y-6">
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold">The Vision</p>
            <h1 className="text-4xl md:text-6xl font-light leading-tight">Elevating the Art <br />of <span className="italic font-serif">Gifting</span></h1>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="pt-32 px-6">
        <div className="max-w-4xl mx-auto space-y-20">
          <div className="space-y-10 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-light italic font-serif">"A gift is a silent conversation between the giver and the receiver."</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-brand-charcoal/70 leading-relaxed font-light">
              <div className="space-y-6">
                <p>
                  I came to Dubai from Kazakhstan with a dream — to build a life through hard work, passion, and purpose. Like many, I started my journey working long hours, learning, growing, and pushing myself every day. Dubai gave me opportunity, but it was my dedication and persistence that shaped my path.
                </p>
                <p>
                  At some point, I realized I wanted to create something of my own — something meaningful. Something that brings joy to people’s special moments.
                </p>
              </div>
              <div className="space-y-6">
                <p>
                  It all started very simply. I began making strawberry chocolate bouquets and gift boxes just for my friends. Their reactions, their happiness, and their feedback meant everything to me. They encouraged me, believed in me, and told me I had something special. That’s when I decided to turn this passion into a business.
                </p>
                <p>
                  Today, every bouquet and gift box is crafted with care, attention to detail, and a personal touch. For me, it’s not just about chocolate-covered strawberries — it’s about creating beautiful, memorable experiences for every customer.
                </p>
              </div>
            </div>
            <div className="pt-10 border-t border-brand-beige space-y-6">
              <div className="space-y-4">
                <p className="text-brand-charcoal/70 leading-relaxed font-light italic text-lg">
                  "I dedicate this journey to my daughter, Adele, and my husband, whose unwavering support has made this dream possible."
                </p>
                <div className="pt-2">
                  <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold">Valentina Cinio</p>
                  <p className="text-[10px] text-brand-charcoal/40 uppercase tracking-widest font-medium">Founder of Tina Bites</p>
                </div>
              </div>
              <p className="text-brand-charcoal/40 leading-relaxed font-light italic text-sm">
                This brand is a reflection of my journey, my growth, and my belief that even the smallest gifts can create unforgettable moments.
              </p>
            </div>
          </div>

          <div className="relative aspect-[16/9] overflow-hidden group">
             <div className="absolute inset-0 bg-brand-gold/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
             <img 
               src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1500&auto=format&fit=crop" 
               alt="Aesthetic workspace"
               className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
               referrerPolicy="no-referrer"
             />
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-y border-brand-beige py-20">
            <div className="text-center space-y-4">
              <h4 className="text-xs uppercase tracking-widest font-bold text-brand-gold">Obsessive Quality</h4>
              <p className="text-xs text-brand-charcoal/60 leading-relaxed font-light">We source from the finest garden producers and premium Belgian chocolatiers.</p>
            </div>
            <div className="text-center space-y-4">
              <h4 className="text-xs uppercase tracking-widest font-bold text-brand-gold">Handmade Excellence</h4>
              <p className="text-xs text-brand-charcoal/60 leading-relaxed font-light">Every petal and every dip of chocolate is performed by hand in our private atelier.</p>
            </div>
            <div className="text-center space-y-4">
              <h4 className="text-xs uppercase tracking-widest font-bold text-brand-gold">Elegance First</h4>
              <p className="text-xs text-brand-charcoal/60 leading-relaxed font-light">Our packaging is designed to be as memorable as the bouquet itself.</p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center space-y-8">
            <h3 className="text-2xl font-light">Join Our World of Luxury Gifting</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link to="/shop" className="btn-gold w-full md:w-auto">Explore Collection</Link>
              <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} className="flex items-center space-x-3 text-xs font-bold uppercase tracking-widest hover:text-brand-gold transition-all">
                <Phone size={14} />
                <span>Contact via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
