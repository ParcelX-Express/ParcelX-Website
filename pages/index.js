import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-brand-gray-dark">
      <Head>
        <title>ParcelX | Global Logistics & Shipping Solutions</title>
        <meta name="description" content="Professional global shipping and real-time tracking services." />
      </Head>

      {/* Modern Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-blue/95 backdrop-blur-md h-16 shadow-xl' : 'bg-transparent h-24'}`}>
        <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-white rounded-xl p-1.5 shadow-lg transform group-hover:rotate-6 transition-transform">
              <img src="/logo.png" alt="ParcelX" className="w-full h-full object-contain" />
            </div>
            <span className={`text-2xl font-black tracking-tighter transition-colors ${scrolled ? 'text-white' : 'text-white'}`}>
              PARCEL<span className="text-brand-orange">X</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-10 text-[11px] font-black uppercase tracking-[0.2em]">
            <Link href="/" className="text-brand-orange border-b-2 border-brand-orange pb-1">Overview</Link>
            <Link href="/track-shipment" className="text-white/80 hover:text-brand-orange transition-colors pb-1">Tracking</Link>
            <Link href="/services" className="text-white/80 hover:text-brand-orange transition-colors pb-1">Solutions</Link>
            <Link href="/network" className="text-white/80 hover:text-brand-orange transition-colors pb-1">Network</Link>
          </nav>

          <div className="flex items-center gap-6">
            <Link href="/login" className="hidden sm:block text-white font-black text-[11px] uppercase tracking-widest hover:text-brand-orange transition-colors">Client Login</Link>
            <Link href="/signup" className="bg-brand-orange text-white px-8 py-3 rounded-full font-black text-[11px] uppercase tracking-[0.15em] hover:bg-white hover:text-brand-blue transition-all shadow-2xl transform hover:scale-105 active:scale-95">
              Open Account
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Cinematic Hero */}
        <section className="relative h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/cargo-ship.jpg" 
              alt="Global Logistics" 
              className="w-full h-full object-cover scale-105 animate-slow-zoom"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue/60 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/30 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
                <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse"></span>
                <span className="text-brand-orange text-[10px] font-black uppercase tracking-widest">Global Logistics Network Active</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter">
                MOVING THE <br />WORLD <span className="text-brand-orange">FASTER.</span>
              </h2>
              <p className="text-xl text-gray-300 mb-12 font-medium max-w-xl leading-relaxed">
                Experience next-generation global shipping with AI-optimized routing, zero-latency tracking, and enterprise-grade reliability.
              </p>
              
              {/* Ultra Professional Tracking Input */}
              <div className="bg-white/10 backdrop-blur-xl p-3 rounded-[2rem] border border-white/20 shadow-2xl flex flex-col sm:flex-row gap-3 max-w-2xl group focus-within:bg-white transition-all duration-500">
                <div className="flex-grow flex items-center px-6">
                  <svg className="w-6 h-6 text-brand-orange mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  <input
                    type="text"
                    placeholder="ENTER SHIPMENT ID"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className="bg-transparent w-full py-4 text-white group-focus-within:text-brand-blue font-black text-sm tracking-widest outline-none placeholder:text-gray-400 uppercase"
                  />
                </div>
                <Link 
                  href={`/track-shipment?id=${trackingNumber}`}
                  className="bg-brand-orange text-white px-12 py-5 rounded-[1.5rem] font-black text-sm tracking-widest hover:bg-brand-blue transition-all shadow-xl text-center"
                >
                  TRACK NOW
                </Link>
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce">
            <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em] vertical-text">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-brand-orange to-transparent"></div>
          </div>
        </section>

        {/* Dynamic Stats Section */}
        <section className="bg-brand-blue py-16">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Countries Served', value: '210+' },
              { label: 'Annual Shipments', value: '25M+' },
              { label: 'Delivery Accuracy', value: '99.9%' },
              { label: 'Network Points', value: '1,400' }
            ].map((stat, i) => (
              <div key={i} className="border-r border-white/10 last:border-none">
                <p className="text-4xl font-black text-brand-orange mb-2">{stat.value}</p>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Page Previews & CTA Section */}
        <section className="py-32 bg-brand-gray-light overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-5xl font-black text-brand-blue mb-6 leading-tight">PRECISION LOGISTICS AT EVERY SCALE</h2>
                <p className="text-lg text-brand-gray-dark font-medium leading-relaxed">Whether you are shipping a document across town or a fleet of containers across oceans, ParcelX provides the infrastructure to succeed.</p>
              </div>
              <Link href="/services" className="text-brand-blue font-black text-sm uppercase tracking-widest border-b-4 border-brand-orange pb-2 hover:text-brand-orange transition-colors">View All Solutions</Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Service Cards */}
              <div className="group relative rounded-[3rem] overflow-hidden aspect-[16/10] shadow-2xl">
                <img src="/warehouse.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Warehousing" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue to-transparent"></div>
                <div className="absolute bottom-10 left-10 text-white">
                  <h3 className="text-3xl font-black mb-4">SMART WAREHOUSING</h3>
                  <p className="text-gray-300 font-medium mb-6 max-w-sm">AI-driven inventory management and fulfillment centers strategically located worldwide.</p>
                  <Link href="/services/warehousing" className="inline-flex items-center gap-4 bg-white text-brand-blue px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-brand-orange hover:text-white transition-all">
                    Learn More
                  </Link>
                </div>
              </div>
              
              <div className="group relative rounded-[3rem] overflow-hidden aspect-[16/10] shadow-2xl">
                <img src="/delivery-van.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Last Mile" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue to-transparent"></div>
                <div className="absolute bottom-10 left-10 text-white">
                  <h3 className="text-3xl font-black mb-4">LAST MILE PRECISION</h3>
                  <p className="text-gray-300 font-medium mb-6 max-w-sm">Sustainable, zero-emission urban delivery solutions with minute-by-minute visibility.</p>
                  <Link href="/services/last-mile" className="inline-flex items-center gap-4 bg-brand-orange text-white px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-brand-blue transition-all">
                    Get Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Corporate Footer */}
      <footer className="bg-brand-blue text-white py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 relative z-10">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 bg-white rounded-xl p-1.5">
                <img src="/logo.png" alt="ParcelX" className="w-full h-full object-contain" />
              </div>
              <span className="text-2xl font-black tracking-tighter">PARCEL<span className="text-brand-orange">X</span></span>
            </div>
            <p className="text-gray-400 font-medium leading-relaxed mb-10">
              Setting the standard for global logistics through technical innovation, environmental responsibility, and unwavering reliability since 2010.
            </p>
            <div className="flex gap-4">
              {['FB', 'TW', 'LN', 'IG'].map((s) => (
                <div key={s} className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center font-black text-[10px] hover:bg-brand-orange hover:border-brand-orange transition-all cursor-pointer">{s}</div>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="font-black text-[11px] uppercase tracking-[0.2em] text-brand-orange mb-10">Logistics</h4>
            <ul className="space-y-4 text-sm font-bold text-gray-400">
              <li><Link href="/services/air" className="hover:text-white transition-colors">Air Freight</Link></li>
              <li><Link href="/services/ocean" className="hover:text-white transition-colors">Ocean Cargo</Link></li>
              <li><Link href="/services/rail" className="hover:text-white transition-colors">Rail Network</Link></li>
              <li><Link href="/services/cold-chain" className="hover:text-white transition-colors">Cold Chain</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-black text-[11px] uppercase tracking-[0.2em] text-brand-orange mb-10">Corporate</h4>
            <ul className="space-y-4 text-sm font-bold text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">Global Presence</Link></li>
              <li><Link href="/sustainability" className="hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link href="/investors" className="hover:text-white transition-colors">Investors</Link></li>
              <li><Link href="/news" className="hover:text-white transition-colors">Newsroom</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-black text-[11px] uppercase tracking-[0.2em] text-brand-orange mb-10">Global Inquiries</h4>
            <p className="text-sm font-bold text-gray-400 mb-6">Join our network of over 10,000 corporate shipping partners.</p>
            <div className="flex bg-white/5 rounded-2xl p-2 focus-within:bg-white/10 transition-colors">
              <input type="email" placeholder="EMAIL ADDRESS" className="bg-transparent border-none px-4 py-3 text-[10px] font-black tracking-widest outline-none flex-grow uppercase" />
              <button className="bg-brand-orange px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-orange-600 transition-all">Join</button>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">
          <p>© 2026 ParcelX Global Logistics. All rights reserved.</p>
          <div className="flex gap-10">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/compliance" className="hover:text-white transition-colors">Compliance</Link>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes slow-zoom {
          from { transform: scale(1.05); }
          to { transform: scale(1.15); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s infinite alternate ease-in-out;
        }
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </div>
  );
}
