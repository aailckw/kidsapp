'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardHomePage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the correct home page
    router.replace('/home');
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Redirecting...</h1>
      <p>Taking you to the dashboard home page.</p>
    </div>
  );
} 