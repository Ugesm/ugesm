'use client';

import { ReactNode } from 'react'
import Header from '../Header'
import Footer from '../shared/Footer'
import { usePathname } from 'next/navigation'

interface MainLayoutProps {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  const pathname = usePathname();
  const hideHeaderOnPages = ['/publications', '/developers'];
  const shouldShowHeader = !hideHeaderOnPages.includes(pathname);

  return (
    <>
      {shouldShowHeader && <Header />}
      <main className={`flex-grow ${!shouldShowHeader ? 'pt-0' : ''}`}>
        {children}
      </main>
      <Footer />
    </>
  )
}
