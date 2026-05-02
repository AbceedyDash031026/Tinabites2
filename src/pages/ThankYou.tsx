import { motion } from 'motion/react';
import { Heart, Instagram, ArrowLeft, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-40 flex items-center"
    >
      <div className="max-w-4xl mx-auto px-6 text-center space-y-16">
        <motion.div
           initial={{ scale: 0.8, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ duration: 0.8 }}
           className="space-y-8"
        >
          <Heart className="mx-auto text-brand-gold fill-brand-gold/10" size={48} strokeWidth={1} />
          <h1 className="text-5xl md:text-7xl font-light">Thank You</h1>
          <p className="text-xl md:text-2xl font-serif italic text-brand-charcoal/70 max-w-2xl mx-auto leading-relaxed">
            "Thank you for choosing us to be part of your special moment. We are hand-preparing your gift with the utmost care."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-left bg-white p-10 md:p-16 border border-brand-beige">
          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-brand-gold">What happens next?</h3>
            <ul className="space-y-4 text-sm text-brand-charcoal/70 leading-relaxed">
              <li className="flex items-start space-x-3">
                <span className="text-brand-gold">•</span>
                <span>You will receive a WhatsApp confirmation with your final delivery window.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-brand-gold">•</span>
                <span>Our artisans will hand-prepare your strawberries just hours before dispatch.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-brand-gold">•</span>
                <span>White-glove delivery to your chosen doorstep.</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-8 border-l border-brand-stone pl-0 md:pl-12">
            <div className="space-y-4">
               <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-brand-gold italic">Share the Joy</h3>
               <p className="text-sm text-brand-charcoal/60 leading-relaxed">Tag us in your stories when your gift arrives for a special repeat customer gift.</p>
               <a href="#" className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest hover:text-brand-gold transition-colors">
                 <Instagram size={16} />
                 <span>@tinasbites_luxury</span>
               </a>
            </div>
          </div>
        </div>

        {/* Digital Thank You Card Preview */}
        <div className="space-y-8">
           <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-charcoal/30">Inside Your Package</p>
           <div className="max-w-md mx-auto aspect-[4/3] bg-brand-blush/30 border border-brand-blush p-12 flex flex-col items-center justify-center space-y-6 relative overflow-hidden shadow-sm">
             <div className="absolute top-0 left-0 w-full h-1 bg-brand-gold/20" />
             <div className="absolute bottom-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full -mr-16 -mb-16" />
             
             <h4 className="font-serif italic text-2xl text-brand-charcoal/80">Made with love, <br/>just for you.</h4>
             <p className="text-xs text-brand-charcoal/60 leading-relaxed text-center">Thank you for trusting us to sweeten <br/>your special moments.</p>
             <div className="pt-4 space-y-1">
                <p className="text-[8px] uppercase tracking-[0.4em] font-bold">TINA'S BITES</p>
             </div>
           </div>
           <button className="flex items-center space-x-2 mx-auto text-[9px] uppercase tracking-[0.2em] font-bold text-brand-charcoal/40 hover:text-brand-charcoal transition-colors">
              <Download size={14} />
              <span>Download Digital Receipt</span>
           </button>
        </div>

        <div className="pt-10">
          <Link to="/" className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest hover:text-brand-gold transition-all">
            <ArrowLeft size={16} />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ThankYou;
