// components/ReservePopup.tsx
'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Cinzel, Cinzel_Decorative, Poppins } from 'next/font/google';
import Link from 'next/link';

 const poppins = Poppins({
    weight: ['600'],
    subsets: ['latin'],
    display: 'swap',
  });
  
  const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '700'] });
  const cinzelDecorative = Cinzel_Decorative({
    subsets: ['latin'],
    weight: ['400', '700', '900'],
  });

export default function ReservePopup() {
  const [show, setShow] = useState(false);
  const t = useTranslations('ReservePopup');

  const scrollToSectionById = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
  };


  useEffect(() => {
    setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div
      className="absolute inset-0 bg-opacity-50 flex justify-end items-end p-10 z-50"
      onClick={() => setShow(false)}
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
    >
      <div
        className="bg-white  p-6 max-w-md  w-full relative"
        onClick={e => e.stopPropagation()}
      >
        <p className={`mb-8 text-center text-black  font-black ${cinzelDecorative.className}`}>{t('message')}</p>
        <button
          onClick={() => scrollToSectionById("reservation")}
          className={`block w-full text-center py-2 px-2 text-xl border-t-2 border-b-2 border-[#c0462d] text-[#c0462d] uppercase tracking-widest hover:bg-[#c0462d] font-black hover:text-white transition ${cinzel.className}`}
        >
          {t('reserveButton')}
        </button>

        <button
          aria-label={t('close')}
          onClick={() => setShow(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
