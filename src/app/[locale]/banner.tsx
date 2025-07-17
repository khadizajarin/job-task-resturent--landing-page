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
      setShowModal(true); // Show modal
      sessionStorage.setItem('hasVisited', 'true'); // Mark as visited
    }
  }, []);

    const pathname = usePathname(); // current path without locale prefix
    const router = useRouter();
  
    const handleLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newLocale = e.target.value;
      router.push({pathname}, {locale: newLocale});
    };
  

  return (
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

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[39rem] backdrop-blur-md z-50 transform transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-white">
          <h2 className="text-xl uppercase tracking-wider pl-20">Menu</h2>
          <button onClick={() => setSidebarOpen(false)}>
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
        <ul className="px-20 py-20 space-y-5 uppercase tracking-widest text-3xl">
        {['Home', 'Menu', 'Reservation','Events','Contact','Our Stories' ].map((item, index) => (
            <li key={index} className="flex items-center gap-4 text-5xl font-semibold hover:tracking-[0.25em] transition-all duration-300 pb-6">
            <Image
                src="/images/dropdown-01.png"
                alt={`${item} icon`}
                width={40}
                height={40}
                priority
            />
            {item}
            </li>
        ))}
        </ul>
        <h2 className={`text-2xl md:text-3xl tracking-[0.35em] uppercase text-center ${pacifico.className}`}>
                BigSpuntino
        </h2>

      </div>

      {/* Content */}
      <div className=" z-10 flex flex-col h-full">

        <div className="px-40 pt-36 flex items-center justify-between relative">
            {/* Sidebar Toggle - Left */}
            <button
                onClick={() => setSidebarOpen(true)}
                className="p-2 hover:bg-white/20 transition animate-pulse mr-40"
            >
                <Logs className="w-10 h-10 text-white" />
            </button>

            {/* Logo - Center */}
            <div className="flex-1 text-center">
                <h2 className={`text-4xl md:text-5xl tracking-[0.35em] uppercase ${pacifico.className}`}>
                BigSpuntino
                </h2>
            </div>

            {/* Social + Language - Right */}
            <div className="flex items-center gap-4 text-sm uppercase">
                <div className="flex gap-2">
                <Icon icon="fa6-brands:facebook" className="w-6 h-6 text-white" />
                <Icon icon="fa6-brands:square-instagram" className="w-6 h-6 text-white" />
                <Icon icon="fa6-brands:pinterest" className="w-6 h-6 text-white" />
                </div>
                <span className="tracking-widest flex gap-1"><span className='text-xl'> ENG </span> <Image src="/images/dropdown-01.png" alt="Top Left" width={24} height={20} priority /> </span>
                <select id="locale-select" onChange={handleLocaleChange} defaultValue={routing.defaultLocale}>
                {routing.locales.map((locale) => (
                    <option key={locale} value={locale}>
                    {locale.toUpperCase()}
                    </option>
                ))}
                </select>
            </div>
        </div>



        {/* Hero Text */}
        <div className="flex-grow flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-7xl md:text-5xl font-bold tracking-[0.3em] uppercase mb-6">
            {t('hero.title')}
          </h1>
          <Button  href="/reservation" className="uppercase ">
            Make a <span className="">Reservation</span>
          </Button>
        </div>
      </div>

      {/* Decorative Borders */}
      <div className="pointer-events-none absolute inset-[5rem] z-10">
        {/* Border lines */}
        <div
        className={`absolute top-0 border-t-2 border-white transition-all duration-500
            ${sidebarOpen
            ? 'left-1/2 w-[45.2%] -translate-x-0'
            : 'left-1/2 w-[90.5%] -translate-x-1/2'
            }`}
        />
        <div
        className={`absolute bottom-0 border-b-2 border-white transition-all duration-500
            ${sidebarOpen
            ? 'left-1/2 w-[45.2%] -translate-x-0'
            : 'left-1/2 w-[90.5%] -translate-x-1/2'
            }`}
        />

        <div className="absolute top-1/2 right-0 h-[79.5%] border-r-2 border-white -translate-y-1/2" />

        {!sidebarOpen && (
        <div className="absolute top-1/2 left-0 h-[79.5%] border-l-2 border-white -translate-y-1/2" />
        )}

        

        {/* Corner curves */}
        {/* Top-left curve (conditionally hidden when sidebar is open) */}
        {!sidebarOpen && (
        <div className="absolute top-0 left-0 w-20 h-20 border-b-2 border-r-2 border-white rounded-br-full z-10" />
        )}
        {/* Bottom-left curve (conditionally hidden when sidebar is open) */}
        {!sidebarOpen && (
        <div className="absolute bottom-0 left-0 w-20 h-20 border-t-2 border-r-2 border-white rounded-tr-full z-10" />
        )}
        <div className="absolute bottom-0 right-0 w-20 h-20 border-t-2 border-l-2 border-white rounded-tl-full z-10" />
        <div className="absolute top-0 right-0 w-20 h-20 border-b-2 border-l-2 border-white rounded-bl-full z-10" />


        {/* Corner images */}
        <div className="absolute -top-5 -left-5 w-20 h-20 flex items-center justify-center z-20">
          <Image src="/images/dropdown-01.png" alt="Top Left" width={40} height={40} priority />
        </div>
        <div className="absolute -top-5 -right-5 w-20 h-20 flex items-center justify-center z-20">
          <Image src="/images/dropdown-01.png" alt="Top Right" width={40} height={40} priority />
        </div>
        <div className="absolute -bottom-5 -left-5 w-20 h-20 flex items-center justify-center z-20">
          <Image src="/images/dropdown-01.png" alt="Bottom Left" width={40} height={40} priority />
        </div>
        <div className="absolute -bottom-5 -right-5 w-20 h-20 flex items-center justify-center z-20">
          <Image src="/images/dropdown-01.png" alt="Bottom Right" width={40} height={40} priority />
        </div>

        
      </div>

        <ReservationModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}