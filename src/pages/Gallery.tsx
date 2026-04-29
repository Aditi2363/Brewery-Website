import { motion } from 'motion/react';

const IMAGES = [
  'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544252890-50d4f3e62f55?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1657223010724-4ea0f1ffcc11?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600045437877-62a93945df84?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1566416035174-8d4e11246c05?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1575037614876-c38556f6c9cb?q=80&w=800&auto=format&fit=crop'
];

export default function Gallery() {
  return (
    <div className="bg-brand-base min-h-screen pt-32 pb-24">
       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 uppercase tracking-tight">The Gallery</h1>
            <p className="text-brand-muted text-lg max-w-2xl mx-auto">
              Follow <a href="#" className="text-brand-accent hover:underline">@ironandash</a> on Instagram. Or just come see it yourself.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
            {IMAGES.map((src, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="aspect-square relative overflow-hidden group "
              >
                <div className="absolute inset-0 bg-brand-accent/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <img 
                  src={src} 
                  alt={`Gallery image ${i+1}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
       </div>
    </div>
  );
}
