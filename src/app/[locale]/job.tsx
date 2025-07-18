'use client';

import { useTranslations } from 'next-intl';

export default function Job() {
  const t = useTranslations('Job');

  return (
    <section className="bg-[#fff7f2] px-6 py-20">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h1 className="text-4xl font-bold text-[#222]">💼 {t('title')}</h1>

        <blockquote className="italic text-xl text-[#444] leading-relaxed border-l-4 border-[#c0462d] pl-4">
          {t('quote')}
        </blockquote>

        <p className="text-lg text-[#333]">{t('description')}</p>

        {/* Optional CTA */}
        <a
          href="mailto:mail@bigspuntino.de"
          className="inline-block mt-6 bg-[#c0462d] text-white px-6 py-3 rounded-lg text-lg font-semibold shadow hover:bg-[#a63b23] transition"
        >
          {t('applyNow')}
        </a>
      </div>
    </section>
  );
}
