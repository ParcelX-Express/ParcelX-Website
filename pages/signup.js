import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabase';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name,
          },
        },
      });

      if (signUpError) {
        setError(signUpError.message);
        return;
      }

      if (data.user) {
        const { error: profileError } = await supabase
          .from('profiles')
          .upsert({
            id: data.user.id,
            full_name: name,
            email: email,
          });

        if (profileError) {
          console.error('Profile creation error:', profileError);
        }

        setSuccess(true);
        setTimeout(() => {
          router.push('/login');
        }, 2000);
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
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
            <h2 className="text-3xl font-bold text-brand-blue">Join ParcelX</h2>
            <p className="text-brand-gray-dark mt-2">Start shipping across the globe today</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-600 text-sm">
              Account created successfully! Redirecting to login...
            </div>
          )}

          <form onSubmit={handleSignup} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-brand-gray-dark mb-2">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all"
                required
                disabled={loading}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-brand-gray-dark mb-2">Email Address</label>
              <input
                type="email"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all"
                required
                disabled={loading}
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
                disabled={loading}
                minLength={6}
              />
              <p className="text-xs text-gray-500 mt-1">Minimum 6 characters</p>
            </div>
            <button 
              type="submit" 
              className="w-full bg-brand-orange text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition-all shadow-md transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <p className="text-brand-gray-dark">
              Already have an account? <Link href="/login" className="text-brand-orange font-bold hover:underline">Login</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
