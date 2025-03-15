import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'KidsLearn - Authentication',
  description: 'Sign in or create a new account for KidsLearn',
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-purple-700">KidsLearn</span>
          </Link>
        </div>
      </header>
      <main>{children}</main>
      <footer className="bg-white py-4 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-500 text-center text-sm">
            &copy; {new Date().getFullYear()} KidsLearn. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
} 