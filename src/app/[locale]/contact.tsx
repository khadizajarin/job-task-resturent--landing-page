'use client';

import { useTranslations } from 'next-intl';
import { FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt } from 'react-icons/fa';
import { FaInstagram, FaTiktok, FaFacebook } from 'react-icons/fa6';
import { Cinzel, Cinzel_Decorative, Poppins } from 'next/font/google';
import Image from 'next/image';

const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '700'] });

const cinzelDecorative = Cinzel_Decorative({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
});
const poppins = Poppins({
  weight: ['600'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Contact() {
  const t = useTranslations('Contact');

  return (
    <div id="contact">
    <div className={`relative lg:h-[50rem] h-full  text-white px-10 py-12 overflow-hidden ${poppins.className}`}>
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/contact-bg.png"
          alt="Background"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Content grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 h-full justify-start items-center">
        {/* Left column */}
        <div className="w-full h-full flex flex-col justify-evenly">
          <div className="w-full ">
            <Image
              src="/images/logo-01.png"
              alt="Logo"
              width={480}
              height={400}
              className="mb-4"
            />
            <p className={`text-xl leading-tight mb-8 max-w-lg ${poppins.className}`}>
            {t('description')}
          </p>

          </div>

          
          <div>
            <h2
              className={`text-5xl mb-6 uppercase text-white font-black ${cinzelDecorative.className}`}
            >
              <span className="border-b-[3px] border-white pb-4 font-black inline-block w-fit">
                {t('hoursTitle')}
              </span>
            </h2>
            <ul className="lg:text-3xl text-xl leading-normal">
              <li>{t('hours.wed_fri')}</li>
              <li>{t('hours.sat')}</li>
              <li>{t('hours.sun')}</li>
            </ul>
          </div>
        </div>

        {/* Right column */}
        <div className={`max-w-lg h-full text-left flex flex-col justify-center`}>
          <h2
            className={`text-5xl mb-6 uppercase text-white font-black ${cinzelDecorative.className}`}
          >
            <span className="border-b-[3px] border-white pb-4 inline-block w-fit">
              {t('contactTitle')}
            </span>
          </h2>
          <ul className="space-y-3 lg:text-3xl text-xl leading-snug font-medium mb-4">
            <li className={`flex justify-center items-center gap-3  ${poppins.className}`}>
              <Image src="/images/location.png" alt="location" width={40} height={40} className=""/> Mühlenkamp 8, 22303 Hamburg
            </li>
            <li className="flex items-center gap-3">
               <Image src="/images/phone.png" alt="phone" width={40} height={40} className=""/> 040 / 69 45 68 28
            </li>
            <li className="flex items-center gap-3">
              <Image src="/images/email.png" alt="email" width={40} height={40} className=""/> mail@bigspuntino.de
            </li>
            <li className="flex items-center gap-3">
              <Image src="/images/web.png" alt="web" width={40} height={40} className=""/>  bigspuntino.de
            </li>
          </ul>

          <h2
            className={`mt-8 text-5xl mb-6 uppercase text-white ${cinzelDecorative.className}`}
          >
            <span className="border-b-[3px] border-white pb-4 inline-block w-fit">
              {t('followUs')}
            </span>
          </h2>
          <div className="flex gap-6 text-2xl">
            <Image src="/images/facebook.png" alt="facebook" width={50} height={50} className=""/>
            <Image src="/images/insta.png" alt="insta" width={50} height={50} className=""/>
            <Image src="/images/tiktok.png" alt="tiktok" width={50} height={50} className=""/>
          </div>
        </div>

      </div>
    </div>

    <footer className={`bg-[#964315] px-8 h-24 text-white flex justify-center items-center text-center py-4 shadow-md ${poppins.className}`}>
      <p className="lg:text-xl text-md font-medium tracking-wide">
         {t('copyright')} &nbsp;|&nbsp; {t('developed_by')}
      </p>
    </footer>
    </div>
    
  );
}
