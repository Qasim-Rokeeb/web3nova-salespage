
'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

const planModules = [
  {
    step: '1',
    title: 'Apply & Pay ₦100k',
    content: 'Skin in the game; acceptance within 48 h.',
  },
  {
    step: '2',
    title: 'Build & Earn (10 h/week)',
    content: 'Live mentor calls, cohort grind, portfolio dApp, chase bounties.',
  },
  {
    step: '3',
    title: 'Graduate & Monetize',
    content:
      'Leave with audited contract, first 200 – 1 000 USDC earned, job-ready GitHub.',
  },
];

export function Plan() {
  const { ref, isInView } = useInView({ once: true });
  return (
    <section id="plan" className="section-gradient py-16 sm:py-24" ref={ref}>
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl h2-underline">
            Your 3-Step Roadmap to On-Chain Income
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-0"
            className="w-full"
          >
            {planModules.map((module, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b group"
              >
                <AccordionTrigger className="py-6 text-left hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 plan-step-icon group-hover:scale-110">
                      <svg
                        className="h-full w-full"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="24"
                          cy="24"
                          r="22.5"
                          stroke="hsl(var(--border))"
                          strokeWidth="3"
                        />
                        <circle
                          className={cn('plan-circle', {
                            'is-in-view': isInView,
                          })}
                          style={{ transitionDelay: `${index * 0.2}s` }}
                          cx="24"
                          cy="24"
                          r="20"
                          stroke="hsl(var(--primary))"
                          strokeWidth="2"
                          strokeLinecap="round"
                          transform="rotate(-90 24 24)"
                        />
                      </svg>
                      <span
                        className={cn(
                          'plan-step-number absolute inset-0 flex items-center justify-center text-primary font-bold',
                          { 'is-in-view': isInView }
                        )}
                      >
                        {module.step}
                      </span>
                    </div>

                    <span className="text-lg font-semibold">{module.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground md:pl-[80px]">
                  {module.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
