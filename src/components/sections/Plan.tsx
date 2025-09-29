import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const planModules = [
    {
      step: "Step 1",
      title: "Apply & Pay ₦100k",
      content: "Skin in the game; acceptance within 48 h."
    },
    {
      step: "Step 2",
      title: "Build & Earn (10 h/week)",
      content: "Live mentor calls, cohort grind, portfolio dApp, chase bounties."
    },
    {
      step: "Step 3",
      title: "Graduate & Monetize",
      content: "Leave with audited contract, first 200 – 1 000 USDC earned, job-ready GitHub."
    }
  ]
  
  export function Plan() {
    return (
      <section id="plan" className="bg-card py-16 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Your 3-Step Roadmap to On-Chain Income
            </h2>
          </div>
  
          <div className="mx-auto mt-12 max-w-3xl">
            <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
              {planModules.map((module, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b">
                  <AccordionTrigger className="py-6 text-left hover:no-underline">
                    <div className="flex items-center gap-4">
                        <span className="text-primary font-bold">{module.step}</span>
                        <span className="text-lg font-semibold">{module.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-muted-foreground">
                    {module.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    )
  }
  