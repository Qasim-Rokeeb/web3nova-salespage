import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const authorityPoints = [
    '2 cohorts → 100% earners: Anu $1000 in bounties, Erudite hired by Graphite Network',
    'Training partner: Base, Sui, Kaia, Avalanche',
    'Curriculum audited by ex-ConsenSys & Solana Foundation devs'
]

export function Guide() {
  return (
    <section id="guide" className="py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl h2-underline">
            Built by Engineers Who’ve Actually Cashed 5-Figure Bounties
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-prose mx-auto">
            We were stuck debugging legacy jQuery too—until we cracked the on-chain recipe.
          </p>
        </div>

        <Card className="mx-auto mt-12 max-w-3xl card-glow">
            <CardHeader>
                <CardTitle>Authority</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                    {authorityPoints.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
            </CardContent>
        </Card>
      </div>
    </section>
  );
}
