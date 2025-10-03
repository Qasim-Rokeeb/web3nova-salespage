
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useInView } from '@/hooks/use-in-view';
import { AnimatedCounter } from '@/components/animated-counter';

const stats = [
    {
        value: 10000,
        prefix: "$",
        suffix: "+",
        label: "in grants & bounties last 12 months"
    },
    {
        value: 100,
        prefix: "",
        suffix: "%",
        label: "of our grads earned their first paycheck before graduation"
    },
    {
        value: 3,
        prefix: "",
        suffix: "x",
        label: "Average Web3Nova grad earns 3× tuition within 3 months"
    }
];

export function Stakes() {
  const { ref, isInView } = useInView();

  return (
    <section id="stakes" className="py-16 sm:py-24" ref={ref}>
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl h2-underline">
            The Web3 Bounty Pool Is Overflowing—Only Devs Who Ship Get Paid
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center shadow-lg">
                <CardHeader>
                    <CardTitle className="text-4xl font-extrabold text-primary">
                        {stat.value === 3 ? (
                            <>
                                <AnimatedCounter 
                                    targetValue={stat.value} 
                                    start={isInView}
                                    duration={1500}
                                />
                                {stat.suffix}
                            </>
                        ) : (
                            <AnimatedCounter 
                                targetValue={stat.value} 
                                start={isInView}
                                duration={1500}
                                prefix={stat.prefix}
                                suffix={stat.suffix}
                            />
                        )}
                    </CardTitle>
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
