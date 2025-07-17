'use client';

import {useTranslations} from 'next-intl';
import {Link, usePathname, useRouter} from '../../i18n/navigation';
import {routing} from '../../i18n/routing';
import Banner from './banner';

export default function HomePage() {
  const t = useTranslations('HomePage');
  const pathname = usePathname(); // current path without locale prefix
  const router = useRouter();

  const handleLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    router.push({pathname}, {locale: newLocale});
  };

  return (
    <div>
   

      <Banner></Banner>
    </div>
  );
}
