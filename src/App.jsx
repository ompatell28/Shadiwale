import React from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NewArrivals from './components/NewArrivals';
import Occasions from './components/Occasions';
import BestSellers from './components/BestSellers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';

export default function App() {
  return (
    <CartProvider>
      <div className="w-full min-h-screen bg-[#140103] selection:bg-[#D4AF37] selection:text-black">
        <Navbar />
        {typeof CartDrawer !== 'undefined' && <CartDrawer />}

        {/* SHUTTER EFFECT: Main content scrolls OVER the Footer */}
        <main className="relative z-10 bg-[#F5EFEB] shadow-[0_30px_60px_rgba(0,0,0,0.65)]">
          <Hero />
          <NewArrivals />
          <Occasions />
          <BestSellers />
          <Contact />
        </main>

        {/* Uncovered Shutter Footer */}
        <div className="relative z-0">
          <Footer />
        </div>
      </div>
    </CartProvider>
  );
}