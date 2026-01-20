'use client';

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

const logos = [
  "logo-base", "logo-sui", "logo-kaia"
];

export function SocialProof() {
  const allLogos = [...logos, ...logos]; // Duplicate logos for seamless scroll
  const { ref, isInView } = useInView({ once: true, threshold: 0.3 });

  return (
    <section id="social-proof" className="section-gradient py-16 sm:py-24" ref={ref}>
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className={cn(
              "text-sm font-semibold uppercase text-muted-foreground tracking-wider animate-slide-in-stagger",
              { 'is-in-view': isInView }
            )}>
            OUR GRADS HAVE BUILT ON AND GOTTEN PAID BY
          </h2>
          <div
            className="mt-8 relative w-full overflow-hidden"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
            }}
          >
            <div className="flex animate-scroll-x">
              {allLogos.map((logoId, index) => {
                const logo = PlaceHolderImages.find(img => img.id === logoId);
                if (!logo) return null;
                return (
                  <div key={`${logo.id}-${index}`} className="flex-shrink-0 px-8">
                    <Image
                      src={logo.imageUrl}
                      alt={logo.description}
                      width={120}
                      height={48}
                      className="object-contain rounded-lg"
                      data-ai-hint={logo.imageHint}
                      loading="lazy"
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
