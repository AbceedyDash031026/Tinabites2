import { motion } from 'motion/react';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  key?: string | number;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <a 
        href="https://tally.so/r/Y5VQZ0" 
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden relative aspect-[3/4] bg-brand-stone rounded-3xl"
      >
        <div className="absolute inset-0 bg-brand-charcoal/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        {product.bestSeller && (
          <img 
            src="https://i.postimg.cc/8P2zP9v9/gold-seal.png"
            alt="Signature Piece" 
            className="absolute top-4 left-4 z-20 w-16 h-16 object-contain drop-shadow-xl transform -rotate-12"
          />
        )}
        <div className="absolute inset-0 flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 z-20 px-6">
          <span className="w-full bg-brand-offwhite/90 backdrop-blur-sm text-brand-charcoal text-[10px] font-bold uppercase tracking-[0.2em] py-4 rounded-full text-center shadow-xl">
            Order Now
          </span>
        </div>
      </a>
      
      <div className="mt-8 text-center space-y-2">
        <h3 className="text-lg font-serif italic tracking-wide group-hover:text-brand-gold transition-colors">{product.name}</h3>
        <p className="text-[10px] uppercase tracking-[0.3em] text-brand-charcoal/40 font-bold">
          AED {product.price}
        </p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
