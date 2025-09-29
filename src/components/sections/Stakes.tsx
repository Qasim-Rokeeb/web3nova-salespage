import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const stats = [
    {
        value: "250M+ USDC",
        label: "in grants & bounties last 12 months"
    },
    {
        value: "12,000+",
        label: "open issues on Gitcoin, Layer3, Questbook"
    },
    {
        value: "3x",
        label: "Average Web3Nova grad earns 3× tuition within 3 months"
    }
];

export function Stakes() {
  return (
    <section id="stakes" className="py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            The Web3 Bounty Pool Is Overflowing—Only Devs Who Ship Get Paid
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center shadow-lg">
                <CardHeader>
                    <CardTitle className="text-4xl font-extrabold text-primary">{stat.value}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
