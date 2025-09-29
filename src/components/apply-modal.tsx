'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2, CheckCircle, CreditCard } from 'lucide-react';
import React, { useState } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  motivation: z
    .string()
    .min(20, 'Please tell us a bit more about your motivation (min. 20 characters).'),
});

type Step = 'details' | 'payment' | 'success';

export function ApplyModal({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { toast } = useToast();
  const [step, setStep] = useState<Step>('details');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', motivation: '' },
  });

  async function onDetailsSubmit(values: z.infer<typeof formSchema>) {
    console.log('Application Details:', values);
    setStep('payment');
  }

  async function handlePayment() {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setStep('success');
    setIsSubmitting(false);
    toast({
      title: 'Payment Successful!',
      description: 'Welcome to the cohort! Check your email for next steps.',
    });
  }

  const handleModalClose = (open: boolean) => {
    if (!open) {
      form.reset();
      setTimeout(() => setStep('details'), 300);
    }
    onOpenChange(open);
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleModalClose}>
      <DialogContent className="sm:max-w-[480px]">
        {step === 'details' && (
          <>
            <DialogHeader>
              <DialogTitle className="font-headline text-2xl">
                Apply to Web3Nova
              </DialogTitle>
              <DialogDescription>
                Fill out the form below to start your journey. Spots are limited!
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onDetailsSubmit)}
                className="space-y-4 pt-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Ada Lovelace" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="ada.lovelace@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="motivation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Why do you want to join?</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="I'm excited about building decentralized applications because..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <DialogFooter>
                  <Button type="submit" className="w-full">
                    Proceed to Payment
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </>
        )}

        {step === 'payment' && (
          <div className="space-y-6 text-center">
            <DialogHeader>
              <DialogTitle className="font-headline text-2xl">
                Complete Your Enrollment
              </DialogTitle>
              <DialogDescription>
                Secure your spot by paying the cohort fee.
              </DialogDescription>
            </DialogHeader>
            <div className="rounded-lg bg-background p-6">
              <p className="text-sm text-muted-foreground">Total Amount</p>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <p className="font-headline text-4xl font-bold underline decoration-dashed">
                        ₦100,000
                      </p>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>No hidden fees</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
            </div>
            <Button
              onClick={handlePayment}
              disabled={isSubmitting}
              className="w-full"
              size="lg"
            >
              {isSubmitting ? (
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              ) : (
                <CreditCard className="mr-2 h-5 w-5" />
              )}
              {isSubmitting ? 'Processing...' : 'Pay Now'}
            </Button>
            <Button variant="link" onClick={() => setStep('details')}>Go Back</Button>
          </div>
        )}

        {step === 'success' && (
          <div className="space-y-6 py-8 text-center">
             <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
            <DialogHeader>
              <DialogTitle className="font-headline text-2xl">
                You&apos;re In!
              </DialogTitle>
              <DialogDescription>
                Congratulations! You&apos;ve successfully enrolled in the Web3Nova cohort. We&apos;ve sent a confirmation email with all the details.
              </DialogDescription>
            </DialogHeader>
            <Button onClick={() => handleModalClose(false)} className="w-full">
                Awesome!
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
