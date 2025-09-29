import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const planModules = [
    {
      week: "Weeks 1-2",
      title: "Blockchain & Smart Contract Fundamentals",
      content: "Dive deep into the core concepts of blockchain technology, Ethereum, and Solidity. You'll write, test, and deploy your first smart contracts on a test network."
    },
    {
      week: "Weeks 3-4",
      title: "Building Decentralized Applications (dApps)",
      content: "Learn to connect a frontend application to your smart contracts using Ethers.js and React. We'll build a complete dApp, from user authentication to interacting with the blockchain."
    },
    {
      week: "Weeks 5-6",
      title: "Advanced Smart Contracts & Security",
      content: "Explore advanced Solidity patterns, smart contract security best practices, and common vulnerabilities. You'll learn how to write robust, production-ready code using tools like Hardhat."
    },
    {
      week: "Weeks 7-8",
      title: "DeFi, NFTs, and Capstone Project",
      content: "Understand the building blocks of Decentralized Finance (DeFi) and Non-Fungible Tokens (NFTs). You'll start working on your capstone project, applying everything you've learned to build a unique dApp for your portfolio."
    },
     {
      week: "Weeks 9-10",
      title: "Career Launchpad & Portfolio Polish",
      content: "Focus on career preparation. We'll help you polish your resume, refine your portfolio, and practice for technical interviews. You'll get expert feedback to ensure you're ready for the job market."
    }
  ]
  
  export function Plan() {
    return (
      <section id="plan" className="bg-card py-16 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              The 10-Week Game Plan
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our curriculum is designed to be intensive and practical, focusing on the skills employers are looking for right now.
            </p>
          </div>
  
          <div className="mx-auto mt-12 max-w-3xl">
            <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
              {planModules.map((module, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b">
                  <AccordionTrigger className="py-6 text-left hover:no-underline">
                    <div className="flex items-center gap-4">
                        <span className="text-primary font-bold">{module.week}</span>
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
  