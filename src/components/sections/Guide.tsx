import { ApplyButton } from '../apply-button';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Rocket, Users, Code, Award } from 'lucide-react';

const guideSteps = [
  {
    icon: <Users />,
    title: 'Step 1: Apply & Join',
    description: 'Submit your application to join our selective cohort. Once accepted, you become part of an ambitious community.',
  },
  {
    icon: <Code />,
    title: 'Step 2: Learn & Build',
    description: 'Dive into our hands-on curriculum. You’ll build real-world projects, not just follow tutorials, from day one.',
  },
  {
    icon: <Rocket />,
    title: 'Step 3: Launch Your Portfolio',
    description: 'Showcase your work in a stunning portfolio. We help you craft project case studies that impress recruiters.',
  },
  {
    icon: <Award />,
    title: 'Step 4: Land Your Dream Job',
    description: 'With a killer portfolio and newfound confidence, you are ready to enter the job market and land a high-paying role.',
  },
];

const TwoToneIcon = ({ icon }: { icon: React.ReactNode }) => (
    <div className="relative mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
        <div className="text-primary">{icon}</div>
    </div>
)


export function Guide() {
  return (
    <section id="guide" className="py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Your Simple Path to a Web3 Career
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We've designed a clear, step-by-step process to take you from aspiring developer to a hired professional.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {guideSteps.map((step) => (
            <Card key={step.title} className="text-center shadow-md transition-transform hover:-translate-y-2">
              <CardHeader>
                <div className="mx-auto">
                    <TwoToneIcon icon={step.icon} />
                </div>
                <CardTitle className="font-semibold">{step.title}</CardTitle>
                <CardDescription>{step.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
            <ApplyButton size="lg">Start Your Journey Now</ApplyButton>
        </div>
      </div>
    </section>
  );
}
