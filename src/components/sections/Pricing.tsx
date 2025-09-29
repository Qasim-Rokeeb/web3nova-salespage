import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { ApplyButton } from '../apply-button';

const includedFeatures = [
    '10-week intensive program',
    'Real-world project portfolio',
    '1-on-1 mentorship sessions',
    'Lifetime community access',
    'Career and interview prep',
    'Certificate of Completion',
]

export function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24">
        <div className="container">
            <div className="mx-auto max-w-lg">
                <Card className="shadow-2xl shadow-primary/10">
                    <CardHeader className="text-center">
                        <CardTitle className="font-headline text-3xl">One Price, Everything Included</CardTitle>
                        <CardDescription>A single investment for a life-changing career move. No hidden fees, no upsells.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center">
                        <div className="my-6">
                            <span className="text-5xl font-extrabold">₦100,000</span>
                            <span className="text-muted-foreground">/cohort</span>
                        </div>
                        <ul className="w-full space-y-3">
                            {includedFeatures.map(feature => (
                                <li key={feature} className="flex items-center gap-3">
                                    <Check className="h-5 w-5 text-primary" />
                                    <span className="text-muted-foreground">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <ApplyButton size="lg" className="w-full">
                            Secure Your Spot Now
                        </ApplyButton>
                    </CardFooter>
                </Card>
            </div>
        </div>
    </section>
  )
}
