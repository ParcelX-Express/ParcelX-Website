import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Dashboard() {
  const [shipments, setShipments] = useState([]);

  useEffect(() => {
    setShipments([
      { trackingNumber: 'PX123456', status: 'In Transit', destination: 'New York, USA', date: '2026-01-08' },
      { trackingNumber: 'PX654321', status: 'Delivered', destination: 'London, UK', date: '2026-01-05' },
      { trackingNumber: 'PX987654', status: 'Pending', destination: 'Tokyo, JP', date: '2026-01-09' },
    ]);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending': return 'bg-gray-100 text-gray-600';
      case 'In Transit': return 'bg-blue-100 text-blue-600';
      case 'Out for Delivery': return 'bg-orange-100 text-orange-600';
      case 'Delivered': return 'bg-green-100 text-green-600';
      case 'Delayed': return 'bg-red-100 text-red-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-brand-gray-light flex flex-col">
      <header className="bg-brand-blue text-white p-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">ParcelX</Link>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-300">Welcome, Member</span>
            <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center font-bold">M</div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto w-full p-6 lg:p-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-brand-blue">Shipment Dashboard</h1>
            <p className="text-brand-gray-dark mt-1">Manage and track your global shipments</p>
          </div>
          <Link href="/track-shipment" className="bg-brand-orange text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition-all shadow-md text-center">
            New Tracking Request
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-brand-blue text-white">
                  <th className="p-5 font-bold">Tracking Number</th>
                  <th className="p-5 font-bold">Destination</th>
                  <th className="p-5 font-bold">Date</th>
                  <th className="p-5 font-bold">Status</th>
                  <th className="p-5 font-bold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {shipments.map((shipment, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="p-5 font-mono font-bold text-brand-blue">{shipment.trackingNumber}</td>
                    <td className="p-5 text-brand-gray-dark">{shipment.destination}</td>
                    <td className="p-5 text-brand-gray-dark">{shipment.date}</td>
                    <td className="p-5">
                      <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${getStatusColor(shipment.status)}`}>
                        {shipment.status}
                      </span>
                    </td>
                    <td className="p-5">
                      <button className="text-brand-blue font-bold hover:text-brand-orange transition-colors">View Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
