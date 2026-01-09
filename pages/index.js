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
        <section className="relative h-[700px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/cargo-ship.jpg" 
              alt="Global Shipping" 
              className="w-full h-full object-cover brightness-[0.4]"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 w-full">
            <div className="max-w-2xl text-white">
              <div className="inline-block bg-brand-orange/20 backdrop-blur-sm border border-brand-orange/30 text-brand-orange px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                Now Operating in 200+ Countries
              </div>
              <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1]">
                THE WORLD IS <br /><span className="text-brand-orange">CONNECTED</span>
              </h2>
              <p className="text-xl text-gray-300 mb-10 font-medium leading-relaxed max-w-xl">
                Global logistics solutions for the modern world. We move your business forward with precision, speed, and reliability.
              </p>
              
              {/* Quick Tracking Tool */}
              <div className="bg-white/10 backdrop-blur-md p-2 rounded-2xl shadow-2xl flex flex-col sm:flex-row gap-2 max-w-xl border border-white/10">
                <div className="flex-grow flex items-center bg-white rounded-xl px-4">
                  <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  <input
                    type="text"
                    placeholder="Enter Tracking ID..."
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className="w-full py-4 text-brand-blue font-bold outline-none placeholder:text-gray-400 bg-transparent"
                  />
                </div>
                <Link 
                  href={`/track-shipment?id=${trackingNumber}`}
                  className="bg-brand-orange text-white px-10 py-4 rounded-xl font-black hover:bg-orange-600 transition-all text-center uppercase tracking-widest text-sm shadow-lg hover:shadow-orange-500/40"
                >
                  TRACK
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-24 bg-brand-gray-light">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 transform hover:-translate-y-2 transition-all">
                <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-brand-blue mb-4">Express Freight</h3>
                <p className="text-brand-gray-dark leading-relaxed">Fast and secure transportation for your urgent shipments via air and sea routes.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 transform hover:-translate-y-2 transition-all">
                <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-brand-blue mb-4">Global Warehousing</h3>
                <p className="text-brand-gray-dark leading-relaxed">Strategic storage solutions across our global network of high-tech distribution centers.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 transform hover:-translate-y-2 transition-all">
                <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04kM12 21.355r-.343-.133a11.97 11.97 0 01-6.107-6.107L5.414 15l.133-.343a11.97 11.97 0 016.107-6.107l.343.133a11.97 11.97 0 016.107 6.107l.133.343a11.97 11.97 0 01-6.107 6.107z"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-brand-blue mb-4">Secure Delivery</h3>
                <p className="text-brand-gray-dark leading-relaxed">Real-time monitoring and insurance for every package, ensuring safe arrival.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Hero Section 2 */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <img 
                src="/warehouse.jpg" 
                alt="Logistics" 
                className="rounded-[40px] shadow-2xl"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-4xl font-black text-brand-blue mb-6 leading-tight">
                Enterprise Logistics for <br />the Digital Age
              </h2>
              <p className="text-lg text-brand-gray-dark mb-8 leading-relaxed">
                From small parcels to full container loads, ParcelX provides the infrastructure and technology to scale your supply chain globally. Our AI-driven routing ensures your cargo reaches its destination via the most efficient path.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 font-bold text-brand-blue">
                  <svg className="w-6 h-6 text-brand-orange" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  200+ Countries Covered
                </li>
                <li className="flex items-center gap-3 font-bold text-brand-blue">
                  <svg className="w-6 h-6 text-brand-orange" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  24/7 Global Support
                </li>
                <li className="flex items-center gap-3 font-bold text-brand-blue">
                  <svg className="w-6 h-6 text-brand-orange" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  End-to-End Visibility
                </li>
              </ul>
              <button className="bg-brand-blue text-white px-10 py-4 rounded-xl font-bold hover:bg-brand-blue/90 transition-all shadow-lg">
                Explore Our Network
              </button>
            </div>
          </div>
        </section>

        {/* Detailed Hero Section 3 */}
        <section className="py-24 bg-brand-blue text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <svg viewBox="0 0 100 100" fill="white"><circle cx="50" cy="50" r="50"></circle></svg>
          </div>
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16 relative z-10">
            <div className="flex-1">
              <h2 className="text-4xl font-black mb-6 leading-tight">
                The Smartest Way to <br />Ship Locally
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Our last-mile delivery network uses electric vehicles and optimized routing to reduce your carbon footprint while guaranteeing same-day delivery in major metropolitan areas.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <p className="text-4xl font-black text-brand-orange">99.9%</p>
                  <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mt-2">Success Rate</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-brand-orange">15M+</p>
                  <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mt-2">Packages/Year</p>
                </div>
              </div>
              <button className="bg-brand-orange text-white px-10 py-4 rounded-xl font-bold hover:bg-orange-600 transition-all shadow-lg">
                Start Local Shipping
              </button>
            </div>
            <div className="flex-1">
              <img 
                src="/delivery-van.jpg" 
                alt="Delivery" 
                className="rounded-[40px] shadow-2xl scale-110"
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
