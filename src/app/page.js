import Gallery from '@/components/Shared/Gallery';
import Harmohny from "@/components/Shared/Harmohny";
import Feature from "@/components/Shared/Feature";
import Hero from '@/components/Shared/Hero';
import HeroBanner from '@/components/Shared/HeroBanner';
import Countdown from '@/components/Shared/Countdown';
import Innerhero from '@/components/Shared/Innerhero';
import Sponsor from '@/components/Shared/Sponsor';
import Start from '@/components/Start/Start';


export default function Home() {
    const eventDate = "2024-03-22T23:59:59";

  return (
    <div className="mt-28 bg-slate-100">
      <HeroBanner />
      <Harmohny />
      <Feature />
      <Countdown eventDate={eventDate} />
      <Start/>
      <Innerhero eventDate={eventDate} />
      <Hero />
      <Gallery />
      <Sponsor />
    </div>
  );
}
