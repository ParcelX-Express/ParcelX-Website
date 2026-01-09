import React, { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [trackingNumber, setTrackingNumber] = useState('');

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-brand-gray-dark">
      {/* Premium Header */}
      <header className="bg-brand-blue text-white sticky top-0 z-50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-24 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="w-12 h-12 bg-white rounded-xl p-2 group-hover:rotate-6 transition-all duration-300 shadow-lg">
              <img src="/logo.png" alt="ParcelX Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-black tracking-tighter leading-none">PARCEL<span className="text-brand-orange">X</span></span>
              <span className="text-[10px] font-bold tracking-[0.3em] text-brand-orange mt-1 uppercase">Global Logistics</span>
            </div>
          </Link>
          
          <nav className="hidden lg:flex items-center space-x-12 font-bold text-xs uppercase tracking-[0.2em]">
            <Link href="/" className="text-brand-orange border-b-2 border-brand-orange pb-1">Home</Link>
            <Link href="/track-shipment" className="hover:text-brand-orange transition-all hover:-translate-y-0.5">Tracking</Link>
            <Link href="/services" className="hover:text-brand-orange transition-all hover:-translate-y-0.5">Solutions</Link>
            <Link href="/shipping" className="hover:text-brand-orange transition-all hover:-translate-y-0.5">Corporate</Link>
          </nav>

          <div className="flex items-center gap-8">
            <Link href="/login" className="hidden sm:block hover:text-brand-orange transition-colors font-bold text-xs uppercase tracking-widest">Client Portal</Link>
            <Link href="/signup" className="bg-brand-orange text-white px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white hover:text-brand-blue transition-all shadow-xl hover:shadow-orange-500/20 transform hover:scale-105 active:scale-95">
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Cinematic Hero Section */}
        <section className="relative h-[85vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/shipping-port.jpg" 
              alt="Global Shipping Operations" 
              className="w-full h-full object-cover brightness-[0.35] scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/80 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-3 bg-brand-orange/10 backdrop-blur-md border border-brand-orange/30 text-brand-orange px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.25em] mb-10">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-orange"></span>
                </span>
                Global Network Active
              </div>
              <h1 className="text-7xl md:text-[100px] font-black text-white mb-10 leading-[0.9] tracking-tight">
                PRECISION <br /><span className="text-brand-orange">LOGISTICS</span>
              </h1>
              <p className="text-2xl text-gray-300 mb-14 font-medium leading-relaxed max-w-2xl border-l-8 border-brand-orange pl-10">
                The definitive choice for high-performance global commerce. We provide the infrastructure for enterprise scaling with absolute visibility.
              </p>
              
              {/* Ultra-Modern Tracking Input */}
              <div className="bg-white/10 backdrop-blur-2xl p-4 rounded-[3rem] shadow-3xl flex flex-col sm:flex-row gap-4 max-w-3xl border border-white/20">
                <div className="flex-grow flex items-center bg-white rounded-[2.5rem] px-8 py-2">
                  <svg className="w-7 h-7 text-brand-blue/30 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  <input
                    type="text"
                    placeholder="ENTER TRACKING IDENTIFIER..."
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className="w-full py-5 text-brand-blue font-black outline-none placeholder:text-gray-400 bg-transparent text-xl tracking-tighter uppercase"
                  />
                </div>
                <Link 
                  href={`/track-shipment?id=${trackingNumber}`}
                  className="bg-brand-orange text-white px-14 py-6 rounded-[2.5rem] font-black hover:bg-white hover:text-brand-blue transition-all text-center uppercase tracking-[0.15em] text-sm shadow-2xl hover:shadow-orange-500/40 active:scale-95"
                >
                  TRACK SHIPMENT
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise Services Section */}
        <section className="py-40 bg-brand-gray-light">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
              <div className="max-w-3xl">
                <h2 className="text-brand-orange font-black uppercase tracking-[0.4em] text-sm mb-6">Our Capabilities</h2>
                <h3 className="text-6xl md:text-7xl font-black text-brand-blue leading-tight tracking-tighter">Enterprise Power. <br />Digital Precision.</h3>
              </div>
              <div className="max-w-sm">
                <p className="text-brand-gray-dark/50 font-bold text-lg leading-relaxed mb-8">Deploying advanced neural routing to eliminate supply chain friction.</p>
                <div className="h-2 w-24 bg-brand-orange"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="group bg-white p-14 rounded-[4rem] shadow-sm hover:shadow-3xl transition-all duration-700 border border-gray-100 relative overflow-hidden">
                <div className="w-24 h-24 bg-brand-blue text-white rounded-3xl flex items-center justify-center mb-12 shadow-2xl transform group-hover:rotate-12 transition-all duration-500">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                </div>
                <h4 className="text-3xl font-black text-brand-blue mb-6">Global Express</h4>
                <p className="text-xl text-brand-gray-dark/60 leading-relaxed font-semibold">Priority lane access for time-critical assets across 200+ territories.</p>
              </div>
              
              <div className="group bg-brand-blue p-14 rounded-[4rem] shadow-3xl transition-all duration-700 relative overflow-hidden lg:-translate-y-12">
                <div className="w-24 h-24 bg-brand-orange text-white rounded-3xl flex items-center justify-center mb-12 shadow-2xl transform group-hover:-rotate-12 transition-all duration-500">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                </div>
                <h4 className="text-3xl font-black text-white mb-6">AI-Warehousing</h4>
                <p className="text-xl text-white/50 leading-relaxed font-semibold">Cognitive inventory management and fully autonomous distribution nodes.</p>
              </div>

              <div className="group bg-white p-14 rounded-[4rem] shadow-sm hover:shadow-3xl transition-all duration-700 border border-gray-100 relative overflow-hidden">
                <div className="w-24 h-24 bg-white border-4 border-brand-blue text-brand-blue rounded-3xl flex items-center justify-center mb-12 shadow-2xl transform group-hover:rotate-12 transition-all duration-500">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04kM12 21.355r-.343-.133a11.97 11.97 0 01-6.107-6.107L5.414 15l.133-.343a11.97 11.97 0 016.107-6.107l.343.133a11.97 11.97 0 016.107 6.107l.133.343a11.97 11.97 0 01-6.107 6.107z"></path></svg>
                </div>
                <h4 className="text-3xl font-black text-brand-blue mb-6">Asset Security</h4>
                <p className="text-xl text-brand-gray-dark/60 leading-relaxed font-semibold">Real-time telemetry and end-to-end encryption for every shipment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Global Network Section */}
        <section className="py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col xl:flex-row items-center gap-32">
            <div className="flex-1 relative order-2 xl:order-1">
              <div className="absolute -top-16 -left-16 w-64 h-64 bg-brand-orange/5 rounded-full blur-[120px]"></div>
              <img 
                src="/delivery-service.jpg" 
                alt="White Glove Delivery Service" 
                className="rounded-[5rem] shadow-[0_80px_150px_-30px_rgba(0,0,0,0.3)] relative z-10 hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute -bottom-16 -right-16 bg-brand-blue p-12 rounded-[3rem] shadow-4xl z-20 hidden 2xl:block text-white">
                <p className="font-black text-6xl mb-2 text-brand-orange">99.9%</p>
                <p className="text-xs font-black uppercase tracking-[0.3em] text-white/50">ON-TIME PERFORMANCE</p>
              </div>
            </div>
            
            <div className="flex-1 order-1 xl:order-2">
              <h2 className="text-brand-orange font-black uppercase tracking-[0.4em] text-sm mb-8">Institutional Reach</h2>
              <h3 className="text-6xl font-black text-brand-blue mb-10 leading-[1.1] tracking-tighter">The Standard for <br />Global Logistics</h3>
              <p className="text-2xl text-brand-gray-dark/70 mb-14 leading-relaxed font-medium italic border-l-4 border-brand-orange pl-8">
                "ParcelX has fundamentally transformed our international distribution model. Their visibility tools are unmatched."
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-16">
                <div className="space-y-4">
                  <div className="h-1.5 w-16 bg-brand-orange"></div>
                  <h4 className="text-2xl font-black text-brand-blue">200+ Nodes</h4>
                  <p className="text-brand-gray-dark/50 font-bold uppercase text-xs tracking-widest">Global Distribution Network</p>
                </div>
                <div className="space-y-4">
                  <div className="h-1.5 w-16 bg-brand-orange"></div>
                  <h4 className="text-2xl font-black text-brand-blue">24/7 Intel</h4>
                  <p className="text-brand-gray-dark/50 font-bold uppercase text-xs tracking-widest">Continuous Operations Center</p>
                </div>
              </div>
              
              <button className="bg-brand-blue text-white px-16 py-6 rounded-[2rem] font-black hover:bg-brand-orange transition-all shadow-3xl shadow-brand-blue/30 uppercase tracking-[0.2em] text-sm">
                Inquire for Enterprise
              </button>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-48 bg-brand-blue text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-32 relative z-10">
            <div className="flex-1">
              <h2 className="text-brand-orange font-black uppercase tracking-[0.4em] text-sm mb-8">Our Vision</h2>
              <h3 className="text-7xl font-black mb-12 leading-[1.05] tracking-tight">Zero-Friction <br />Global Transit</h3>
              <p className="text-2xl text-white/50 mb-16 leading-relaxed font-semibold">
                We are building the first carbon-neutral, fully autonomous logistics backbone. Our commitment to sustainability drives every technological breakthrough.
              </p>
              
              <div className="flex flex-wrap gap-12 mb-16">
                <div className="flex flex-col">
                  <span className="text-6xl font-black text-brand-orange tracking-tighter">0.0</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mt-3">NET CARBON TARGET</span>
                </div>
                <div className="flex flex-col border-l border-white/10 pl-12">
                  <span className="text-6xl font-black text-brand-orange tracking-tighter">1200+</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mt-3">ELECTRIC FLEET UNITS</span>
                </div>
              </div>
              
              <button className="bg-white text-brand-blue px-16 py-7 rounded-[2.5rem] font-black hover:bg-brand-orange hover:text-white transition-all shadow-4xl uppercase tracking-[0.2em] text-sm">
                Our Environmental Policy
              </button>
            </div>
            
            <div className="flex-1 relative">
              <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[150px]"></div>
              <img 
                src="/electric-truck.jpg" 
                alt="Next-Gen Electric Transit" 
                className="rounded-[5rem] shadow-[0_100px_200px_-40px_rgba(0,0,0,0.6)] relative z-10 transform scale-110 lg:translate-x-20"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Corporate Footer */}
      <footer className="bg-brand-blue text-white py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 bg-white rounded-lg p-2">
                <img src="/logo.png" alt="ParcelX" className="w-full h-full object-contain" />
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase">PARCEL<span className="text-brand-orange">X</span></span>
            </div>
            <p className="text-white/40 leading-loose font-medium mb-10 text-sm">
              Architecting the future of global logistics through neural networks and sustainable engineering.
            </p>
            <div className="flex gap-4">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors cursor-pointer">
                  <div className="w-4 h-4 bg-white/20 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.4em] mb-12 text-white/30">Verticals</h4>
            <ul className="space-y-6 text-sm font-bold text-white/60">
              <li><Link href="#" className="hover:text-brand-orange transition-colors">Aerospace Logistics</Link></li>
              <li><Link href="#" className="hover:text-brand-orange transition-colors">Cold Chain Systems</Link></li>
              <li><Link href="#" className="hover:text-brand-orange transition-colors">Maritime Freight</Link></li>
              <li><Link href="#" className="hover:text-brand-orange transition-colors">Digital Customs</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.4em] mb-12 text-white/30">Company</h4>
            <ul className="space-y-6 text-sm font-bold text-white/60">
              <li><Link href="#" className="hover:text-brand-orange transition-colors">Governance</Link></li>
              <li><Link href="#" className="hover:text-brand-orange transition-colors">Sustainability Report</Link></li>
              <li><Link href="#" className="hover:text-brand-orange transition-colors">Investor Relations</Link></li>
              <li><Link href="#" className="hover:text-brand-orange transition-colors">Global Press</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.4em] mb-12 text-white/30">Dispatch</h4>
            <p className="text-white/40 mb-8 text-sm leading-loose font-medium">Receive our quarterly logistics intelligence briefing.</p>
            <div className="flex flex-col gap-3">
              <input type="email" placeholder="CORPORATE EMAIL" className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-xs font-bold tracking-widest outline-none focus:border-brand-orange transition-colors" />
              <button className="bg-brand-orange text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest shadow-xl hover:bg-white hover:text-brand-blue transition-all">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-32 pt-12 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.4em] text-white/20">
          <span>© 2026 ParcelX Global Systems. All rights reserved.</span>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Legal</Link>
            <Link href="#" className="hover:text-white transition-colors">Security</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
