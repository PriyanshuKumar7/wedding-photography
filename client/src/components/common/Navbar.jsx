/* Feature: Sticky Navbar with scroll effect + Mobile Menu */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const links = [
    { to: "/", label: "Home" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/packages", label: "Packages" },
    { to: "/about", label: "About" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled || menuOpen ? 'bg-lux-black/95 py-3 sm:py-4 shadow-lg' : 'bg-transparent py-4 sm:py-6'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" onClick={() => setMenuOpen(false)} className="text-base sm:text-xl md:text-2xl font-serif text-lux-gold tracking-wider sm:tracking-widest uppercase">
          Priyanshu Web Services
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6 lg:space-x-8 text-sm tracking-widest uppercase items-center">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="hover:text-lux-gold transition-colors">{l.label}</Link>
          ))}
          <Link to="/contact" className="px-5 py-2 border border-lux-gold text-lux-gold hover:bg-lux-gold hover:text-lux-black transition-all">Book Now</Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="md:hidden text-lux-gold p-1"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pt-4 pb-6 flex flex-col space-y-4 text-sm tracking-widest uppercase bg-lux-black/95">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setMenuOpen(false)}
              className="hover:text-lux-gold transition-colors py-2 border-b border-white/5"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="text-center px-5 py-3 border border-lux-gold text-lux-gold hover:bg-lux-gold hover:text-lux-black transition-all"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;