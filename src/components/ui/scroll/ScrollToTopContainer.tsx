'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function ScrollToTopContainer() {
  const pathname = usePathname();

  useEffect(() => {
    const container = document.getElementById('scroll-container');
    container?.scrollTo({ top: 0 });
  }, [pathname]);

  return null;
}