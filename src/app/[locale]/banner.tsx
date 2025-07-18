'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Menu, X,  Logs} from 'lucide-react';
import { Icon } from '@iconify/react';
import { Playfair_Display, Space_Grotesk } from 'next/font/google';
import { Pacifico } from 'next/font/google';
import Button from '../../../src/commonComponents/Button';
import ReservationModal from '../../../src/components/ReservationModal';
import { useTranslations } from 'next-intl';
import {Link, usePathname, useRouter} from '../../i18n/navigation';
import {routing} from '../../i18n/routing';
import { PiStarFourFill } from "react-icons/pi";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pacifico',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
});

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-grotesk',
});


export default function Banner() {
    const t = useTranslations('Banner');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('true');

    if (!hasVisited) {
      setShowModal(true); 
      sessionStorage.setItem('hasVisited', 'true'); 
    }
  }, []);

    const pathname = usePathname();
    const router = useRouter();
  
    const handleLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newLocale = e.target.value;
      router.push({pathname}, {locale: newLocale});
    };
  
    

  return (
    <div className="relative">
     <header className="w-full bg-transparent text-white py-4 fixed top-0 z-50">
  <div className="mx-auto max-w-7xl px-4 flex items-center justify-between">
    
    {/* Social- Left */}
    <div className="flex items-center gap-4 text-sm uppercase">
      <div className="flex gap-2">
        <Icon icon="fa6-brands:facebook" className="w-5 h-5 text-white" />
        <Icon icon="fa6-brands:square-instagram" className="w-5 h-5 text-white" />
        <Icon icon="fa6-brands:pinterest" className="w-5 h-5 text-white" />
      </div>
    </div>

    {/* Marquee Centered */}
    <div className="relative flex-1 mx-4 overflow-hidden">
      <div className="whitespace-nowrap animate-[slide-left_30s_linear_infinite] text-sm text-center">
        OPENING HOURS: Wed–Fri: 11:00 – 23:00 | Sat: 10:00 – 23:00 | Sun: 10:00 – 17:00
      </div>
    </div>

    {/* Language - Right (same as left) */}
    <div className="flex items-center gap-4 text-sm uppercase">
      <select
        id="locale-select-right"
        onChange={handleLocaleChange}
        className="bg-transparent text-white text-sm px-2 py-1 border border-white focus:outline-none focus:ring-0"
        style={{
          backgroundColor: 'transparent',
          color: 'white',
          WebkitAppearance: 'none',
          MozAppearance: 'none',
          appearance: 'none',
        }}
      >
        {routing.locales.map((locale) => (
          <option
            key={locale}
            value={locale}
            className="bg-black text-white"
          >
            {locale.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  </div>

  <style jsx global>{`
    @keyframes slide-left {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  `}</style>
</header>



      <div className="relative h-screen w-full text-white overflow-hidden">
      
      {/* Background */}
      <div className="fixed top-0 left-0 w-full h-screen -z-20">
        <Image
          src="/images/bg-01.png"
          alt="Background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 -z-10" />


      {/* Content */}
      <div className=" z-10 flex flex-col h-full">

        <div className="px-40 pt-36 flex items-center justify-between relative">
            {/* Logo - Center */}
            <div className="flex-1 text-center absolute top-4 left-1/2 -translate-x-1/2">
              <Image
                src="/images/logo-01.png"
                alt="Background"
                width={400} height={400}
              />
            </div>
        </div>



        {/* Hero Text */}
        <div className="flex-grow flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-7xl md:text-5xl font-bold tracking-[0.3em] uppercase mb-6">
            {t('hero.title')}
          </h1>
          <h3  className="uppercase ">
                {t('hero.subtitle')}
          </h3>
        </div>
      </div>



      {/* Decorative Borders */}
      <div className="pointer-events-none absolute inset-[3rem] z-  10">
        {/* Border lines */}
        {/* TOP BORDER LEFT PART */}
        <div className="absolute top-8 left-20 w-[35rem] border-t-2 border-white" />

        {/* TOP BORDER RIGHT PART */}
        <div className="absolute top-8 right-20 w-[35rem] border-t-2 border-white" />

        {/* BOTTOM BORDER */}
        <div className="absolute bottom-0 left-1/2 w-[98.7rem] -translate-x-1/2 border-b-2 border-white" />

        <div className="absolute top-1/2 right-0 h-[77%] border-r-2 border-white -translate-y-[47.5%]" />
        <div className="absolute top-1/2 left-0 h-[77%] border-l-2 border-white -translate-y-[47.5%]" />
  

                

        {/* Corner curves */}
        {/* Top-left curve (conditionally hidden when sidebar is open) */}
        <div className="absolute top-8 left-0 w-20 h-20 border-b-2 border-r-2 border-white rounded-br-full z-10" />
        {/* Bottom-left curve (conditionally hidden when sidebar is open) */}
        <div className="absolute bottom-0 left-0 w-20 h-20 border-t-2 border-r-2 border-white rounded-tr-full z-10" />
        <div className="absolute bottom-0 right-0 w-20 h-20 border-t-2 border-l-2 border-white rounded-tl-full z-10" />
        <div className="absolute top-8 right-0 w-20 h-20 border-b-2 border-l-2 border-white rounded-bl-full z-10" />


        {/* Corner images */}
        <div className="absolute -top-12 -left-5 w-20 h-20 flex items-center justify-center z-20">
          <PiStarFourFill className='w-5 h-5'/>
          {/* <Image src="/images/dropdown-01.png" alt="Top Left" width={40} he/>ight={40} priority /> */}
        </div>
        <div className="absolute -top-12 -right-5 w-20 h-20 flex items-center justify-center z-20">
          <PiStarFourFill className='w-5 h-5'/>
        </div>
        <div className="absolute -bottom-5 -left-5 w-20 h-20 flex items-center justify-center z-20">
          <PiStarFourFill className='w-5 h-5'/>
        </div>
        <div className="absolute -bottom-5 -right-5 w-20 h-20 flex items-center justify-center z-20">
          <PiStarFourFill className='w-5 h-5'/>
        </div>

        
      </div>

        <ReservationModal isOpen={showModal} onClose={() => setShowModal(false)} />
      </div>
    </div>
    
  );
}