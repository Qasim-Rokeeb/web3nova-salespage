
import Link from 'next/link';
import { Twitter, Disc } from 'lucide-react';
import { Logo } from '@/components/common/Logo';
import { Separator } from '../ui/separator';

export function Footer() {
  return (
    <footer id="footer" className="bg-card text-card-foreground">
      <div className="container py-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <Link href="/" aria-label="Back to homepage">
            <Logo />
          </Link>
          <p className="max-w-md text-sm text-muted-foreground">
            Turning Web2 skills into on-chain income.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
            <Link href="#" aria-label="Discord">
              <Disc className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
            <Link href="mailto:support@web3kings.com" aria-label="Email Support">
               <span className="text-sm text-muted-foreground transition-colors hover:text-primary">support@web3kings.com</span>
            </Link>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col items-center justify-center gap-4 text-center text-sm text-muted-foreground md:flex-row md:justify-between">
          <p className='font-bold'>&copy; 2025 web3kings. Turning Web2 skills into on-chain income.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
