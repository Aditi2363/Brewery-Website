import { Link } from 'react-router-dom';
import { Beer, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/5 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center space-x-4 group">
              <div className="w-8 h-8 border-2 border-brand-accent flex items-center justify-center rotate-45 transition-all group-hover:rotate-90 duration-500">
                <span className="-rotate-45 font-serif font-bold text-brand-accent text-sm group-hover:-rotate-90 transition-all duration-500">I</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif tracking-widest uppercase text-brand-text">Iron & Ash</span>
              </div>
            </Link>
            <p className="text-white/40 text-[11px] uppercase tracking-[0.1em] leading-relaxed">
              Craft beer, wood-fired food, and electric nights in the heart of Bangalore. Premium brewpub experience.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/40 hover:text-brand-accent transition-colors text-[11px] uppercase tracking-[0.2em] font-medium">
                Instagram
              </a>
              <a href="#" className="text-white/40 hover:text-brand-accent transition-colors text-[11px] uppercase tracking-[0.2em] font-medium">
                WhatsApp
              </a>
              <a href="#" className="text-white/40 hover:text-brand-accent transition-colors text-[11px] uppercase tracking-[0.2em] font-medium">
                Untappd
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-white mb-6 uppercase tracking-[0.2em] text-xs">Explore</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/beers" className="text-white/40 text-[11px] uppercase tracking-[0.1em] hover:text-brand-accent transition-colors">Our Beers</Link></li>
              <li><Link to="/menu" className="text-white/40 text-[11px] uppercase tracking-[0.1em] hover:text-brand-accent transition-colors">Food Menu</Link></li>
              <li><Link to="/events" className="text-white/40 text-[11px] uppercase tracking-[0.1em] hover:text-brand-accent transition-colors">Live Music & Events</Link></li>
              <li><Link to="/experience" className="text-white/40 text-[11px] uppercase tracking-[0.1em] hover:text-brand-accent transition-colors">The Experience</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-white mb-6 uppercase tracking-[0.2em] text-xs">Visit Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-white/40">
                <MapPin className="w-4 h-4 shrink-0 text-brand-accent/70" />
                <span className="text-[11px] uppercase tracking-[0.1em]">100 Feet Rd, Indiranagar, <br/>Bangalore, KA 560038</span>
              </li>
              <li className="flex items-center gap-3 text-white/40">
                <Phone className="w-4 h-4 shrink-0 text-brand-accent/70" />
                <span className="text-[11px] uppercase tracking-[0.1em]">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-white/40">
                <Mail className="w-4 h-4 shrink-0 text-brand-accent/70" />
                <span className="text-[11px] uppercase tracking-[0.1em]">cheers@ironandash.in</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-white mb-6 uppercase tracking-[0.2em] text-xs">Hours</h4>
            <ul className="flex flex-col gap-3 text-white/40 text-[11px] uppercase tracking-[0.1em]">
              <li className="flex justify-between">
                <span>Mon - Thu</span>
                <span className="text-white">12:00 PM - 12:00 AM</span>
              </li>
              <li className="flex justify-between">
                <span>Fri - Sat</span>
                <span className="text-brand-accent font-medium">12:00 PM - 1:00 AM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white">12:00 PM - 12:00 AM</span>
              </li>
            </ul>
            <div className="mt-8">
               <Link
                to="/reservations"
                className="inline-block w-full text-center py-3 border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-[#080808] font-bold text-[11px] uppercase tracking-[0.2em] transition-all"
              >
                Book a Table
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-[0.2em] text-white/40">
          <p>&copy; {new Date().getFullYear()} Iron & Ash Brewpub. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
