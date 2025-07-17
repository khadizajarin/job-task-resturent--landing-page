'use client';

import { useTranslations } from 'next-intl';

export default function Story() {
  const t = useTranslations('Story');

  return (
    <section className="px-6 py-12 md:py-20 lg:px-24 bg-[#fdeee6] text-black">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('title')}</h2>
        <p className="text-sm md:text-base leading-relaxed whitespace-pre-line">
          {t('content')}
        </p>
      </div>
    </section>
  );
}
