'use client';

import { useTranslations } from 'next-intl';
import { Cinzel, Cinzel_Decorative,Poppins } from 'next/font/google';
import Image from 'next/image';

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
    <section className={`relative bg-[#964315] h-[30rem] lg:h-[28rem] text-left px-6 lg:py-20 py-10 ${poppins.className}`}>
        <div className="absolute hidden lg:block inset-0 pointer-events-none z-0">
          <Image
            src="/images/menu-doodle1.png"
            alt="Doodle 1"
            width={100}
            height={100}
            className="absolute top-[1.5rem] left-[8.75rem] opacity-100 rotate-[3deg]"
          />
          <Image
            src="/images/menu-doodle2.png"
            alt="Doodle 2"
            width={100}
            height={100}
            className="absolute top-[18.25rem] right-[10.5rem] opacity-10 rotate-[17deg]"
          />
          <Image
            src="/images/menu-doodle3.png"
            alt="Doodle 3"
            width={100}
            height={100}
            className="absolute bottom-[17.5rem] right-[6.2%] opacity-55 -rotate-[12deg]"
          />
          <Image
            src="/images/menu-doodle4.png"
            alt="Doodle 4"
            width={100}
            height={100}
            className="absolute top-[22.7%] left-[42.3%] opacity-58 rotate-[19deg]"
          />
          <Image
            src="/images/menu-doodle5.png"
            alt="Doodle 5"
            width={100}
            height={100}
            className="absolute bottom-[63.3%] right-[30.9%] opacity-52 -rotate-[14deg]"
          />
          <Image
            src="/images/event-doodle6.png"
            alt="Doodle 6"
            width={100}
            height={100}
            className="absolute top-[53.6%] left-[13.8%] opacity-58 rotate-[28deg]"
          />
          <Image
            src="/images/event-doodle7.png"
            alt="Doodle 7"
            width={100}
            height={100}
            className="absolute bottom-[4.5rem] right-[28.3%] opacity-28 rotate-[9deg]"
          />
        </div>


        <div className="max-w-7xl mx-auto space-y-8 z-40">
          <h2 className={`text-5xl mb-6 uppercase text-white font-black ${cinzelDecorative.className}`}>
            <span className="border-b-[3px] border-white pb-4 inline-block w-fit">
              {t('title')}
            </span>
          </h2>

          <blockquote className=" text-xl text-white">
            {t('quote')}
          </blockquote>

          <p className="text-lg text-white">{t('description')}</p>

          
         <div className={`inline-block py-2 px-4 text-xl border-t-2 border-b-2 border-white text-white uppercase tracking-widest hover:bg-[#964315] font-black hover:text-white transition ${cinzel.className}`}>
            {t('applyNow')}
          </div>
      </div>
    </section>
  );
}
