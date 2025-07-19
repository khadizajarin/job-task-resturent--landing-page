'use client';

import { useTranslations } from 'next-intl';
import { Cinzel, Cinzel_Decorative,Poppins } from 'next/font/google';

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

export default function Job() {
  const t = useTranslations('Job');

  return (
    <section className={`bg-[#c0462d] text-left px-6 py-20 ${poppins.className}`}>
      <div className="max-w-7xl mx-auto space-y-8">
        <h2 className={`text-5xl font-serif mb-6 uppercase text-white font-black ${cinzelDecorative.className}`}>
          <span className="border-b-[3px] border-white pb-4 inline-block w-fit">
            {t('title')}
          </span>
        </h2>

        <blockquote className=" text-xl text-white">
          {t('quote')}
        </blockquote>

        <p className="text-lg text-white">{t('description')}</p>

        
         <div className={`inline-block py-2 px-4 text-xl border-t-2 border-b-2 border-white text-white uppercase tracking-widest hover:bg-[#c0462d] font-black hover:text-white transition ${cinzel.className}`}>
            {t('applyNow')}
          </div>
      </div>
    </section>
  );
}
