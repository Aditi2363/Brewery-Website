import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Hexagon } from 'lucide-react';
import { Link } from 'react-router-dom';

const BEER_CATEGORIES = ['All', 'Signatures', 'Hoppy', 'Dark', 'Seasonal'];

const BEERS = [
  {
    id: 'midnight-ash',
    name: 'Midnight Ash',
    category: 'Signatures',
    style: 'Irish Dry Stout',
    abv: '5.5%',
    ibu: '35',
    color: '#3e2723', // dark brown
    notes: 'Dark chocolate, roasted espresso, hints of vanilla.',
    desc: 'Our flagship stout. Brewed with midnight wheat and roasted barley for a velvety smooth finish that lingers long into the night.',
    img: 'https://images.unsplash.com/photo-1657223010724-4ea0f1ffcc11?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'citrus-horizon',
    name: 'Citrus Horizon',
    category: 'Hoppy',
    style: 'Hazy IPA',
    abv: '6.8%',
    ibu: '45',
    color: '#f59e0b',
    notes: 'Tropical mango, grapefruit burst, pine resin.',
    desc: 'Double dry-hopped with Citra and Mosaic. Cloudy, juicy, and aggressively hoppy without overwhelming bitterness.',
    img: 'https://images.unsplash.com/photo-1600045437877-62a93945df84?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'golden-anvil',
    name: 'The Golden Anvil',
    category: 'Signatures',
    style: 'Bavarian Wheat',
    abv: '4.8%',
    ibu: '15',
    color: '#fbbf24',
    notes: 'Banana, clove, fresh bread.',
    desc: 'A classic Hefeweizen made following German purity laws. Crisp, refreshing, and perfect for the Bangalore heat.',
    img: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'crimson-tide',
    name: 'Crimson Tide',
    category: 'Seasonal',
    style: 'Amber Ale',
    abv: '5.2%',
    ibu: '28',
    color: '#b91c1c',
    notes: 'Caramel malt, slight toffee, floral hops.',
    desc: 'A balanced amber ale with a ruby hue. The caramel sweetness pairs perfectly with our wood-fired pizzas.',
    img: 'https://images.unsplash.com/photo-1575037614876-c38556f6c9cb?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'shadow-weaver',
    name: 'Shadow Weaver',
    category: 'Dark',
    style: 'Porter',
    abv: '6.0%',
    ibu: '30',
    color: '#271c19',
    notes: 'Roasted nuts, dark cherry, smoky finish.',
    desc: 'A robust porter that balances dark malts with a surprisingly light body. A campfire in a glass.',
    img: 'https://images.unsplash.com/photo-1678129524021-827c1cb80786?q=80&w=800&auto=format&fit=crop'
  }
];

export default function Beers() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredBeers = activeCategory === 'All' 
    ? BEERS 
    : BEERS.filter(b => b.category === activeCategory || (activeCategory === 'Dark' && b.style.includes('Stout')));

  return (
    <div className="bg-brand-base pt-32 pb-24 min-h-screen">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-20">
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
         >
           <div className="flex items-center justify-center gap-2 mb-4">
              <span className="h-px w-8 bg-brand-accent"></span>
              <span className="text-brand-accent tracking-widest text-sm font-semibold uppercase">Fresh from the taps</span>
              <span className="h-px w-8 bg-brand-accent"></span>
            </div>
           <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">Masterfully Brewed.</h1>
           <p className="text-brand-muted text-lg">
             We brew in small batches using premium imported malts and local ingredients when it matters. No shortcuts, just pure craft.
           </p>
         </motion.div>
      </div>

      {/* Categories */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          {BEER_CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5  border text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                activeCategory === category 
                ? 'bg-brand-accent border-brand-accent text-brand-base' 
                : 'bg-transparent border-white/20 text-brand-text hover:border-brand-accent/50 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Beers Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {filteredBeers.map((beer, i) => (
             <motion.div 
               key={beer.id}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.5, delay: i * 0.1 }}
               className="flex flex-col md:flex-row gap-8 group"
             >
                <div className="w-full md:w-2/5 aspect-[3/4] relative  overflow-hidden bg-brand-surface">
                   <div className="absolute inset-0 bg-gradient-to-t from-brand-base via-transparent to-transparent z-10 opacity-60" />
                   <img 
                     src={beer.img} 
                     alt={beer.name} 
                     referrerPolicy="no-referrer"
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   />
                </div>
                
                <div className="w-full md:w-3/5 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2">
                    <span 
                      className="w-3 h-3  flex shrink-0" 
                      style={{ backgroundColor: beer.color, boxShadow: `0 0 10px ${beer.color}` }}
                    />
                    <span className="text-brand-accent uppercase tracking-widest text-xs font-bold">{beer.style}</span>
                  </div>
                  
                  <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4 group-hover:text-brand-accent transition-colors">
                    {beer.name}
                  </h3>
                  
                  <div className="flex gap-4 mb-6 pt-4 border-t border-white/10">
                    <div className="text-center">
                      <span className="block text-brand-text font-mono text-xl">{beer.abv}</span>
                      <span className="text-brand-muted text-[10px] uppercase tracking-wider">ABV</span>
                    </div>
                    <div className="w-px bg-white/10" />
                    <div className="text-center">
                      <span className="block text-brand-text font-mono text-xl">{beer.ibu}</span>
                      <span className="text-brand-muted text-[10px] uppercase tracking-wider">IBU</span>
                    </div>
                  </div>

                  <p className="text-brand-text mb-4 font-light leading-relaxed">
                    {beer.desc}
                  </p>

                  <div className="bg-brand-surface border border-white/5 p-4  mt-auto">
                    <span className="block text-xs uppercase tracking-widest text-brand-muted mb-1">Tasting Notes</span>
                    <p className="text-sm text-white italic">"{beer.notes}"</p>
                  </div>
                </div>
             </motion.div>
          ))}
        </div>
      </div>

      {/* Process Teaser */}
      <div className="mt-32 border-t border-white/5 bg-brand-surface/50 py-24 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
           <Hexagon className="w-[800px] h-[800px] text-brand-accent -translate-y-1/4 translate-x-1/4" strokeWidth={0.5} />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">The Iron & Ash Process</h2>
          <p className="text-brand-muted max-w-2xl mx-auto mb-10 text-lg">
            From milling the grain to the precise fermentation temperature controls, witness how science and art collide in our glasshouse brewery.
          </p>
          <Link 
            to="/experience"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-brand-accent hover:bg-brand-accent hover:text-brand-base text-brand-accent font-bold text-lg uppercase tracking-wider transition-all"
          >
            <span>Learn About the Craft</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
