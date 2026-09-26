import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    totalItems,
    totalPrice,
  } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden font-serif">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          />

          {/* Slide-over Panel from Right */}
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="w-screen max-w-md bg-[#FAF7F2] text-[#1E0407] flex flex-col shadow-2xl border-l border-[#D4AF37]/30"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-[#D4AF37]/20 bg-[#F5EFEB]">
                <div className="flex items-center gap-2.5">
                  <ShoppingBag className="w-5 h-5 text-[#500813]" />
                  <h2 className="font-['Cormorant_Garamond',serif] text-2xl font-medium tracking-wide text-[#420811]">
                    Your Rental Bag ({totalItems})
                  </h2>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-1.5 rounded-full hover:bg-black/5 text-[#420811] transition-colors cursor-pointer"
                  aria-label="Close cart"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Cart Items List */}
              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-5">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-16">
                    <ShoppingBag className="w-12 h-12 text-[#500813]/30 stroke-[1.2]" />
                    <p className="font-sans text-sm tracking-wider uppercase text-[#381117]/60">
                      Your bag is empty
                    </p>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#500813] underline underline-offset-4 hover:text-[#D4AF37] cursor-pointer"
                    >
                      Explore Sarees
                    </button>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 p-3 bg-white border border-[#D4AF37]/15 rounded-sm shadow-sm"
                    >
                      {/* Item Thumbnail */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-24 object-cover object-center rounded-sm bg-[#E2D8C7]"
                      />

                      {/* Item Info */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <p className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#C43859] font-bold">
                            {item.category}
                          </p>
                          <h3 className="font-['Cormorant_Garamond',serif] text-base font-normal text-[#240307] leading-snug line-clamp-1">
                            {item.name}
                          </h3>
                          <p className="font-sans text-xs font-semibold text-[#420811] pt-1">
                            {item.price}
                          </p>
                        </div>

                        {/* Quantity Controls & Remove */}
                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-center border border-black/10 rounded-sm">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-1 hover:bg-black/5 text-[#420811] transition-colors cursor-pointer"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-3 font-sans text-xs font-medium">
                              {item.quantity || 1}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-1 hover:bg-black/5 text-[#420811] transition-colors cursor-pointer"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-black/40 hover:text-[#C43859] transition-colors p-1 cursor-pointer"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Drawer Footer (Subtotal + Checkout) */}
              {cart.length > 0 && (
                <div className="border-t border-[#D4AF37]/20 p-6 bg-[#F5EFEB] space-y-4">
                  <div className="flex items-center justify-between font-sans">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#381117]/70">
                      Estimated Total
                    </span>
                    <span className="font-['Cormorant_Garamond',serif] text-2xl font-normal text-[#420811]">
                      ₹{totalPrice.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      alert('Proceeding to luxury fitting & rental booking...');
                    }}
                    className="w-full inline-flex items-center justify-center gap-3 bg-[#500813] hover:bg-[#680C1B] text-[#FAF6F0] font-sans text-xs uppercase tracking-[0.22em] font-medium py-3.5 rounded-sm shadow-[0_4px_16px_rgba(80,8,19,0.25)] transition-all cursor-pointer"
                  >
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-4 h-4 stroke-[1.8]" />
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}