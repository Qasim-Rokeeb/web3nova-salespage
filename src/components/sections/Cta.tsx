import { ApplyButton } from "../apply-button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export function Cta() {
  return (
    <section id="cta" className="section-gradient py-16 sm:py-24">
      <div className="container text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl h2-underline">
          Cohort 3 Starts 6 October—Only 100 Seats
        </h2>
        <div className="mt-8 flex flex-col items-center gap-4">
            <ApplyButton size="lg" href="https://tinyurl.com/CohortII-enrolment">
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
            <ApplyButton variant="ghost" href="https://wa.link/58xt45">I&apos;ll pay in bits, I&apos;ve 50% ready</ApplyButton>
        </div>
      </div>
    </section>
  );
}
