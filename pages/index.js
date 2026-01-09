import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-gray-light">
      {/* Header */}
      <header className="bg-brand-blue text-white p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">ParcelX</h1>
          <nav className="space-x-6">
            <Link href="/" className="hover:text-brand-orange transition-colors">Home</Link>
            <Link href="/track-shipment" className="hover:text-brand-orange transition-colors">Track</Link>
            <Link href="/login" className="hover:text-brand-orange transition-colors">Login</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-3xl">
          <h2 className="text-5xl font-extrabold text-brand-blue mb-6 leading-tight">
            Global Logistics, <span className="text-brand-orange">Simplified</span>
          </h2>
          <p className="text-xl text-brand-gray-dark mb-10 max-w-2xl mx-auto">
            Fast, reliable global shipping with real-time tracking and world-class security. 
            Trusted by thousands of businesses worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="bg-brand-orange text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Get Started Now
            </Link>
            <Link href="/track-shipment" className="bg-white text-brand-blue border-2 border-brand-blue px-8 py-4 rounded-lg font-bold hover:bg-brand-blue hover:text-white transition-all shadow-md">
              Track Shipment
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-brand-blue text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold mb-4">ParcelX</h3>
            <p className="text-gray-400">Moving the world, one package at a time.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Express Delivery</li>
              <li>Freight Shipping</li>
              <li>Warehousing</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Contact Us</li>
              <li>Help Center</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
          © 2026 ParcelX Global Logistics. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
