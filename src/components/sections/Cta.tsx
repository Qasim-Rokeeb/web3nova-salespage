import { ApplyButton } from "../apply-button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export function Cta() {
  return (
    <section id="cta" className="bg-card py-16 sm:py-24">
      <div className="container text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl h2-underline">
          Cohort 3 Starts 6 October—Only 100 Seats
        </h2>
        <div className="mt-8">
            <ApplyButton size="lg">
                Secure My Seat –{' '}
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="underline decoration-dashed">
                        ₦100 000
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>No hidden fees</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                {' '}→
            </ApplyButton>
        </div>
      </div>
    </section>
  );
}
