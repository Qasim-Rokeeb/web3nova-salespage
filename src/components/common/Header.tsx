
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/common/Logo';
import { ApplyButton } from '@/components/apply-button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ThemeToggle } from '../theme-toggle';
import { useActiveSection } from '@/hooks/use-active-section';

const navLinks = [
  { href: '#problem', label: 'The Problem' },
  { href: '#plan', label: 'The Plan' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#success', label: 'Success' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(navLinks.map(l => l.href.substring(1)));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const getLinkClass = (href: string) => {
    return cn(
        'relative text-sm font-medium text-muted-foreground transition-colors hover:text-primary',
        'after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-accent after:transition-transform after:duration-300 after:ease-out after:scale-x-0',
        {
            'text-primary after:scale-x-100': `#${activeSection}` === href,
        }
    )
  }

  const getMobileLinkClass = (href: string) => {
    return cn(
        "text-lg font-medium text-foreground transition-colors hover:text-primary",
        {
            'text-primary': `#${activeSection}` === href,
        }
    )
  }

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'border-b border-border/40 bg-background/95 backdrop-blur-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" aria-label="Back to homepage">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={getLinkClass(link.href)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle />
          <ApplyButton href="https://tinyurl.com/CohortII-enrolment">Apply Now</ApplyButton>
        </div>

        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="p-4">
              <div className="mb-8 flex items-center justify-between">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                  <Logo />
                </Link>
                 <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
                    <X className="h-6 w-6" />
                </Button>
              </div>
              <nav className="flex flex-col items-start gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={getMobileLinkClass(link.href)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex w-full items-center justify-between">
                    <ApplyButton size="lg" className="mt-4 flex-grow" onClick={() => setIsMobileMenuOpen(false)} href="https://tinyurl.com/CohortII-enrolment">
                    Apply Now
                    </ApplyButton>
                    <div className="mt-4 ml-4">
                        <ThemeToggle />
                    </div>
                </div>

              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
