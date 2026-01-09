import React, { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [trackingNumber, setTrackingNumber] = useState('');

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="bg-brand-blue text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 h-20 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-white rounded-lg p-1 group-hover:scale-105 transition-transform duration-200">
              <img src="/logo.png" alt="ParcelX Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-2xl font-black tracking-tighter">PARCEL<span className="text-brand-orange">X</span></span>
          </Link>
          
          <nav className="hidden lg:flex items-center space-x-10 font-bold text-xs uppercase tracking-widest">
            <Link href="/" className="text-brand-orange border-b-2 border-brand-orange py-1">Home</Link>
            <Link href="/track-shipment" className="hover:text-brand-orange transition-colors py-1">Tracking</Link>
            <Link href="/services" className="hover:text-brand-orange transition-colors py-1">Services</Link>
            <Link href="/shipping" className="hover:text-brand-orange transition-colors py-1">Shipping</Link>
          </nav>

          <div className="flex items-center gap-6">
            <Link href="/login" className="hidden sm:block hover:text-brand-orange transition-colors font-bold text-xs uppercase tracking-widest">Login</Link>
            <Link href="/signup" className="bg-brand-orange text-white px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-orange-600 transition-all shadow-md hover:shadow-orange-500/20">
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[800px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/shipping-port.jpg" 
              alt="Global Shipping Port" 
              className="w-full h-full object-cover brightness-[0.3] scale-105 animate-slow-zoom"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 w-full">
            <div className="max-w-3xl text-white">
              <div className="inline-flex items-center gap-2 bg-brand-orange text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-xl shadow-orange-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                Global Network Live
              </div>
              <h2 className="text-6xl md:text-8xl font-black mb-8 leading-[0.95] tracking-tighter">
                REDEFINING <br />THE <span className="text-brand-orange">HORIZON</span>
              </h2>
              <p className="text-xl text-gray-300 mb-12 font-medium leading-relaxed max-w-2xl border-l-4 border-brand-orange pl-8">
                ParcelX is the backbone of global commerce. We provide high-performance logistics solutions that empower businesses to scale across borders with absolute certainty.
              </p>
              
              {/* Quick Tracking Tool */}
              <div className="bg-white/5 backdrop-blur-xl p-3 rounded-[2.5rem] shadow-2xl flex flex-col sm:flex-row gap-3 max-w-2xl border border-white/10 group focus-within:border-brand-orange/50 transition-all duration-500">
                <div className="flex-grow flex items-center bg-white rounded-[2rem] px-6 shadow-inner">
                  <svg className="w-6 h-6 text-brand-blue/30 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  <input
                    type="text"
                    placeholder="Enter Tracking Identifier..."
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className="w-full py-5 text-brand-blue font-bold outline-none placeholder:text-gray-400 bg-transparent text-lg"
                  />
                </div>
                <Link 
                  href={`/track-shipment?id=${trackingNumber}`}
                  className="bg-brand-orange text-white px-12 py-5 rounded-[2rem] font-black hover:bg-white hover:text-brand-blue transition-all text-center uppercase tracking-widest text-sm shadow-xl hover:shadow-2xl active:scale-95"
                >
                  TRACK NOW
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-32 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-2xl">
                <h3 className="text-brand-orange font-black uppercase tracking-[0.3em] text-xs mb-4">Our Expertise</h3>
                <h4 className="text-4xl md:text-5xl font-black text-brand-blue leading-tight">World-Class Logistics <br />At Your Fingertips</h4>
              </div>
              <p className="text-brand-gray-dark/60 font-medium max-w-xs text-right hidden md:block">Leveraging cutting-edge technology to streamline your supply chain.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group bg-white p-12 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-700 border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-bl-[100%] transition-all duration-700 group-hover:scale-150 group-hover:bg-brand-blue/10"></div>
                <div className="w-20 h-20 bg-brand-blue text-white rounded-2xl flex items-center justify-center mb-10 shadow-lg group-hover:rotate-12 transition-transform duration-500">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                </div>
                <h5 className="text-2xl font-black text-brand-blue mb-4">Priority Freight</h5>
                <p className="text-brand-gray-dark/70 leading-relaxed font-medium">Ultra-fast transit for critical cargo across all global corridors.</p>
              </div>
              <div className="group bg-brand-blue p-12 rounded-[3rem] shadow-2xl transition-all duration-700 relative overflow-hidden transform md:-translate-y-8">
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-tl-[100%]"></div>
                <div className="w-20 h-20 bg-brand-orange text-white rounded-2xl flex items-center justify-center mb-10 shadow-lg group-hover:-rotate-12 transition-transform duration-500">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                </div>
                <h5 className="text-2xl font-black text-white mb-4">Smart Warehousing</h5>
                <p className="text-gray-400 leading-relaxed font-medium">Fully automated storage solutions with real-time inventory precision.</p>
              </div>
              <div className="group bg-white p-12 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-700 border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-bl-[100%] transition-all duration-700 group-hover:scale-150 group-hover:bg-brand-orange/10"></div>
                <div className="w-20 h-20 bg-white border-2 border-brand-blue text-brand-blue rounded-2xl flex items-center justify-center mb-10 shadow-lg group-hover:rotate-12 transition-transform duration-500">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04kM12 21.355r-.343-.133a11.97 11.97 0 01-6.107-6.107L5.414 15l.133-.343a11.97 11.97 0 016.107-6.107l.343.133a11.97 11.97 0 016.107 6.107l.133.343a11.97 11.97 0 01-6.107 6.107z"></path></svg>
                </div>
                <h5 className="text-2xl font-black text-brand-blue mb-4">Secure Logistics</h5>
                <p className="text-brand-gray-dark/70 leading-relaxed font-medium">Military-grade protection and tracking for high-value shipments.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Hero Section 2 */}
        <section className="py-32 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center gap-24">
            <div className="flex-1 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-orange/10 rounded-full blur-3xl"></div>
              <img 
                src="/delivery-service.jpg" 
                alt="Professional Delivery Service" 
                className="rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] relative z-10 scale-105"
              />
              <div className="absolute -bottom-12 -right-12 bg-white p-8 rounded-[2rem] shadow-2xl z-20 hidden lg:block">
                <p className="text-brand-blue font-black text-4xl mb-1">100%</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-brand-orange">Delivery Guarantee</p>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-brand-orange font-black uppercase tracking-[0.3em] text-xs mb-6">Our Infrastructure</h3>
              <h2 className="text-5xl font-black text-brand-blue mb-8 leading-tight">
                Built for the <br />Future of Commerce
              </h2>
              <p className="text-xl text-brand-gray-dark/80 mb-10 leading-relaxed font-medium">
                ParcelX integrates legacy logistics with modern digital infrastructure. Our platform gives you total control over your global footprint, from a single parcel to enterprise-scale supply chains.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div className="space-y-2">
                  <div className="w-12 h-1 bg-brand-orange"></div>
                  <h4 className="font-black text-brand-blue text-lg">AI-Optimized</h4>
                  <p className="text-sm text-brand-gray-dark/60">Predictive routing for maximum speed.</p>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-1 bg-brand-orange"></div>
                  <h4 className="font-black text-brand-blue text-lg">Global Reach</h4>
                  <p className="text-sm text-brand-gray-dark/60">Connected to 200+ countries.</p>
                </div>
              </div>
              <button className="bg-brand-blue text-white px-12 py-5 rounded-2xl font-black hover:bg-brand-orange transition-all shadow-xl shadow-brand-blue/20">
                PARTNER WITH US
              </button>
            </div>
          </div>
        </section>

        {/* Detailed Hero Section 3 */}
        <section className="py-40 bg-brand-blue text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[50%] h-full bg-white/[0.02] -skew-x-12 translate-x-1/2"></div>
          <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center gap-24 relative z-10">
            <div className="flex-1">
              <h3 className="text-brand-orange font-black uppercase tracking-[0.3em] text-xs mb-6">Sustainability</h3>
              <h2 className="text-5xl font-black mb-8 leading-tight">
                Eco-Conscious <br />Global Delivery
              </h2>
              <p className="text-xl text-gray-400 mb-12 leading-relaxed font-medium">
                We're pioneering the transition to carbon-neutral logistics. Our last-mile fleet is 100% electric, and we optimize every route to minimize environmental impact without compromising on speed.
              </p>
              <div className="grid grid-cols-2 gap-12 mb-12">
                <div>
                  <p className="text-5xl font-black text-brand-orange">0%</p>
                  <p className="text-xs font-black uppercase tracking-widest text-gray-500 mt-3">Carbon Emissions Target</p>
                </div>
                <div>
                  <p className="text-5xl font-black text-brand-orange">500+</p>
                  <p className="text-xs font-black uppercase tracking-widest text-gray-500 mt-3">Electric Vehicles</p>
                </div>
              </div>
              <button className="bg-white text-brand-blue px-12 py-5 rounded-2xl font-black hover:bg-brand-orange hover:text-white transition-all shadow-2xl">
                OUR GREEN INITIATIVE
              </button>
            </div>
            <div className="flex-1 relative">
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-orange/20 rounded-full blur-[100px]"></div>
              <img 
                src="/electric-truck.jpg" 
                alt="Electric Delivery Truck" 
                className="rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative z-10 transform translate-x-12"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-blue text-white py-20 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-white rounded p-1">
                <img src="/logo.png" alt="ParcelX" className="w-full h-full object-contain" />
              </div>
              <span className="text-xl font-black tracking-tighter">PARCEL<span className="text-brand-orange">X</span></span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Leading the global logistics revolution with technology, passion, and reliability.
            </p>
          </div>
          <div>
            <h4 className="font-black text-lg mb-8 uppercase tracking-widest">Solutions</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><Link href="#" className="hover:text-brand-orange transition-colors">Air Freight</Link></li>
              <li><Link href="#" className="hover:text-brand-orange transition-colors">Ocean Freight</Link></li>
              <li><Link href="#" className="hover:text-brand-orange transition-colors">Road Transport</Link></li>
              <li><Link href="#" className="hover:text-brand-orange transition-colors">Supply Chain</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-lg mb-8 uppercase tracking-widest">Company</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><Link href="#" className="hover:text-brand-orange transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-brand-orange transition-colors">Our Network</Link></li>
              <li><Link href="#" className="hover:text-brand-orange transition-colors">Sustainability</Link></li>
              <li><Link href="#" className="hover:text-brand-orange transition-colors">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-lg mb-8 uppercase tracking-widest">Connect</h4>
            <p className="text-gray-400 mb-6">Subscribe to our logistics newsletter</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="bg-white/10 border-none rounded-lg px-4 py-2 flex-grow focus:ring-1 ring-brand-orange outline-none" />
              <button className="bg-brand-orange p-2 rounded-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 text-center text-gray-500 text-xs font-bold uppercase tracking-widest">
          © 2026 ParcelX Global Logistics. Powered by Precision.
        </div>
      </footer>
    </div>
  );
}
