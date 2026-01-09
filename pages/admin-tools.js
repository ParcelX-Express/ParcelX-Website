import React from 'react';
import Link from 'next/link';

export default function AdminTools() {
  const tools = [
    { name: 'User Management', description: 'Manage team members and permissions', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z' },
    { name: 'Shipping Rules', description: 'Configure automated shipping rules', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
    { name: 'API Access', description: 'Manage API keys and integrations', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
    { name: 'Analytics', description: 'View detailed shipping analytics', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
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
        <h1 className="text-3xl font-bold text-brand-blue mb-8">Administrative Tools</h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          {tools.map((tool) => (
            <div key={tool.name} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:border-brand-orange transition-colors cursor-pointer">
              <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={tool.icon} />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{tool.name}</h3>
              <p className="text-gray-500 text-sm">{tool.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
