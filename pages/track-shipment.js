import React, { useState } from 'react';
import Link from 'next/link';

export default function TrackShipment() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [shipment, setShipment] = useState(null);

  const handleTrack = () => {
    if (trackingNumber.trim()) {
      setShipment({
        trackingNumber,
        status: 'In Transit',
        location: 'John F. Kennedy Intl Airport (JFK), NY',
        estimatedDelivery: '2026-01-12',
        origin: 'London Heathrow (LHR), UK',
        destination: 'New York (JFK), USA',
        lastUpdate: '2026-01-09 14:30 GMT'
      });
    }
  };

  return (
    <div className="min-h-screen bg-brand-gray-light flex flex-col">
      <header className="bg-brand-blue text-white p-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">ParcelX</Link>
          <Link href="/dashboard" className="hover:text-brand-orange transition-colors font-bold">Dashboard</Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto w-full p-6 lg:p-10 flex-grow">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-brand-blue mb-4">Real-Time Tracking</h1>
          <p className="text-brand-gray-dark text-lg">Enter your tracking number to see the current status of your shipment.</p>
        </div>

        <div className="bg-white p-2 rounded-2xl shadow-xl border border-gray-100 flex flex-col sm:flex-row gap-2 mb-10">
          <input
            type="text"
            placeholder="Enter Tracking Number (e.g. PX123456)"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            className="flex-grow px-6 py-4 rounded-xl border-none focus:ring-0 outline-none text-lg text-brand-blue font-mono"
          />
          <button onClick={handleTrack} className="bg-brand-orange text-white px-10 py-4 rounded-xl font-bold hover:bg-orange-600 transition-all shadow-md">
            Track Now
          </button>
        </div>

        {shipment && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="bg-brand-blue p-6 text-white flex justify-between items-center">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">Tracking Number</p>
                  <h2 className="text-2xl font-mono font-bold">{shipment.trackingNumber}</h2>
                </div>
                <div className="text-right">
                  <span className="bg-blue-500/20 text-blue-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-500/30">
                    {shipment.status}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs uppercase font-bold text-gray-400 mb-1">Current Location</p>
                      <p className="text-lg font-bold text-brand-blue">{shipment.location}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase font-bold text-gray-400 mb-1">Last Update</p>
                      <p className="text-brand-gray-dark">{shipment.lastUpdate}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs uppercase font-bold text-gray-400 mb-1">Estimated Delivery</p>
                      <p className="text-lg font-bold text-brand-orange">{shipment.estimatedDelivery}</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <p className="text-xs uppercase font-bold text-gray-400 mb-1">Origin</p>
                        <p className="text-sm font-bold text-brand-blue">{shipment.origin}</p>
                      </div>
                      <div className="flex-1">
                        <p className="text-xs uppercase font-bold text-gray-400 mb-1">Destination</p>
                        <p className="text-sm font-bold text-brand-blue">{shipment.destination}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-gray-100">
                  <h3 className="text-sm font-bold text-brand-blue uppercase mb-6 tracking-widest">Shipment Progress</h3>
                  <div className="relative">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-100 rounded-full"></div>
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2/3 h-1 bg-brand-orange rounded-full"></div>
                    <div className="relative flex justify-between">
                      <div className="w-4 h-4 rounded-full bg-brand-orange border-4 border-white shadow-sm ring-4 ring-orange-100"></div>
                      <div className="w-4 h-4 rounded-full bg-brand-orange border-4 border-white shadow-sm ring-4 ring-orange-100"></div>
                      <div className="w-4 h-4 rounded-full bg-brand-orange border-4 border-white shadow-sm ring-4 ring-orange-100"></div>
                      <div className="w-4 h-4 rounded-full bg-gray-200 border-4 border-white shadow-sm"></div>
                    </div>
                  </div>
                  <div className="flex justify-between mt-4 text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                    <span>Ordered</span>
                    <span>Processing</span>
                    <span>In Transit</span>
                    <span>Delivered</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
