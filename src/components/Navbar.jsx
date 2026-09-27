import React, { useState, useEffect } from 'react';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import shadiwaleT from '../assets/shadiwaleT.PNG';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight - 100;
      if (window.scrollY > heroHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'New Arrivals', href: '#new-arrivals' },
    { name: 'Categories', href: '#categories' },
    { name: 'Best Sellers', href: '#best-sellers' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-500 font-serif ${
        scrolled
          ? 'bg-[#FDFBF7]/95 text-[#140103] backdrop-blur-md border-b border-[#D4AF37]/30 shadow-[0_8px_25px_rgba(20,1,3,0.08)] py-3'
          : 'bg-gradient-to-b from-[#140103]/90 via-[#140103]/40 to-transparent text-[#FAF6F0] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between h-12">
        
        {/* Left Reserved Spot with Logo Typography (shadiwaleT.png) */}
        <div className="w-[180px] sm:w-[220px] h-full flex items-center justify-start pointer-events-auto pl-10 sm:pl-12">
          <img
            src={shadiwaleT}
            alt="Shadiwale"
            className={`h-6 sm:h-7 w-auto object-contain transition-all duration-300 ${
              scrolled ? 'brightness-90 contrast-125' : 'brightness-110 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]'
            }`}
          />
        </div>

        {/* Center Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-sans text-[11px] uppercase tracking-[0.22em] font-medium transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300 ${
                scrolled
                  ? 'text-[#2b0509]/85 hover:text-[#911322]'
                  : 'text-[#FAF6F0]/85 hover:text-[#D4AF37]'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4 sm:gap-6">
          <button
            aria-label="Search"
            className={`transition-colors duration-300 cursor-pointer p-1.5 ${
              scrolled ? 'text-[#140103] hover:text-[#911322]' : 'text-[#FAF6F0] hover:text-[#D4AF37]'
            }`}
          >
            <Search className="w-4 h-4 stroke-[1.8]" />
          </button>

          <button
            aria-label="User Account"
            className={`hidden sm:block transition-colors duration-300 cursor-pointer p-1.5 ${
              scrolled ? 'text-[#140103] hover:text-[#911322]' : 'text-[#FAF6F0] hover:text-[#D4AF37]'
            }`}
          >
            <User className="w-4 h-4 stroke-[1.8]" />
          </button>

          {/* SHOPPING BAG WITH ONCLICK DRAWER OPEN */}
          <button
            onClick={() => setIsCartOpen(true)}
            aria-label="Rental Bag"
            className={`relative transition-colors duration-300 cursor-pointer p-1.5 active:scale-90 ${
              scrolled ? 'text-[#140103] hover:text-[#911322]' : 'text-[#FAF6F0] hover:text-[#D4AF37]'
            }`}
          >
            <ShoppingBag className="w-4 h-4 stroke-[1.8]" />
            <span className="absolute top-0 right-0 bg-[#D4AF37] text-[#140103] text-[9px] font-sans font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
              {totalItems}
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-1.5 rounded-md transition-colors ${
              scrolled ? 'text-[#140103]' : 'text-[#FAF6F0]'
            }`}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden border-b transition-all duration-300 px-6 py-6 space-y-4 shadow-xl ${
            scrolled
              ? 'bg-[#FDFBF7] border-[#D4AF37]/30 text-[#140103]'
              : 'bg-[#170104]/98 border-[#D4AF37]/25 text-[#FAF6F0] backdrop-blur-lg'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block font-sans text-xs uppercase tracking-[0.24em] py-2 border-b transition-colors ${
                scrolled
                  ? 'border-black/5 hover:text-[#911322]'
                  : 'border-white/5 hover:text-[#D4AF37]'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}