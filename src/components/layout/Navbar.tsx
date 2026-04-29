import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Beer, CalendarDays } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const LINKS = [
  { name: 'Our Beers', path: '/beers' },
  { name: 'Experience', path: '/experience' },
  { name: 'Menu', path: '/menu' },
  { name: 'Events', path: '/events' },
  { name: 'Gallery', path: '/gallery' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-base/80 backdrop-blur-md border-b border-brand-accent/20 py-4' : 'bg-transparent py-6 border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="w-10 h-10 border-2 border-brand-accent flex items-center justify-center rotate-45 transition-all group-hover:rotate-90 duration-500">
              <span className="-rotate-45 font-serif font-bold text-brand-accent text-xl group-hover:-rotate-90 transition-all duration-500">I</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-serif tracking-widest uppercase text-brand-text">Iron & Ash</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center">
            <div className="flex space-x-8 text-sm uppercase tracking-widest font-medium opacity-80 mr-8">
              {LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors hover:text-brand-accent ${
                    location.pathname === link.path ? 'text-brand-accent opacity-100' : 'text-brand-text'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <Link
              to="/reservations"
              className="px-6 py-2 bg-brand-accent text-brand-base font-bold uppercase tracking-tighter hover:bg-brand-accent-light transition-colors"
            >
              Reserve a Table
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-brand-text hover:text-brand-accent transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-surface border-b border-white/5 backdrop-blur-xl md:hidden shadow-2xl"
          >
            <div className="flex flex-col px-4 py-6 gap-4">
              {LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg font-serif font-medium ${
                    location.pathname === link.path ? 'text-brand-accent' : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 mt-2 border-t border-white/5">
                <Link
                  to="/reservations"
                  className="flex items-center justify-center gap-2 w-full px-6 py-4  bg-brand-accent text-brand-base font-bold text-lg uppercase tracking-wider"
                >
                  <CalendarDays className="w-5 h-5" />
                  <span>Reserve Table</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
