import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';

import flowerImg from '../assets/flower1.png';
import blueCornerImg from '../assets/bluecorner.png';

const arrivalItems = [
  {
    id: 1,
    category: 'FLORAL ORGANZA',
    name: 'Blush Rose Garden Drapes',
    price: '₹14,900',
    priceVal: 14900,
    image:
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 2,
    category: 'SHEER GEORGETTE',
    name: 'Pastel Sky Hand-Embroidered',
    price: '₹18,500',
    priceVal: 18500,
    image:
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 3,
    category: 'ROYAL BANARASI',
    name: 'Emerald Zari Temple Weave',
    price: '₹28,000',
    priceVal: 28000,
    image:
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 4,
    category: 'MIDNIGHT HERITAGE',
    name: 'Classic Floral Brocade Zardozi',
    price: '₹22,400',
    priceVal: 22400,
    image:
      'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=1000&q=85',
  },
];

export default function NewArrivals() {
  const { addToCart } = useCart();

  return (
    <section
      id="new-arrivals"
      className="relative z-10 w-full min-h-screen bg-[#F5EFEB] text-[#240307] pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-8 lg:px-10 xl:px-12 overflow-hidden select-none flex items-center justify-center"
    >
      {/* =========================================================
          TOP RIGHT CORNER FLOWER: ORIGINAL NATURAL DIRECTION + RICH OPACITY + ZERO OVERLAP
          ========================================================= */}
      <div className="absolute top-0 right-0 w-64 sm:w-80 md:w-96 lg:w-[460px] pointer-events-none -z-10 select-none opacity-80 sm:opacity-85 mix-blend-multiply overflow-hidden">
        <img
          src={flowerImg}
          alt="Royal Floral Garland Top Right"
          className="w-full h-auto object-contain object-top-right filter drop-shadow-[0_10px_24px_rgba(0,0,0,0.12)]"
        />
      </div>

      {/* Blue Corner Motif (Bottom Left) */}
      <div className="absolute -bottom-10 -left-10 w-44 sm:w-56 md:w-64 h-auto pointer-events-none z-0 select-none opacity-85">
        <img
          src={blueCornerImg}
          alt="Royal Blue Corner"
          className="w-full h-auto object-contain filter drop-shadow-[0_8px_20px_rgba(6,17,33,0.35)]"
        />
      </div>

      {/* Main Editorial Grid */}
      <div className="relative z-10 w-full max-w-[1780px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-start">
        
        {/* LEFT COLUMN: EDITORIAL CONTENT */}
        <div className="lg:col-span-4 xl:col-span-3 relative flex flex-col justify-start pt-0 pr-0 lg:pr-2">
          
          <div className="relative z-10 space-y-3.5 sm:space-y-4">
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.34em] sm:tracking-[0.38em] text-[#6E1423] font-bold"
            >
              NEW ARRIVALS
            </motion.p>

            <div className="relative inline-block pb-1">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-['Cormorant_Garamond',serif] text-[50px] sm:text-5xl lg:text-[54px] xl:text-[60px] text-[#420811] font-normal leading-[0.96] sm:leading-[1.02] tracking-tight sm:tracking-wide"
              >
                Fresh Styles, <br />
                <span className="italic font-light text-[#590B18]">Timeless Grace</span>
              </motion.h2>

              <div className="absolute -bottom-1 left-0 w-[102%] pointer-events-none overflow-visible">
                <svg viewBox="0 0 400 30" fill="none" className="w-full h-auto">
                  <motion.path
                    d="M5 14 C120 2, 260 26, 395 10"
                    stroke="url(#arrival-gold-stroke)"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.3, delay: 0.25, ease: [0.65, 0, 0.35, 1] }}
                  />
                  <defs>
                    <linearGradient id="arrival-gold-stroke" x1="5" y1="14" x2="395" y2="10" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#6E1423" stopOpacity="0.2" />
                      <stop offset="0.5" stopColor="#D4AF37" />
                      <stop offset="1" stopColor="#F5EFEB" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-sans text-[13px] text-[#381117]/85 font-light leading-relaxed tracking-wide max-w-sm pt-0.5"
            >
              Celebrate tradition with our new arrivals — crafted for every royal celebration.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2"
            >
              <a
                href="#categories"
                className="w-full sm:w-[240px] inline-flex items-center justify-center gap-3 bg-[#500813] hover:bg-[#680C1B] text-[#FAF6F0] font-sans text-xs uppercase tracking-[0.24em] font-medium py-4 sm:py-3.5 rounded-sm shadow-[0_4px_16px_rgba(80,8,19,0.22)] hover:shadow-[0_8px_24px_rgba(80,8,19,0.32)] transition-all duration-300 cursor-pointer"
              >
                <span>Discover New Arrivals</span>
                <ArrowRight className="w-4 h-4 stroke-[1.8]" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="pt-5 border-l-2 border-[#590B18]/30 pl-3.5 mt-2"
            >
              <div className="font-sans text-[10px] uppercase tracking-[0.38em] text-[#590B18]/90 leading-loose font-medium">
                <p>ANCIENT</p>
                <p>CRAFT</p>
                <p>MODERN</p>
                <p className="text-[#420811] font-bold">YOU</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* RIGHT COLUMN: 4 CARDS */}
        <div className="lg:col-span-8 xl:col-span-9 pt-0 mt-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 xl:gap-5 items-start">
            {arrivalItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                  ease: [0.25, 1, 0.5, 1],
                }}
                className="group flex flex-col cursor-pointer"
              >
                <div className="relative w-full h-[260px] sm:h-[360px] lg:h-[430px] xl:h-[450px] overflow-hidden bg-[#E2D8C7] shadow-sm border border-black/5 group-hover:border-[#D4AF37]/60 transition-all duration-500">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                </div>

                <div className="pt-2 sm:pt-2.5 pb-1 px-0.5 space-y-1">
                  <p className="font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#C43859] font-bold truncate">
                    {item.category}
                  </p>
                  <h3 className="font-['Cormorant_Garamond',serif] text-xs sm:text-sm lg:text-base font-normal text-[#240307] tracking-wide leading-snug truncate">
                    {item.name}
                  </h3>
                  
                  <div className="flex items-center justify-between pt-1">
                    <p className="font-sans text-[11px] sm:text-xs lg:text-sm font-semibold text-[#420811] tracking-wider">
                      {item.price}
                    </p>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(item);
                      }}
                      className="inline-flex items-center gap-1 bg-[#500813] hover:bg-[#680C1B] text-[#FAF6F0] px-2 sm:px-2.5 py-1 rounded-sm font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.14em] font-medium transition-all shadow-sm active:scale-95 cursor-pointer"
                    >
                      <Plus className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[2.5]" />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}