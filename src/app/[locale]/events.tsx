'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Events() {
  const t = useTranslations('Events');

  return (
    <section className="relative bg-[#fdeee6] overflow-hidden py-20 px-10 sm:px-12 lg:px-20 ">
        <div className="max-w-[1200px] flex flex-col lg:flex-row items-center justify-between  mx-auto">
             {/* Text Content */}
            <main className="relative z-20 w-full lg:w-5/12 max-w-xl text-black px-4 lg:px-0">
                <h1 className="text-3xl font-serif uppercase mb-6 text-left">
                {t('title')}
                </h1>

                <div className="space-y-6 text-sm leading-relaxed text-left">
                <section>
                    <p>{t('paragraph1')}</p>
                </section>

                <section className="pt-4 border-t">
                    <p>
                    {t('paragraph2')}
                    <br />
                    <strong>{t('comingSoon')}</strong>
                    </p>
                </section>

                <div className="pt-6">
                    <Link
                    href="contact"
                    className="inline-block border border-black px-6 py-2 text-sm uppercase tracking-widest hover:bg-black hover:text-white transition rounded-full"
                    >
                    {t('contact')}
                    </Link>
                </div>
                </div>
            </main>

            {/* Overlapping Images on Right */}
            <div className="relative w-full lg:w-5/12 h-[500px] lg:h-[600px] mt-12 lg:mt-0">
                {/* Back Image */}
                <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="absolute top-10 left-1 w-full h-[70%] max-w-[400px] z-0 rounded-xl overflow-hidden shadow-lg"
                >
                <Image
                    src="/images/event1.png"
                    alt="Event Background"
                    fill
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
                className="absolute top-70 left-60 w-full h-[40%] max-w-[400px] z-10 rounded-xl overflow-hidden shadow-xl"
                >
                <Image
                    src="/images/event2.png"
                    alt="Event Foreground"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 z-10" />
                </motion.div>
            </div>
        </div>

         {/* Decorative Borders */}
              <div className="pointer-events-none absolute inset-[5rem] z-10">
                {/* Border lines */}
                <div
                className="absolute top-0 left-1/2 w-[90.5%] border-t-2 border-black transition-all duration-500 -translate-x-1/2"
                />
                <div
                className="absolute bottom-0 left-1/2 w-[90.5%] border-b-2 border-black transition-all duration-500 -translate-x-1/2"
                />
                <div className="absolute top-1/2 right-0 h-[74%] border-r-2 border-black -translate-y-1/2" />
                <div className="absolute top-1/2 left-0 h-[74%] border-l-2 border-black -translate-y-1/2" />
                
        
                
        
                {/* Corner curves */}
                <div className="absolute top-0 left-0 w-20 h-20 border-b-2 border-r-2 border-black rounded-br-full z-10" />
                <div className="absolute bottom-0 left-0 w-20 h-20 border-t-2 border-r-2 border-black rounded-tr-full z-10" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-t-2 border-l-2 border-black rounded-tl-full z-10" />
                <div className="absolute top-0 right-0 w-20 h-20 border-b-2 border-l-2 border-black rounded-bl-full z-10" />
                
              </div>
        
    </section>
  );
}
