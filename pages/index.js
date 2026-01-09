import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-5xl font-bold mb-6">Welcome to ParcelX</h1>
      <p className="text-lg mb-6">Fast, reliable global shipping with real-time tracking.</p>
      <div className="flex gap-4">
        <Link href="/signup" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
          Get Started
        </Link>
        <Link href="/login" className="bg-gray-300 px-6 py-3 rounded hover:bg-gray-400">
          Login
        </Link>
      </div>
    </div>
  );
}
