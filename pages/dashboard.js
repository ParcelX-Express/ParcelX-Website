import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabase';

export default function Dashboard() {
  const [shipments, setShipments] = useState([]);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuthAndFetchData = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        
        if (!session) {
          router.push('/login');
          return;
        }

        setUser(session.user);

        const { data: profileData, error: profileError } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single();

        if (profileError) {
          console.error('Profile fetch error:', profileError);
        } else {
          setProfile(profileData);
        }

        const { data: shipmentsData, error: shipmentsError } = await supabase
          .from('shipments')
          .select(`
            *,
            tracking_updates (
              id,
              location,
              description,
              status,
              occurrence_time
            )
          `)
          .eq('user_id', session.user.id)
          .order('created_at', { ascending: false });

        if (shipmentsError) {
          console.error('Shipments fetch error:', shipmentsError);
        } else {
          setShipments(shipmentsData || []);
        }
      } catch (error) {
        console.error('Auth check error:', error);
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };

    checkAuthAndFetchData();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT') {
        router.push('/login');
      }
    });

    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending': return 'bg-gray-100 text-gray-600';
      case 'In Transit': return 'bg-blue-100 text-blue-600';
      case 'Out for Delivery': return 'bg-orange-100 text-orange-600';
      case 'Delivered': return 'bg-green-100 text-green-600';
      case 'Delayed': return 'bg-red-100 text-red-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-brand-gray-light flex items-center justify-center">
        <div className="text-center">
          <svg className="animate-spin h-12 w-12 text-brand-orange mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="text-brand-gray-dark">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  const displayName = profile?.first_name || profile?.full_name?.split(' ')[0] || user?.email?.split('@')[0] || 'Member';
  const initials = profile?.first_name ? 
    `${profile.first_name[0]}${profile.last_name?.[0] || ''}`.toUpperCase() : 
    displayName[0]?.toUpperCase() || 'M';

  return (
    <div className="min-h-screen bg-brand-gray-light flex flex-col">
      <header className="bg-brand-blue text-white p-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">ParcelX</Link>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-300">Welcome, {displayName}</span>
            <div className="relative group">
              <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center font-bold cursor-pointer">
                {initials}
              </div>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 hidden group-hover:block z-50">
                <Link href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">My Profile</Link>
                <Link href="/address-book" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Address Book</Link>
                <Link href="/billing" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Billing</Link>
                <hr className="my-2" />
                <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100">
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto w-full p-6 lg:p-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Shipments</p>
                <p className="text-3xl font-bold text-brand-blue">{shipments.length}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">In Transit</p>
                <p className="text-3xl font-bold text-blue-600">{shipments.filter(s => s.status === 'In Transit').length}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Delivered</p>
                <p className="text-3xl font-bold text-green-600">{shipments.filter(s => s.status === 'Delivered').length}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Pending</p>
                <p className="text-3xl font-bold text-orange-600">{shipments.filter(s => s.status === 'Pending').length}</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-brand-blue">Shipment Dashboard</h1>
            <p className="text-brand-gray-dark mt-1">Manage and track your global shipments</p>
          </div>
          <Link href="/create-shipment" className="bg-brand-orange text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition-all shadow-md text-center">
            Create New Shipment
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          {shipments.length === 0 ? (
            <div className="p-12 text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-2">No shipments yet</h3>
              <p className="text-gray-500 mb-6">Start shipping with ParcelX and track all your packages in one place.</p>
              <Link href="/create-shipment" className="inline-block bg-brand-orange text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition-all">
                Create Your First Shipment
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-brand-blue text-white">
                    <th className="p-5 font-bold">Tracking Number</th>
                    <th className="p-5 font-bold">Origin</th>
                    <th className="p-5 font-bold">Destination</th>
                    <th className="p-5 font-bold">Est. Delivery</th>
                    <th className="p-5 font-bold">Status</th>
                    <th className="p-5 font-bold">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {shipments.map((shipment) => (
                    <tr key={shipment.id} className="hover:bg-gray-50 transition-colors">
                      <td className="p-5 font-mono font-bold text-brand-blue">{shipment.tracking_number}</td>
                      <td className="p-5 text-brand-gray-dark">{shipment.origin}</td>
                      <td className="p-5 text-brand-gray-dark">{shipment.destination}</td>
                      <td className="p-5 text-brand-gray-dark">{formatDate(shipment.estimated_delivery)}</td>
                      <td className="p-5">
                        <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${getStatusColor(shipment.status)}`}>
                          {shipment.status}
                        </span>
                      </td>
                      <td className="p-5">
                        <Link href={`/track-shipment?tracking=${shipment.tracking_number}`} className="text-brand-blue font-bold hover:text-brand-orange transition-colors">
                          Track Details
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
