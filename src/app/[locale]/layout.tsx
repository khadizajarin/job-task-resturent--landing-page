import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from './../../i18n/routing';
import '../../app/globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';



export const metadata: Metadata = {
    title: 'Bigspontino',
    description: 'A Desired Meal',
};

type Props = {
  children: ReactNode;
  params: {
    locale: string;
  };
};
 
export default async function LocaleLayout({ children, params }: Props) {
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
