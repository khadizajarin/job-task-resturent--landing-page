import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from './../../i18n/routing';
import '../../app/globals.css';
import type { Metadata } from 'next';
import { getMessages } from 'next-intl/server';

export const generateMetadata = async ({ params }: { params: { locale: string } }): Promise<Metadata> => {
  return {
    title: 'Bigspontino',
    description: 'A Desired Meal',
  };
};
 
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const messages = await getMessages({ locale });
 
  return (
    <html>
      <body>
        <NextIntlClientProvider locale={locale}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}