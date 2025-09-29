import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Web3Nova – Become a Paid Web3 Builder in 90 Days',
  description: 'Web2 dev? Earn your first 200-1000 USDC on Base, Celo, Solana or Lisk in 90 days. Cohort starts Oct 1—only 100 seats.',
  openGraph: {
    title: 'From Web2 to Web3 Income in 90 Days – Web3Nova',
    description: 'Secure your seat for ₦100 k. Graduate with audited dApp and first bounty paid.',
    images: ['https://web3nova.xyz/og-image.png'],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased'
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
