import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from './../../i18n/routing';
import '../../app/globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import type { LayoutProps } from 'next'; // ✅ This is the key

export const metadata: Metadata = {
  title: 'Bigspontino',
  description: 'A Desired Meal',
};

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<{ locale: string }>) {
  const { locale } = params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
