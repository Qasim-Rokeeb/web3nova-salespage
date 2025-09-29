import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logo-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--accent))" />
          </linearGradient>
        </defs>
        <path
          d="M4 16L16 4L28 16L16 28L4 16Z"
          stroke="url(#logo-gradient)"
          strokeWidth="3"
        />
        <path
          d="M16 21V11"
          stroke="url(#logo-gradient)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M20 19L12 13"
          stroke="url(#logo-gradient)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M20 13L12 19"
          stroke="url(#logo-gradient)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-xl font-bold text-foreground">Web3Nova</span>
    </div>
  );
}
