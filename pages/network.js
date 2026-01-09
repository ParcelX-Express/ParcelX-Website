import React from 'react';
import Link from 'next/link';

export default function Network() {
  return (
    <div className="min-h-screen bg-brand-blue text-white">
      <header className="p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-black">PARCEL<span className="text-brand-orange">X</span></Link>
          <Link href="/" className="font-bold text-sm uppercase tracking-widest">Home</Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-6xl font-black mb-12">OUR GLOBAL FOOTPRINT</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-20 font-medium leading-relaxed">
          Operating in over 210 countries with 1,400+ logistics hubs, we provide seamless connectivity across every continent.
        </p>
        
        <div className="bg-white/5 p-20 rounded-[3rem] border border-white/10 relative overflow-hidden">
           {/* Placeholder for Map visualization */}
           <div className="text-9xl opacity-20 mb-10">🌍</div>
           <h2 className="text-4xl font-black mb-6">INTERACTIVE MAP COMING SOON</h2>
           <p className="text-gray-400 font-bold uppercase tracking-widest">Connecting 15,000+ Port Pairs Daily</p>
        </div>
      </main>
    </div>
  );
}
