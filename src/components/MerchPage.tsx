import { Navbar } from './Navbar';
import { MerchModel } from './MerchModel';
import { ShoppingCart } from 'lucide-react';

export const MerchPage = () => {
  return (
    <div className="bg-black min-h-screen pt-24 pb-12 selection:bg-hot-pink selection:text-white relative overflow-hidden">
      <Navbar />
      
      {/* Background glow effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neon-yellow/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-hot-pink/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - 3D Viewer */}
          <div className="w-full order-1 lg:order-1 flex flex-col items-center">
             <div className="w-full h-[500px] md:h-[600px]">
                <MerchModel />
             </div>
          </div>
          
          {/* Right Column - Product Details */}
          <div className="w-full order-2 lg:order-2 flex flex-col items-start text-left space-y-8 mt-12 lg:mt-0">
            <div>
              <h2 className="font-headingWide text-5xl md:text-7xl text-white uppercase tracking-wider text-shadow-glow mb-4">
                XTASY <span className="text-neon-yellow">MERCH</span>
              </h2>
              <div className="flex items-center gap-4">
                <span className="text-3xl md:text-4xl font-bold font-body text-hot-pink">Rs 349</span>
                <span className="px-3 py-1 bg-white/10 text-white/70 rounded-full text-sm font-bold uppercase tracking-widest border border-white/20">Limited Edition</span>
              </div>
            </div>

            <p className="text-white/80 font-body text-lg leading-relaxed max-w-lg">
              Rep the ultimate cult fest style. Premium oversized fit, distressed graphics, and comfort that lasts past the final set.
              Snag the official XTASY 2026 drip before it sells out.
            </p>

            <div className="space-y-4 w-full">
               <h3 className="text-white font-bold uppercase tracking-widest text-sm">Select Size</h3>
               <div className="flex gap-3">
                  {['S', 'M', 'L', 'XL'].map((size) => (
                    <button 
                      key={size}
                      className="w-12 h-12 flex items-center justify-center border-2 border-white/20 text-white font-bold hover:border-hot-pink hover:text-hot-pink hover:bg-hot-pink/10 transition-all rounded-lg"
                    >
                      {size}
                    </button>
                  ))}
               </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full pt-4">
              <a 
                href="https://forms.gle/gS8sBFcUtiF1JKxb9"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-hot-pink text-white font-bold text-lg uppercase tracking-wider overflow-hidden rounded-xl shadow-[0_0_20px_rgba(230,0,126,0.3)] hover:shadow-[0_0_30px_rgba(230,0,126,0.6)] transition-all flex items-center justify-center gap-3"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Avail Yours
                </span>
                <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left text-white" />
              </a>
              
              <a 
                href="https://chat.whatsapp.com/FyIWltdnIm2CbreQYLF3Tb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-transparent border-2 border-neon-yellow text-neon-yellow font-bold text-lg uppercase tracking-wider hover:bg-neon-yellow hover:text-black transition-all rounded-xl text-center shadow-[0_0_20px_rgba(254,234,7,0.1)] hover:shadow-[0_0_30px_rgba(254,234,7,0.4)]"
              >
                Join WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
