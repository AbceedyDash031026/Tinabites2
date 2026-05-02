import { motion } from 'motion/react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import CustomizerTool from '../components/customizer/CustomizerTool';
import { CONTACT_INFO } from '../constants';

const Bespoke = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-40"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
          <div className="space-y-8">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[11px] uppercase tracking-[0.4em] font-bold text-brand-gold"
            >
              The Bespoke Experience
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-serif tracking-tight leading-tight"
            >
              Artisan <br /><span className="italic font-normal">Creations</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-brand-charcoal/60 leading-relaxed max-w-xl font-light text-lg"
            >
              Have a specific vision in mind? We specialize in one-of-a-kind designs for weddings, 
              corporate events, or uniquely personal surprises. Use our artisan tool below or 
              speak directly with our lead designer.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                className="inline-flex items-center justify-center space-x-3 bg-[#25D366] text-white px-8 py-4 uppercase tracking-widest text-[10px] font-bold rounded-full hover:shadow-xl transition-all duration-300"
              >
                <MessageCircle size={18} />
                <span>Consult via WhatsApp</span>
              </a>
              <a 
                href="https://tally.so/r/Y5VQZ0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-3 border border-brand-charcoal text-brand-charcoal px-8 py-4 uppercase tracking-widest text-[10px] font-bold rounded-full hover:bg-brand-charcoal hover:text-white transition-all duration-300"
              >
                <span>Full Inquiry Form</span>
                <ArrowRight size={14} />
              </a>
            </motion.div>
          </div>

          <div className="space-y-10 bg-brand-stone p-10 md:p-16 rounded-[40px] border border-brand-beige">
            <h3 className="text-2xl font-serif">The Process</h3>
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-8 h-8 rounded-full border border-brand-gold flex items-center justify-center text-[10px] font-bold shrink-0 mt-1">01</div>
                <div className="space-y-2">
                  <h3 className="text-xs uppercase tracking-widest font-bold">Tell us your vision</h3>
                  <p className="text-xs text-brand-charcoal/60 leading-relaxed">Share your occasion, preferred colors, and any specific details you want to include.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-8 h-8 rounded-full border border-brand-gold flex items-center justify-center text-[10px] font-bold shrink-0 mt-1">02</div>
                <div className="space-y-2">
                  <h3 className="text-xs uppercase tracking-widest font-bold">Design Consultation</h3>
                  <p className="text-xs text-brand-charcoal/60 leading-relaxed">Our lead designer will craft a conceptual proposal tailored to your needs.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-8 h-8 rounded-full border border-brand-gold flex items-center justify-center text-[10px] font-bold shrink-0 mt-1">03</div>
                <div className="space-y-2">
                  <h3 className="text-xs uppercase tracking-widest font-bold">Handcrafted Perfection</h3>
                  <p className="text-xs text-brand-charcoal/60 leading-relaxed">Once approved, we meticulously create and deliver your custom gift.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-10 text-center space-y-4">
          <h2 className="text-3xl font-serif">Bespoke Gifting Tool</h2>
          <p className="text-xs text-brand-charcoal/40 uppercase tracking-[0.2em]">Configure your signature selection below</p>
        </div>

        <CustomizerTool />
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="space-y-4">
             <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold">White-Glove Delivery</div>
             <p className="text-xs text-brand-charcoal/40 leading-relaxed">Your custom creation is hand-delivered in a temperature-controlled environment.</p>
          </div>
          <div className="space-y-4">
             <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold">Handwritten Note</div>
             <p className="text-xs text-brand-charcoal/40 leading-relaxed">Every bespoke order includes a calligraphy-style personalized message card.</p>
          </div>
          <div className="space-y-4">
             <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold">Artisan Approval</div>
             <p className="text-xs text-brand-charcoal/40 leading-relaxed">Our lead decorator personally inspects every finished piece before dispatch.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Bespoke;
