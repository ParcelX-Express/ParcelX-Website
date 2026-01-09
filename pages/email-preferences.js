import React, { useState } from 'react';
import Link from 'next/link';

export default function EmailPreferences() {
  const [preferences, setPreferences] = useState({
    shipmentUpdates: true,
    promotions: false,
    newsletter: true,
    billing: true,
    security: true,
  });

  const togglePreference = (key) => {
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const preferenceItems = [
    { key: 'shipmentUpdates', label: 'Shipment Updates', description: 'Receive notifications about your shipment status' },
    { key: 'promotions', label: 'Promotions & Offers', description: 'Get exclusive deals and discount codes' },
    { key: 'newsletter', label: 'Newsletter', description: 'Monthly updates about ParcelX services' },
    { key: 'billing', label: 'Billing Notifications', description: 'Invoices and payment reminders' },
    { key: 'security', label: 'Security Alerts', description: 'Important account security notifications' },
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
        <h1 className="text-3xl font-bold text-brand-blue mb-8">Email Preferences</h1>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="space-y-6">
            {preferenceItems.map((item) => (
              <div key={item.key} className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0">
                <div>
                  <h3 className="font-medium text-gray-800">{item.label}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
                <button
                  onClick={() => togglePreference(item.key)}
                  className={`w-12 h-6 rounded-full transition-colors ${preferences[item.key] ? 'bg-brand-orange' : 'bg-gray-300'}`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${preferences[item.key] ? 'translate-x-6' : 'translate-x-0.5'}`} />
                </button>
              </div>
            ))}
          </div>
          
          <button className="mt-8 bg-brand-orange text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors">
            Save Preferences
          </button>
        </div>
      </main>
    </div>
  );
}
