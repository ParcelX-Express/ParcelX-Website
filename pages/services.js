import React from 'react';
import Link from 'next/link';

const solutions = [
  {
    title: "Air Freight",
    description: "Urgent global shipping with daily departures and priority handling.",
    icon: "✈️"
  },
  {
    title: "Ocean Cargo",
    description: "Cost-effective international shipping for full and partial container loads.",
    icon: "🚢"
  },
  {
    title: "Cold Chain",
    description: "Temperature-controlled logistics for sensitive pharmaceuticals and food.",
    icon: "❄️"
  },
  {
    title: "E-commerce",
    description: "Integrated fulfillment and last-mile delivery for online retailers.",
    icon: "🛒"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-brand-gray-light">
      <header className="bg-brand-blue text-white p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-black">PARCEL<span className="text-brand-orange">X</span></Link>
          <Link href="/" className="font-bold text-sm uppercase tracking-widest">Back to Home</Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-black text-brand-blue mb-16 text-center">GLOBAL SOLUTIONS</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((s, i) => (
            <div key={i} className="bg-white p-10 rounded-[2rem] shadow-xl border border-gray-100 hover:border-brand-orange transition-all group">
              <span className="text-5xl mb-6 block">{s.icon}</span>
              <h3 className="text-3xl font-black text-brand-blue mb-4 uppercase tracking-tight">{s.title}</h3>
              <p className="text-brand-gray-dark text-lg mb-8 leading-relaxed font-medium">{s.description}</p>
              <button className="bg-brand-blue text-white px-8 py-3 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-brand-orange transition-all">Get a Quote</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
