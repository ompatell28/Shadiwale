import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Plus, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

import urliImg from '../assets/urli.PNG';
import bsYellow from '../assets/haldi1.png';
import bsLavender from '../assets/mehndi1.png';
import bsPink from '../assets/vargodo1.png';
import bsGreen from '../assets/wedding1.jpeg';
import bsBlack from '../assets/garba1.png';
import flowerRightImg from '../assets/flowerright.png';

const bestSellerItems = [
  {
    id: 201,
    tag: 'YELLOW',
    category: 'ROYAL HALDI',
    name: 'Sunlit Chanderi Gold Zari Saree',
    price: '₹15,200',
    priceVal: 15200,
    image: bsYellow,
  },
  {
    id: 202,
    tag: 'LAVENDER',
    category: 'PASTEL TISSUE',
    name: 'Lilac Meadow Resham Drape',
    price: '₹17,800',
    priceVal: 17800,
    image: bsLavender,
  },
  {
    id: 203,
    tag: 'PINK',
    category: 'GULABI SILK',
    name: 'Rani Pink Temple Border Brocade',
    price: '₹21,500',
    priceVal: 21500,
    image: bsPink,
  },
  {
    id: 204,
    tag: 'GREEN',
    category: 'EMERALD HERITAGE',
    name: 'Forest Moss Handloom Banarasi',
    price: '₹26,000',
    priceVal: 26000,
    image: bsGreen,
  },
  {
    id: 205,
    tag: 'BLACK',
    category: 'MIDNIGHT VELVET',
    name: 'Nocturne Noir Zardozi Ensemble',
    price: '₹29,500',
    priceVal: 29500,
    image: bsBlack,
  },
];

const archVariants = {
  hidden: { opacity: 0, y: 40 },
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

export default function BestSellers() {
  const { addToCart } = useCart();

  const item1 = bestSellerItems[0];
  const item2 = bestSellerItems[1];
  const item3 = bestSellerItems[2];
  const item4 = bestSellerItems[3];
  const item5 = bestSellerItems[4];

  return (
    <section
      id="best-sellers"
      className="relative z-10 w-full bg-[#F5EFEB] text-[#240307] pt-14 lg:pt-18 pb-16 px-4 sm:px-8 lg:px-12 overflow-hidden select-none"
    >
      <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-52 sm:w-96 lg:w-[460px] xl:w-[520px] pointer-events-none z-0 select-none opacity-60 mix-blend-multiply">
        <img
          src={flowerRightImg}
          alt="Royal Floral Garland Right"
          className="w-full h-auto object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.08)]"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1850px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-8 items-start">
        
        {/* LEFT COLUMN: EDITORIAL */}
        <div className="lg:col-span-4 xl:col-span-3 flex flex-col justify-between self-stretch pr-0 lg:pr-4 pt-1">
          <div className="space-y-3 sm:space-y-4">
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.36em] sm:tracking-[0.42em] text-[#6E1423] font-bold"
            >
              OUR MOST LOVED
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-['Cormorant_Garamond',serif] text-[56px] sm:text-7xl lg:text-[70px] xl:text-[78px] text-[#420811] font-normal leading-[0.92] tracking-tight"
            >
              Best <br />
              <span className="italic font-light text-[#590B18]">Sellers</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-sans text-[13px] sm:text-sm text-[#381117]/85 font-light leading-relaxed tracking-wide max-w-sm pt-1"
            >
              The drapes you return to — chosen with love, worn into unforgettable memories.
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
                className="w-full sm:w-[230px] inline-flex items-center justify-center gap-3 bg-[#500813] hover:bg-[#680C1B] text-[#FAF6F0] font-sans text-xs uppercase tracking-[0.24em] font-medium py-4 rounded-sm shadow-[0_4px_16px_rgba(80,8,19,0.22)] hover:shadow-[0_8px_24px_rgba(80,8,19,0.32)] transition-all duration-300 cursor-pointer"
              >
                <span>Explore All</span>
                <ArrowRight className="w-4 h-4 stroke-[1.8]" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="my-5 pt-4 pb-3.5 border-l-2 border-[#590B18]/30 pl-3.5 space-y-1.5 bg-[#F0E8E1]/40 rounded-r-sm pr-2"
          >
            <div className="flex items-center gap-2 text-[#590B18]">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="font-sans text-[10px] uppercase tracking-[0.26em] font-bold">
                Royal Craftsmanship
              </span>
            </div>
            <p className="font-sans text-[11.5px] text-[#381117]/80 leading-relaxed font-light">
              Each bridal piece is handwoven by master artisans using authentic antique zari, tested for seamless rental drape.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-2 flex flex-col items-start gap-2"
          >
            <div className="w-32 sm:w-44 lg:w-48 h-auto pointer-events-none select-none">
              <img
                src={urliImg}
                alt="Brass Urli with Rose Petals"
                className="w-full h-auto object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.12)]"
              />
            </div>
            <p className="font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.28em] text-[#590B18]/75 font-medium leading-relaxed">
              MORE THAN A DRAPE — <br />
              <span className="text-[#420811] font-semibold">AN HEIRLOOM IN TIME</span>
            </p>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: PROPORTIONATE BENTO GRID */}
        <div className="lg:col-span-8 xl:col-span-9 w-full">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5 items-start">
            
            {/* 1. MOTO FEATURED CARD (Yellow Haldi) */}
            <motion.div
              custom={0}
              variants={archVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="row-span-2 col-span-1 group flex flex-col cursor-pointer"
            >
              <div className="pb-1 text-center">
                <span className="font-sans text-[9px] uppercase tracking-[0.24em] text-[#590B18]/80 font-bold">
                  {item1.tag}
                </span>
              </div>

              {/* Moto Frame (Side ma 2 mota thaya e pramane proportionate) */}
              <div className="relative w-full h-[475px] sm:h-[545px] lg:h-[440px] xl:h-[480px] overflow-hidden rounded-t-[100px] sm:rounded-t-[140px] bg-[#E2D8C7] shadow-sm border border-black/5 group-hover:border-[#D4AF37]/80 transition-all duration-500">
                <img
                  src={item1.image}
                  alt={item1.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  loading="lazy"
                />
              </div>

              <div className="pt-2 pb-1 px-1 space-y-0.5">
                <p className="font-sans text-[8.5px] uppercase tracking-[0.18em] text-[#C43859] font-bold truncate">
                  {item1.category}
                </p>
                <h3 className="font-['Cormorant_Garamond',serif] text-xs sm:text-[13.5px] font-normal text-[#240307] tracking-wide leading-snug truncate">
                  {item1.name}
                </h3>
                <div className="flex items-center justify-between pt-1">
                  <p className="font-sans text-[11px] sm:text-xs font-semibold text-[#420811] tracking-wider">
                    {item1.price}
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(item1);
                    }}
                    className="inline-flex items-center gap-1 bg-[#500813] hover:bg-[#680C1B] text-[#FAF6F0] px-2 py-0.5 rounded-sm font-sans text-[8.5px] uppercase tracking-[0.1em] font-medium transition-all shadow-sm active:scale-95 cursor-pointer"
                  >
                    <Plus className="w-2.5 h-2.5" />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* 2. NANO CARD 1 (Top-Right: Lavender) - MOTA KARYA */}
            <motion.div
              custom={1}
              variants={archVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="col-span-1 group flex flex-col cursor-pointer"
            >
              <div className="pb-1 text-center">
                <span className="font-sans text-[8.5px] uppercase tracking-[0.24em] text-[#590B18]/80 font-bold">
                  {item2.tag}
                </span>
              </div>
              <div className="relative w-full h-[225px] sm:h-[260px] lg:h-[440px] xl:h-[480px] overflow-hidden rounded-t-[80px] sm:rounded-t-[100px] lg:rounded-t-[140px] bg-[#E2D8C7] shadow-sm border border-black/5 group-hover:border-[#D4AF37]/80 transition-all duration-500">
                <img
                  src={item2.image}
                  alt={item2.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  loading="lazy"
                />
              </div>
              <div className="pt-1.5 pb-1 px-0.5 space-y-0.5">
                <p className="font-sans text-[7.5px] sm:text-[8.5px] uppercase tracking-[0.16em] text-[#C43859] font-bold truncate">
                  {item2.category}
                </p>
                <h3 className="font-['Cormorant_Garamond',serif] text-[11px] sm:text-xs font-normal text-[#240307] truncate">
                  {item2.name}
                </h3>
                <div className="flex items-center justify-between pt-0.5">
                  <p className="font-sans text-[10.5px] sm:text-xs font-semibold text-[#420811]">
                    {item2.price}
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(item2);
                    }}
                    className="inline-flex items-center gap-0.5 bg-[#500813] hover:bg-[#680C1B] text-[#FAF6F0] px-1.5 py-0.5 rounded-sm font-sans text-[8px] uppercase font-medium shadow-sm active:scale-95"
                  >
                    <Plus className="w-2.5 h-2.5" />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* 3. NANO CARD 2 (Middle-Right: Pink) - MOTA KARYA */}
            <motion.div
              custom={2}
              variants={archVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="col-span-1 group flex flex-col cursor-pointer"
            >
              <div className="pb-1 text-center">
                <span className="font-sans text-[8.5px] uppercase tracking-[0.24em] text-[#590B18]/80 font-bold">
                  {item3.tag}
                </span>
              </div>
              <div className="relative w-full h-[225px] sm:h-[260px] lg:h-[440px] xl:h-[480px] overflow-hidden rounded-t-[80px] sm:rounded-t-[100px] lg:rounded-t-[140px] bg-[#E2D8C7] shadow-sm border border-black/5 group-hover:border-[#D4AF37]/80 transition-all duration-500">
                <img
                  src={item3.image}
                  alt={item3.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  loading="lazy"
                />
              </div>
              <div className="pt-1.5 pb-1 px-0.5 space-y-0.5">
                <p className="font-sans text-[7.5px] sm:text-[8.5px] uppercase tracking-[0.16em] text-[#C43859] font-bold truncate">
                  {item3.category}
                </p>
                <h3 className="font-['Cormorant_Garamond',serif] text-[11px] sm:text-xs font-normal text-[#240307] truncate">
                  {item3.name}
                </h3>
                <div className="flex items-center justify-between pt-0.5">
                  <p className="font-sans text-[10.5px] sm:text-xs font-semibold text-[#420811]">
                    {item3.price}
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(item3);
                    }}
                    className="inline-flex items-center gap-0.5 bg-[#500813] hover:bg-[#680C1B] text-[#FAF6F0] px-1.5 py-0.5 rounded-sm font-sans text-[8px] uppercase font-medium shadow-sm active:scale-95"
                  >
                    <Plus className="w-2.5 h-2.5" />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* 4. BOTTOM-LEFT CARD (Green Banarasi) - MOTA KARYA */}
            <motion.div
              custom={3}
              variants={archVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="col-span-1 group flex flex-col cursor-pointer mt-1 sm:mt-0"
            >
              <div className="pb-1 text-center">
                <span className="font-sans text-[8.5px] uppercase tracking-[0.24em] text-[#590B18]/80 font-bold">
                  {item4.tag}
                </span>
              </div>
              <div className="relative w-full h-[225px] sm:h-[260px] lg:h-[440px] xl:h-[480px] overflow-hidden rounded-t-[80px] sm:rounded-t-[110px] lg:rounded-t-[140px] bg-[#E2D8C7] shadow-sm border border-black/5 group-hover:border-[#D4AF37]/80 transition-all duration-500">
                <img
                  src={item4.image}
                  alt={item4.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  loading="lazy"
                />
              </div>
              <div className="pt-2 pb-1 px-0.5 space-y-0.5">
                <p className="font-sans text-[8px] sm:text-[8.5px] uppercase tracking-[0.16em] text-[#C43859] font-bold truncate">
                  {item4.category}
                </p>
                <h3 className="font-['Cormorant_Garamond',serif] text-xs font-normal text-[#240307] truncate">
                  {item4.name}
                </h3>
                <div className="flex items-center justify-between pt-0.5">
                  <p className="font-sans text-[10.5px] sm:text-xs font-semibold text-[#420811]">
                    {item4.price}
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(item4);
                    }}
                    className="inline-flex items-center gap-0.5 bg-[#500813] hover:bg-[#680C1B] text-[#FAF6F0] px-1.5 py-0.5 rounded-sm font-sans text-[8px] uppercase font-medium shadow-sm active:scale-95"
                  >
                    <Plus className="w-2.5 h-2.5" />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* 5. BOTTOM-RIGHT CARD (Midnight Velvet Black) - MOTA KARYA */}
            <motion.div
              custom={4}
              variants={archVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="col-span-1 group flex flex-col cursor-pointer mt-1 sm:mt-0"
            >
              <div className="pb-1 text-center">
                <span className="font-sans text-[8.5px] uppercase tracking-[0.24em] text-[#590B18]/80 font-bold">
                  {item5.tag}
                </span>
              </div>
              <div className="relative w-full h-[225px] sm:h-[260px] lg:h-[440px] xl:h-[480px] overflow-hidden rounded-t-[80px] sm:rounded-t-[110px] lg:rounded-t-[140px] bg-[#E2D8C7] shadow-sm border border-black/5 group-hover:border-[#D4AF37]/80 transition-all duration-500">
                <img
                  src={item5.image}
                  alt={item5.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  loading="lazy"
                />
              </div>
              <div className="pt-2 pb-1 px-0.5 space-y-0.5">
                <p className="font-sans text-[8px] sm:text-[8.5px] uppercase tracking-[0.16em] text-[#C43859] font-bold truncate">
                  {item5.category}
                </p>
                <h3 className="font-['Cormorant_Garamond',serif] text-xs font-normal text-[#240307] truncate">
                  {item5.name}
                </h3>
                <div className="flex items-center justify-between pt-0.5">
                  <p className="font-sans text-[10.5px] sm:text-xs font-semibold text-[#420811]">
                    {item5.price}
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(item5);
                    }}
                    className="inline-flex items-center gap-0.5 bg-[#500813] hover:bg-[#680C1B] text-[#FAF6F0] px-1.5 py-0.5 rounded-sm font-sans text-[8px] uppercase font-medium shadow-sm active:scale-95"
                  >
                    <Plus className="w-2.5 h-2.5" />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}