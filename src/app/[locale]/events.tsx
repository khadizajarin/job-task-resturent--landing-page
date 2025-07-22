'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
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

const scrollToSectionById = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
  };


export default function Events() {
  const t = useTranslations('Events');

  return (
    <section id="events" className="relative bg-white lg:h-screen overflow-hidden pb-12">
        <div className="max-w-7xl mx-auto px-4 h-full flex flex-col-reverse md:flex-row items-center justify-center gap-11">

            {/* Scattered Doodle Background */}
            <div className="absolute hidden lg:block inset-0 pointer-events-none z-0">
            <Image
                src="/images/event-doodle1.png"
                alt="Doodle 1"
                width={100}
                height={100}
                className="absolute top-4 left-50 opacity-40"
            />
            <Image
                src="/images/event-doodle2.png"
                alt="Doodle 2"
                width={100}
                height={100}
                className="absolute top-40 right-16 opacity-30 rotate-12"
            />
            <Image
                src="/images/event-doodle3.png"
                alt="Doodle 3"
                width={100}
                height={100}
                className="absolute bottom-16 left-[35%] opacity-50 -rotate-6"
            />
            <Image
                src="/images/event-doodle4.png"
                alt="Doodle 4"
                width={100}
                height={100}
                className="absolute top-[20%] left-[50%] opacity-40 rotate-[15deg]"
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
                className="absolute top-[55%] left-[15%] opacity-50 rotate-[25deg]"
            />
            <Image
                src="/images/event-doodle7.png"
                alt="Doodle 7"
                width={100}
                height={100}
                className="absolute bottom-16 right-[30%] opacity-30 rotate-[5deg]"
            />
            </div>


            {/* Overlapping Images on Right */}
            <div className="relative w-full  h-[500px] lg:h-[600px] mt-12 lg:mt-0">
            {/* Back Image */}
                <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="absolute top-10 left-1 aspect-square max-w-[350px] lg:border-[10px] border-[5px]  border-white z-0 overflow-hidden shadow-[4px_4px_12px_rgba(0,0,0,0.5),_-4px_-4px_8px_rgba(255,255,255,0.3)] rotate-[-10deg]"
                >
                <Image
                    src="/images/event1.png"
                    alt="Event Background"
                    width={400}
                    height={400}
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 z-10" />
            </motion.div>


            {/* Front Image */}
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute top-52 left-60 aspect-square max-w-[350px] lg:border-[10px] border-[5px] border-white z-10 overflow-hidden shadow-[4px_4px_12px_rgba(0,0,0,0.5),_-4px_-4px_8px_rgba(0,0,0,0.3)] rotate-[5deg]"
                >
                <Image
                    src="/images/event2.png"
                    alt="Event Foreground"
                    width={400}
                    height={400}
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 z-10" />
            </motion.div>

            </div>

            {/* Text Content */}
            <main className="relative z-20 w-full lg:pt-0 pt-14 max-w-xl text-[1D1D1B] text-right">
                <h2 className={`text-5xl mb-6 text-[#964315] font-black ${cinzelDecorative.className}`}>
                    <span className="border-b-[3px] border-[#964315] pb-4 inline-block w-fit">
                    {t('title')}
                    </span>
                </h2>

                <div className={`space-y-6 text-sm leading-tight ${poppins.className}`}>
                    <section>
                    <p className='text-[1.12rem] leading-tight mb-6'>{t('paragraph1')}</p>
                    </section>

                    <section className="pt-4 border-t">
                    <p className='text-[1.12rem] leading-tight mb-6'>
                        {t('paragraph2')}
                        <br />
                        <strong>{t('comingSoon')}</strong>
                    </p>
                    </section>

                    <div className="pt-6">
                    <button
                        onClick={() => scrollToSectionById("contact")}
                        className={`py-2 px-2 text-xl border-t-2 border-b-2 border-[#964315] text-[#964315] tracking-widest hover:bg-[#964315] font-black hover:text-white transition ${cinzel.className}`}
                    >
                        {t('contact')}
                    </button>
                    </div>
                </div>
            </main>
        </div>
    </section>

  );
}
