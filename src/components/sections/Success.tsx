
'use client';

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    name: "@BernardDev",
    avatarId: "avatar-1",
    quote: "Woke up to +1 250 USDC bounty on Base—still in my pajamas.",
  },
  {
    name: "@Erudite",
    avatarId: "avatar-2",
    quote: "Job offer from Graphite Network before graduation.",
  },
  {
    name: "@Zainab",
    avatarId: "avatar-3",
    quote: "First 500 USDC grant on Celo paid my rent for 3 months.",
  },
]

export function Success() {
  const { ref, isInView } = useInView({ once: true, threshold: 0.4 });
  return (
    <section id="success" className="py-16 sm:py-24" ref={ref}>
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl h2-underline">
            What Life Looks Like 90 Days From Now
          </h2>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="mx-auto mt-12 w-full max-w-xs sm:max-w-xl lg:max-w-4xl"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => {
              const avatar = PlaceHolderImages.find(img => img.id === testimonial.avatarId);
              return (
                <CarouselItem key={index} className={cn(
                  "sm:basis-1/2 lg:basis-1/3 animate-slide-in-stagger",
                  { 'is-in-view': isInView }
                )} style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="p-1">
                    <Card className="h-full">
                      <CardContent className="flex h-full flex-col justify-between p-6">
                        <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
                        <div className="mt-6 flex items-center gap-4">
                           <Avatar className="testimonial-avatar">
                            {avatar && <AvatarImage src={avatar.imageUrl} alt={testimonial.name} data-ai-hint={avatar.imageHint} loading="lazy" className="object-cover" />}
                            <AvatarFallback>{testimonial.name.charAt(1)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">{testimonial.name}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
            )})}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}
