import React, { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 leading-normal">
      {/* Premium Header */}
      <header className="bg-brand-blue text-white sticky top-0 z-50 shadow-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg p-1.5 shadow-sm">
              <img src="/logo.png" alt="ParcelX Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter leading-none">PARCEL<span className="text-brand-orange">X</span></span>
              <span className="text-[9px] font-bold tracking-[0.2em] text-brand-orange mt-0.5 uppercase">Logistics</span>
            </div>
          </Link>
          
          <nav className="hidden lg:flex items-center space-x-10 font-bold text-xs uppercase tracking-widest">
            <Link href="/" className="text-brand-orange">Home</Link>
            <Link href="/track-shipment" className="hover:text-brand-orange transition-colors">Tracking</Link>
            
            {/* Dropdown Menu */}
            <div className="relative group">
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onMouseEnter={() => setIsServicesOpen(true)}
                className="flex items-center gap-1.5 hover:text-brand-orange transition-colors py-2"
              >
                Services
                <svg className={`w-3 h-3 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div 
                onMouseLeave={() => setIsServicesOpen(false)}
                className={`absolute top-full left-0 w-64 bg-white text-brand-blue shadow-2xl rounded-2xl p-6 mt-2 border border-gray-100 transition-all duration-200 ${isServicesOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'}`}
              >
                <div className="space-y-4 font-bold text-xs">
                  <Link href="/services/express" className="block hover:text-brand-orange transition-colors">Express Delivery</Link>
                  <Link href="/services/freight" className="block hover:text-brand-orange transition-colors">Ocean & Air Freight</Link>
                  <Link href="/services/warehousing" className="block hover:text-brand-orange transition-colors">Smart Warehousing</Link>
                  <div className="h-px bg-gray-100 my-2"></div>
                  <Link href="/services/solutions" className="block hover:text-brand-orange transition-colors">Enterprise Solutions</Link>
                </div>
              </div>
            </div>

            <Link href="/corporate" className="hover:text-brand-orange transition-colors">Corporate</Link>
          </nav>

          <div className="flex items-center gap-6">
            <Link href="/login" className="hidden sm:block hover:text-brand-orange transition-colors font-bold text-xs uppercase tracking-widest">Portal</Link>
            <Link href="/signup" className="bg-brand-orange text-white px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white hover:text-brand-blue transition-all shadow-lg transform hover:-translate-y-0.5 active:translate-y-0">
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Cinematic Hero Section */}
        <section className="relative h-[80vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/shipping-port.jpg" 
              alt="Global Shipping Operations" 
              className="w-full h-full object-cover brightness-[0.4]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 via-brand-blue/40 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-brand-orange/20 backdrop-blur-md border border-brand-orange/30 text-brand-orange px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse"></span>
                Global Logistics Intelligence
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-[0.95] tracking-tight">
                PRECISION <br /><span className="text-brand-orange">LOGISTICS</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-12 font-medium leading-relaxed max-w-2xl">
                The definitive choice for high-performance global commerce. We provide the infrastructure for enterprise scaling with absolute visibility and net-zero efficiency.
              </p>
              
              {/* Modern Tracking Input */}
              <div className="bg-white/10 backdrop-blur-xl p-2 rounded-2xl shadow-2xl flex flex-col sm:flex-row gap-2 max-w-2xl border border-white/20">
                <div className="flex-grow flex items-center bg-white rounded-xl px-5 py-1">
                  <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  <input
                    type="text"
                    placeholder="ENTER TRACKING ID..."
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className="w-full py-4 text-brand-blue font-bold outline-none placeholder:text-gray-400 bg-transparent uppercase text-sm tracking-wider"
                  />
                </div>
                <Link 
                  href={`/track-shipment?id=${trackingNumber}`}
                  className="bg-brand-orange text-white px-10 py-4 rounded-xl font-black hover:bg-white hover:text-brand-blue transition-all text-center uppercase tracking-widest text-xs shadow-xl active:scale-95"
                >
                  TRACK SHIPMENT
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise Services Section */}
        <section className="py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10">
              <div className="max-w-2xl">
                <h2 className="text-brand-orange font-black uppercase tracking-widest text-[10px] mb-4">Our Capabilities</h2>
                <h3 className="text-5xl md:text-6xl font-black text-brand-blue leading-tight tracking-tight">Enterprise Power. <br />Digital Precision.</h3>
              </div>
              <p className="text-gray-500 font-bold text-base leading-relaxed max-w-xs lg:text-right border-brand-orange lg:border-r-4 lg:pr-6">
                Deploying advanced neural routing to eliminate supply chain friction.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group bg-white p-10 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden">
                <div className="w-16 h-16 bg-brand-blue text-white rounded-2xl flex items-center justify-center mb-8 shadow-xl group-hover:rotate-6 transition-transform">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                </div>
                <h4 className="text-2xl font-black text-brand-blue mb-4">Global Express</h4>
                <p className="text-sm text-gray-600 leading-relaxed font-semibold italic">Priority lane access for time-critical assets across 200+ territories.</p>
              </div>
              
              <div className="group bg-brand-blue p-10 rounded-[3rem] shadow-2xl transition-all duration-500 relative overflow-hidden lg:-translate-y-8">
                <div className="w-16 h-16 bg-brand-orange text-white rounded-2xl flex items-center justify-center mb-8 shadow-xl group-hover:-rotate-6 transition-transform">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                </div>
                <h4 className="text-2xl font-black text-white mb-4">AI-Warehousing</h4>
                <p className="text-sm text-white/60 leading-relaxed font-semibold italic">Cognitive inventory management and fully autonomous distribution nodes.</p>
              </div>

              <div className="group bg-white p-10 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden">
                <div className="w-16 h-16 bg-white border-2 border-brand-blue text-brand-blue rounded-2xl flex items-center justify-center mb-8 shadow-xl group-hover:rotate-6 transition-transform">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04kM12 21.355r-.343-.133a11.97 11.97 0 01-6.107-6.107L5.414 15l.133-.343a11.97 11.97 0 016.107-6.107l.343.133a11.97 11.97 0 016.107 6.107l.133.343a11.97 11.97 0 01-6.107 6.107z"></path></svg>
                </div>
                <h4 className="text-2xl font-black text-brand-blue mb-4">Asset Security</h4>
                <p className="text-sm text-gray-600 leading-relaxed font-semibold italic">Real-time telemetry and end-to-end encryption for every shipment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Global Network Section */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col xl:flex-row items-center gap-20 lg:gap-32">
            <div className="flex-1 relative order-2 xl:order-1">
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-brand-orange/5 rounded-full blur-[100px]"></div>
              <img 
                src="/delivery-service.jpg" 
                alt="White Glove Delivery Service" 
                className="rounded-[4rem] shadow-2xl relative z-10 hover:scale-[1.01] transition-transform duration-500"
              />
              <div className="absolute -bottom-10 -right-10 bg-brand-blue p-8 lg:p-10 rounded-[2.5rem] shadow-2xl z-20 hidden 2xl:block text-white">
                <p className="font-black text-5xl mb-1 text-brand-orange">99.9%</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-white/40">ON-TIME PERFORMANCE</p>
              </div>
            </div>
            
            <div className="flex-1 order-1 xl:order-2">
              <h2 className="text-brand-orange font-black uppercase tracking-widest text-[10px] mb-6">Institutional Reach</h2>
              <h3 className="text-5xl font-black text-brand-blue mb-8 leading-tight tracking-tight">The Standard for <br />Global Logistics</h3>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium italic border-l-4 border-brand-orange pl-6">
                "ParcelX has fundamentally transformed our international distribution model. Their visibility tools are unmatched."
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12">
                <div className="space-y-3">
                  <div className="h-1 w-12 bg-brand-orange"></div>
                  <h4 className="text-xl font-black text-brand-blue">200+ Nodes</h4>
                  <p className="text-gray-400 font-bold uppercase text-[9px] tracking-[0.2em]">Global Distribution</p>
                </div>
                <div className="space-y-3">
                  <div className="h-1 w-12 bg-brand-orange"></div>
                  <h4 className="text-xl font-black text-brand-blue">24/7 Intel</h4>
                  <p className="text-gray-400 font-bold uppercase text-[9px] tracking-[0.2em]">Operations Center</p>
                </div>
              </div>
              
              <button className="bg-brand-blue text-white px-12 py-5 rounded-2xl font-black hover:bg-brand-orange transition-all shadow-xl shadow-brand-blue/20 uppercase tracking-widest text-xs">
                Inquire for Enterprise
              </button>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-40 bg-brand-blue text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-24 relative z-10">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-brand-orange font-black uppercase tracking-widest text-[10px] mb-6">Our Vision</h2>
              <h3 className="text-6xl font-black mb-8 leading-tight tracking-tight">Zero-Friction <br />Global Transit</h3>
              <p className="text-xl text-white/50 mb-12 leading-relaxed font-semibold">
                We are building the first carbon-neutral, fully autonomous logistics backbone. Our commitment to sustainability drives every technological breakthrough.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-12 mb-12">
                <div className="flex flex-col">
                  <span className="text-5xl font-black text-brand-orange tracking-tighter">0.0</span>
                  <span className="text-[9px] font-black uppercase tracking-widest text-white/30 mt-2">NET CARBON TARGET</span>
                </div>
                <div className="flex flex-col lg:border-l border-white/10 lg:pl-12">
                  <span className="text-5xl font-black text-brand-orange tracking-tighter">1200+</span>
                  <span className="text-[9px] font-black uppercase tracking-widest text-white/30 mt-2">ELECTRIC UNITS</span>
                </div>
              </div>
              
              <button className="bg-white text-brand-blue px-14 py-6 rounded-2xl font-black hover:bg-brand-orange hover:text-white transition-all shadow-2xl uppercase tracking-widest text-xs">
                Our Environmental Policy
              </button>
            </div>
            
            <div className="flex-1 relative">
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-orange/10 rounded-full blur-[100px]"></div>
              <img 
                src="/electric-truck.jpg" 
                alt="Next-Gen Electric Transit" 
                className="rounded-[4rem] shadow-2xl relative z-10 transform scale-105 lg:translate-x-10"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Corporate Footer */}
      <footer className="bg-brand-blue text-white py-24 px-4 md:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-white rounded-lg p-1.5">
                <img src="/logo.png" alt="ParcelX" className="w-full h-full object-contain" />
              </div>
              <span className="text-xl font-black tracking-tighter uppercase">PARCEL<span className="text-brand-orange">X</span></span>
            </div>
            <p className="text-white/40 leading-relaxed font-medium mb-8 text-xs">
              Architecting the future of global logistics through neural networks and sustainable engineering.
            </p>
            <div className="flex gap-4">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors cursor-pointer">
                  <div className="w-3 h-3 bg-white/20 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-black text-[10px] uppercase tracking-widest mb-10 text-white/30">Verticals</h4>
            <ul className="space-y-4 text-xs font-bold text-white/60">
              <li><Link href="#" className="hover:text-brand-orange transition-colors">Aerospace Logistics</Link></li>
              <li><Link href="#" className="hover:text-brand-orange transition-colors">Cold Chain Systems</Link></li>
              <li><Link href="#" className="hover:text-brand-orange transition-colors">Maritime Freight</Link></li>
              <li><Link href="#" className="hover:text-brand-orange transition-colors">Digital Customs</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black text-[10px] uppercase tracking-widest mb-10 text-white/30">Company</h4>
            <ul className="space-y-4 text-xs font-bold text-white/60">
              <li><Link href="#" className="hover:text-brand-orange transition-colors">Governance</Link></li>
              <li><Link href="#" className="hover:text-brand-orange transition-colors">Sustainability Report</Link></li>
              <li><Link href="#" className="hover:text-brand-orange transition-colors">Investor Relations</Link></li>
              <li><Link href="#" className="hover:text-brand-orange transition-colors">Global Press</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black text-[10px] uppercase tracking-widest mb-10 text-white/30">Dispatch</h4>
            <p className="text-white/40 mb-6 text-xs leading-relaxed font-medium">Receive our quarterly logistics intelligence briefing.</p>
            <div className="flex flex-col gap-3">
              <input type="email" placeholder="CORPORATE EMAIL" className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-[10px] font-bold tracking-widest outline-none focus:border-brand-orange transition-colors uppercase" />
              <button className="bg-brand-orange text-white py-4 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-xl hover:bg-white hover:text-brand-blue transition-all">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6 text-[9px] font-black uppercase tracking-[0.3em] text-white/20">
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
