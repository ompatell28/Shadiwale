import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ExternalLink, Sparkles } from 'lucide-react';
import logoImg from '../assets/shadiwale.PNG';
import shadiwaleT from '../assets/shadiwaleT.PNG';

export default function Footer() {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'New Arrivals', href: '#new-arrivals' },
    { name: 'Rental Categories', href: '#categories' },
    { name: 'Best Sellers', href: '#best-sellers' },
    { name: 'Visit Atelier', href: '#contact' },
    { name: 'Bridal Trial Booking', href: '#contact' },
    { name: 'Rental Policy & Care', href: '#contact' },
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://facebook.com/sadiwale',
      bgColor: 'bg-[#1877F2]',
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/sadiwale',
      bgColor: 'bg-[#E1306C]',
      icon: (
        <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      name: 'Pinterest',
      href: 'https://pinterest.com/sadiwale',
      bgColor: 'bg-[#BD081C]',
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/@sadiwale',
      bgColor: 'bg-[#FF0000]',
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/919876543210?text=Hello%20Sadi%20Wale%2C%20I%20want%20to%20know%20more%20about%20your%20collection',
      bgColor: 'bg-[#25D366]',
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="w-full bg-[#120103] text-[#FAF6F0] border-t border-[#D4AF37]/30 select-none overflow-hidden font-serif">
      {/* Golden accent top line */}
      <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />

      <div className="max-w-[1720px] mx-auto px-5 sm:px-10 lg:px-14 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-10 items-start">
          
          {/* =========================================================
              BHAG 1: ABOUT SADI WALE (SPIN LOGO + TYPOGRAPHY + CONTACT)
              ========================================================= */}
          <div className="lg:col-span-4 space-y-5">
            {/* Dual Logos: Rotating Royal Mandala Motif + Shadiwale Typography */}
            <div className="flex items-center gap-3.5">
              <motion.img
                src={logoImg}
                alt="Sadi Wale Emblem"
                className="w-10 h-10 object-contain drop-shadow-[0_2px_8px_rgba(212,175,55,0.4)]"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              />
              <img
                src={shadiwaleT}
                alt="Sadi Wale Typography"
                className="h-7 w-auto object-contain brightness-110 drop-shadow-md"
              />
            </div>

            <p className="font-sans text-[11px] uppercase tracking-[0.28em] text-[#D4AF37] font-semibold">
              ABOUT SADI WALE
            </p>

            <p className="font-sans text-xs sm:text-[13px] text-[#FAF6F0]/80 font-light leading-relaxed max-w-sm">
              7-8-9, Ground Floor, Heritage Silk Enclave, Near Palace Road, CG Road, Ahmedabad — 380009.
            </p>

            <div className="space-y-1.5 font-sans text-xs sm:text-[13px] text-[#FAF6F0]/90">
              <p>
                <span className="text-[#D4AF37] font-medium">Phone:</span>{' '}
                <a href="tel:+919876543210" className="hover:text-[#D4AF37] transition-colors">
                  +91 98765 43210
                </a>
              </p>
              <p>
                <span className="text-[#D4AF37] font-medium">Email:</span>{' '}
                <a href="mailto:concierge@sadiwale.com" className="hover:text-[#D4AF37] transition-colors">
                  concierge@sadiwale.com
                </a>
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className={`w-7 h-7 rounded-full ${s.bgColor} text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-sm`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* =========================================================
              BHAG 2: QUICK INFORMATION & NAV LINKS
              ========================================================= */}
          <div className="lg:col-span-3 space-y-4">
            <p className="font-sans text-[11px] uppercase tracking-[0.28em] text-[#D4AF37] font-semibold">
              INFORMATION
            </p>

            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-sans text-xs sm:text-[13px] text-[#FAF6F0]/75 hover:text-[#D4AF37] transition-colors inline-flex items-center gap-2"
                  >
                    <span className="text-[#D4AF37] text-xs">&gt;</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* =========================================================
              BHAG 3: FIND US ON MAP (WITH OPEN IN MAPS BUTTON)
              ========================================================= */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between">
              <p className="font-sans text-[11px] uppercase tracking-[0.28em] text-[#D4AF37] font-semibold">
                FIND US ON MAP
              </p>
              <span className="font-sans text-[10px] text-[#FAF6F0]/60 tracking-wider">
                AHMEDABAD ATELIER
              </span>
            </div>

            {/* Map Container */}
            <div className="relative w-full h-[210px] sm:h-[230px] rounded-xl overflow-hidden border border-[#D4AF37]/35 shadow-lg group">
              <iframe
                title="Sadi Wale Atelier Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14686.848834927237!2d72.5539!3d23.0338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f55a123456%3A0xabcdef1234567890!2sC.G.%20Road%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 filter contrast-[1.05] brightness-95 group-hover:brightness-100 transition-all duration-300"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating "Open in Maps" Pill Button (reference style) */}
              <a
                href="https://maps.google.com/?q=CG+Road+Ahmedabad"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 left-3 bg-[#FAF6F0]/95 hover:bg-white text-[#140103] font-sans text-[10px] font-semibold px-3 py-1.5 rounded-md shadow-md border border-black/10 flex items-center gap-1.5 backdrop-blur-sm transition-all duration-200 active:scale-95"
              >
                <span>Open in Maps</span>
                <ExternalLink className="w-3 h-3 stroke-[2]" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Sub-bar */}
        <div className="mt-12 pt-6 border-t border-[#D4AF37]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="font-sans text-[10.5px] uppercase tracking-[0.24em] text-[#FAF6F0]/50">
            &copy; 2026 Sadi Wale. All Rights Reserved. Royal Bridal Attire Rental.
          </p>
          <div className="flex items-center gap-2 text-[#D4AF37]">
            <Sparkles className="w-3 h-3" />
            <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-[#FAF6F0]/65 font-medium">
              Handcrafted Royal Traditions
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}