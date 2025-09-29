import { ApplyButton } from "../apply-button";

export function Cta() {
  return (
    <section id="cta" className="bg-card py-16 sm:py-24">
      <div className="container text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Cohort 3 Starts 1 October—Only 100 Seats
        </h2>
        <div className="mt-8">
            <ApplyButton size="lg">
                Secure My Seat – ₦100 000 →
            </ApplyButton>
        </div>
      </div>
    </section>
  );
}
