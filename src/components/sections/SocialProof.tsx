import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const logos = [
  "logo-base", "logo-sui", "logo-kaia", "logo-avalanche", "logo-gitcoin", "logo-layer3"
];

export function SocialProof() {
  return (
    <section id="social-proof" className="bg-card py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-sm font-semibold uppercase text-muted-foreground tracking-wider">
            OUR GRADS HAVE BUILT ON AND GOTTEN PAID BY
          </h2>
          <div className="mt-8 flow-root">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-10">
              {logos.map((logoId) => {
                const logo = PlaceHolderImages.find(img => img.id === logoId);
                if (!logo) return null;
                return (
                  <div key={logo.id} className="flex-shrink-0">
                    <Image
                      src={logo.imageUrl}
                      alt={logo.description}
                      width={120}
                      height={48}
                      className="object-contain filter grayscale transition duration-300 hover:grayscale-0"
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
