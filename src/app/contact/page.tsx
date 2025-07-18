'use client';

import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations('Contact');

  return (
    <section className="bg-[#fdeee6] px-6 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left - Info */}
        <div className="space-y-8">
          <h1 className="text-4xl font-bold text-[#1e1e1e]">📍 {t('title')}</h1>

          <address className="not-italic space-y-3 text-lg leading-relaxed text-[#333]">
            <p className="font-semibold">Big Spuntino</p>
            <p>Mühlenkamp 8<br />22303 Hamburg</p>
            <p>Tel: <a href="tel:+494069456828" className="hover:underline">040 / 69 45 68 28</a></p>
            <p>
              <a href="mailto:mail@bigspuntino.de" className="underline hover:text-[#c0462d]">
                mail@bigspuntino.de
              </a>
            </p>
            <p>
              <a
                href="https://bigspuntino.de"
                className="underline hover:text-[#c0462d]"
                target="_blank"
                rel="noopener noreferrer"
              >
                bigspuntino.de
              </a>
            </p>
          </address>

          <div className="space-y-4">
            <p className="italic text-[#444]">{t('description')}</p>

            <div>
              <h2 className="text-xl font-semibold">{t('openingHours')}</h2>
              <ul className="list-disc pl-5 space-y-1 text-base text-[#333]">
                <li>Wed–Fri: 11:00 – 23:00</li>
                <li>Sat: 10:00 – 23:00</li>
                <li>Sun: 10:00 – 17:00</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right - Map */}
        <div className="w-full h-96 rounded-xl overflow-hidden shadow-md border border-[#c9b4a0]">
          <iframe
            title="Big Spuntino Location"
            src="https://maps.google.com/maps?q=Mühlenkamp%208%2022303%20Hamburg&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
