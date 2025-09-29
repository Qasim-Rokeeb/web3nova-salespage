import Link from 'next/link';
import { Twitter, Disc } from 'lucide-react';
import { Logo } from '@/components/common/Logo';
import { PlaybookForm } from '@/components/playbook-form';
import { Separator } from '../ui/separator';

export function Footer() {
  return (
    <footer id="footer" className="bg-card text-card-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <Link href="/">
              <Logo />
            </Link>
            <p className="text-sm text-muted-foreground">
              Turning Web2 skills into on-chain income.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
              </Link>
              <Link href="#" aria-label="Discord">
                <Disc className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
              </Link>
              <Link href="mailto:support@web3nova.com" aria-label="Email Support">
                 <span className="text-sm text-muted-foreground transition-colors hover:text-primary">support@web3nova.com</span>
              </Link>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="rounded-lg border p-6 shadow-md">
                <h3 className="font-headline text-lg font-semibold">Not Ready to Pay? Steal Our Free Web3 Earning Playbook First</h3>
                <p className="mt-2 text-sm text-muted-foreground">Enter your name and email to receive your exclusive guide to earning in the Web3 space.</p>
                <PlaybookForm />
            </div>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <p>&copy; {new Date().getFullYear() + 1} Web3Nova. Turning Web2 skills into on-chain income.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
