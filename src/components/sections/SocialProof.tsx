import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";


const partners = [
    { name: "Base", logoId: "logo-base" },
    { name: "Sui", logoId: "logo-sui" },
    { name: "Kaia", logoId: "logo-kaia" },
    { name: "Avalanche", logoId: "logo-avalanche" },
    { name: "Gitcoin", logoId: "logo-gitcoin" },
    { name: "Layer3", logoId: "logo-layer3" },
]

export function SocialProof() {
  return (
    <section id="social-proof" className="bg-card py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto text-center">
            <h2 className="text-sm font-semibold uppercase text-muted-foreground tracking-wider">
                Trusted by
            </h2>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-6">
            {partners.map((partner) => {
              const logo = PlaceHolderImages.find(img => img.id === partner.logoId);
              return (
                <div key={partner.name} className="flex justify-center">
                  {logo && <Image src={logo.imageUrl} alt={partner.name} width={120} height={40} className="object-contain" data-ai-hint={logo.imageHint} loading="lazy" />}
                </div>
            )})}
        </div>
      </div>
    </section>
  )
}
