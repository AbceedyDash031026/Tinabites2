import { motion } from 'motion/react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/shop/ProductCard';
import { useState } from 'react';

const Shop = () => {
  const [filter, setFilter] = useState<'all' | 'bouquet' | 'box'>('all');

  const filteredProducts = filter === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-40 pb-40"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 space-y-8">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] uppercase tracking-[0.4em] font-bold text-brand-gold"
          >
            The Atelier
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-serif tracking-tight"
          >
            Our <span className="italic font-normal">Collection</span>
          </motion.h1>
          <div className="flex justify-center flex-wrap gap-8 md:gap-16 pt-12">
            {(['all', 'bouquet', 'box'] as const).map((cat, idx) => (
              <motion.button
                key={cat}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (idx * 0.1) }}
                onClick={() => setFilter(cat)}
                className={`text-[11px] uppercase tracking-[0.3em] font-bold pb-2 border-b-2 transition-all duration-300 ${
                  filter === cat ? 'border-brand-gold text-brand-charcoal' : 'border-transparent text-brand-charcoal/30 hover:text-brand-charcoal/60'
                }`}
              >
                {cat === 'all' ? 'Signature All' : cat === 'bouquet' ? 'Bouquets' : 'Gift Boxes'}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-brand-charcoal/40 font-serif italic">More creations coming soon...</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Shop;
