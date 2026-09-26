import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Sparkles } from 'lucide-react';

export default function Contact() {
  const showroomImg =
    'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=85';

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://facebook.com/sadiwale',
      bgColor: 'bg-[#1877F2]',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/sadiwale',
      bgColor: 'bg-[#E1306C]',
      icon: (
        <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
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
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/@sadiwale',
      bgColor: 'bg-[#FF0000]',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/919876543210?text=Hello%20Sadi%20Wale%2C%20I%20want%20to%20inquire%20about%20rental%20outfits',
      bgColor: 'bg-[#25D366]',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="relative z-10 w-full min-h-screen bg-[#F5EFEB] text-[#240307] pt-16 lg:pt-20 pb-20 px-4 sm:px-8 lg:px-12 select-none overflow-hidden"
    >
      {/* =========================================================
          BG ASSET 1: LEFT-SIDE HALF CIRCLE MANDALA
          ========================================================= */}
      <div className="absolute top-1/2 -left-36 sm:-left-44 -translate-y-1/2 w-80 sm:w-[440px] h-80 sm:h-[440px] pointer-events-none -z-10 select-none opacity-40">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.18)_0%,transparent_75%)]" />

          <svg viewBox="0 0 200 200" className="w-full h-full fill-none stroke-[#9E7A31]/50">
            {[...Array(24)].map((_, i) => (
              <circle
                key={`outer-${i}`}
                cx={100 + 72 * Math.cos((i * 15 * Math.PI) / 180)}
                cy={100 + 72 * Math.sin((i * 15 * Math.PI) / 180)}
                r="10"
                strokeWidth="0.6"
              />
            ))}
            {[...Array(12)].map((_, i) => (
              <path
                key={`leaf-${i}`}
                d={`M 100 100 Q ${100 + 45 * Math.cos(((i * 30 - 15) * Math.PI) / 180)} ${
                  100 + 45 * Math.sin(((i * 30 - 15) * Math.PI) / 180)
                } ${100 + 55 * Math.cos((i * 30 * Math.PI) / 180)} ${
                  100 + 55 * Math.sin((i * 30 * Math.PI) / 180)
                } Q ${100 + 45 * Math.cos(((i * 30 + 15) * Math.PI) / 180)} ${
                  100 + 45 * Math.sin(((i * 30 + 15) * Math.PI) / 180)
                } 100 100`}
                strokeWidth="0.7"
              />
            ))}
            <circle cx="100" cy="100" r="54" strokeWidth="0.8" strokeDasharray="3 2" />
            <circle cx="100" cy="100" r="38" strokeWidth="0.7" />
            <circle cx="100" cy="100" r="22" strokeWidth="0.9" />
            <circle cx="100" cy="100" r="6" fill="#9E7A31" fillOpacity="0.4" />
          </svg>
        </div>
      </div>

      {/* =========================================================
          BG ASSET 2: BOTTOM RIGHT CORNER GOLD MOTIF
          ========================================================= */}
      <div className="absolute -bottom-10 -right-10 w-52 sm:w-72 h-auto pointer-events-none -z-10 select-none opacity-30">
        <svg viewBox="0 0 200 200" fill="none" stroke="#D4AF37" strokeWidth="1.2" className="w-full h-auto">
          <path d="M50 180 C80 140, 110 110, 170 80" strokeLinecap="round" />
          <path d="M120 120 C140 100, 180 120, 190 90 C200 60, 170 50, 150 70 C130 90, 110 110, 120 120 Z" />
          <path d="M80 150 C95 130, 125 140, 135 120 C145 100, 125 90, 110 105 Z" />
          <circle cx="160" cy="80" r="10" strokeDasharray="2 2" />
          <circle cx="120" cy="115" r="6" strokeDasharray="2 2" />
        </svg>
      </div>

      <div className="max-w-[1720px] mx-auto space-y-8 lg:space-y-12">
        {/* HEADER: DUAL TONE ROYAL CLOTHING HEADLINE */}
        <div className="text-center space-y-3 max-w-3xl mx-auto px-4">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.38em] text-[#6E1423] font-semibold"
          >
            — BESPOKE BRIDAL ATELIER —
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl lg:text-[56px] font-normal tracking-wide leading-tight"
          >
            <span className="text-[#420811]">Experience Our </span>
            <span className="italic font-light text-[#9E7A31] font-serif">Heritage Atelier</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans text-xs sm:text-[13px] text-[#381117]/75 font-light leading-relaxed tracking-wide"
          >
            Step into our sanctuary of royal silks and heritage sherwanis. Experience private trial sessions, custom bridal fitting, and effortless luxury rental drapes.
          </motion.p>
        </div>

        {/* RESPONSIVE LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-stretch">
          
          {/* SHOWROOM IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative w-full h-[320px] sm:h-[400px] lg:h-full min-h-[320px] lg:min-h-[580px] rounded-2xl overflow-hidden shadow-[0_12px_35px_rgba(36,3,7,0.12)] border border-[#D4AF37]/30 group"
          >
            <img
              src={showroomImg}
              alt="Sadi Wale Luxury Bridal Showroom"
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#140103]/90 via-[#140103]/30 to-transparent pointer-events-none" />

            <div className="absolute top-4 left-4 bg-[#FAF6F0]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#D4AF37]/40 shadow-md flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#9E7A31]" />
              <span className="font-sans text-[10px] uppercase tracking-[0.22em] text-[#420811] font-semibold">
                Flagship Studio
              </span>
            </div>

            <div className="absolute bottom-5 left-5 right-5 space-y-1 text-white">
              <p className="font-sans text-[9px] uppercase tracking-[0.28em] text-[#F0C8C8] font-bold">
                PRIVATE BRIDAL LOUNGE
              </p>
              <h3 className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl font-normal text-[#FAF6F0] leading-snug">
                Sadi Wale Royal Experience Store
              </h3>
              <p className="font-sans text-[11px] text-white/80 font-light pt-0.5">
                Pre-book trial suites for brides, grooms &amp; wedding entourage.
              </p>
            </div>
          </motion.div>

          {/* RIGHT: CONTACT DETAILS CARDS */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4 sm:space-y-4">
            
            {/* Card 1: Studio 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/90 backdrop-blur-sm p-4 sm:p-5 rounded-xl border border-[#D4AF37]/25 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
            >
              <div className="p-2.5 rounded-lg bg-[#500813]/10 text-[#500813] mt-0.5 shrink-0">
                <MapPin className="w-5 h-5 stroke-[1.8]" />
              </div>
              <div className="space-y-1 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="font-['Cormorant_Garamond',serif] text-lg sm:text-xl font-normal text-[#420811]">
                    Studio 1 • Flagship Bridal Atelier
                  </h4>
                  <span className="bg-[#500813]/10 text-[#6E1423] text-[9.5px] uppercase font-sans font-semibold px-2 py-0.5 rounded-full tracking-wider">
                    Main Store
                  </span>
                </div>
                <p className="font-sans text-xs sm:text-[13px] text-[#240307]/80 font-light leading-relaxed">
                  7-8-9, Ground Floor, Heritage Silk Enclave, Near Palace Road, CG Road, Ahmedabad — 380009
                </p>
              </div>
            </motion.div>

            {/* Card 2: Studio 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/90 backdrop-blur-sm p-4 sm:p-5 rounded-xl border border-[#D4AF37]/25 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
            >
              <div className="p-2.5 rounded-lg bg-[#500813]/10 text-[#500813] mt-0.5 shrink-0">
                <MapPin className="w-5 h-5 stroke-[1.8]" />
              </div>
              <div className="space-y-1 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="font-['Cormorant_Garamond',serif] text-lg sm:text-xl font-normal text-[#420811]">
                    Studio 2 • Groom Sherwani Boutique
                  </h4>
                  <span className="bg-[#9E7A31]/15 text-[#9E7A31] text-[9.5px] uppercase font-sans font-semibold px-2 py-0.5 rounded-full tracking-wider">
                    Branch 2
                  </span>
                </div>
                <p className="font-sans text-xs sm:text-[13px] text-[#240307]/80 font-light leading-relaxed">
                  Shop No. 14, Royal Titanium Square, Thaltej Cross Road, SG Highway, Ahmedabad — 380054
                </p>
              </div>
            </motion.div>

            {/* Card 3: Phone & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/90 backdrop-blur-sm p-4 sm:p-5 rounded-xl border border-[#D4AF37]/25 shadow-sm flex items-center gap-3.5"
              >
                <div className="p-2.5 rounded-lg bg-[#500813]/10 text-[#500813] shrink-0">
                  <Phone className="w-4 h-4 stroke-[1.8]" />
                </div>
                <div>
                  <p className="font-sans text-[9px] uppercase tracking-[0.24em] text-[#6E1423] font-bold">
                    RENTAL CONCIERGE
                  </p>
                  <a
                    href="tel:+919876543210"
                    className="font-sans text-xs sm:text-sm font-semibold text-[#420811] hover:text-[#911322] transition-colors pt-0.5 block"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="bg-white/90 backdrop-blur-sm p-4 sm:p-5 rounded-xl border border-[#D4AF37]/25 shadow-sm flex items-center gap-3.5"
              >
                <div className="p-2.5 rounded-lg bg-[#500813]/10 text-[#500813] shrink-0">
                  <Mail className="w-4 h-4 stroke-[1.8]" />
                </div>
                <div>
                  <p className="font-sans text-[9px] uppercase tracking-[0.24em] text-[#6E1423] font-bold">
                    ATELIER EMAIL
                  </p>
                  <a
                    href="mailto:concierge@sadiwale.com"
                    className="font-sans text-xs sm:text-sm font-semibold text-[#420811] hover:text-[#911322] transition-colors pt-0.5 block truncate max-w-[190px]"
                  >
                    concierge@sadiwale.com
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Card 4: Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/90 backdrop-blur-sm p-4 sm:p-5 rounded-xl border border-[#D4AF37]/25 shadow-sm flex items-center justify-between flex-wrap gap-3"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#500813]/10 text-[#500813] shrink-0">
                  <Clock className="w-4 h-4 stroke-[1.8]" />
                </div>
                <div>
                  <p className="font-sans text-[9px] uppercase tracking-[0.24em] text-[#6E1423] font-bold">
                    STUDIO HOURS
                  </p>
                  <p className="font-sans text-xs sm:text-[13px] text-[#240307]/80 font-light">
                    Monday — Sunday
                  </p>
                </div>
              </div>
              <div className="bg-[#FAF7F2] border border-[#D4AF37]/30 px-3.5 py-1.5 rounded-md font-sans text-xs font-semibold text-[#420811]">
                10:30 AM — 8:30 PM
              </div>
            </motion.div>

            {/* Card 5: Follow Us (Active Working Social Links) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="pt-2 flex items-center justify-between flex-wrap gap-3 px-1"
            >
              <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#590B18]/80 font-semibold">
                FOLLOW OUR ROYAL STORIES
              </p>

              <div className="flex items-center gap-2.5">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`w-8 h-8 rounded-full ${social.bgColor} text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-sm cursor-pointer`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}