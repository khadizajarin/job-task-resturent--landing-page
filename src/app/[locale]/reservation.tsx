'use client';

import { useTranslations } from 'next-intl';

export default function ReservationPage() {
  const t = useTranslations('Reservation');

  return (
    <section className="bg-[#fff4ee] px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-[#c0462d]">
          📅 {t('title')}
        </h1>

        {/* Description */}
        <p className="text-center text-lg text-[#333] max-w-2xl mx-auto">
          {t('description')}
        </p>

        {/* Reservation Form */}
        <form
          className="grid gap-6 md:grid-cols-2 text-[#333]"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 font-medium">
              {t('form.name')}
            </label>
            <input
              type="text"
              id="name"
              placeholder={t('form.name')}
              required
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c0462d]/50"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 font-medium">
              {t('form.email')}
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@mail.com"
              required
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c0462d]/50"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="date" className="mb-1 font-medium">
              {t('form.date')}
            </label>
            <input
              type="date"
              id="date"
              required
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c0462d]/50"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="time" className="mb-1 font-medium">
              {t('form.time')}
            </label>
            <input
              type="time"
              id="time"
              required
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c0462d]/50"
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label htmlFor="message" className="mb-1 font-medium">
              {t('form.message')}
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder={t('form.messagePlaceholder')}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c0462d]/50"
            ></textarea>
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-[#c0462d] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#a83821] transition"
            >
              {t('form.submit')}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
