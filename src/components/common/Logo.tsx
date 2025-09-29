import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Image
        src="/logo.svg"
        alt="Web3Nova Logo"
        width={32}
        height={32}
      />
      <span className="text-xl font-bold text-foreground">Web3Nova</span>
    </div>
  );
}
