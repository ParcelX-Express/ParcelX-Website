import React, { useState } from 'react';
import Link from 'next/link';

export default function CreateShipment() {
  const [activeSection, setActiveSection] = useState('Ship from');

  const paymentMethods = [
    { name: 'AMEX', color: 'bg-[#0070d2]', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg' },
    { name: 'Diners Club', color: 'bg-white', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Diners_Club_Logo3.svg' },
    { name: 'Discover', color: 'bg-white', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Discover_Card_logo.svg' },
    { name: 'Mastercard', color: 'bg-white', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg' },
    { name: 'VISA', color: 'bg-white', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg' }
  ];

  return (
    <div className="min-h-screen bg-[#F2F2F2] font-sans text-[#333333]">
      {/* Professional Header - Using brand-blue from index */}
      <header className="bg-brand-blue text-white py-3 px-4 md:px-12 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-black tracking-tighter">
            PARCEL<span className="text-brand-orange">X</span>
          </Link>
          <div className="hidden md:flex gap-6 text-xs font-bold uppercase tracking-wider">
            <Link href="#" className="hover:underline">Sign Up or Log In</Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </button>
          <button className="p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Secondary Sub-header */}
      <div className="bg-white border-b border-gray-200 py-3 px-4 md:px-12 flex justify-between items-center">
        <span className="text-sm font-bold text-[#333333]">ParcelX Ship Manager</span>
        <button className="text-[#007AB7]">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      </div>

      <main className="max-w-4xl mx-auto p-0 md:p-8 bg-white min-h-screen md:min-h-0 md:mt-4 shadow-sm">
        <div className="p-4 md:p-0">
          <h1 className="text-2xl font-light mb-6">Create a Shipment</h1>

          {/* Special Items Notice */}
          <div className="bg-white p-6 border-l-4 border-brand-orange shadow-sm mb-6">
            <h2 className="text-lg font-bold mb-3">Shipping Special or large items?</h2>
            <p className="text-xs leading-relaxed text-gray-600 mb-5">
              If you're shipping items over 150lbs / 68kg or handling specialized materials, you'll need an account. 
              This includes freight, multi-piece shipments, dangerous goods and hazardous materials like lithium batteries, 
              dry ice, or alcoholic beverages. Items subject to International Traffic in Arms Regulations (ITAR) also apply.
            </p>
            <div className="flex gap-3">
              <button className="bg-brand-orange text-white px-6 py-2.5 font-bold uppercase text-xs hover:bg-[#e55800] transition-colors">
                CREATE ACCOUNT
              </button>
              <button className="border border-brand-blue text-brand-blue px-6 py-2.5 font-bold uppercase text-xs hover:bg-gray-50 transition-colors">
                LOG IN
              </button>
            </div>
          </div>
        </div>

        {/* Accordion Style Form */}
        <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
          {/* Ship From Section */}
          <div className="bg-white">
            <button 
              onClick={() => setActiveSection(activeSection === 'Ship from' ? '' : 'Ship from')}
              className="w-full flex items-center gap-3 p-4 text-left"
            >
              <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${activeSection === 'Ship from' ? 'border-brand-blue text-brand-blue' : 'border-gray-300 text-gray-300'}`}>
                {activeSection !== 'Ship from' && <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>}
                {activeSection === 'Ship from' && <div className="w-2 h-2 rounded-full bg-brand-blue" />}
              </div>
              <span className={`font-bold ${activeSection === 'Ship from' ? 'text-brand-blue' : 'text-gray-500'}`}>Ship from</span>
            </button>
            
            {activeSection === 'Ship from' && (
              <div className="px-12 pb-8 pt-2 space-y-8">
                <div>
                  <h3 className="text-sm font-bold mb-6">Your details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <div className="bg-[#F2F2F2] p-3 border-b-2 border-gray-400">
                      <label className="block text-[10px] font-bold uppercase text-gray-600">CONTACT NAME *</label>
                      <input type="text" className="w-full bg-transparent text-sm outline-none pt-1" defaultValue="John Doe" />
                    </div>
                    <div className="bg-[#F2F2F2] p-3 border-b-2 border-gray-400">
                      <label className="block text-[10px] font-bold uppercase text-gray-600">COMPANY</label>
                      <input type="text" className="w-full bg-transparent text-sm outline-none pt-1" />
                    </div>
                    <div className="bg-[#F2F2F2] p-3 border-b-2 border-gray-400">
                      <label className="block text-[10px] font-bold uppercase text-gray-600">TAX ID/EORI NUMBER</label>
                      <input type="text" className="w-full bg-transparent text-sm outline-none pt-1" />
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      <div className="col-span-3 bg-[#F2F2F2] p-3 border-b-2 border-gray-400">
                        <label className="block text-[10px] font-bold uppercase text-gray-600">PHONE NUMBER *</label>
                        <input type="text" className="w-full bg-transparent text-sm outline-none pt-1" />
                      </div>
                      <div className="bg-[#F2F2F2] p-3 border-b-2 border-gray-400">
                        <label className="block text-[10px] font-bold uppercase text-gray-600">EXT</label>
                        <input type="text" className="w-full bg-transparent text-sm outline-none pt-1" />
                      </div>
                    </div>
                    <div className="md:col-span-2 bg-[#F2F2F2] p-3 border-b-2 border-gray-400">
                      <label className="block text-[10px] font-bold uppercase text-gray-600">EMAIL *</label>
                      <input type="email" className="w-full bg-transparent text-sm outline-none pt-1" />
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="text-sm font-bold mb-6">Address</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <div className="bg-[#F2F2F2] p-3 border-b-2 border-gray-400 relative">
                      <label className="block text-[10px] font-bold uppercase text-gray-600">COUNTRY/TERRITORY *</label>
                      <select className="w-full bg-transparent text-sm outline-none pt-1 appearance-none">
                        <option>United States</option>
                      </select>
                      <div className="absolute right-3 bottom-4 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                    <div className="bg-[#F2F2F2] p-3 border-b-2 border-gray-400">
                      <label className="block text-[10px] font-bold uppercase text-gray-600">ADDRESS LINE 1 *</label>
                      <input type="text" className="w-full bg-transparent text-sm outline-none pt-1" />
                    </div>
                    <div className="bg-[#F2F2F2] p-3 border-b-2 border-gray-400">
                      <label className="block text-[10px] font-bold uppercase text-gray-600">ADDRESS LINE 2</label>
                      <input type="text" className="w-full bg-transparent text-sm outline-none pt-1" />
                    </div>
                    <div className="bg-[#F2F2F2] p-3 border-b-2 border-gray-400 relative">
                      <label className="block text-[10px] font-bold uppercase text-gray-600">STATE OR PROVINCE *</label>
                      <select className="w-full bg-transparent text-sm outline-none pt-1 appearance-none">
                        <option value="">Select</option>
                        <option>California</option>
                        <option>New York</option>
                      </select>
                      <div className="absolute right-3 bottom-4 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                    <div className="bg-[#F2F2F2] p-3 border-b-2 border-gray-400 relative">
                      <label className="block text-[10px] font-bold uppercase text-gray-600">CITY *</label>
                      <select className="w-full bg-transparent text-sm outline-none pt-1 appearance-none">
                        <option value="">Select</option>
                      </select>
                      <div className="absolute right-3 bottom-4 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                    <div className="bg-[#F2F2F2] p-3 border-b-2 border-gray-400">
                      <label className="block text-[10px] font-bold uppercase text-gray-600">ZIP CODE *</label>
                      <input type="text" className="w-full bg-transparent text-sm outline-none pt-1" />
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <div className="mt-0.5 w-5 h-5 border-2 border-[#007AB7] flex items-center justify-center">
                        <input type="checkbox" className="hidden" />
                      </div>
                      <span className="text-sm text-gray-700">This is a residential address</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <div className="mt-0.5 w-5 h-5 border-2 border-[#007AB7] flex items-center justify-center">
                        <input type="checkbox" className="hidden" />
                      </div>
                      <span className="text-sm text-gray-700">Use alternative address for billing</span>
                    </label>
                  </div>

                  <div className="mt-10">
                    <button className="bg-brand-orange text-white px-12 py-3.5 font-bold uppercase text-sm hover:bg-[#e55800] transition-colors shadow-md">
                      NEXT
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Other Sections */}
          {['Deliver to', 'Package details', 'Service', 'Service options', 'Pickup/drop-off', 'Notifications'].map((section) => (
            <div key={section} className="bg-white">
              <button 
                onClick={() => setActiveSection(activeSection === section ? '' : section)}
                className="w-full flex items-center gap-3 p-4 text-left group"
              >
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${activeSection === section ? 'border-brand-blue text-brand-blue' : 'border-gray-300 text-gray-300'}`}>
                   {activeSection !== section && <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>}
                   {activeSection === section && <div className="w-2 h-2 rounded-full bg-brand-blue" />}
                </div>
                <span className={`font-bold transition-colors ${activeSection === section ? 'text-brand-blue' : 'text-gray-400 group-hover:text-gray-600'}`}>{section}</span>
              </button>
              {activeSection === section && (
                <div className="px-12 pb-8 pt-2">
                  <p className="text-sm text-gray-500 italic">Section content for {section} will be implemented based on selection.</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Payment Section */}
        <div className="p-8 bg-white mt-4 border-t border-gray-100">
          <h3 className="text-sm font-bold mb-4">Accepted payment methods</h3>
          <div className="flex flex-wrap gap-4 mb-6">
            {paymentMethods.map((method) => (
              <div 
                key={method.name} 
                className={`w-14 h-9 ${method.color} border border-gray-200 rounded flex items-center justify-center p-1 shadow-sm hover:shadow-md transition-shadow cursor-default`}
                title={method.name}
              >
                <img src={method.logo} alt={method.name} className="max-h-full max-w-full object-contain" />
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-600">
            If you're looking to 'Bill to an Account', please <Link href="#" className="text-[#007AB7] underline hover:text-[#005a87]">create an account</Link> or <Link href="#" className="text-[#007AB7] underline hover:text-[#005a87]">log in</Link>
          </p>
          <div className="mt-8 border-t border-gray-100 pt-6">
            <button className="w-full py-3 text-sm font-bold text-[#007AB7] uppercase border border-gray-200 hover:bg-gray-50 transition-colors">
              Show more about ParcelX
            </button>
          </div>
        </div>
      </main>

      <footer className="py-12 px-6 text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-[#F2F2F2]">
        © 2026 ParcelX Global Systems. All rights reserved.
      </footer>
    </div>
  );
}