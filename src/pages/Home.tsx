import { motion } from 'motion/react';
import { ArrowRight, Star, Heart, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/shop/ProductCard';
import { PRODUCTS, CONTACT_INFO } from '../constants';

const Home = () => {
  const featuredProducts = PRODUCTS.filter(p => p.bestSeller);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overflow-hidden"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 md:pt-0 flex flex-col md:flex-row overflow-hidden bg-brand-stone">
        <div className="w-full md:w-7/12 p-8 md:p-24 flex flex-col justify-center space-y-10 order-2 md:order-1">
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              <div className="h-[1px] w-12 bg-brand-gold"></div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-brand-gold font-bold">Artisanal Strawberry Gifting</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-8xl font-serif leading-[1.1] tracking-tight"
            >
              The Art of <br />
              <span className="italic font-normal text-brand-gold">Indulgent</span> Giving.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-brand-charcoal/60 leading-relaxed max-w-md font-light"
            >
              Handcrafted strawberry bouquets and premium gift boxes designed for life's most precious celebrations. A fusion of Belgian chocolate and hand-picked berries.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Link to="/shop" className="btn-gold">
              Shop Collection
            </Link>
            <Link to="/bespoke" className="btn-outline">
              Bespoke Experience
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-6 pt-10"
          >
            <div className="flex -space-x-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-brand-offwhite shadow-sm overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Customer" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p className="text-[11px] text-brand-charcoal/40 uppercase tracking-widest font-medium">Trusted by 2k+ Luxury Seekers</p>
          </motion.div>
        </div>

        <div className="w-full md:w-5/12 min-h-[50vh] md:min-h-screen bg-brand-offwhite relative flex items-center justify-center order-1 md:order-2 px-8 pt-20 md:pt-0">
          <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#C5A059 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
          
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full max-w-[420px] aspect-[4/5] bg-brand-stone rounded-2xl shadow-2xl relative overflow-hidden flex flex-col items-center p-8 border border-white/50"
          >
            <div className="w-full h-3/4 rounded-xl bg-gradient-to-b from-brand-blush to-brand-offwhite mb-6 relative overflow-hidden">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-64 bg-brand-gold/10 rounded-full blur-2xl"></div>
              <img 
                src="https://i.postimg.cc/QxtHnPhN/image.jpg" 
                className="absolute inset-0 w-full h-full object-cover"
                alt="Signature Strawberry Bouquet"
              />
            </div>
            <div className="text-center">
              <div className="text-[10px] uppercase tracking-widest text-brand-gold font-bold mb-1">Signature Piece</div>
              <div className="font-serif text-2xl">The Blush Bouquet</div>
              <div className="text-xs text-brand-charcoal/40 mt-1 italic">24 Hand-Dipped Berries</div>
            </div>
          </motion.div>

          <div className="absolute bottom-8 right-8 flex items-center gap-3 bg-white px-6 py-4 rounded-full shadow-xl border border-brand-offwhite shrink-0">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <div className="text-[10px] uppercase tracking-widest font-bold whitespace-nowrap">Deliveries Today: Open</div>
          </div>
        </div>
      </section>

      {/* Detail Bars */}
      <section className="border-y border-brand-beige grid grid-cols-1 md:grid-cols-4 bg-brand-offwhite">
        {[
          { label: 'The Quality', title: 'Premium Belgian Chocolate' },
          { label: 'The Freshness', title: 'Morning-Picked Grade-A Berries' },
          { label: 'The Experience', title: 'Signature Luxury Packaging' },
          { label: 'Personalized', title: 'Tailored for Your Occasion' }
        ].map((item, idx) => (
          <div key={idx} className="p-10 border-b md:border-b-0 md:border-r border-brand-beige last:border-0">
            <span className="block text-[9px] uppercase tracking-[0.2em] text-brand-gold font-bold mb-2">{item.label}</span>
            <h3 className="font-serif text-lg leading-tight">{item.title}</h3>
          </div>
        ))}
      </section>

      {/* Vision Section */}
      <section className="py-32 px-6 bg-brand-stone overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold">Our Philosophy</p>
            <h2 className="text-3xl md:text-5xl font-serif italic text-brand-charcoal leading-relaxed">
              "It started with a single strawberry and a vision to make moments unforgettable."
            </h2>
            <div className="w-12 h-[1px] bg-brand-gold mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-40 px-6 bg-brand-beige">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold">The Collection</p>
              <h2 className="text-4xl md:text-5xl font-light">Bestselling Creations</h2>
            </div>
            <Link to="/shop" className="flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-bold group">
              <span>View All</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Occasions Section */}
      <section className="py-32 px-6 bg-brand-stone overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold">The Moments</p>
            <h2 className="text-4xl md:text-5xl font-light leading-tight">Elevate Every <span className="italic font-serif text-brand-gold">Celebration</span></h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {['Birthdays', 'Anniversaries', 'Surprises', 'Corporate'].map((occasion, idx) => (
              <motion.div
                key={occasion}
                whileHover={{ y: -10 }}
                className="relative aspect-[3/4] overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 bg-brand-charcoal/20 group-hover:bg-brand-charcoal/40 transition-colors duration-500 z-10" />
                <img
                  src={`https://picsum.photos/seed/gift-${idx}/800/1200`}
                  alt={occasion}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-8 left-0 w-full text-center z-20">
                  <p className="text-white text-xs uppercase tracking-[0.3em] font-semibold">{occasion}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote / Founder Statement */}
      <section className="py-40 bg-brand-charcoal text-white relative">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <Star className="text-brand-gold mx-auto fill-brand-gold" size={32} />
          <h2 className="text-3xl md:text-5xl font-serif italic font-light leading-relaxed">
            "Every bouquet is crafted with care and a personal touch. For me, it's about creating beautiful, memorable experiences for every customer."
          </h2>
          <div className="space-y-2">
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold">Valentina Cinio</p>
            <p className="text-sm font-light uppercase tracking-widest">Founder & Creative Director</p>
          </div>
        </div>
      </section>

      {/* Delivery / CTA */}
      <section className="py-32 px-6 bg-brand-offwhite">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="text-4xl md:text-5xl font-light">Ready to Sweeten the Moment?</h2>
          <p className="text-brand-charcoal/60 leading-relaxed max-w-2xl mx-auto">
            We offer white-glove delivery across all emirates including Dubai, Abu Dhabi, and Sharjah. 
            Same-day limited spots available.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link to="/shop" className="btn-gold w-full md:w-auto">Shop All Products</Link>
            <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} className="btn-outline w-full md:w-auto">Order via WhatsApp</a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
