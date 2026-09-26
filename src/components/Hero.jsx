import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import padadaImg from '../assets/padada.jpg';
import logoImg from '../assets/shadiwale.png';
import heroBg from '../assets/herob.png';

export default function Hero() {
  const [stage, setStage] = useState('intro');

  useEffect(() => {
    const t1 = setTimeout(() => setStage('open_curtains'), 1600);
    const t2 = setTimeout(() => setStage('ready'), 3200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const cultureLetters = ['C', 'U', 'L', 'T', 'U', 'R', 'E'];

  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-[#140103] text-[#FAF6F0] overflow-hidden select-none font-serif flex items-center"
    >
      {/* STAGE 1: CREAM CANVAS WITH MANDALA */}
      <AnimatePresence>
        {stage === 'intro' && (
          <motion.div
            key="cream-canvas"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
            className="fixed inset-0 z-50 bg-[#FAF6F0] flex items-center justify-center pointer-events-none"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.22)_0%,transparent_70%)]" />
            <motion.div
              initial={{ scale: 0.6, rotate: 0, opacity: 0 }}
              animate={{ scale: 1.15, rotate: 90, opacity: 0.75 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="w-[240px] h-[240px] sm:w-[420px] sm:h-[420px] md:w-[500px] md:h-[500px] text-[#C5A059]/40"
            >
              <svg viewBox="0 0 200 200" className="w-full h-full fill-current">
                {[...Array(12)].map((_, i) => (
                  <circle
                    key={i}
                    cx={100 + 40 * Math.cos((i * 30 * Math.PI) / 180)}
                    cy={100 + 40 * Math.sin((i * 30 * Math.PI) / 180)}
                    r="15"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.8"
                  />
                ))}
                <circle cx="100" cy="100" r="54" fill="none" stroke="currentColor" strokeWidth="1" />
              </svg>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* STAGE 2: SPLIT CURTAINS */}
      <AnimatePresence>
        {stage !== 'ready' && (
          <div className="fixed inset-0 z-40 pointer-events-none flex">
            <motion.div
              className="relative w-1/2 h-full overflow-hidden"
              initial={{ x: '0%' }}
              animate={
                stage === 'open_curtains'
                  ? { x: '-102%', transition: { duration: 1.6, ease: [0.77, 0, 0.175, 1] } }
                  : { x: '0%' }
              }
            >
              <img
                src={padadaImg}
                alt="Curtain"
                className="w-[200%] max-w-none h-full object-cover object-left brightness-95"
              />
            </motion.div>

            <motion.div
              className="relative w-1/2 h-full overflow-hidden"
              initial={{ x: '0%' }}
              animate={
                stage === 'open_curtains'
                  ? { x: '102%', transition: { duration: 1.6, ease: [0.77, 0, 0.175, 1] } }
                  : { x: '0%' }
              }
            >
              <img
                src={padadaImg}
                alt="Curtain"
                className="w-[200%] max-w-none h-full object-cover object-right -ml-[100%] brightness-95"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* STAGE 3: FLYING LOGO */}
      <motion.div
        className="fixed z-50 pointer-events-auto cursor-pointer"
        initial={{ top: '50%', left: '50%', x: '-50%', y: '-50%', scale: 1.35, rotate: 0 }}
        animate={
          stage === 'intro'
            ? { top: '50%', left: '50%', x: '-50%', y: '-50%', scale: 1.5, rotate: 0, transition: { duration: 0.8 } }
            : {
                top: '16px',
                left: 'calc(max(20px, (100vw - 1280px) / 2 + 20px))',
                x: '0%',
                y: '0%',
                scale: 1,
                rotate: 360,
                transition: { duration: 1.3, ease: [0.65, 0, 0.35, 1] },
              }
        }
      >
        <a href="#home" className="flex items-center gap-2.5 h-10">
          <img src={logoImg} alt="Shadi Wale" className="h-8 sm:h-9 md:h-10 w-auto object-contain drop-shadow-md" />
        </a>
      </motion.div>

      {/* =========================================================
          HERO BACKGROUND — object-[66%_top] (COUPLE EXACT CENTER ON MOBILE)
          Laptop par lg:object-top (Mathu kadi nahi kapay)
          ========================================================= */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <img
          src={heroBg}
          alt="Editorial Wedding"
          className="w-full h-full object-cover object-[66%_top] sm:object-[center_top] lg:object-top"
        />
        {/* Crisp Shadow Gradients jethi mota text clear vachay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#140103]/85 via-[#140103]/40 to-transparent sm:from-[#140103]/60 sm:to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#140103]/85 via-transparent to-transparent sm:hidden pointer-events-none" />
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-10 md:px-16 pt-24 pb-12">
        <div className="max-w-2xl space-y-3 sm:space-y-4">
          <motion.p
            initial={{ opacity: 0, y: -15 }}
            animate={stage === 'open_curtains' || stage === 'ready' ? { opacity: 1, y: 0 } : { opacity: 0, y: -15 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[11px] sm:text-[12px] md:text-[13px] tracking-[0.32em] sm:tracking-[0.38em] text-[#FAF6F0] uppercase font-sans font-medium drop-shadow-md"
          >
            SAREES WOVEN WITH
          </motion.p>

          <div className="relative inline-block select-none pb-2 sm:pb-4 max-w-full">
            {/* MOTU BOLD "CULTURE" HEADING (Mobile: 54px, Laptop: 112px) */}
            <h1 className="flex text-[54px] sm:text-6xl md:text-7xl lg:text-[112px] font-normal tracking-[0.14em] sm:tracking-[0.14em] text-white uppercase leading-[0.95] drop-shadow-2xl font-['Cormorant_Garamond',serif]">
              {cultureLetters.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 35, filter: 'blur(6px)' }}
                  animate={
                    stage === 'open_curtains' || stage === 'ready'
                      ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                      : { opacity: 0, y: 35, filter: 'blur(6px)' }
                  }
                  transition={{ duration: 0.7, delay: 0.45 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </h1>

            {/* Flourish Wave Under E */}
            <div className="absolute -bottom-1 sm:-bottom-1.5 left-0 w-full sm:w-[105%] pointer-events-none overflow-visible">
              <svg viewBox="0 0 600 60" fill="none" className="w-full h-auto overflow-visible">
                <motion.path
                  d="M580 4 C540 18, 480 34, 380 32 C240 30, 140 10, 10 24"
                  stroke="url(#flourish-gold-gradient)"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={
                    stage === 'open_curtains' || stage === 'ready' ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }
                  }
                  transition={{ duration: 1.4, delay: 1, ease: [0.65, 0, 0.35, 1] }}
                />
                <motion.path
                  d="M570 12 C525 24, 460 39, 360 38 C220 36, 120 18, 25 32"
                  stroke="url(#flourish-white-gradient)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={
                    stage === 'open_curtains' || stage === 'ready' ? { pathLength: 1, opacity: 0.85 } : { pathLength: 0, opacity: 0 }
                  }
                  transition={{ duration: 1.3, delay: 1.2, ease: [0.65, 0, 0.35, 1] }}
                />
                <defs>
                  <linearGradient id="flourish-gold-gradient" x1="580" y1="4" x2="10" y2="24" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F9E8B2" />
                    <stop offset="0.6" stopColor="#D4AF37" />
                    <stop offset="1" stopColor="#FFFFFF" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="flourish-white-gradient" x1="570" y1="12" x2="25" y2="32" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#D4AF37" stopOpacity="0.9" />
                    <stop offset="0.7" stopColor="#FAF6F0" stopOpacity="0.7" />
                    <stop offset="1" stopColor="#FAF6F0" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={stage === 'open_curtains' || stage === 'ready' ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="text-[10px] sm:text-[11px] md:text-[12px] tracking-[0.24em] text-[#FAF6F0]/95 uppercase font-sans font-light drop-shadow-sm pt-0.5"
          >
            HEIRLOOM CRAFTS FOR MODERN STORIES
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={stage === 'open_curtains' || stage === 'ready' ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.7, delay: 1.3 }}
            className="pt-3 sm:pt-4"
          >
            <a
              href="#new-arrivals"
              className="inline-flex items-center gap-2.5 sm:gap-3 bg-[#FAF6F0] text-[#140103] font-sans text-xs uppercase tracking-[0.2em] font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full hover:bg-[#D4AF37] hover:text-black transition-all duration-300 shadow-xl cursor-pointer active:scale-95"
            >
              <span>Explore The Collection</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}