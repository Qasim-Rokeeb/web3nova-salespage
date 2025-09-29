'use client';

import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { PlaybookForm } from './playbook-form';
import { useToast } from '@/hooks/use-toast';

export function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (
        e.clientY <= 0 &&
        !sessionStorage.getItem('exitIntentShown')
      ) {
        setIsOpen(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleFormSubmit = () => {
    setIsOpen(false);
    toast({
        title: "You've got mail!",
        description: 'Your free Web3 earning playbook is on its way.',
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">Wait! Don't Go Yet...</DialogTitle>
          <DialogDescription>
            Before you leave, grab our free Web3 Earning Playbook. It's packed with strategies to land your first paid gig.
          </DialogDescription>
        </DialogHeader>
        <div className="pt-4">
            <PlaybookForm onSubmitted={handleFormSubmit} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
