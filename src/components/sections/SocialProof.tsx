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

const testimonials = [
  {
    name: "Samuel Adeboye",
    role: "Cohort II Graduate",
    avatarId: "avatar-1",
    quote: "Web3Nova was a game-changer. The hands-on projects and mentorship gave me the confidence to land a job I never thought possible. Best investment I've ever made in my career."
  },
  {
    name: "Aisha Bello",
    role: "Cohort II Graduate",
    avatarId: "avatar-2",
    quote: "The community is incredible. I was stuck in tutorial hell for months, but Web3Nova provided the structure and support I needed. I built my portfolio and made lifelong friends."
  },
  {
    name: "Michael Eze",
    role: "Cohort I Graduate",
    avatarId: "avatar-3",
    quote: "I came in with basic coding skills and left with a job as a smart contract developer. The curriculum is intense but perfectly paced. 100% recommend to anyone serious about Web3."
  },
    {
    name: "Nneka Okafor",
    role: "Cohort I Graduate",
    avatarId: "avatar-4",
    quote: "This isn't just a course; it's a career launchpad. The portfolio review and interview prep sessions were invaluable. I felt completely prepared for the job market."
  },
]

export function SocialProof() {
  return (
    <section id="social-proof" className="bg-card py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Don't Just Take Our Word For It
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See what our past students have to say about their experience with Web3Nova.
          </p>
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
                <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full">
                      <CardContent className="flex h-full flex-col justify-between p-6">
                        <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
                        <div className="mt-6 flex items-center gap-4">
                           <Avatar>
                            {avatar && <AvatarImage src={avatar.imageUrl} alt={testimonial.name} data-ai-hint={avatar.imageHint} />}
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
