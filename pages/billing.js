import React from 'react';
import Link from 'next/link';

export default function Billing() {
  const invoices = [
    { id: 'INV-001', date: '2026-01-05', amount: '$125.00', status: 'Paid' },
    { id: 'INV-002', date: '2026-01-02', amount: '$89.50', status: 'Paid' },
    { id: 'INV-003', date: '2025-12-28', amount: '$234.00', status: 'Paid' },
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
        <h1 className="text-3xl font-bold text-brand-blue mb-8">View & Pay Bill</h1>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 mb-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-sm text-gray-500">Current Balance</p>
              <p className="text-3xl font-bold text-brand-blue">$0.00</p>
            </div>
            <button className="bg-brand-orange text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors">
              Pay Now
            </button>
          </div>
          <p className="text-sm text-green-600">All invoices are paid. Thank you!</p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Invoices</h2>
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Invoice</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Date</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Amount</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-500">Status</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="border-t border-gray-100">
                  <td className="px-6 py-4 text-brand-blue font-medium">{invoice.id}</td>
                  <td className="px-6 py-4 text-gray-600">{invoice.date}</td>
                  <td className="px-6 py-4 text-gray-800 font-medium">{invoice.amount}</td>
                  <td className="px-6 py-4">
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">{invoice.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
