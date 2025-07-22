'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl'; // Import useLocale
import { Link, usePathname, useRouter } from '../../i18n/navigation';
import { routing } from '../../i18n/routing';
import { PiStarFourFill } from 'react-icons/pi';
import { Cinzel_Decorative } from 'next/font/google';
import { Cinzel } from 'next/font/google';
import { Poppins } from 'next/font/google';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';
import ReservePopup from '../../../src/components/ReservationModal';
import { BsArrowDownCircleFill } from 'react-icons/bs';

export const poppins = Poppins({
  weight: ['600'],
  subsets: ['latin'],
  display: 'swap',
});

const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '700'] });
const cinzelDecorative = Cinzel_Decorative({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
});

export default function Banner() {
  const t = useTranslations('Banner');
  const [menuOpen, setMenuOpen] = useState(false);
  const locale = useLocale(); // Get the current locale using useLocale
  const arrowRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const arrow = arrowRef.current;
    if (!arrow) return;

    let visible = false;

    const interval = setInterval(() => {
      visible = !visible;
      arrow.style.opacity = visible ? '1' : '0';
      arrow.style.transform = visible ? 'translateY(8px)' : 'translateY(0)';
      arrow.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  const handleLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    router.push({ pathname }, { locale: newLocale });
  };

  const scrollToSectionById = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { labelKey: 'nav.home', id: 'home' },
    { labelKey: 'nav.menu', id: 'menu' },
    { labelKey: 'nav.events', id: 'events' },
    { labelKey: 'nav.reservation', id: 'reservation' },
    { labelKey: 'nav.contact', id: 'contact' },
    { labelKey: 'nav.stories', id: 'stories' },
  ];

  return (
    <div className={`relative  w-full h-full ${cinzel.className}`}>
      {/* Header */}
      <header className="w-full text-white py-4 absolute z-50">
        <div className="mx-auto max-w-7xl px-4 flex items-center justify-between">
          {/* Marquee - hidden on small screens */}
          <div className="relative flex-1 mx-4 overflow-hidden hidden sm:block">
            <div className="whitespace-nowrap animate-[slide-left_30s_linear_infinite] text-sm text-center font-medium">
              {t('opening')}
            </div>
          </div>

          {/* Hamburger Menu - small screens only */}
          <div className="sm:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <IoClose className="w-6 h-6 text-white" />
              ) : (
                <RxHamburgerMenu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>

          {/* Language Selector */}
          <div className="flex items-center gap-4 text-sm uppercase">
            <select
              id="locale-select-right"
              onChange={handleLocaleChange}
              value={locale} // Bind to the current locale
              className="bg-transparent text-white text-sm px-2 py-1 focus:outline-none focus:ring-0"
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
                  className="bg-[#964315] text-white font-black"
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

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <nav className="flex flex-col gap-4 items-center absolute top-20 left-0 w-full bg-black/90 text-white z-50 py-6 sm:hidden">
          {navItems.map(({ labelKey, id }) => (
            <button
              key={id}
              className="text-xl tracking-wide py-2"
              onClick={() => setMenuOpen(false)}
            >
              {t(labelKey)}
            </button>
          ))}
        </nav>
      )}

      {/* Desktop Nav */}
      <nav className="hidden sm:flex flex-row items-start gap-10 absolute top-[9.5rem] left-1/2 -translate-x-1/2 text-white font-extrabold z-50">
        {navItems.map(({ labelKey, id }) => (
          <button
            key={id}
            onClick={() => scrollToSectionById(id)}
            className="tracking-widest text-[1.5rem] whitespace-nowrap border-b-2 border-white pb-4"
          >
            {t(labelKey)}
          </button>
        ))}
      </nav>

      {/* Main Content */}
      <div className="relative lg:h-screen h-[60vh] w-full text-white overflow-hidden">
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

        {/* Content Container */}
        <div className="z-10 flex flex-col h-full">
          {/* Logo */}
          <div className="px-4 sm:px-40 pt-8 sm:pt-36 flex items-center justify-between relative">
            <div className="flex-1 text-center absolute top-[2.7vw] left-1/2 -translate-x-1/2">
              <Image
                src="/images/logo-01.png"
                alt="Logo"
                width={400}
                height={400}
              />
            </div>
          </div>

          {/* Hero Text */}
          <div className="flex-grow flex flex-col items-center justify-center text-center px-4 font-black">
            <h1 className="text-3xl sm:text-7xl tracking-[0.2em] sm:tracking-[0.3em] leading-tight mb-4 sm:mb-6 max-w-3xl sm:max-w-4xl mx-auto">
              {t('hero.title')}
            </h1>
            <h3
              className={`text-lg sm:text-3xl tracking-[0.05em] sm:tracking-[0.1em] max-w-3xl sm:max-w-4xl mx-auto ${poppins.className}`}
            >
              {t('hero.subtitle')}
            </h3>

            <div
              className="absolute bottom-7 sm:bottom-12 flex flex-col items-center gap-1 sm:text-2xl tracking-widest"
              ref={arrowRef}
            >
              <BsArrowDownCircleFill className="w-3 h-3 sm:w-8 sm:h-8 text-white" />
              <span className={`text-sm ${cinzel.className}`}>{t('explore')}</span>
            </div>
          </div>
        </div>

        {/* Decorative Borders */}
        <div className="pointer-events-none absolute inset-[2vw] z-10 hidden lg:block md:block">
          {/* Border lines */}
          {/* Top left border */}
          <div className="absolute top-[2vw] left-[4.9vw] w-[28vw] border-t-2 border-white" />
          {/* Top right border */}
          <div className="absolute top-[2vw] right-[4.9vw] w-[28vw] border-t-2 border-white" />
          {/* Bottom border */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[89.7%] border-b-2 border-white" />
          {/* vertical border */}
          {/* <div className="absolute top-1/2 right-0 lg:h-[70.4vh] sm:h-[50vh] md:h-[60vh]  xl:h-[74.6vh] 2xl:h-[85vh]  border-r-2 border-white lg:-translate-y-[47.5%] xl:-translate-y-[47.6%]" />
          <div className="absolute top-1/2 left-0 md:h-[70.4vh] xl:h-[74.6vh] border-l-2 border-white lg:-translate-y-[47.5%] xl:-translate-y-[47.6%]" /> */}

          {/* <div className="absolute top-1/2 right-0 h-[68.5vh] min-h-[500px] max-h-[700px] border-r-2 border-white -translate-y-[47%]" />
          <div className="absolute top-1/2 left-0 h-[68.5vh] min-h-[500px] max-h-[700px] border-l-2 border-white -translate-y-[47%]" /> */}

          <div className="absolute top-1/2 right-0 border-r-2 border-white -translate-y-[47%]"
              style={{
                height: 'calc(100vh - 16vw)', // Full height minus top/bottom margins
              }} />
          <div className="absolute top-1/2 left-0 border-l-2 border-white -translate-y-[47%]"
              style={{
                height: 'calc(100vh - 16vw)', // Full height minus top/bottom margins
              }} />
          


          {/* Corner curves */}
          <div className="absolute top-[2vw] left-0 w-[5vw] h-[5vw] border-b-2 border-r-2 border-white rounded-br-full z-10" />
          <div className="absolute bottom-0 left-0 w-[5vw] h-[5vw] border-t-2 border-r-2 border-white rounded-tr-full z-10" />
          <div className="absolute bottom-0 right-0 w-[5vw] h-[5vw] border-t-2 border-l-2 border-white rounded-tl-full z-10" />
          <div className="absolute top-[2vw] right-0 w-[5vw] h-[5vw] border-b-2 border-l-2 border-white rounded-bl-full z-10" />

          {/* Corner stars */}
          <div className="absolute top-[0.5vw] -left-[1.5vw] w-[5vw] h-[5vw] flex items-center justify-center z-20">
            <PiStarFourFill className="w-[1.5vw] h-[1.5vw] max-w-[24px] max-h-[24px]" />
          </div>
          <div className="absolute top-[0.5vw] -right-[1.5vw] w-[5vw] h-[5vw] flex items-center justify-center z-20">
            <PiStarFourFill className="w-[1.5vw] h-[1.5vw] max-w-[24px] max-h-[24px]" />
          </div>
          <div className="absolute -bottom-[1.5vw] -left-[1.5vw] w-[5vw] h-[5vw] flex items-center justify-center z-20">
            <PiStarFourFill className="w-[1.5vw] h-[1.5vw] max-w-[24px] max-h-[24px]" />
          </div>
          <div className="absolute -bottom-[1.5vw] -right-[1.5vw] w-[5vw] h-[5vw] flex items-center justify-center z-20">
            <PiStarFourFill className="w-[1.5vw] h-[1.5vw] max-w-[24px] max-h-[24px]" />
          </div>
        </div>

        {/* Reservation Modal */}
        {/* <ReservePopup /> */}
      </div>
    </div>
  );
}