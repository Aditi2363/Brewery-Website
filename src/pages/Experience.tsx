import { motion } from 'motion/react';

export default function Experience() {
  return (
    <div className="bg-brand-base min-h-screen">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center">
         <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2600&auto=format&fit=crop" 
            alt="Brewery interior"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-base/70 z-10" />
        </div>
        
        <div className="relative z-20 mx-auto max-w-4xl px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 uppercase tracking-tight"
          >
            The Experience
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-brand-text/90 font-light"
          >
            A collision of industrial heritage, craft culture, and Bangalore's vibrant soul.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-[4/5]  overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1566416242832-7fa09d021c3b?q=80&w=1200&auto=format&fit=crop" 
                  alt="Brewing details"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" 
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-1/2 aspect-square  overflow-hidden border-4 border-brand-base">
                 <img 
                  src="https://images.unsplash.com/photo-1555658636-6e4a36210b95?q=80&w=800&auto=format&fit=crop" 
                  alt="Ingredients"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2 lg:pl-12">
               <div className="flex items-center gap-2 mb-6">
                <span className="h-px w-8 bg-brand-accent"></span>
                <span className="text-brand-accent tracking-widest text-sm font-semibold uppercase">Our Story</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">Born from Fire & Fermentation.</h2>
              
              <div className="space-y-6 text-brand-muted text-lg leading-relaxed font-light">
                <p>
                  Iron & Ash wasn't started in a boardroom. It was born in the humid heat of a Bangalore garage, with a homebrew kit and an obsession with perfecting the dry stout.
                </p>
                <p>
                  Our founders, a couple of ex-engineers who traded code for yeast cultures, wanted to create a space that felt like the city itself: ambitious, energetic, and unafraid to mix the old with the new.
                </p>
                <p>
                  The name represents our dual pillars: **Iron** for the massive copper and steel brewhouse that forms the heart of our pub, and **Ash** for the wood-fired ovens that produce our legendary pizzas and smoke our signature malts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ambiance Day vs Night */}
      <section className="bg-brand-surface py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Two Faces of Iron & Ash.</h2>
          <p className="text-brand-muted max-w-2xl mx-auto text-lg">Transitions smoothly from a relaxed Sunday afternoon hangout to an electrifying weekend destination.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1600px] mx-auto gap-1">
          {/* Day */}
          <div className="relative aspect-video overflow-hidden group">
             <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop" alt="Day vibe" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
               <h3 className="text-3xl font-serif text-white mb-2">Sunlit Afternoons</h3>
               <p className="text-white/80">Bright natural light, relaxed brunch, cold crisp lagers.</p>
             </div>
          </div>
          {/* Night */}
          <div className="relative aspect-video overflow-hidden group">
             <img src="https://images.unsplash.com/photo-1566416035174-8d4e11246c05?q=80&w=1200&auto=format&fit=crop" alt="Night vibe" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-8">
               <h3 className="text-3xl font-serif text-brand-accent mb-2">Electric Nights</h3>
               <p className="text-white/80">Amber glows, deep house beats, and rich heavy stouts.</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
