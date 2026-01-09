import React, { useState } from 'react';
import Link from 'next/link';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in', email, password);
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-gray-light">
      <header className="bg-brand-blue text-white p-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-2xl font-bold">ParcelX</Link>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center p-6">
        <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-brand-blue">Welcome Back</h2>
            <p className="text-brand-gray-dark mt-2">Enter your credentials to access your account</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-brand-gray-dark mb-2">Email Address</label>
              <input
                type="email"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-brand-gray-dark mb-2">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all"
                required
              />
            </div>
            <button type="submit" className="w-full bg-brand-orange text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition-all shadow-md transform active:scale-95">
              Login to Dashboard
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <p className="text-brand-gray-dark">
              New to ParcelX? <Link href="/signup" className="text-brand-orange font-bold hover:underline">Create an account</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
