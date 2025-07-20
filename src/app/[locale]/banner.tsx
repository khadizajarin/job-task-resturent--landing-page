'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import ReservationModal from '../../../src/components/ReservationModal';
import { useTranslations } from 'next-intl';
import {Link, usePathname, useRouter} from '../../i18n/navigation';
import {routing} from '../../i18n/routing';
import { PiStarFourFill } from "react-icons/pi";
import { Cinzel_Decorative } from 'next/font/google';
import { Cinzel } from 'next/font/google';
import { Poppins } from 'next/font/google';


export const poppins = Poppins({
  weight: ['600'], // SemiBold
  subsets: ['latin'],
  display: 'swap',
});

const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '700'] });

const cinzelDecorative = Cinzel_Decorative({
  subsets: ['latin'],
  weight: ['400', '700', '900'], // Choose weights you need
});


export default function Banner() {
  const t = useTranslations('Banner');

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

const navItems = [
  { labelKey: 'nav.home', href: '/' },
  { labelKey: 'nav.menu', href: '/menu' },
  { labelKey: 'nav.events', href: '/events' },
  { labelKey: 'nav.reservation', href: '/history' },
  { labelKey: 'nav.contact', href: '/gallery' },
  { labelKey: 'nav.stories', href: '/contact' },
];
  
    

  return (
    <div className={`relative ${cinzel.className}`}>
     <header className="w-full bg-transparent text-white py-4 fixed top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 flex items-center justify-between">
        {/* Marquee Centered */}
        <div className="relative flex-1 mx-4 overflow-hidden">
          <div className="whitespace-nowrap animate-[slide-left_30s_linear_infinite] text-sm text-center font-medium">
            {t('opening')}
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

        {/* Language - Right */}
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

      
     </header>


      <nav className="flex flex-row items-start gap-10 absolute top-[9.5rem] left-1/2 -translate-x-1/2 text-white font-extrabold z-50">
        {navItems.map(({ labelKey, href }) => (
          <Link
            key={href}
            href={href}
            className="uppercase tracking-widest text-[1.5rem] whitespace-nowrap border-b-2 border-white pb-4"
          >
            {t(labelKey)}
          </Link>
        ))}
      </nav>


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

        <div className="px-40 pt-36 flex items-center justify-between relative ">
            {/* Logo - Center */}
            <div className="flex-1 text-center absolute top-6 left-1/2 -translate-x-1/2">
              <Image
                src="/images/logo-01.png"
                alt="Background"
                width={400} height={400}
              />
            </div>
        </div>



        {/* Hero Text */}
        <div className="flex-grow flex flex-col items-center justify-center text-center px-4  font-black">
          <h1 className="text-7xl  font-black tracking-[0.3em] leading-18 uppercase mb-6 max-w-4xl mx-auto ">
            {t('hero.title')}
          </h1>
          <h3 className={`uppercase text-3xl tracking-[0.1em] max-w-4xl mx-auto ${poppins.className}`}>
            {t('hero.subtitle')}
          </h3>
        </div>

      </div>



      {/* Decorative Borders */}
      <div className="pointer-events-none absolute inset-[3rem] z-10">
        {/* Border lines */}
        {/* TOP BORDER LEFT PART */}
        <div className="absolute top-10 left-20 w-[35rem] border-t-2 border-white" />

        {/* TOP BORDER RIGHT PART */}
        <div className="absolute top-10 right-20 w-[35rem] border-t-2 border-white" />

        {/* BOTTOM BORDER */}
        <div className="absolute bottom-0 left-1/2 w-[98.7rem] -translate-x-1/2 border-b-2 border-white" />

        <div className="absolute top-1/2 right-0 h-[39.5rem] border-r-2 border-white -translate-y-[18.5rem]" />
        <div className="absolute top-1/2 left-0 h-[39.5rem] border-l-2 border-white -translate-y-[18.5rem]" />

  

                

        {/* Corner curves */}
        {/* Top-left curve */}
        <div className="absolute top-10 left-0 w-20 h-20 border-b-2 border-r-2 border-white rounded-br-full z-10" />
        {/* Bottom-left curve */}
        <div className="absolute bottom-0 left-0 w-20 h-20 border-t-2 border-r-2 border-white rounded-tr-full z-10" />
        <div className="absolute bottom-0 right-0 w-20 h-20 border-t-2 border-l-2 border-white rounded-tl-full z-10" />
        <div className="absolute top-10 right-0 w-20 h-20 border-b-2 border-l-2 border-white rounded-bl-full z-10" />


        {/* Corner images */}
        <div className="absolute top-1 -left-8 w-20 h-20 flex items-center justify-center z-20">
          <PiStarFourFill className='w-5 h-5'/>
        </div>
        <div className="absolute top-1 -right-8 w-20 h-20 flex items-center justify-center z-20">
          <PiStarFourFill className='w-5 h-5'/>
        </div>
        <div className="absolute -bottom-8 -left-8 w-20 h-20 flex items-center justify-center z-20">
          <PiStarFourFill className='w-5 h-5'/>
        </div>
        <div className="absolute -bottom-8 -right-8 w-20 h-20 flex items-center justify-center z-20">
          <PiStarFourFill className='w-5 h-5'/>
        </div>

        
      </div>

        {/* <ReservationModal isOpen={showModal} onClose={() => setShowModal(false)} /> */}
      </div>
    </div>
    
  );
}