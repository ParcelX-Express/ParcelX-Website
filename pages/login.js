import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [needsVerification, setNeedsVerification] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [resendMessage, setResendMessage] = useState('');
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        router.push('/dashboard');
      }
    };
    checkSession();
  }, [router]);

  const handleResendVerification = async () => {
    if (!email) {
      setResendMessage('Please enter your email address first.');
      return;
    }
    
    setResendLoading(true);
    setResendMessage('');
    
    try {
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email: email,
      });
      
      if (error) {
        setResendMessage('Failed to resend verification email. Please try again.');
      } else {
        setResendMessage('Verification email sent! Please check your inbox.');
      }
    } catch (err) {
      setResendMessage('An error occurred. Please try again.');
    } finally {
      setResendLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setNeedsVerification(false);

    try {
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) {
        if (signInError.message.includes('Email not confirmed')) {
          setError('Your email is not verified yet. Please check your inbox for the verification link.');
          setNeedsVerification(true);
        } else if (signInError.message.includes('Invalid login credentials')) {
          setError('Invalid email or password. Please check your credentials and try again.');
        } else {
          setError(signInError.message);
        }
        return;
      }

      if (data.session) {
        router.push('/dashboard');
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
            <h2 className="text-3xl font-bold text-brand-blue">Welcome Back</h2>
            <p className="text-brand-gray-dark mt-2">Enter your credentials to access your account</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
              {error}
              {needsVerification && (
                <div className="mt-3">
                  <button
                    onClick={handleResendVerification}
                    disabled={resendLoading}
                    className="text-brand-blue font-bold hover:underline"
                  >
                    {resendLoading ? 'Sending...' : 'Resend verification email'}
                  </button>
                  {resendMessage && (
                    <p className={`mt-2 ${resendMessage.includes('sent') ? 'text-green-600' : 'text-red-600'}`}>
                      {resendMessage}
                    </p>
                  )}
                </div>
              )}
            </div>
          )}
          
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
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-brand-orange text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition-all shadow-md transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Logging in...
                </>
              ) : (
                'Login to Dashboard'
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link href="/forgot-password" className="text-brand-blue text-sm hover:underline">
              Forgot your password?
            </Link>
          </div>

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
