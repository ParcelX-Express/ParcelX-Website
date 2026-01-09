import React, { useState } from 'react';
import Link from 'next/link';

export default function AddressBook() {
  const [addresses] = useState([
    { id: 1, name: 'Home', address: '123 Main Street, Apt 4B', city: 'New York', state: 'NY', zip: '10001', isDefault: true },
    { id: 2, name: 'Office', address: '456 Business Ave, Suite 100', city: 'New York', state: 'NY', zip: '10017', isDefault: false },
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-brand-blue text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">ParcelX</Link>
          <Link href="/profile" className="text-sm hover:text-brand-orange">My Profile</Link>
        </div>
      </header>

      <main className="flex-grow max-w-4xl mx-auto w-full p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-brand-blue">Address Book</h1>
          <button className="bg-brand-orange text-white px-6 py-2 rounded-lg font-bold hover:bg-orange-600 transition-colors">
            + Add Address
          </button>
        </div>
        
        <div className="grid gap-4">
          {addresses.map((addr) => (
            <div key={addr.id} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-gray-800">{addr.name}</h3>
                    {addr.isDefault && (
                      <span className="bg-brand-blue text-white text-xs px-2 py-1 rounded">Default</span>
                    )}
                  </div>
                  <p className="text-gray-600">{addr.address}</p>
                  <p className="text-gray-600">{addr.city}, {addr.state} {addr.zip}</p>
                </div>
                <div className="flex gap-2">
                  <button className="text-brand-blue hover:text-brand-orange text-sm font-medium">Edit</button>
                  <button className="text-red-500 hover:text-red-600 text-sm font-medium">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
