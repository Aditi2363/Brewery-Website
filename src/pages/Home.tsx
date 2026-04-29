import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Star, Clock, MapPin, CalendarDays } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-brand-base">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex overflow-hidden border-b border-white/5 bg-brand-base pt-20">
        {/* Background Decorative Text (Brutalist style) */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.03] overflow-hidden z-0 mt-10">
          <h1 className="text-[20rem] lg:text-[30rem] font-serif uppercase select-none leading-none truncate">Bengaluru</h1>
        </div>

        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 max-w-[1400px] mx-auto min-h-full">
          {/* Left Hero Column */}
          <div className="col-span-12 lg:col-span-7 flex flex-col justify-center px-6 lg:px-16 py-12 lg:py-20 z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-block px-3 py-1 border border-brand-accent text-brand-accent text-[10px] uppercase tracking-[0.3em] mb-6">
                Crafted in Indiranagar
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-7xl font-serif leading-[1.1] mb-6 text-white">
                Bold Hops.<br/>
                <span className="italic text-brand-accent">Smooth Finish.</span><br/>
                Local Spirit.
              </h1>
              <p className="text-lg text-brand-text/60 max-w-md leading-relaxed mb-10">
                Experience Bengaluru's premium craft brewing. From our signature stouts to electric nightlife, we pour passion into every pint.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <Link 
                  to="/reservations"
                  className="px-8 py-4 bg-transparent border-2 border-brand-accent text-brand-accent uppercase font-bold tracking-widest hover:bg-brand-accent hover:text-brand-base transition-all text-center inline-flex justify-center"
                >
                  Reserve a Table
                </Link>
                <Link 
                  to="/beers"
                  className="px-8 py-4 bg-transparent border border-white/10 text-white/80 uppercase font-bold tracking-widest hover:border-brand-accent hover:text-brand-accent transition-all text-center inline-flex justify-center"
                >
                  Explore Our Beers
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Hero Column */}
          <div className="col-span-12 lg:col-span-5 bg-brand-surface border-l border-white/5 relative overflow-hidden flex flex-col">
             <img 
               src="https://images.unsplash.com/photo-1544252890-50d4f3e62f55?q=80&w=2670&auto=format&fit=crop" 
               alt="Pouring dark craft beer"
               referrerPolicy="no-referrer"
               className="absolute inset-0 w-full h-full object-cover object-center opacity-40 mix-blend-luminosity hover:mix-blend-normal transition-all duration-[2000ms]"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-transparent to-brand-surface/30 mix-blend-multiply" />
             
             {/* Live Status Card inside Hero */}
             <div className="relative z-10 p-12 mt-auto">
               <div className="bg-brand-base p-6 border border-brand-accent/30 relative overflow-hidden w-full max-w-sm ml-auto backdrop-blur-sm">
                 <div className="absolute top-0 right-0 p-3">
                   <span className="flex h-3 w-3">
                     <span className="animate-ping absolute inline-flex h-full w-full  bg-red-400 opacity-75"></span>
                     <span className="relative inline-flex  h-3 w-3 bg-red-500"></span>
                   </span>
                 </div>
                 <h4 className="text-brand-accent text-xs uppercase tracking-widest font-bold mb-4">Tonight</h4>
                 <p className="text-xl font-serif mb-2 text-white">Live Electronic Act</p>
                 <p className="text-sm text-white/50 mb-4">Starts at 9:00 PM • Main Stage</p>
                 <p className="text-xs italic text-white/40">Limited tables remaining.</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="border-b border-white/5 bg-brand-base py-10 relative z-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="flex flex-col pt-6 md:pt-0 pr-8">
              <div className="flex items-center space-x-2 mb-2">
                 <span className="text-brand-accent text-lg tracking-widest">★★★★★</span>
                 <span className="text-xs font-bold text-white uppercase tracking-wider mt-1">4.8 on Google</span>
              </div>
              <p className="text-xs italic text-white/40">"The best stout in Bangalore. Hands down. The industrial décor is spot on." — LBB Bangalore</p>
            </div>
            
            <div className="flex flex-col pt-6 md:pt-0 px-8">
              <h4 className="text-brand-accent text-[10px] uppercase tracking-[0.2em] font-bold mb-2">Location</h4>
              <p className="text-sm font-serif text-white text-lg">100ft Road, Indiranagar</p>
              <p className="text-xs text-white/40 italic mt-1">Heart of the city's nightlife</p>
            </div>
            
            <div className="flex flex-col pt-6 md:pt-0 pl-8">
              <h4 className="text-brand-accent text-[10px] uppercase tracking-[0.2em] font-bold mb-2">Hours</h4>
              <p className="text-sm font-serif text-white text-lg">Open till 1:00 AM</p>
              <p className="text-xs text-white/40 italic mt-1">Weekends and special events</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Beers Section */}
      <section className="py-24 sm:py-32 bg-brand-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Masterfully Brewed.</h2>
              <p className="text-brand-muted text-lg">Four signature taps. Seasonal rotations. Each batch crafted with precision and passion right here in our Bangalore facility.</p>
            </div>
            <Link to="/beers" className="inline-flex items-center gap-2 text-brand-accent hover:text-brand-accent-light uppercase tracking-wider font-semibold transition-colors group">
              <span>View All Taps</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Midnight Ash Stout", style: "Irish Dry Stout", abv: "5.5%", ibu: "35", img: "https://images.unsplash.com/photo-1657223010724-4ea0f1ffcc11?q=80&w=800&auto=format&fit=crop" },
              { name: "Citrus Horizon", style: "Hazy IPA", abv: "6.8%", ibu: "45", img: "https://images.unsplash.com/photo-1600045437877-62a93945df84?q=80&w=800&auto=format&fit=crop" },
              { name: "The Golden Anvil", style: "Bavarian Wheat", abv: "4.8%", ibu: "15", img: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?q=80&w=800&auto=format&fit=crop" }
            ].map((beer, i) => (
              <motion.div 
                key={beer.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors flex flex-col"
              >
                <p className="text-[10px] uppercase text-brand-accent tracking-widest mb-2">{beer.style}</p>
                <h3 className="font-serif text-2xl text-white mb-1 group-hover:text-brand-accent transition-colors">{beer.name}</h3>
                <p className="text-xs text-brand-muted mt-1 uppercase tracking-widest mb-6">{beer.abv} ABV | {beer.ibu} IBU</p>
                
                <div className="relative aspect-square w-full overflow-hidden mt-auto border border-white/5">
                  <div className="absolute inset-0 bg-brand-base/40 group-hover:bg-transparent transition-colors z-10 mix-blend-multiply" />
                  <img 
                    src={beer.img} 
                    alt={beer.name} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section (Split Layout) */}
      <section className="bg-brand-surface relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block border-l border-white/5">
          <img 
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&auto=format&fit=crop" 
            alt="Brewery interior vibe" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-[2000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-surface to-transparent mix-blend-multiply" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="pr-12">
              <div className="inline-block px-3 py-1 border border-brand-accent text-brand-accent text-[10px] uppercase tracking-[0.3em] mb-6">
                The Vibe
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-[1.1]">
                More than just <br/> a pint.
              </h2>
              <p className="text-white/60 text-lg mb-6 leading-relaxed">
                Step into a space where industrial heritage meets modern luxury. The gleam of exposed copper tanks, the warmth of amber lighting, and the electric hum of Bangalore's best crowd. 
              </p>
              <p className="text-white/60 text-lg mb-10 leading-relaxed">
                Whether it's a sunny Sunday brunch with our wood-fired pizzas or a high-energy Saturday night with live electronic acts, Iron & Ash is where the city comes alive.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                 <div className="flex items-center gap-4 p-4 bg-brand-base border border-white/10 group hover:border-brand-accent transition-colors">
                    <img src="https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=200&auto=format&fit=crop" alt="Food" className="w-16 h-16 object-cover grayscale group-hover:grayscale-0 transition-all" />
                    <div>
                      <p className="text-white font-bold text-sm uppercase tracking-wider">Curated Menu</p>
                      <p className="text-brand-accent text-xs uppercase tracking-[0.2em] mt-1">Gastronomy</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-4 p-4 bg-brand-base border border-white/10 group hover:border-brand-accent transition-colors">
                    <img src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=200&auto=format&fit=crop" alt="Events" className="w-16 h-16 object-cover grayscale group-hover:grayscale-0 transition-all" />
                    <div>
                      <p className="text-white font-bold text-sm uppercase tracking-wider">Live Music</p>
                      <p className="text-brand-accent text-xs uppercase tracking-[0.2em] mt-1">Every Weekend</p>
                    </div>
                 </div>
              </div>

              <Link 
                to="/experience"
                className="inline-flex px-8 py-4 border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-brand-base font-bold text-sm uppercase tracking-wider transition-all"
              >
                Discover The Space
              </Link>
            </div>
            
            {/* Mobile/Tablet image */}
            <div className="lg:hidden aspect-square relative overflow-hidden border border-white/10">
               <img 
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop" 
                alt="Brewery interior vibe" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
         <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1574096079513-d8259312b78a?q=80&w=2670&auto=format&fit=crop" 
            alt="Dark textured background"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-brand-base/80 z-10" />
        </div>

        <div className="mx-auto max-w-4xl px-4 relative z-20 text-center">
          <div className="inline-block px-3 py-1 border border-brand-accent text-brand-accent text-[10px] uppercase tracking-[0.3em] mb-6">
            Join Us Tonight
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-6">Ready to taste<br/> <span className="italic text-brand-accent">the craft?</span></h2>
          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
            Tables fill up fast on weekends. Reserve your spot now to guarantee the best experience for you and your group.
          </p>
          <div className="flex justify-center mb-8">
            <Link 
              to="/reservations"
              className="inline-flex items-center justify-center px-10 py-5 border-2 border-brand-accent bg-transparent hover:bg-brand-accent text-brand-accent hover:text-brand-base font-bold text-lg uppercase tracking-wider transition-all"
            >
              Confirm Availability
            </Link>
          </div>
          <p className="text-brand-accent font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3">
            <span className="w-2 h-2 bg-red-500 animate-pulse"></span>
            Only 4 tables left near the stage
          </p>
        </div>
      </section>
    </div>
  );
}
