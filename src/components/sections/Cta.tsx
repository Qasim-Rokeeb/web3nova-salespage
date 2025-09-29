import { ApplyButton } from "../apply-button";

export function Cta() {
  return (
    <section id="cta" className="bg-card py-16 sm:py-24">
      <div className="container text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to Build the Future?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Your journey into Web3 starts here. The next cohort is filling up fast. Don't miss your chance to build a high-impact career in the decentralized world.
        </p>
        <div className="mt-8">
            <ApplyButton size="lg">
                Claim Your Spot in the Next Cohort
            </ApplyButton>
        </div>
      </div>
    </section>
  );
}
