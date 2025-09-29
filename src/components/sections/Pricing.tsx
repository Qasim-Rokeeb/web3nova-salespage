import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const comparisonData = [
  {
    name: 'CS Degree',
    cost: '₦2 M',
    duration: '4 yrs',
    firstPaycheck: '?',
  },
  {
    name: 'Random Bootcamp',
    cost: '₦800 k',
    duration: '6 mo',
    firstPaycheck: 'Maybe',
  },
  {
    name: 'Web3Nova',
    cost: '₦100 k',
    duration: '90 days',
    firstPaycheck: '200 – 1 000 USDC',
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24">
        <div className="container">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl h2-underline">
                    A Computer-Science Degree Costs ₦2 Million and 4 Years
                </h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-prose mx-auto">
                    Web3Nova is ₦100 k, 90 days, and you get paid before it ends.
                </p>
            </div>
            <Card className="mt-12">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead></TableHead>
                            <TableHead>Cost</TableHead>
                            <TableHead>Duration</TableHead>
                            <TableHead>First Paycheck</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {comparisonData.map((item) => (
                            <TableRow key={item.name} className={item.name === 'Web3Nova' ? 'bg-primary/10 font-bold' : ''}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>
                                    {item.name === 'Web3Nova' ? (
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <span className="underline decoration-dashed">{item.cost}</span>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>No hidden fees</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    ) : (
                                        item.cost
                                    )}
                                </TableCell>
                                <TableCell>{item.duration}</TableCell>
                                <TableCell>{item.firstPaycheck}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>
        </div>
    </section>
  )
}
