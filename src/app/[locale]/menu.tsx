'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslations } from 'next-intl';
import { Cinzel_Decorative } from 'next/font/google';
import { Cinzel } from 'next/font/google';
import { Poppins } from 'next/font/google';

const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '700'] });

const cinzelDecorative = Cinzel_Decorative({
  subsets: ['latin'],
  weight: ['400', '700', '900'], // Choose weights you need
});

export const poppins = Poppins({
  weight: ['600'], // SemiBold
  subsets: ['latin'],
  display: 'swap',
});

export default function Menu() {
  const t = useTranslations('Menu');

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const blocks = [
    { key: 'brunch', image: '/images/brunch.png' },
    { key: 'lunch', image: '/images/lunch.png' },
    { key: 'dinner', image: '/images/dinner.png' },
    { key: 'bar', image: '/images/bar.png' },
  ];

  return (
   <section className={`h-screen bg-white text-black ${poppins.className}`}>
      <div className="max-w-7xl mx-auto px-4 h-full flex flex-col md:flex-row items-center justify-center gap-11">
        {/* Left text */}
        <div className="md:w-1/2 w-full text-left">
          <h2 className={`text-5xl mb-6 uppercase text-[#c0462d] font-black ${cinzelDecorative.className}`}>
            <span className="border-b-[3px] border-[#c0462d] pb-4 inline-block w-fit">
              {t('title')}
            </span>
          </h2>

          <p className="text-[1.12rem] leading-tight whitespace-pre-line mb-6">
            {t('description1')}
          </p>
          <p className="text-[1.12rem] leading-tight whitespace-pre-line mb-6">
            {t('description2')}
          </p>
          <p className="text-[1.12rem] leading-tight whitespace-pre-line mb-6">
            {t('description3')}
          </p>
          <p className="text-[1.12rem] leading-tight whitespace-pre-line mb-6">
            {t('description4')}
          </p>
          <p className="text-[1.12rem] leading-tight whitespace-pre-line mb-12">
            {t('description5')}
          </p>


          <div className='mt-13'>
            <a
              href="/menu.pdf"
              target="_blank"
              className={`py-2 px-2 text-xl border-t-2 border-b-2 border-[#c0462d] text-[#c0462d] uppercase tracking-widest hover:bg-[#c0462d] font-black hover:text-white transition ${cinzel.className}`}
            >
            {t('viewMenu')}
          </a>
          </div>
          
        </div>

        {/* Right grid */}
        <div className="md:w-1/2 w-full grid grid-cols-2 gap-10">
          {blocks.map((block, index) => (
            <div
              key={block.key}
              className={`relative text-center ${index % 2 === 1 ? 'mt-[-3rem]' : ''}`}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="relative w-full h-64 overflow-hidden ">
                <img
                  src={block.image}
                  alt={t(`blocks.${block.key}`)}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute bottom-3 left-0 w-full bg-[#c0462d]/70 text-white text-xl tracking-wider uppercase px-2 py-2 font-black shadow-lg ${cinzel.className}`}
                >
                  {t(`blocks.${block.key}`)}
                </div>

              </div>
            </div>
          ))}
        </div>



      </div>

    </section>

  );
}
