'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

type CopyButtonProps = React.ComponentProps<typeof Button> & {
  valueToCopy: string;
};

export function CopyButton({
  valueToCopy,
  children,
  className,
  ...props
}: CopyButtonProps) {
  const { toast } = useToast();
  const [hasCopied, setHasCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(valueToCopy);
      setHasCopied(true);
      setTimeout(() => setHasCopied(false), 2000);
      toast({
        title: 'Copied to clipboard!',
        description: valueToCopy,
      });
    } catch (err) {
      console.error('Failed to copy text: ', err);
      toast({
        variant: 'destructive',
        title: 'Failed to copy',
        description: 'Could not copy address to clipboard.',
      });
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={copyToClipboard}
      className={cn('h-7 w-7', className)}
      {...props}
    >
      {hasCopied ? (
        <Check className="h-4 w-4 text-green-500" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
      <span className="sr-only">Copy</span>
    </Button>
  );
}
