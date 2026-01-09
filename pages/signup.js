import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabase';

const countries = [
  { code: 'US', name: 'United States', phoneCode: '+1' },
  { code: 'GB', name: 'United Kingdom', phoneCode: '+44' },
  { code: 'CA', name: 'Canada', phoneCode: '+1' },
  { code: 'AU', name: 'Australia', phoneCode: '+61' },
  { code: 'DE', name: 'Germany', phoneCode: '+49' },
  { code: 'FR', name: 'France', phoneCode: '+33' },
  { code: 'IT', name: 'Italy', phoneCode: '+39' },
  { code: 'ES', name: 'Spain', phoneCode: '+34' },
  { code: 'NL', name: 'Netherlands', phoneCode: '+31' },
  { code: 'BE', name: 'Belgium', phoneCode: '+32' },
  { code: 'CH', name: 'Switzerland', phoneCode: '+41' },
  { code: 'AT', name: 'Austria', phoneCode: '+43' },
  { code: 'SE', name: 'Sweden', phoneCode: '+46' },
  { code: 'NO', name: 'Norway', phoneCode: '+47' },
  { code: 'DK', name: 'Denmark', phoneCode: '+45' },
  { code: 'FI', name: 'Finland', phoneCode: '+358' },
  { code: 'IE', name: 'Ireland', phoneCode: '+353' },
  { code: 'PT', name: 'Portugal', phoneCode: '+351' },
  { code: 'PL', name: 'Poland', phoneCode: '+48' },
  { code: 'CZ', name: 'Czech Republic', phoneCode: '+420' },
  { code: 'JP', name: 'Japan', phoneCode: '+81' },
  { code: 'CN', name: 'China', phoneCode: '+86' },
  { code: 'IN', name: 'India', phoneCode: '+91' },
  { code: 'KR', name: 'South Korea', phoneCode: '+82' },
  { code: 'SG', name: 'Singapore', phoneCode: '+65' },
  { code: 'HK', name: 'Hong Kong', phoneCode: '+852' },
  { code: 'AE', name: 'United Arab Emirates', phoneCode: '+971' },
  { code: 'SA', name: 'Saudi Arabia', phoneCode: '+966' },
  { code: 'BR', name: 'Brazil', phoneCode: '+55' },
  { code: 'MX', name: 'Mexico', phoneCode: '+52' },
  { code: 'AR', name: 'Argentina', phoneCode: '+54' },
  { code: 'ZA', name: 'South Africa', phoneCode: '+27' },
  { code: 'NG', name: 'Nigeria', phoneCode: '+234' },
  { code: 'EG', name: 'Egypt', phoneCode: '+20' },
  { code: 'NZ', name: 'New Zealand', phoneCode: '+64' },
];

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    country: '',
    contactAddress: '',
    countryCode: '',
    phone: '',
    agreeTerms: false,
    receiveUpdates: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [showResendVerification, setShowResendVerification] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [resendMessage, setResendMessage] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (name === 'country') {
      const selectedCountry = countries.find(c => c.code === value);
      if (selectedCountry) {
        setFormData(prev => ({
          ...prev,
          country: value,
          countryCode: selectedCountry.phoneCode
        }));
      }
    }
  };

  const handleResendVerification = async () => {
    setResendLoading(true);
    setResendMessage('');
    
    try {
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email: formData.email,
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

  const handleSignup = async (e) => {
    e.preventDefault();
    
    if (!formData.agreeTerms) {
      setError('You must agree to the Terms of Use and Privacy Policy to continue.');
      return;
    }

    setLoading(true);
    setError('');
    setShowResendVerification(false);

    try {
      const fullName = `${formData.firstName} ${formData.lastName}`.trim();
      const formattedPhone = formData.countryCode + formData.phone.replace(/\s/g, '');

      const { data, error: signUpError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            first_name: formData.firstName,
            last_name: formData.lastName,
            full_name: fullName,
            country: formData.country,
            contact_address: formData.contactAddress,
            country_code: formData.countryCode,
            phone_number: formattedPhone,
            receive_updates: formData.receiveUpdates,
          },
        },
      });

      if (signUpError) {
        if (signUpError.message.includes('already registered')) {
          setError('This email is already registered. Please login or use a different email.');
          setShowResendVerification(true);
        } else {
          setError(signUpError.message);
        }
        return;
      }

      if (data.user && !data.user.confirmed_at) {
        try {
          await fetch('/api/send-welcome-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: formData.email,
              firstName: formData.firstName,
              lastName: formData.lastName,
            }),
          });
        } catch (emailError) {
          console.error('Welcome email error:', emailError);
        }

        setSuccess(true);
      } else if (data.user && data.user.confirmed_at) {
        router.push('/dashboard');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen flex flex-col bg-brand-gray-light">
        <header className="bg-brand-blue text-white p-4">
          <div className="max-w-7xl mx-auto">
            <Link href="/" className="text-2xl font-bold">ParcelX</Link>
          </div>
        </header>

        <main className="flex-grow flex items-center justify-center p-6">
          <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md border border-gray-100 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-brand-blue mb-4">Account Created Successfully!</h2>
            <p className="text-gray-600 mb-6">
              We've sent a verification email to <strong>{formData.email}</strong>. 
              Please check your inbox and click the confirmation link to activate your account.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              Don't see the email? Check your spam folder or click below to resend.
            </p>
            <div className="space-y-4">
              <button
                onClick={handleResendVerification}
                disabled={resendLoading}
                className="w-full bg-gray-100 text-brand-blue px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors disabled:opacity-50"
              >
                {resendLoading ? 'Sending...' : 'Resend Verification Email'}
              </button>
              {resendMessage && (
                <p className={`text-sm ${resendMessage.includes('sent') ? 'text-green-600' : 'text-red-600'}`}>
                  {resendMessage}
                </p>
              )}
              <Link 
                href="/login" 
                className="inline-block w-full bg-brand-orange text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors"
              >
                Go to Login
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-brand-gray-light">
      <header className="bg-brand-blue text-white p-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-2xl font-bold">ParcelX</Link>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center p-6">
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl w-full max-w-lg border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-brand-blue">Join ParcelX</h2>
            <p className="text-brand-gray-dark mt-2">Enter your contact details</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
              {error}
              {showResendVerification && (
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

          <form onSubmit={handleSignup} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-brand-gray-dark mb-2">First Name*</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all"
                  required
                  disabled={loading}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-brand-gray-dark mb-2">Last Name*</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all"
                  required
                  disabled={loading}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-brand-gray-dark mb-2">Email Address*</label>
              <input
                type="email"
                name="email"
                placeholder="name@company.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all"
                required
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-brand-gray-dark mb-2">Password*</label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all"
                required
                disabled={loading}
                minLength={6}
              />
              <p className="text-xs text-gray-500 mt-1">Minimum 6 characters</p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-brand-gray-dark mb-2">Country/Territory*</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all bg-white"
                required
                disabled={loading}
              >
                <option value="">Select your country</option>
                {countries.map(country => (
                  <option key={country.code} value={country.code}>{country.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-brand-gray-dark mb-2">Contact Address*</label>
              <textarea
                name="contactAddress"
                placeholder="Enter your full address"
                value={formData.contactAddress}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all resize-none"
                required
                disabled={loading}
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold text-brand-gray-dark mb-2">Country Code*</label>
                <input
                  type="text"
                  name="countryCode"
                  placeholder="+1"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all bg-gray-50"
                  required
                  disabled={loading}
                  readOnly
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-semibold text-brand-gray-dark mb-2">Phone*</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="555 123 4567"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all"
                  required
                  disabled={loading}
                />
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-gray-100">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 text-brand-orange border-gray-300 rounded focus:ring-brand-orange"
                  disabled={loading}
                />
                <span className="text-sm text-gray-600">
                  I have read, understood and agree to be bound by the <Link href="/terms" className="text-brand-blue hover:underline">Terms of Use</Link>. I also understand how ParcelX intends to use my information according to the <Link href="/privacy" className="text-brand-blue hover:underline">Security and Privacy Policy</Link>.
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="receiveUpdates"
                  checked={formData.receiveUpdates}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 text-brand-orange border-gray-300 rounded focus:ring-brand-orange"
                  disabled={loading}
                />
                <span className="text-sm text-gray-600">
                  Send me updates from ParcelX with promotions and important information (you can unsubscribe at any time).
                </span>
              </label>
            </div>

            <button 
              type="submit" 
              className="w-full bg-brand-orange text-white py-4 rounded-lg font-bold hover:bg-orange-600 transition-all shadow-md transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating Account...
                </>
              ) : (
                'CONTINUE'
              )}
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
