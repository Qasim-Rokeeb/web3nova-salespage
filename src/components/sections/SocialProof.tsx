import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

const logos = [
  "logo-base", "logo-sui", "logo-kaia", "logo-avalanche", "logo-gitcoin", "logo-layer3"
];

export function SocialProof() {
  const allLogos = [...logos, ...logos]; // Duplicate logos for seamless scroll

  return (
    <section id="social-proof" className="bg-card py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-sm font-semibold uppercase text-muted-foreground tracking-wider">
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
                      className="object-contain"
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
