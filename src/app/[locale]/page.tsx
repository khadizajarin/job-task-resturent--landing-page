'use client';

import {useTranslations} from 'next-intl';
import {Link, usePathname, useRouter} from '../../i18n/navigation';
import {routing} from '../../i18n/routing';
import Banner from './banner';

export default function HomePage() {

  return (
    <div>
   

      <Banner></Banner>
    </div>
  );
}
