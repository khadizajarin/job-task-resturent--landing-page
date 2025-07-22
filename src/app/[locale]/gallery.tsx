'use client';

import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Cinzel_Decorative } from 'next/font/google';
import { Cinzel } from 'next/font/google';
import { Poppins } from 'next/font/google';
import { useTranslations } from 'next-intl';

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

const images = [
  { src: '/images/gallery1.png', alt: 'Italian Dishes' },
  { src: '/images/gallery2.png', alt: 'Restaurant Interior' },
  { src: '/images/gallery3.png', alt: 'Spuntino Snacks' },
  { src: '/images/gallery4.png', alt: 'Guests Enjoying Meal' },
  { src: '/images/gallery5.png', alt: 'Bar and Aperitivo' },
  { src: '/images/gallery6.png', alt: 'Outdoor Seating' },
];

export default function GalleryMosaic() {
  const [selected, setSelected] = useState<number | null>(null);
  const t = useTranslations('gallery');

  return (
    <section className="relative bg-white overflow-hidden lg:py-20 py-10 px-10 sm:px-12 lg:px-20 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-11">

         {/* Scattered Doodle Background */}
                  <div className="absolute hidden lg:block inset-0 pointer-events-none z-0">
                    <Image
                        src="/images/event-doodle1.png"
                        alt="Doodle 1"
                        width={100}
                        height={100}
                        className="absolute top-8 left-10 opacity-40"
                    />
                    <Image
                        src="/images/event-doodle2.png"
                        alt="Doodle 2"
                        width={100}
                        height={100}
                        className="absolute top-40 right-16 opacity-40 rotate-12"
                    />
                    <Image
                        src="/images/event-doodle3.png"
                        alt="Doodle 3"
                        width={100}
                        height={100}
                        className="absolute bottom-8 left-[5%] opacity-50 -rotate-6"
                    />
                    <Image
                        src="/images/event-doodle4.png"
                        alt="Doodle 4"
                        width={100}
                        height={100}
                        className="absolute top-[30%] left-[55%] opacity-40 rotate-[15deg]"
                    />
                    <Image
                        src="/images/event-doodle5.png"
                        alt="Doodle 5"
                        width={100}
                        height={100}
                        className="absolute bottom-[30%] right-[10%] opacity-40 -rotate-[10deg]"
                    />
                    <Image
                        src="/images/event-doodle6.png"
                        alt="Doodle 6"
                        width={100}
                        height={100}
                        className="absolute top-[45%] left-[10%] opacity-50 rotate-[25deg]"
                    />
                    <Image
                        src="/images/event-doodle7.png"
                        alt="Doodle 7"
                        width={100}
                        height={100}
                        className="absolute bottom-16 right-[30%] opacity-30 rotate-[5deg]"
                    />
                  </div>
        
        
        {/* Mosaic Layout - Left Side */}
        <div className="grid grid-cols-4 auto-rows-[13rem] gap-2 lg:gap-4 flex-1 w-full lg:w-9/12 ">
          {images.map((img, i) => {
            const spanClass = (() => {
              switch (i) {
                case 0: return 'col-span-1 row-span-1';
                case 1: return 'col-span-1 row-span-1';
                case 2: return 'col-span-2 row-span-2';
                case 3: return 'col-span-2 row-span-2';
                case 4: return 'col-span-1 row-span-1';
                case 5: return 'col-span-1 row-span-1';
              }
            })();

            return (
              <motion.div
                key={i}
                className={`relative overflow-hidden cursor-pointer group shadow-lg ${spanClass}`}
                onClick={() => setSelected(i)}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-2 text-sm opacity-0 font-black group-hover:opacity-100 transition-all duration-300 ${cinzel.className}`}>
                  {img.alt}
                </div>
              </motion.div>
            );
          })}
        </div>


        {/* Text Content - Right Side */}
        <div className="relative z-20 w-full lg:w-5/12 max-w-xl text-[1D1D1B] px-4 lg:px-0 text-right">
          <h2 className={`text-5xl mb-6 text-[#964315] font-black ${cinzelDecorative.className}`}>
            <span className="border-b-[3px] border-[#964315] pb-4 inline-block w-fit">
              {t('title')}
            </span>
          </h2>
          <p className={`text-[1.12rem] leading-tight whitespace-pre-line mb-6 ${poppins.className}`}>
            {t('subtitle')}
          </p>
        </div>

      </div>
    </section>

  );
}
