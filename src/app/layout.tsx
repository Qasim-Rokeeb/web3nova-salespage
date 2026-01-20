import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Web3Nova – Become a Paid Web3 Builder in 90 Days',
  description: 'Web2 dev? Earn your first 200-1000 USDC on Base, Celo, Solana or Lisk in 90 days. Cohort starts Oct 6—only 100 seats.',
  openGraph: {
    title: 'From Web2 to Web3 Income in 90 Days – Web3Nova',
    description: 'Secure your seat for ₦100 k. Graduate with audited dApp and first bounty paid.',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
        {heroImage && (
          <link
            rel="preload"
            href={heroImage.imageUrl}
            as="image"
          />
        )}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased'
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
        <Script src="https://js.paystack.co/v1/inline.js" />
      </body>
    </html>
  );
}
