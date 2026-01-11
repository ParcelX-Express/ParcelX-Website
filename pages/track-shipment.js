import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function TrackShipment() {
  const router = useRouter();
  const [trackingNumber, setTrackingNumber] = useState('');
  const [shipment, setShipment] = useState(null);
  const [trackingUpdates, setTrackingUpdates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    if (router.query.id) {
      setTrackingNumber(router.query.id);
      handleTrack(router.query.id);
    }
  }, [router.query.id]);

  const handleTrack = async (trackingId = trackingNumber) => {
    if (!trackingId.trim()) {
      setError('Please enter a tracking number');
      return;
    }

    setLoading(true);
    setError('');
    setSearched(true);

    try {
      const response = await fetch('/api/track', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tracking_number: trackingId.trim() }),
      });

      const data = await response.json();

      if (!response.ok) {
        setShipment(null);
        setTrackingUpdates([]);
        setError(data.error || 'No shipment found with this tracking number. Please check and try again.');
        setLoading(false);
        return;
      }

      setShipment(data.shipment);
      setTrackingUpdates(data.tracking_updates || []);
    } catch (err) {
      setError('An error occurred while fetching shipment data.');
    } finally {
      setLoading(false);
    }
  };

  const getStatusProgress = (status) => {
    const statuses = ['Pending', 'Processing', 'In Transit', 'Out for Delivery', 'Delivered'];
    const index = statuses.findIndex(s => s.toLowerCase() === status?.toLowerCase());
    return index >= 0 ? ((index + 1) / statuses.length) * 100 : 0;
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'delivered': return 'bg-green-500 text-green-100';
      case 'in transit': return 'bg-blue-500 text-blue-100';
      case 'out for delivery': return 'bg-orange-500 text-orange-100';
      case 'processing': return 'bg-yellow-500 text-yellow-100';
      default: return 'bg-gray-500 text-gray-100';
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-brand-gray-light flex flex-col">
      <header className="bg-brand-blue text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tight">PARCEL<span className="text-brand-orange text-3xl">X</span></span>
          </Link>
          <div className="flex items-center gap-3 md:gap-6">
            <div className="flex items-center gap-2 md:gap-4">
              <Link href="/signup" className="text-[10px] md:text-xs font-bold uppercase hover:text-brand-orange transition-colors bg-brand-orange hover:bg-orange-600 px-2 py-1 md:px-4 md:py-2 rounded">Sign Up</Link>
              <Link href="/login" className="text-[10px] md:text-xs font-bold uppercase hover:text-brand-orange transition-colors border border-white/30 px-2 py-1 md:px-4 md:py-2 rounded hover:bg-white/10">Log In</Link>
            </div>
            <Link href="/dashboard" className="hidden md:block hover:text-brand-orange transition-colors font-bold text-sm">Dashboard</Link>
          </div>
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
            onChange={(e) => setTrackingNumber(e.target.value.toUpperCase())}
            onKeyDown={(e) => e.key === 'Enter' && handleTrack()}
            className="flex-grow px-6 py-4 rounded-xl border-none focus:ring-0 outline-none text-lg text-brand-blue font-mono"
          />
          <button 
            onClick={() => handleTrack()} 
            disabled={loading}
            className="bg-brand-orange text-white px-10 py-4 rounded-xl font-bold hover:bg-orange-600 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Searching...
              </>
            ) : (
              'Track Now'
            )}
          </button>
        </div>

        {error && searched && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8 text-center">
            <svg className="w-12 h-12 text-red-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-red-600 font-medium">{error}</p>
            <p className="text-red-400 text-sm mt-2">Make sure you've entered the correct tracking number.</p>
          </div>
        )}

        {shipment && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="bg-brand-blue p-6 text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">Tracking Number</p>
                  <h2 className="text-2xl font-mono font-bold">{shipment.tracking_number}</h2>
                </div>
                <div className="text-right">
                  <span className={`${getStatusColor(shipment.status)} px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider`}>
                    {shipment.status}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs uppercase font-bold text-gray-400 mb-1">Origin</p>
                      <p className="text-lg font-bold text-brand-blue">{shipment.origin}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase font-bold text-gray-400 mb-1">Last Update</p>
                      <p className="text-brand-gray-dark">{formatDate(shipment.updated_at)}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs uppercase font-bold text-gray-400 mb-1">Destination</p>
                      <p className="text-lg font-bold text-brand-blue">{shipment.destination}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase font-bold text-gray-400 mb-1">Estimated Delivery</p>
                      <p className="text-lg font-bold text-brand-orange">
                        {shipment.estimated_delivery ? formatDate(shipment.estimated_delivery) : 'Calculating...'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-gray-100">
                  <h3 className="text-sm font-bold text-brand-blue uppercase mb-6 tracking-widest">Shipment Progress</h3>
                  <div className="relative mb-8">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-100 rounded-full"></div>
                    <div 
                      className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-brand-orange rounded-full transition-all duration-500"
                      style={{ width: `${getStatusProgress(shipment.status)}%` }}
                    ></div>
                    <div className="relative flex justify-between">
                      {['Pending', 'Processing', 'In Transit', 'Out for Delivery', 'Delivered'].map((status, i) => {
                        const isActive = getStatusProgress(shipment.status) >= ((i + 1) / 5) * 100;
                        return (
                          <div key={status} className={`w-4 h-4 rounded-full border-4 border-white shadow-sm ${isActive ? 'bg-brand-orange ring-4 ring-orange-100' : 'bg-gray-200'}`}></div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="flex justify-between text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                    <span>Pending</span>
                    <span>Processing</span>
                    <span>In Transit</span>
                    <span>Out for Delivery</span>
                    <span>Delivered</span>
                  </div>
                </div>

                {trackingUpdates.length > 0 && (
                  <div className="pt-8 mt-8 border-t border-gray-100">
                    <h3 className="text-sm font-bold text-brand-blue uppercase mb-6 tracking-widest">Tracking History</h3>
                    <div className="space-y-4">
                      {trackingUpdates.map((update, index) => (
                        <div key={update.id} className={`flex gap-4 ${index === 0 ? 'opacity-100' : 'opacity-70'}`}>
                          <div className="flex flex-col items-center">
                            <div className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-brand-orange' : 'bg-gray-300'}`}></div>
                            {index < trackingUpdates.length - 1 && <div className="w-0.5 h-full bg-gray-200 mt-1"></div>}
                          </div>
                          <div className="flex-1 pb-4">
                            <p className="text-sm font-bold text-brand-blue">{update.status}</p>
                            <p className="text-sm text-gray-600">{update.description}</p>
                            <div className="flex flex-wrap gap-2 text-xs text-gray-400 mt-1">
                              <span>{update.location}</span>
                              <span>•</span>
                              <span>{formatDate(update.occurrence_time)}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {searched && !shipment && !error && !loading && (
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center">
            <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
            <p className="text-gray-500 font-medium">No results found</p>
          </div>
        )}
      </main>

      <footer className="bg-brand-blue text-white py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">© 2026 ParcelX. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
