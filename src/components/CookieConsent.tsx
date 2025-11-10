// src/components/CookieConsent.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptConsent = () => {
    localStorage.setItem('cookie_consent', 'true');
    setShowConsent(false);
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background-dark/80 backdrop-blur-sm p-4 z-50">
      <div className="container mx-auto flex items-center justify-between flex-wrap gap-4">
        <p className="text-text-dark text-sm">
          We use cookies to enhance your experience and to show you personalized ads. By continuing to use our site, you consent to our use of cookies. Read our{' '}
          <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link> for more information.
        </p>
        <button 
          onClick={acceptConsent} 
          className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;

