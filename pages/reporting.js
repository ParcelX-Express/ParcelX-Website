import React from 'react';
import Link from 'next/link';

export default function Reporting() {
  const reports = [
    { name: 'Shipment Summary', description: 'Overview of all shipments', period: 'Last 30 days' },
    { name: 'Cost Analysis', description: 'Breakdown of shipping costs', period: 'Last 30 days' },
    { name: 'Delivery Performance', description: 'On-time delivery statistics', period: 'Last 30 days' },
    { name: 'Volume Trends', description: 'Shipping volume over time', period: 'Last 90 days' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-brand-blue text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">ParcelX</Link>
          <Link href="/profile" className="text-sm hover:text-brand-orange">My Profile</Link>
        </div>
      </header>

      <main className="flex-grow max-w-4xl mx-auto w-full p-6">
        <h1 className="text-3xl font-bold text-brand-blue mb-8">Reporting</h1>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <p className="text-sm text-gray-500 mb-1">Total Shipments</p>
            <p className="text-3xl font-bold text-brand-blue">247</p>
            <p className="text-sm text-green-600 mt-2">+12% from last month</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <p className="text-sm text-gray-500 mb-1">Total Spent</p>
            <p className="text-3xl font-bold text-brand-blue">$4,532.00</p>
            <p className="text-sm text-green-600 mt-2">+8% from last month</p>
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mb-4">Available Reports</h2>
        <div className="grid gap-4">
          {reports.map((report) => (
            <div key={report.name} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 flex justify-between items-center hover:border-brand-orange transition-colors cursor-pointer">
              <div>
                <h3 className="font-bold text-gray-800">{report.name}</h3>
                <p className="text-sm text-gray-500">{report.description}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs text-gray-400">{report.period}</span>
                <button className="bg-brand-blue text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-orange transition-colors">
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
