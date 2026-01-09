import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabase';

export default function Profile() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push('/login');
        return;
      }
      setUser(session.user);
      
      const { data: profileData } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single();
      
      setProfile(profileData);
      setLoading(false);
    };
    getUser();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-brand-blue">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-brand-blue text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">ParcelX</Link>
          <button onClick={handleLogout} className="text-sm hover:text-brand-orange">Logout</button>
        </div>
      </header>

      <main className="flex-grow max-w-4xl mx-auto w-full p-6">
        <h1 className="text-3xl font-bold text-brand-blue mb-8">My Profile</h1>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 bg-brand-blue rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {profile?.full_name?.charAt(0) || user?.email?.charAt(0) || 'U'}
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">{profile?.full_name || 'User'}</h2>
              <p className="text-gray-500">{user?.email}</p>
            </div>
          </div>
          
          <div className="grid gap-6">
            <div className="border-b border-gray-100 pb-4">
              <label className="text-sm text-gray-500">Full Name</label>
              <p className="text-gray-800 font-medium">{profile?.full_name || 'Not set'}</p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <label className="text-sm text-gray-500">Email</label>
              <p className="text-gray-800 font-medium">{user?.email}</p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <label className="text-sm text-gray-500">Member Since</label>
              <p className="text-gray-800 font-medium">{new Date(user?.created_at).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
