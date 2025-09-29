import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Hero } from '@/components/sections/Hero';
import { Stakes } from '@/components/sections/Stakes';
import { Problem } from '@/components/sections/Problem';
import { Guide } from '@/components/sections/Guide';
import { Plan } from '@/components/sections/Plan';
import { Success } from '@/components/sections/Success';
import { SocialProof } from '@/components/sections/SocialProof';
import { Pricing } from '@/components/sections/Pricing';
import { Cta } from '@/components/sections/Cta';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Stakes />
        <Problem />
        <Guide />
        <Plan />
        <Success />
        <SocialProof />
        <Pricing />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
