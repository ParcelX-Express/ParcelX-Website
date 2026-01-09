import React, { useState } from 'react';
import Link from 'next/link';

const NavItem = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-5 px-6 text-gray-800 hover:bg-gray-50 transition-colors group"
      >
        <span className="text-lg font-medium">{title}</span>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && options && (
        <div className="bg-gray-50 py-2">
          {options.map((option, idx) => {
            const label = typeof option === 'string' ? option : option.label;
            const href = typeof option === 'string' ? '#' : option.href;
            return (
              <Link
                key={idx}
                href={href}
                className="block py-3 px-10 text-gray-600 hover:text-brand-blue hover:bg-gray-100 transition-colors"
              >
                {label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default function Home() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const menuItems = [
    { 
      title: 'Shipping', 
      options: [
        { label: 'Create a Shipment', href: '/create-shipment' }, 
        { label: 'Shipping Rates & Delivery Times', href: '/shipping-rates' }, 
        { label: 'Schedule & Manage Pickups', href: '/schedule-pickups' }, 
        { label: 'Packing & Shipping Supplies', href: '/shipping-supplies' }
      ] 
    },
    { title: 'Tracking', options: ['Track a Shipment', 'Advanced Shipment Tracking', 'Manage Your Delivery'] },
    { title: 'Design & Print', options: ['Business Cards', 'Flyers', 'Signs & Banners', 'Posters'] },
    { title: 'Locations', options: ['Find a Location', 'Drop off a Package', 'In-Store Services'] },
    { title: 'Support', options: ['Customer Support', 'File a Claim', 'Frequently Asked Questions'] },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 leading-normal font-sans">
      {/* FedEx Style Header */}
      <header className="bg-brand-blue text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-3xl font-black tracking-tight">PARCEL<span className="text-brand-orange text-4xl">X</span></span>
          </Link>
          
          <div className="flex items-center gap-4 md:gap-6">
            <div className="hidden lg:flex items-center gap-4 border-r border-white/20 pr-6 mr-2">
              <button className="text-xs font-bold uppercase hover:text-brand-orange transition-colors">Sign Up</button>
              <button className="text-xs font-bold uppercase hover:text-brand-orange transition-colors">Log In</button>
            </div>
            <div className="relative">
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className={`p-1.5 rounded-full transition-colors flex items-center justify-center ${isProfileOpen ? 'bg-white/20' : 'hover:bg-white/10'}`}
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              </button>

              {/* Profile Dropdown */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-3 w-72 bg-white rounded-lg shadow-2xl py-2 z-[70] text-gray-800 animate-in fade-in zoom-in duration-200 border border-gray-100">
                  <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                    <button className="text-[#007AB7] font-bold text-sm uppercase hover:underline">SIGN UP / LOG IN</button>
                    <button 
                      onClick={() => setIsProfileOpen(false)}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="py-2">
                    {['My profile', 'Administrative tools', 'Email preferences', 'Address book', 'View & pay bill', 'Reporting'].map((item) => (
                      <button key={item} className="w-full text-left px-6 py-3 text-sm hover:bg-gray-50 transition-colors">{item}</button>
                    ))}
                  </div>
                  <div className="px-6 py-4 bg-gray-50/80 mt-2">
                    <p className="text-xs text-gray-500 leading-relaxed">
                      <button className="text-[#007AB7] underline font-bold">Open an account</button> to save on shipping costs, time-saving tools and more!
                    </p>
                  </div>
                </div>
              )}
            </div>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors z-[60]"
              aria-label="Toggle Menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Modal */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-brand-blue/60 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            ></div>
            
            {/* Modal Content */}
            <div className="relative bg-white w-full max-w-lg max-h-[90vh] overflow-hidden rounded-xl shadow-2xl flex flex-col">
              {/* Modal Header */}
              <div className="bg-brand-blue p-4 flex flex-col gap-4 relative">
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute right-4 top-4 text-white hover:text-brand-orange transition-colors z-[110]"
                  aria-label="Close Menu"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <div className="flex items-center">
                  <span className="text-2xl font-black tracking-tighter text-white">
                    PARCEL<span className="text-brand-orange">X</span>
                  </span>
                </div>
                
                <div className="relative mt-2">
                  <input 
                    type="text" 
                    placeholder="Search or Tracking Numbers"
                    className="w-full bg-white/10 border border-white/20 rounded text-white py-3 pl-4 pr-12 placeholder:text-white/50 outline-none focus:bg-white/20"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="flex-grow overflow-y-auto">
                <div className="p-6 border-b border-gray-100 flex gap-4">
                  <button className="flex-grow bg-brand-orange text-white py-3 font-bold uppercase text-sm hover:bg-orange-600 transition-colors shadow-sm">Sign Up</button>
                  <button className="flex-grow border-2 border-brand-blue text-brand-blue py-3 font-bold uppercase text-sm hover:bg-gray-50 transition-colors">Log In</button>
                </div>
                <div className="py-2">
                  {menuItems.map((item, index) => (
                    <NavItem key={index} title={item.title} options={item.options} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {/* Cinematic Hero Section with FedEx Layout */}
        <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/shipping-port.jpg" 
              alt="Global Shipping" 
              className="w-full h-full object-cover brightness-[0.6]"
            />
          </div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl md:text-7xl font-light text-white leading-tight tracking-tight">
              Ship, manage, <br />track, deliver
            </h1>
          </div>
        </section>

        {/* Action Grid (Rate & Ship, Track, Locations) */}
        <section className="relative z-20 -mt-24 max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 shadow-2xl">
            {/* RATE & SHIP */}
            <div className="bg-gray-50 p-10 flex flex-col items-center justify-center text-center border-r border-gray-200">
              <div className="w-20 h-20 mb-6 text-gray-700">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-xl font-black tracking-widest text-brand-blue uppercase">RATE & SHIP</span>
            </div>
            
            {/* TRACK */}
            <div className="bg-brand-blue p-10 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 mb-6 text-white">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7V3m0 0L8 5m2-2l2 2" />
                </svg>
              </div>
              <span className="text-xl font-black tracking-widest text-white uppercase">TRACK</span>
            </div>

            {/* LOCATIONS */}
            <div className="bg-gray-50 p-10 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 mb-6 text-gray-700">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="text-xl font-black tracking-widest text-brand-blue uppercase">LOCATIONS</span>
            </div>
          </div>
        </section>

        {/* Tracking ID Input Section */}
        <section className="py-16 max-w-4xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row border-2 border-gray-200">
            <input
              type="text"
              placeholder="TRACKING ID"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              className="flex-grow px-8 py-6 text-xl outline-none placeholder:text-gray-400 font-light"
            />
            <Link 
              href={`/track-shipment?id=${trackingNumber}`}
              className="bg-brand-orange text-white px-12 py-6 font-black text-xl flex items-center justify-center gap-4 hover:bg-orange-600 transition-colors"
            >
              TRACK <span className="text-2xl">→</span>
            </Link>
          </div>
        </section>

        {/* Large Brand Icon Section */}
        <section className="py-12 flex justify-center">
          <div className="w-48 h-48 border-4 border-brand-blue rounded-full flex items-center justify-center p-8">
            <svg fill="none" stroke="brand-blue" viewBox="0 0 24 24" className="w-full h-full text-brand-blue">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 11V7m0 4l-2-2m2 2l2-2" />
            </svg>
          </div>
        </section>

        {/* Built for the Future Section */}
        <section className="py-24 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="flex-1">
              <div className="aspect-video bg-gray-200 rounded-3xl shadow-xl flex items-center justify-center overflow-hidden relative group">
                <img 
                  src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1000" 
                  alt="Global Logistics" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-4xl font-black text-brand-blue mb-6 leading-tight">Global Infrastructure, <br/>Local Expertise</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                ParcelX operates one of the world's most sophisticated logistics networks. From automated sorting facilities to carbon-neutral last-mile delivery, we're redefining how the world moves.
              </p>
              <button className="bg-brand-blue text-white px-10 py-4 rounded-xl font-bold hover:bg-brand-orange transition-all shadow-lg hover:shadow-brand-orange/20">
                LEARN ABOUT OUR NETWORK
              </button>
            </div>
          </div>
        </section>

        {/* New Solutions Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-4xl font-black text-brand-blue mb-16 text-center">Custom Solutions for Every Business</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'E-commerce',
                  desc: 'Scale your online store with seamless integrations and global fulfillment centers.',
                  icon: 'M16 11V7a4 4 0 11-8 0v4M5 9h14l1 12H4L5 9z'
                },
                {
                  title: 'Healthcare',
                  desc: 'Temperature-controlled shipping for sensitive medical supplies and pharmaceuticals.',
                  icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                },
                {
                  title: 'Aerospace',
                  desc: 'Precision logistics for high-value components and urgent AOG requirements.',
                  icon: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
                }
              ].map((item) => (
                <div key={item.title} className="p-8 border border-gray-100 rounded-3xl hover:border-brand-orange transition-all hover:shadow-2xl hover:-translate-y-2 group">
                  <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-orange transition-colors">
                    <svg className="w-6 h-6 text-brand-blue group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-brand-blue mb-4">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sustainability Section */}
        <section className="py-24 bg-brand-blue text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
             <svg className="w-full h-full" viewBox="0 0 100 100" fill="currentColor">
                <path d="M50 0L100 50L50 100L0 50Z" />
             </svg>
          </div>
          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <span className="text-brand-orange font-bold tracking-widest text-sm uppercase mb-4 block">Sustainability</span>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Committed to <br/>Net Zero by 2040</h2>
              <p className="text-lg text-white/70 mb-10 leading-relaxed">
                We're electrifying our global delivery fleet and investing in sustainable aviation fuels to ensure our growth doesn't come at the cost of the planet.
              </p>
              <button className="bg-white text-brand-blue px-10 py-4 rounded-xl font-bold hover:bg-brand-orange hover:text-white transition-all">
                OUR PROGRESS REPORT
              </button>
            </div>
            <div className="flex-1 w-full">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Electric Vehicles', value: '10k+' },
                  { label: 'Renewable Energy', value: '100%' },
                  { label: 'Trees Planted', value: '1M+' },
                  { label: 'Carbon Offset', value: '500k t' }
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                    <div className="text-3xl font-black text-brand-orange mb-1">{stat.value}</div>
                    <div className="text-xs text-white/50 uppercase font-bold tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* New Logistics in Action Section */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1 space-y-8">
                <h2 className="text-4xl font-black text-brand-blue leading-tight">Delivering Excellence, <br/>One Parcel at a Time</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our dedicated team ensures your shipments are handled with precision and care. From the moment we pick up your package to the final delivery, we leverage advanced tracking and logistics technology to keep your business moving forward.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="border-l-4 border-brand-orange pl-6">
                    <div className="text-2xl font-black text-brand-blue">Reliable</div>
                    <p className="text-sm text-gray-500">Industry-leading on-time delivery rates.</p>
                  </div>
                  <div className="border-l-4 border-brand-orange pl-6">
                    <div className="text-2xl font-black text-brand-blue">Global</div>
                    <p className="text-sm text-gray-500">Spanning 220+ countries and territories.</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 space-y-12">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbca?auto=format&fit=crop&q=80&w=1000" alt="Logistics Warehouse" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&q=80&w=1000" alt="Courier Delivery" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1000" alt="Shipping Packages" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-2xl bg-brand-orange flex items-center justify-center p-12 text-white text-center">
                  <div className="space-y-4">
                    <div className="text-5xl font-black">24/7</div>
                    <div className="text-lg font-bold uppercase tracking-widest">Support & Monitoring</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Network Map Mockup */}
        <section className="py-24 bg-gray-50">
           <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
              <h2 className="text-4xl font-black text-brand-blue mb-6">Our Global Footprint</h2>
              <p className="text-lg text-gray-500 mb-16 max-w-2xl mx-auto">
                Connecting 220+ countries and territories through 650+ aircraft and 200,000+ motorized vehicles.
              </p>
              <div className="relative aspect-[21/9] bg-white rounded-[40px] shadow-2xl overflow-hidden border border-gray-100">
                <div className="absolute inset-0 opacity-40">
                  <img src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="World Map" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="p-8 bg-brand-blue/90 backdrop-blur-md rounded-3xl text-white max-w-sm shadow-2xl">
                      <div className="text-brand-orange font-black text-2xl mb-2">Real-time Network</div>
                      <p className="text-sm text-white/70 mb-6">Experience our logistics network in action through our interactive live-tracking globe.</p>
                      <button className="w-full py-3 bg-white text-brand-blue font-bold rounded-xl hover:bg-brand-orange hover:text-white transition-all">LAUNCH EXPLORER</button>
                   </div>
                </div>
              </div>
           </div>
        </section>
      </main>

      <footer className="bg-brand-blue text-white pt-24 pb-12 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 text-center md:text-left">
            <div className="md:col-span-1">
              <Link href="/" className="inline-block mb-6">
                <span className="text-3xl font-black tracking-tighter">PARCEL<span className="text-brand-orange">X</span></span>
              </Link>
              <p className="text-white/40 text-sm leading-relaxed mb-8">
                Leading the global logistics revolution with technology, passion, and reliability since 2026.
              </p>
              <div className="flex justify-center md:justify-start gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors cursor-pointer group">
                    <div className="w-4 h-4 bg-white/40 group-hover:bg-white rounded-sm transition-colors"></div>
                  </div>
                ))}
              </div>
            </div>
            
            {[
              { title: 'Company', links: ['About Us', 'Careers', 'Sustainability', 'Newsroom', 'Investor Relations'] },
              { title: 'Support', links: ['Customer Support', 'Tracking Tools', 'Shipping Rates', 'Claims', 'Global Contact'] },
              { title: 'Services', links: ['E-commerce', 'Healthcare', 'Small Business', 'Supply Chain', 'Customs Clearance'] }
            ].map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-black uppercase tracking-widest text-brand-orange mb-8">{col.title}</h4>
                <ul className="space-y-4">
                  {col.links.map((link) => (
                    <li key={link}>
                      <Link href="#" className="text-white/60 hover:text-white text-sm transition-colors">{link}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">
              © 2026 ParcelX Global Systems. All rights reserved.
            </div>
            <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
              <Link href="#" className="hover:text-brand-orange">Legal</Link>
              <Link href="#" className="hover:text-brand-orange">Security</Link>
              <Link href="#" className="hover:text-brand-orange">Privacy</Link>
              <Link href="#" className="hover:text-brand-orange">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
