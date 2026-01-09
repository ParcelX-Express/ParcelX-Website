import React from 'react';
import Link from 'next/link';

export default function CreateShipment() {
  return (
    <div className="min-h-screen bg-[#F2F2F2] font-sans text-[#333333]">
      {/* Professional Header */}
      <header className="bg-[#002855] text-white py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-black tracking-tighter">
            PARCEL<span className="text-[#FF6200]">X</span>
          </Link>
          <nav className="hidden md:flex gap-6 text-sm font-bold uppercase tracking-wider">
            <Link href="#" className="hover:text-[#FF6200]">Shipping</Link>
            <Link href="#" className="hover:text-[#FF6200]">Tracking</Link>
            <Link href="#" className="hover:text-[#FF6200]">Design & Print</Link>
            <Link href="#" className="hover:text-[#FF6200]">Locations</Link>
            <Link href="#" className="hover:text-[#FF6200]">Support</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-sm font-bold uppercase hover:text-[#FF6200]">Sign In / Register</button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-4 md:p-8">
        <h1 className="text-3xl font-light mb-8">Create a Shipment</h1>

        {/* Special Items Notice */}
        <div className="bg-white p-8 rounded shadow-sm mb-8 border-l-4 border-[#FF6200]">
          <h2 className="text-xl font-bold mb-4">Shipping Special or large items?</h2>
          <p className="text-sm leading-relaxed text-gray-600 mb-6">
            If you're shipping items over 150lbs / 68kg or handling specialized materials, you'll need an account. 
            This includes freight, multi-piece shipments, dangerous goods and hazardous materials like lithium batteries, 
            dry ice, or alcoholic beverages. Items subject to International Traffic in Arms Regulations (ITAR) also apply.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#FF6200] text-white px-8 py-3 font-bold uppercase text-sm hover:bg-orange-600 transition-colors">
              CREATE ACCOUNT
            </button>
            <button className="border-2 border-[#002855] text-[#002855] px-8 py-3 font-bold uppercase text-sm hover:bg-gray-50 transition-colors">
              LOG IN
            </button>
          </div>
        </div>

        {/* Form Sections */}
        <div className="space-y-4">
          {/* Ship From Section */}
          <details open className="bg-white rounded shadow-sm overflow-hidden">
            <summary className="bg-[#002855] text-white p-4 font-bold cursor-pointer list-none flex justify-between items-center">
              <span>Ship from</span>
              <span className="text-xs font-normal">Edit</span>
            </summary>
            <div className="p-8">
              <h3 className="text-lg font-bold mb-6">Your details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase text-gray-500">CONTACT NAME *(REQUIRED)</label>
                  <input type="text" className="w-full border-b border-gray-300 py-2 focus:border-[#002855] outline-none" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase text-gray-500">COMPANY</label>
                  <input type="text" className="w-full border-b border-gray-300 py-2 focus:border-[#002855] outline-none" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase text-gray-500">TAX ID/EORI NUMBER</label>
                  <input type="text" className="w-full border-b border-gray-300 py-2 focus:border-[#002855] outline-none" />
                </div>
                <div className="flex gap-4">
                  <div className="flex-grow space-y-1">
                    <label className="text-[10px] font-bold uppercase text-gray-500">PHONE NUMBER *(REQUIRED)</label>
                    <input type="text" className="w-full border-b border-gray-300 py-2 focus:border-[#002855] outline-none" />
                  </div>
                  <div className="w-24 space-y-1">
                    <label className="text-[10px] font-bold uppercase text-gray-500">EXT</label>
                    <input type="text" className="w-full border-b border-gray-300 py-2 focus:border-[#002855] outline-none" />
                  </div>
                </div>
                <div className="md:col-span-2 space-y-1">
                  <label className="text-[10px] font-bold uppercase text-gray-500">EMAIL *(REQUIRED)</label>
                  <input type="email" className="w-full border-b border-gray-300 py-2 focus:border-[#002855] outline-none" />
                </div>
              </div>

              <h3 className="text-lg font-bold mb-6 pt-6 border-t border-gray-100">Address</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase text-gray-500">COUNTRY/TERRITORY *(REQUIRED)</label>
                  <select className="w-full border-b border-gray-300 py-2 focus:border-[#002855] outline-none bg-transparent">
                    <option>United States</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase text-gray-500">ADDRESS LINE 1 *(REQUIRED)</label>
                  <input type="text" className="w-full border-b border-gray-300 py-2 focus:border-[#002855] outline-none" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase text-gray-500">ADDRESS LINE 2</label>
                  <input type="text" className="w-full border-b border-gray-300 py-2 focus:border-[#002855] outline-none" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase text-gray-500">ADDRESS LINE 3</label>
                  <input type="text" className="w-full border-b border-gray-300 py-2 focus:border-[#002855] outline-none" />
                </div>
                <div className="grid grid-cols-3 gap-4 md:col-span-2">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase text-gray-500">ZIP CODE *(REQUIRED)</label>
                    <input type="text" className="w-full border-b border-gray-300 py-2 focus:border-[#002855] outline-none" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase text-gray-500">STATE *(REQUIRED)</label>
                    <input type="text" className="w-full border-b border-gray-300 py-2 focus:border-[#002855] outline-none" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase text-gray-500">CITY *(REQUIRED)</label>
                    <input type="text" className="w-full border-b border-gray-300 py-2 focus:border-[#002855] outline-none" />
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 accent-[#002855]" />
                  <span className="text-sm font-medium">This is a residential address</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 accent-[#002855]" />
                  <span className="text-sm font-medium">Use alternative address for billing</span>
                </label>
              </div>

              <div className="mt-12 flex justify-end">
                <button className="bg-[#002855] text-white px-12 py-3 font-bold uppercase hover:bg-blue-900 transition-colors">
                  NEXT
                </button>
              </div>
            </div>
          </details>

          {/* Collapsed Sections */}
          {['Deliver to', 'Package details', 'Service', 'Service options', 'Pickup/drop-off', 'Notifications'].map((section) => (
            <div key={section} className="bg-white p-4 rounded shadow-sm text-gray-400 font-bold border-l-4 border-transparent">
              {section}
            </div>
          ))}

          {/* Payment Section */}
          <div className="bg-white p-8 rounded shadow-sm border-l-4 border-[#002855]">
            <h3 className="text-lg font-bold mb-4">Accepted payment methods</h3>
            <p className="text-sm text-gray-600 italic">
              If you're looking to 'Bill to an Account', please create an account or log in
            </p>
          </div>
        </div>
      </main>

      <footer className="mt-20 bg-[#F2F2F2] py-8 px-6 text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest border-t border-gray-200">
        © 2026 ParcelX Global Systems. All rights reserved.
      </footer>
    </div>
  );
}