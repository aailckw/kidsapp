'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Inter } from 'next/font/google';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

// Metadata can't be exported from client components
// Using useEffect and document.title would be one way to set title in client components if needed

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const isActiveLink = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`);
  };
  
  return (
    <div className={`min-h-screen flex flex-col ${inter.className}`}>
      <header className="bg-purple-600 text-white shadow-md sticky top-0 z-30">
        <div className="container mx-auto px-2 py-2 md:py-3 flex justify-between items-center">
          <div className="flex items-center">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)} 
              className="mr-2 md:hidden text-white focus:outline-none"
              aria-label="Toggle sidebar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <Link href="/home" className="text-2xl font-bold flex items-center">
              <span className="text-yellow-300">Kids</span>
              <span>Learn</span>
              <span className="ml-1 bg-yellow-300 text-purple-800 text-xs px-1.5 py-0.5 rounded-full font-bold">BETA</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-4 lg:space-x-6">
            <Link href="/home" className={`hover:text-yellow-200 transition pb-1 ${isActiveLink('/home') ? 'border-b-2 border-yellow-300 text-yellow-300' : ''}`}>
              Home
            </Link>
            <Link href="/progress" className={`hover:text-yellow-200 transition pb-1 ${isActiveLink('/progress') ? 'border-b-2 border-yellow-300 text-yellow-300' : ''}`}>
              Progress
            </Link>
            <Link href="/rewards" className={`hover:text-yellow-200 transition pb-1 ${isActiveLink('/rewards') ? 'border-b-2 border-yellow-300 text-yellow-300' : ''}`}>
              Rewards
            </Link>
            <Link href="/profile" className={`hover:text-yellow-200 transition pb-1 ${isActiveLink('/profile') ? 'border-b-2 border-yellow-300 text-yellow-300' : ''}`}>
              Profile
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <Link href="/login" className="bg-yellow-400 text-purple-800 rounded px-3 py-1 text-sm md:text-base md:px-4 md:py-1.5 font-medium hover:bg-yellow-300 transition-colors shadow-sm">
              Logout
            </Link>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-purple-700 py-2 px-4 space-y-2">
            <Link href="/home" 
              className={`block py-2 px-3 rounded ${isActiveLink('/home') ? 'bg-purple-800 text-yellow-300' : 'hover:bg-purple-800'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link href="/progress" 
              className={`block py-2 px-3 rounded ${isActiveLink('/progress') ? 'bg-purple-800 text-yellow-300' : 'hover:bg-purple-800'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Progress
            </Link>
            <Link href="/rewards" 
              className={`block py-2 px-3 rounded ${isActiveLink('/rewards') ? 'bg-purple-800 text-yellow-300' : 'hover:bg-purple-800'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Rewards
            </Link>
            <Link href="/profile" 
              className={`block py-2 px-3 rounded ${isActiveLink('/profile') ? 'bg-purple-800 text-yellow-300' : 'hover:bg-purple-800'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Profile
            </Link>
          </nav>
        )}
      </header>
      
      <div className="flex flex-1">
        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}
        
        {/* Sidebar */}
        <aside 
          className={`w-60 bg-purple-100 fixed md:static inset-y-0 left-0 z-20 transform ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 transition-transform duration-300 ease-in-out h-[calc(100vh-49px)] overflow-y-auto flex-shrink-0`}
          style={{ top: '49px' }}
        >
          <div className="p-3">
            <h2 className="text-base lg:text-lg font-bold text-purple-800 mb-3 flex items-center">
              <span className="mr-2">🧒</span> Age Groups
            </h2>
            <ul className="space-y-1">
              {[
                { path: '/age-2-4', label: 'Ages 2-4: Early Explorers', icon: '🧸' },
                { path: '/age-5-7', label: 'Ages 5-7: Emerging Learners', icon: '📚' },
                { path: '/age-8-10', label: 'Ages 8-10: Independent Learners', icon: '🔍' },
                { path: '/age-11-12', label: 'Ages 11-12: Young Achievers', icon: '🚀' }
              ].map(item => (
                <li key={item.path}>
                  <Link 
                    href={item.path} 
                    className={`flex items-center p-2 rounded text-sm ${isActiveLink(item.path) ? 'bg-purple-200 text-purple-900 font-medium' : 'hover:bg-purple-200'}`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="mr-2">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
            
            <h2 className="text-base lg:text-lg font-bold text-purple-800 mt-5 mb-3 flex items-center">
              <span className="mr-2">📗</span> Subjects
            </h2>
            <ul className="space-y-1">
              {[
                { path: '/subjects/english', label: 'English', icon: '🔤' },
                { path: '/subjects/chinese', label: 'Chinese', icon: '🀄' },
                { path: '/subjects/mathematics', label: 'Mathematics', icon: '🔢' },
                { path: '/subjects/science', label: 'Science', icon: '🔬' },
                { path: '/subjects/art-music', label: 'Art & Music', icon: '🎨' },
                { path: '/subjects/social-studies', label: 'Social Studies', icon: '🌍' }
              ].map(item => (
                <li key={item.path}>
                  <Link 
                    href={item.path} 
                    className={`flex items-center p-2 rounded text-sm ${isActiveLink(item.path) ? 'bg-purple-200 text-purple-900 font-medium' : 'hover:bg-purple-200'}`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="mr-2">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
        
        <main className="flex-1 p-3 md:p-4 bg-gray-50 overflow-x-hidden min-h-[calc(100vh-49px)]">
          {/* Breadcrumbs */}
          <nav className="text-xs md:text-sm mb-4 text-gray-500">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                <Link href="/home" className="text-purple-600 hover:text-purple-800">Home</Link>
                {pathname !== '/home' && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </li>
              {pathname !== '/home' && (
                <li className="capitalize">
                  {pathname.split('/').pop()?.replace(/-/g, ' ')}
                </li>
              )}
            </ol>
          </nav>
          
          {children}
        </main>
      </div>
      
      <footer className="bg-purple-800 text-white py-3 md:py-4 mt-auto">
        <div className="container mx-auto px-4 md:flex md:justify-between md:items-center text-center md:text-left">
          <p className="text-sm">© {new Date().getFullYear()} KidsLearn. All rights reserved.</p>
          <div className="mt-2 md:mt-0 space-x-4 text-sm">
            <Link href="/privacy" className="text-white hover:text-yellow-200">Privacy Policy</Link>
            <Link href="/terms" className="text-white hover:text-yellow-200">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
} 