import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';

import flower2Img from '../assets/flower2.png';

import haldi from '../assets/haldi1.png';
import mehndi from '../assets/mehndi1.png';
import garba from '../assets/garba1.png';
import vargodo from '../assets/vargodo1.png';
import wedding from '../assets/wedding1.jpeg';

const occasionCategories = [
  { id: 'all', label: 'All Collections' },
  { id: 'haldi', label: 'Haldi Radiance' },
  { id: 'mehendi', label: 'Mehendi Greens' },
  { id: 'sangeet', label: 'Sangeet & Garba' },
  { id: 'vargoda', label: 'Vargoda / Barat' },
  { id: 'wedding', label: 'Mandap Wedding' },
];

const rentalOutfits = [
  {
    id: 101,
    occasion: 'haldi',
    category: 'HALDI SPECIAL',
    name: 'Mustard Organza Resham Drapes',
    price: '₹12,500',
    priceVal: 12500,
    image: haldi,
  },
  {
    id: 102,
    occasion: 'mehendi',
    category: 'MEHENDI RITUAL',
    name: 'Emerald Chanderi Gota Patti Skirt',
    price: '₹16,800',
    priceVal: 16800,
    image: mehndi,
  },
  {
    id: 103,
    occasion: 'sangeet',
    category: 'GARBA & SANGEET',
    name: 'Royal Midnight Mirror Silk Ghaghra',
    price: '₹24,500',
    priceVal: 24500,
    image: garba,
  },
  {
    id: 104,
    occasion: 'vargoda',
    category: 'ROYAL BARAT',
    name: 'Imperial Brocade Gold Sherwani Set',
    price: '₹27,500',
    priceVal: 27500,
    image: vargodo,
  },
  {
    id: 105,
    occasion: 'wedding',
    category: 'ROYAL MANDAP',
    name: 'Crimson Velvet Zardozi Heirloom Saree',
    price: '₹32,000',
    priceVal: 32000,
    image: wedding,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

/* =========================================================
   ALL-IN-ONE OVERLAY OCCASION CARD:
   - Nana cards mota karya: h-[235px] sm:h-[265px]
   - Moto card proportionate: h-[482px] sm:h-[542px]
   - Laptop par: lg:h-[400px] xl:h-[430px] (Untouched)
   ========================================================= */
function OccasionOverlayCard({ item, index, addToCart, isBig = false }) {
  return (
    <motion.div
      layout
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className={`group relative flex flex-col justify-end cursor-pointer overflow-hidden bg-[#E2D8C7] shadow-[0_10px_30px_rgba(36,3,7,0.12)] border border-black/5 group-hover:border-[#D4AF37]/70 transition-all duration-500 ${
        isBig
          ? 'row-span-2 lg:row-span-1 h-[482px] sm:h-[542px] lg:h-[400px] xl:h-[430px]'
          : 'h-[235px] sm:h-[265px] lg:h-[400px] xl:h-[430px]'
      }`}
    >
      {/* Background Image */}
      <img
        src={item.image}
        alt={item.name}
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        loading="lazy"
      />

      {/* Dark Vignette Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

      {/* Details Inside Card */}
      <div className="relative z-10 p-3 sm:p-4 lg:p-4 space-y-1">
        <p className="font-sans text-[8px] sm:text-[9.5px] uppercase tracking-[0.22em] text-[#F0C8C8] font-bold">
          {item.category}
        </p>

        <h3 className="font-['Cormorant_Garamond',serif] text-xs sm:text-sm lg:text-base font-normal text-white tracking-wide leading-snug line-clamp-2">
          {item.name}
        </h3>

        <div className="flex items-center justify-between pt-1 sm:pt-1.5">
          <p className="font-sans text-[11px] sm:text-xs lg:text-sm font-semibold text-white tracking-wider">
            {item.price} <span className="text-[8.5px] sm:text-[9px] font-normal text-white/70">/ 3D</span>
          </p>

          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(item);
            }}
            className="inline-flex items-center gap-1 bg-[#500813] hover:bg-[#680C1B] text-[#FAF6F0] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-sm font-sans text-[8.5px] sm:text-[9px] uppercase tracking-[0.12em] font-medium transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            <Plus className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[2.5]" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Occasions() {
  const [activeTab, setActiveTab] = useState('all');
  const { addToCart } = useCart();

  const filteredItems =
    activeTab === 'all'
      ? rentalOutfits
      : rentalOutfits.filter((item) => item.occasion === activeTab);

  const showBento = activeTab === 'all' && filteredItems.length === 5;

  return (
    <section
      id="categories"
      className="relative w-full min-h-screen bg-[#F5EFEB] text-[#240307] pt-14 lg:pt-18 pb-20 px-4 sm:px-6 lg:px-10 overflow-hidden select-none"
    >
      {/* Background Flower 2 */}
      <div className="absolute top-0 left-0 w-56 sm:w-80 md:w-[420px] lg:w-[480px] xl:w-[520px] pointer-events-none z-0 select-none opacity-60 mix-blend-multiply">
        <img
          src={flower2Img}
          alt="Hanging Floral Branch"
          className="w-full h-auto object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.06)]"
        />
      </div>

      <div className="relative z-20 w-full max-w-[1850px] mx-auto flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center space-y-2.5 max-w-4xl px-4 pt-2">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.38em] text-[#6E1423] font-semibold"
          >
            — OUR RENTAL COLLECTIONS —
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-['Cormorant_Garamond',serif] text-3xl sm:text-5xl lg:text-6xl xl:text-[62px] font-normal tracking-wide uppercase leading-tight whitespace-normal sm:whitespace-nowrap"
          >
            <span className="text-[#420811]">ATTIRE </span>
            <span className="italic font-light text-[#9E7A31] lowercase font-serif">by </span>
            <span className="text-[#6E1423]">OCCASION</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans text-[11px] sm:text-sm text-[#381117]/75 font-light tracking-wider italic pt-0.5 px-2"
          >
            "Every ritual has its own grace — every ensemble its own royal story."
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mt-6 mb-11 px-2"
        >
          {occasionCategories.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-3 sm:px-5 py-1.5 sm:py-2 rounded-sm font-sans text-[9px] sm:text-xs uppercase tracking-[0.14em] sm:tracking-[0.18em] font-medium transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#500813] text-[#FAF6F0] shadow-md border border-[#D4AF37]/40'
                    : 'bg-white/75 hover:bg-[#500813]/10 text-[#420811]/80 hover:text-[#500813] border border-black/5'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </motion.div>

        {/* GRID */}
        <div className="w-full">
          {showBento ? (
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 xl:gap-4 items-start">
              <AnimatePresence mode="popLayout">
                <OccasionOverlayCard
                  key={filteredItems[0].id}
                  item={filteredItems[0]}
                  index={0}
                  addToCart={addToCart}
                  isBig={true}
                />
                {filteredItems.slice(1).map((item, i) => (
                  <OccasionOverlayCard
                    key={item.id}
                    item={item}
                    index={i + 1}
                    addToCart={addToCart}
                    isBig={false}
                  />
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 xl:gap-4 items-start">
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item, index) => (
                  <OccasionOverlayCard
                    key={item.id}
                    item={item}
                    index={index}
                    addToCart={addToCart}
                    isBig={false}
                  />
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}