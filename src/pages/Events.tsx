import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const EVENTS = [
  {
    id: 1,
    date: 'OCT 24',
    day: 'Friday',
    title: 'Techno & Taps: DJ Anjunadeep',
    time: '9:00 PM - 1:00 AM',
    desc: 'Deep house beats, low lights, and our special release dark stout on tap.',
    image: 'https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    date: 'OCT 25',
    day: 'Saturday',
    title: 'The Bangalore Indie Showcase',
    time: '8:00 PM - 11:30 PM',
    desc: 'Live performances from rising local indie rock bands. Pair it with double IPAs.',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    date: 'OCT 26',
    day: 'Sunday',
    title: 'Sunday Drunch: Vinyl & Wood-Fire',
    time: '12:00 PM - 4:00 PM',
    desc: 'Unlimited pizza slices, bottomless wheat beer, and a live vinyl set throwing back to the 80s.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop'
  }
];

export default function Events() {
  return (
    <div className="bg-brand-base min-h-screen pt-32 pb-24">
       <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 uppercase tracking-tight">Live & Loud</h1>
            <p className="text-brand-muted text-lg max-w-2xl mx-auto">
              Iron & Ash transforms when the sun goes down. See what's coming up on our stage.
            </p>
          </div>

          <div className="space-y-8">
            {EVENTS.map((evt, i) => (
               <motion.div 
                 key={evt.id}
                 initial={{ opacity: 0, scale: 0.98 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="flex flex-col md:flex-row bg-brand-surface border border-white/5  overflow-hidden group"
               >
                  <div className="md:w-1/3 aspect-video md:aspect-auto relative overflow-hidden">
                    <img 
                      src={evt.image} 
                      alt={evt.title} 
                      className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    />
                  </div>
                  <div className="md:w-2/3 p-8 flex flex-col justify-center">
                     <div className="flex items-center gap-4 mb-4">
                       <span className="text-brand-accent font-serif text-3xl font-bold">{evt.date}</span>
                       <div className="w-px h-8 bg-white/20" />
                       <span className="text-brand-muted uppercase tracking-widest text-sm">{evt.day}</span>
                     </div>
                     <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-accent-light transition-colors">{evt.title}</h3>
                     <p className="text-brand-text mb-6">
                       {evt.desc}
                     </p>
                     
                     <div className="flex flex-wrap items-center justify-between gap-4 mt-auto">
                       <div className="flex items-center gap-2 text-brand-muted text-sm uppercase tracking-wider">
                         <Clock className="w-4 h-4 text-brand-accent" />
                         <span>{evt.time}</span>
                       </div>
                       <Link 
                        to="/reservations" 
                        className="inline-flex items-center gap-2 text-brand-base bg-brand-accent px-6 py-2  font-bold text-sm uppercase tracking-wider hover:bg-brand-accent-light transition-colors"
                      >
                         Book for Event
                         <ArrowRight className="w-4 h-4" />
                       </Link>
                     </div>
                  </div>
               </motion.div>
            ))}
          </div>
       </div>
    </div>
  );
}
