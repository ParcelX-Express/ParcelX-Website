import React from 'react';
import Link from 'next/link';

export default function ShippingPage({ title }) {
  return (
    <div className="min-h-screen bg-[#F2F2F2] font-sans">
      <header className="bg-brand-blue text-white py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50">
        <Link href="/" className="text-2xl font-black tracking-tighter">
          PARCEL<span className="text-brand-orange">X</span>
        </Link>
      </header>
      <main className="max-w-4xl mx-auto p-8 bg-white mt-8 shadow-sm rounded">
        <h1 className="text-3xl font-light mb-6">{title}</h1>
        <p className="text-gray-600 mb-8">This page for {title} is currently under construction. Please check back later for more updates.</p>
        <Link href="/" className="text-brand-blue font-bold hover:underline">← Back to Home</Link>
      </main>
    </div>
  );
}