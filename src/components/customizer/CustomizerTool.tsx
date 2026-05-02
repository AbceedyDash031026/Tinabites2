import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Check, Sparkles, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { CUSTOMIZATION_OPTIONS } from '../../constants';
import { BouquetCustomization } from '../../types';

const CustomizerTool = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [config, setConfig] = useState<BouquetCustomization>({
    size: 'classic',
    chocolate: 'dark',
    drizzle: 'none',
    topping: 'none',
    packaging: 'stone'
  });

  const steps = [
    { id: 'size', name: 'Select Size', options: CUSTOMIZATION_OPTIONS.sizes },
    { id: 'chocolate', name: 'Chocolate Base', options: CUSTOMIZATION_OPTIONS.chocolates },
    { id: 'drizzle', name: 'Artisan Drizzle', options: CUSTOMIZATION_OPTIONS.drizzles },
    { id: 'topping', name: 'Premium Toppings', options: CUSTOMIZATION_OPTIONS.toppings },
    { id: 'packaging', name: 'Signature Packaging', options: CUSTOMIZATION_OPTIONS.packaging },
  ];

  const totalPrice = useMemo(() => {
    const sizePrice = CUSTOMIZATION_OPTIONS.sizes.find(s => s.id === config.size)?.price || 0;
    const chocPrice = CUSTOMIZATION_OPTIONS.chocolates.find(c => c.id === config.chocolate)?.price || 0;
    const drizzPrice = CUSTOMIZATION_OPTIONS.drizzles.find(d => d.id === config.drizzle)?.price || 0;
    const topPrice = CUSTOMIZATION_OPTIONS.toppings.find(t => t.id === config.topping)?.price || 0;
    const packPrice = CUSTOMIZATION_OPTIONS.packaging.find(p => p.id === config.packaging)?.price || 0;
    return sizePrice + chocPrice + drizzPrice + topPrice + packPrice;
  }, [config]);

  const handleOptionSelect = (key: string, value: string) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  const nextStep = () => setStep(s => Math.min(s + 1, steps.length - 1));
  const prevStep = () => setStep(s => Math.max(s - 1, 0));

  const currentPackagingColor = CUSTOMIZATION_OPTIONS.packaging.find(p => p.id === config.packaging)?.color || '#FDFBF9';
  const currentChocolateColor = CUSTOMIZATION_OPTIONS.chocolates.find(c => c.id === config.chocolate)?.color || '#2A1B1B';

  return (
    <div className="flex flex-col lg:flex-row h-full min-h-[600px] border border-brand-beige luxury-card">
      {/* Visual Preview */}
      <div className="flex-1 bg-brand-offwhite relative overflow-hidden flex items-center justify-center p-12">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#C5A059 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="relative z-10 w-full max-w-sm aspect-[4/5] perspective-1000">
          <motion.div 
            key={`${config.packaging}-${config.chocolate}`}
            initial={{ rotateY: -10, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            className="w-full h-full relative"
          >
            {/* The Box */}
            <div 
              className="absolute inset-0 rounded-t-3xl shadow-2xl transition-colors duration-700"
              style={{ backgroundColor: currentPackagingColor, border: '1px solid rgba(0,0,0,0.05)' }}
            >
              <div className="absolute top-0 left-0 w-full h-4 bg-black/5 rounded-t-3xl" />
              
              {/* Berries Simulation */}
              <div className="absolute inset-8 grid grid-cols-3 gap-4">
                {[...Array(config.size === 'classic' ? 6 : config.size === 'grand' ? 12 : 20)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="aspect-square relative rounded-full shadow-lg group overflow-hidden"
                    style={{ backgroundColor: currentChocolateColor }}
                  >
                    {/* Drizzle Overlay */}
                    {config.drizzle !== 'none' && (
                      <div className={`absolute inset-0 opacity-60 ${
                        config.drizzle === 'rose-gold' ? 'bg-gradient-to-tr from-transparent via-[#E0BFB8] to-transparent' : 
                        config.drizzle === 'marble' ? 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent' :
                        'bg-white/10'
                      }`}>
                         <div className="absolute inset-0 border-t-2 border-white/20 -rotate-45 translate-y-2 opacity-40"></div>
                      </div>
                    )}
                    
                    {/* Topping Overlay */}
                    {config.topping !== 'none' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Sparkles size={8} className="text-white/40" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Silk ribbon simulation */}
              <div className="absolute bottom-12 -left-4 -right-4 h-6 bg-brand-gold/80 shadow-md transform -skew-x-12 z-20 flex items-center justify-center">
                 <span className="text-[6px] uppercase tracking-[0.3em] font-bold text-white">Tina Bites</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dynamic Tag */}
        <div className="absolute bottom-8 left-8 p-4 bg-white/50 backdrop-blur-md rounded-2xl border border-white space-y-1">
          <p className="text-[10px] uppercase tracking-widest font-bold text-brand-gold">Current Valuation</p>
          <p className="text-xl font-serif">AED {totalPrice}</p>
        </div>
      </div>

      {/* Controls Panel */}
      <div className="w-full lg:w-96 bg-white p-10 flex flex-col justify-between border-l border-brand-beige">
        <div className="space-y-8">
          <div className="space-y-2">
            <div className="flex justify-between items-end">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold">Step {step + 1} of {steps.length}</p>
              <div className="flex space-x-1">
                {steps.map((_, i) => (
                  <div key={i} className={`h-1 w-4 rounded-full transition-all duration-300 ${i === step ? 'bg-brand-gold w-8' : 'bg-brand-beige'}`} />
                ))}
              </div>
            </div>
            <h3 className="text-2xl font-serif tracking-tight">{steps[step].name}</h3>
          </div>

          <div className="grid grid-cols-1 gap-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-3"
              >
                {steps[step].options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleOptionSelect(steps[step].id, opt.id)}
                    className={`w-full group p-4 flex items-center justify-between border transition-all duration-300 ${
                      config[steps[step].id as keyof BouquetCustomization] === opt.id 
                      ? 'border-brand-gold bg-brand-stone' 
                      : 'border-brand-beige hover:border-brand-gold/30'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      {'color' in opt && (
                        <div 
                          className="w-6 h-6 rounded-full border border-black/5" 
                          style={{ backgroundColor: opt.color as string }}
                        />
                      )}
                      <div className="text-left">
                        <p className={`text-[11px] uppercase tracking-wider font-bold transition-colors ${config[steps[step].id as keyof BouquetCustomization] === opt.id ? 'text-brand-gold' : 'text-brand-charcoal'}`}>
                          {opt.name}
                        </p>
                        {opt.price > 0 && <p className="text-[9px] text-brand-charcoal/40 font-medium">+{opt.price} AED</p>}
                      </div>
                    </div>
                    {config[steps[step].id as keyof BouquetCustomization] === opt.id && (
                      <motion.div layoutId="check" className="text-brand-gold">
                        <Check size={16} />
                      </motion.div>
                    )}
                  </button>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="pt-10 flex space-x-4">
          {step > 0 && (
            <button 
              onClick={prevStep}
              className="w-12 h-12 border border-brand-beige flex items-center justify-center rounded-full hover:bg-brand-stone transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
          )}
          {step < steps.length - 1 ? (
            <button 
              onClick={nextStep}
              className="flex-1 bg-brand-charcoal text-white rounded-full py-4 text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-brand-gold transition-colors flex items-center justify-center space-x-2"
            >
              <span>Next Detail</span>
              <ChevronRight size={16} />
            </button>
          ) : (
            <button 
              onClick={() => navigate('/thank-you')}
              className="flex-1 btn-gold flex items-center justify-center space-x-3"
            >
              <ShoppingBag size={18} />
              <span>Checkout Bespoke Gift</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomizerTool;
