import Gallery from '@/components/Shared/Gallery';
import Navbar from '@/components/navbar/Navbar'
import Image from 'next/image';
import Harmohny from "@/components/Shared/Harmohny";
import Feature from "@/components/Shared/Feature";
import AboutPage from "@/components/Shared/About";
import Hero from '@/components/Shared/Hero';
import HeroBanner from '@/components/Shared/HeroBanner';
import Countdown from '@/components/Shared/Countdown';
import Innerhero from '@/components/Shared/innerhero';
import Link from 'next/link';
import { Button } from 'antd';
import Sponsor from '@/components/Shared/Sponsor';


export default function Home() {
    const eventDate = "2024-03-22T23:59:59";

  return (
    <div className="mt-28 bg-slate-100">
      <HeroBanner />
      <Harmohny />
      <Feature />
      <Countdown eventDate={eventDate} />
      <Innerhero eventDate={eventDate} />
      <Hero />
      <Gallery />
      <Sponsor />
    </div>
  );
}
