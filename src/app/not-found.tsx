import React from 'react';
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-4">
      <div className="max-w-md w-full text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 font-mono text-3xl font-extrabold mb-6">
          404
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
          Page Not Found
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-8">
          The requested page or resource doesn't exist or has moved. Return to Jeevaa's portfolio homepage.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-semibold text-sm shadow-md transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
}
