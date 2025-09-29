import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Problem() {
    const problemImage = PlaceHolderImages.find((img) => img.id === 'problem-illustration');
  return (
    <section id="problem" className="bg-[#FAFBFC] dark:bg-card py-16 sm:py-24">
      <div className="container">
        <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
                <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl h2-underline">
                    YouTube Tutorials Won’t Pay Your Rent
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    You’ve copy-pasted Solidity snippets until your eyes hurt. You still can’t deploy on Base without 17 stack-overflow tabs. Meanwhile, hackathons are handing out 10 000 USDC prizes to devs who actually finish.
                </p>
            </div>
            {problemImage && (
                <div className="rounded-lg shadow-lg">
                    <Image
                        src={problemImage.imageUrl}
                        alt={problemImage.description}
                        width={600}
                        height={400}
                        className="rounded-lg object-cover"
                        data-ai-hint={problemImage.imageHint}
                    />
                </div>
            )}
        </div>
      </div>
    </section>
  );
}
