import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Bespoke', path: '/bespoke' },
    { name: 'Our Story', path: '/about' },
  ];

  const isHome = location.pathname === '/';

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 h-20 flex items-center ${
        scrolled || !isHome ? 'bg-brand-stone/80 backdrop-blur-md border-b border-brand-beige shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center w-full">
        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden ${!scrolled && isHome ? 'text-white' : 'text-brand-charcoal'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <Link 
          to="/" 
          className={`font-serif text-2xl tracking-[0.1em] transition-colors duration-500 ${
            !scrolled && isHome ? 'text-white' : 'text-brand-gold'
          }`}
        >
          Tina Bites
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[11px] uppercase tracking-[0.2em] font-medium transition-colors duration-300 ${
                !scrolled && isHome ? 'text-white/80 hover:text-white' : 'text-brand-charcoal/70 hover:text-brand-gold'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Button (Desktop Only) */}
        <div className="hidden md:flex items-center space-x-8">
          <a 
            href="https://tally.so/r/Y5VQZ0"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-[10px] uppercase tracking-[0.2em] px-6 py-2.5 rounded-full transition-all duration-300 ${
              !scrolled && isHome ? 'bg-white text-brand-charcoal hover:bg-brand-gold hover:text-white' : 'bg-brand-charcoal text-white hover:bg-brand-gold'
            }`}
          >
            Order Now
          </a>
        </div>

        {/* Cart Icon (Mobile Only) */}
        <div className="flex md:hidden items-center">
          <button className={`${!scrolled && isHome ? 'text-white' : 'text-brand-charcoal'}`}>
            <ShoppingBag size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-stone shadow-lg md:hidden py-10 px-6 border-t border-brand-offwhite"
          >
            <div className="flex flex-col space-y-8 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-charcoal"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
