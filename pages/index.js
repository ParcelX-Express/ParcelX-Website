import React, { useState } from 'react';
import Link from 'next/link';

const NavItem = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-5 px-6 text-gray-800 hover:bg-gray-50 transition-colors group"
      >
        <span className="text-lg font-medium">{title}</span>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && options && (
        <div className="bg-gray-50 py-2">
          {options.map((option, idx) => {
            const label = typeof option === 'string' ? option : option.label;
            const href = typeof option === 'string' ? '#' : option.href;
            return (
              <Link
                key={idx}
                href={href}
                className="block py-3 px-10 text-gray-600 hover:text-brand-blue hover:bg-gray-100 transition-colors"
              >
                {label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default function Home() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: 'Shipping', options: [{ label: 'Create a Shipment', href: '/create-shipment' }, 'Shipping Rates & Delivery Times', 'Schedule & Manage Pickups', 'Packing & Shipping Supplies'] },
    { title: 'Tracking', options: ['Track a Shipment', 'Advanced Shipment Tracking', 'Manage Your Delivery'] },
    { title: 'Design & Print', options: ['Business Cards', 'Flyers', 'Signs & Banners', 'Posters'] },
    { title: 'Locations', options: ['Find a Location', 'Drop off a Package', 'In-Store Services'] },
    { title: 'Support', options: ['Customer Support', 'File a Claim', 'Frequently Asked Questions'] },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 leading-normal font-sans">
      {/* FedEx Style Header */}
      <header className="bg-brand-blue text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-3xl font-black tracking-tight">PARCEL<span className="text-brand-orange text-4xl">X</span></span>
          </Link>
          
          <div className="flex items-center gap-6">
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors hidden md:block">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors z-50"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Slide-out Menu */}
        <div className={`fixed inset-0 bg-white text-gray-900 transform transition-transform duration-300 ease-in-out z-40 pt-16 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full overflow-y-auto">
            <div className="p-4 bg-brand-blue">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search or Tracking Numbers"
                  className="w-full bg-white/10 border border-white/20 rounded text-white py-3 pl-4 pr-12 placeholder:text-white/50 outline-none focus:bg-white/20"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex-grow">
              {menuItems.map((item, index) => (
                <NavItem key={index} title={item.title} options={item.options} />
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Cinematic Hero Section with FedEx Layout */}
        <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/shipping-port.jpg" 
              alt="Global Shipping" 
              className="w-full h-full object-cover brightness-[0.6]"
            />
          </div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl md:text-7xl font-light text-white leading-tight tracking-tight">
              Ship, manage, <br />track, deliver
            </h1>
          </div>
        </section>

        {/* Action Grid (Rate & Ship, Track, Locations) */}
        <section className="relative z-20 -mt-24 max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 shadow-2xl">
            {/* RATE & SHIP */}
            <div className="bg-gray-50 p-10 flex flex-col items-center justify-center text-center border-r border-gray-200">
              <div className="w-20 h-20 mb-6 text-gray-700">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-xl font-black tracking-widest text-brand-blue uppercase">RATE & SHIP</span>
            </div>
            
            {/* TRACK */}
            <div className="bg-brand-blue p-10 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 mb-6 text-white">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7V3m0 0L8 5m2-2l2 2" />
                </svg>
              </div>
              <span className="text-xl font-black tracking-widest text-white uppercase">TRACK</span>
            </div>

            {/* LOCATIONS */}
            <div className="bg-gray-50 p-10 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 mb-6 text-gray-700">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="text-xl font-black tracking-widest text-brand-blue uppercase">LOCATIONS</span>
            </div>
          </div>
        </section>

        {/* Tracking ID Input Section */}
        <section className="py-16 max-w-4xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row border-2 border-gray-200">
            <input
              type="text"
              placeholder="TRACKING ID"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              className="flex-grow px-8 py-6 text-xl outline-none placeholder:text-gray-400 font-light"
            />
            <Link 
              href={`/track-shipment?id=${trackingNumber}`}
              className="bg-brand-orange text-white px-12 py-6 font-black text-xl flex items-center justify-center gap-4 hover:bg-orange-600 transition-colors"
            >
              TRACK <span className="text-2xl">→</span>
            </Link>
          </div>
        </section>

        {/* Large Brand Icon Section */}
        <section className="py-12 flex justify-center">
          <div className="w-48 h-48 border-4 border-brand-blue rounded-full flex items-center justify-center p-8">
            <svg fill="none" stroke="brand-blue" viewBox="0 0 24 24" className="w-full h-full text-brand-blue">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 11V7m0 4l-2-2m2 2l2-2" />
            </svg>
          </div>
        </section>

        {/* Keep existing sections below but with refined styling */}
        <section className="py-24 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="flex-1">
              <img 
                src="/warehouse.jpg" 
                alt="Logistics" 
                className="rounded-3xl shadow-xl"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-4xl font-black text-brand-blue mb-6">Built for the Future of Commerce</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                ParcelX integrates legacy logistics with modern digital infrastructure. Our platform gives you total control over your global footprint.
              </p>
              <button className="bg-brand-blue text-white px-10 py-4 rounded-xl font-bold hover:bg-brand-orange transition-all">
                PARTNER WITH US
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-brand-blue text-white py-20 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center gap-3 mb-10">
            <span className="text-3xl font-black tracking-tighter uppercase">PARCEL<span className="text-brand-orange">X</span></span>
          </div>
          <p className="text-white/40 mb-10 text-sm max-w-md mx-auto">
            Leading the global logistics revolution with technology, passion, and reliability.
          </p>
          <div className="flex justify-center gap-12 text-sm font-bold text-white/60 mb-12">
            <Link href="#" className="hover:text-brand-orange">Legal</Link>
            <Link href="#" className="hover:text-brand-orange">Security</Link>
            <Link href="#" className="hover:text-brand-orange">Privacy</Link>
          </div>
          <div className="pt-12 border-t border-white/5 text-[10px] font-black uppercase tracking-[0.4em] text-white/20">
            © 2026 ParcelX Global Systems. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
