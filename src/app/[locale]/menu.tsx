'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslations } from 'next-intl';

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
    <section className="py-12 bg-[#ffece3] text-black">
      <h2 className="text-center text-3xl font-serif mb-6 uppercase">{t('title')}</h2>

      <p className="max-w-4xl mx-auto text-sm text-center mb-10">
        {t('description')}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {blocks.map((block, index) => (
          <div
            key={block.key}
            className="text-center"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <img
              src={block.image}
              alt={t(`blocks.${block.key}`)}
              className="rounded-lg w-full h-48 object-cover mb-2"
            />
            <h3 className="uppercase tracking-wider text-sm">{t(`blocks.${block.key}`)}</h3>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <a
          href="/menu.pdf"
          target="_blank"
          className="inline-block border px-6 py-2 text-sm uppercase tracking-widest hover:bg-black hover:text-white transition"
        >
          {t('viewMenu')}
        </a>
      </div>
    </section>
  );
}
