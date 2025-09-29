import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Check } from 'lucide-react';

const successStories = [
    {
        name: "Fatima Yusuf",
        role: "Smart Contract Engineer @ Polygon",
        avatarId: "avatar-1",
    },
    {
        name: "David Okoro",
        role: "Frontend dApp Developer @ Aave",
        avatarId: "avatar-2",
    },
    {
        name: "Chiamaka Nwosu",
        role: "Full-Stack Web3 Dev @ Chainlink Labs",
        avatarId: "avatar-3",
    }
]

export function Success() {
    const successImage = PlaceHolderImages.find((img) => img.id === 'success-illustration');
  return (
    <section id="success" className="py-16 sm:py-24">
      <div className="container">
      <div className="grid items-center gap-12 md:grid-cols-2">
            {successImage && (
                <div className="order-2 rounded-xl shadow-lg md:order-1">
                    <Image
                        src={successImage.imageUrl}
                        alt={successImage.description}
                        width={600}
                        height={400}
                        className="rounded-xl object-cover"
                        data-ai-hint={successImage.imageHint}
                    />
                </div>
            )}
            <div className="order-1 md:order-2">
                <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                    From Student to Hired Professional
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Our graduates are now working at some of the top companies in the Web3 ecosystem. Here are just a few of them:
                </p>
                <div className="mt-8 space-y-6">
                    {successStories.map(story => {
                        const avatar = PlaceHolderImages.find(img => img.id === story.avatarId);
                        return (
                            <div key={story.name} className="flex items-center gap-4">
                                <Avatar className="h-12 w-12">
                                    {avatar && <AvatarImage src={avatar.imageUrl} alt={story.name} data-ai-hint={avatar.imageHint} />}
                                    <AvatarFallback>{story.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-semibold">{story.name}</p>
                                    <p className="flex items-center gap-1 text-sm text-muted-foreground">
                                        <Check className="h-4 w-4 text-green-500"/>
                                        {story.role}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
