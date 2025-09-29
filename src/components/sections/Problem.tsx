import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Problem() {
    const problemImage = PlaceHolderImages.find((img) => img.id === 'problem-illustration');
  return (
    <section id="problem" className="bg-card py-16 sm:py-24">
      <div className="container">
        <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
                <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                    Why is Breaking into Web3 So Hard?
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    The Web3 space is exploding, but the learning curve is steep and full of pitfalls. Aspiring developers face a chaotic landscape of fragmented information, a lack of mentorship, and the immense pressure to build a credible portfolio from scratch.
                </p>
                <p className="mt-4 text-muted-foreground">
                    This "tutorial hell" leads to frustration and imposter syndrome, stopping talented individuals from seizing life-changing career opportunities in the decentralized economy.
                </p>
            </div>
            {problemImage && (
                <div className="rounded-xl shadow-lg">
                    <Image
                        src={problemImage.imageUrl}
                        alt={problemImage.description}
                        width={600}
                        height={400}
                        className="rounded-xl object-cover"
                        data-ai-hint={problemImage.imageHint}
                    />
                </div>
            )}
        </div>
      </div>
    </section>
  );
}
