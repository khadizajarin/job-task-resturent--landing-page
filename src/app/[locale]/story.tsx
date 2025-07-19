'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Cinzel, Cinzel_Decorative } from 'next/font/google';
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

export default function Story() {
  const t = useTranslations('Story');

  return (
    <section className="relative h-[38rem] px-6 py-12 md:py-20 lg:px-24 text-white overflow-hidden">
      {/* Background image container */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/history-bg.png"
          alt="Background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto h-full flex flex-col justify-center text-left  z-10">
        <h2 className={`text-5xl font-serif mb-6 uppercase text-white font-black ${cinzelDecorative.className}`}>
          <span className="border-b-[3px] border-white pb-4 inline-block w-fit">
            {t('title')}
          </span>
        </h2>
        <p className="text-sm md:text-base leading-relaxed whitespace-pre-line">
          {t('content')}
        </p>
      </div>
    </section>

  );
}
