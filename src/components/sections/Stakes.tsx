import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, XCircle, Users, Code, Rocket, Award } from 'lucide-react';

const beforeItems = [
  { icon: <XCircle className="text-destructive" />, text: 'Struggling with outdated tutorials' },
  { icon: <XCircle className="text-destructive" />, text: 'No clear roadmap or guidance' },
  { icon: <XCircle className="text-destructive" />, text: 'Lacking a portfolio of real projects' },
  { icon: <XCircle className="text-destructive" />, text: 'Feeling isolated and unmotivated' },
];

const afterItems = [
  { icon: <CheckCircle2 className="text-green-500" />, text: 'Mastering cutting-edge Web3 tech' },
  { icon: <CheckCircle2 className="text-green-500" />, text: 'Building a portfolio that gets you hired' },
  { icon: <CheckCircle2 className="text-green-500" />, text: 'Joining a lifetime network of peers' },
  { icon: <CheckCircle2 className="text-green-500" />, text: 'Launching your career with confidence' },
];

const TwoToneIcon = ({ icon }: { icon: React.ReactNode }) => (
    <div className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
        <div className="text-primary">{icon}</div>
    </div>
)

export function Stakes() {
  return (
    <section id="stakes" className="py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            The Path to Web3 Mastery is Broken
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Learning alone is tough. Web3Nova provides the structure and support you need to succeed.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl font-semibold">
                <TwoToneIcon icon={<Users />} />
                The Solo Grind
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {beforeItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    {item.icon}
                    <span className="text-muted-foreground">{item.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-primary/50 shadow-lg shadow-primary/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl font-semibold">
                <TwoToneIcon icon={<Rocket />} />
                The Web3Nova Way
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {afterItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    {item.icon}
                    <span className="font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
