
"use client"
import React, { useState } from "react";
import { Cinzel, Cinzel_Decorative } from 'next/font/google';
import { Poppins } from 'next/font/google';
import { useTranslations } from 'next-intl';
import Image from "next/image";

const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '700'] });

const cinzelDecorative = Cinzel_Decorative({
  subsets: ['latin'],
  weight: ['400', '700', '900'], // Choose weights you need
});

export const poppins = Poppins({
  weight: ['600'], // SemiBold
  subsets: ['latin'],
  display: 'swap',
});


const timeSlots = [
  "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30",
  "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30",
];

const Reservation = () => {

  const t = useTranslations('Reservation');
  const [formData, setFormData] = useState({
    guests: "2",
    time: "1 hr",
    date: "23 Jul",
    occasion: "",
    email: "",
    mobile: "",
    selectedTime: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTimeSelect = (time: string) => {
    setFormData({ ...formData, selectedTime: time });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <div id="reservation" className={`relative bg-white lg:h-screen h-full flex items-center justify-center ${poppins.className}`}>
       {/* Scattered Doodle Background */}
                <div className="absolute inset-0 hidden lg:block pointer-events-none z-0">
                  <Image
                      src="/images/event-doodle1.png"
                      alt="Doodle 1"
                      width={100}
                      height={100}
                      className="absolute top-14 left-40 opacity-50"
                  />
                  <Image
                      src="/images/event-doodle2.png"
                      alt="Doodle 2"
                      width={100}
                      height={100}
                      className="absolute top-25 right-46 opacity-70 rotate-12"
                  />
                  <Image
                      src="/images/event-doodle3.png"
                      alt="Doodle 3"
                      width={100}
                      height={100}
                      className="absolute bottom-48 left-[2%] opacity-50 -rotate-6"
                  />
                  <Image
                      src="/images/event-doodle4.png"
                      alt="Doodle 4"
                      width={100}
                      height={100}
                      className="absolute top-[50%] left-[60%] opacity-40 rotate-[15deg]"
                  />
                  <Image
                      src="/images/event-doodle5.png"
                      alt="Doodle 5"
                      width={100}
                      height={100}
                      className="absolute bottom-[30%] right-[10%] opacity-40 -rotate-[10deg]"
                  />
                  <Image
                      src="/images/event-doodle6.png"
                      alt="Doodle 6"
                      width={100}
                      height={100}
                      className="absolute top-[5%] left-[54%] opacity-50 rotate-[25deg]"
                  />
                  <Image
                      src="/images/event-doodle7.png"
                      alt="Doodle 7"
                      width={100}
                      height={100}
                      className="absolute bottom-16 right-[30%] opacity-30 rotate-[5deg]"
                  />
                  </div>                
      

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-11 items-center justify-center z-10">
        <div className="w-full lg:w-3/5 text-white ">
        <img
          src="/images/reservation.png"
          alt="Restaurant Interior"
          className=" w-full h-auto"
        />

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-1 ">
          <select name="guests" value={formData.guests} onChange={handleChange} className="bg-[#c0462d] p-2 focus:outline-none focus:ring-0 focus:border-transparent
">
            {[...Array(8)].map((_, i) => (
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            ))}
          </select>

          <select name="time" value={formData.time} onChange={handleChange} className="bg-[#c0462d] p-2 focus:outline-none focus:ring-0 focus:border-transparent
">
            {["1 hr", "2 hr", "3 hr"].map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>

          <select name="date" value={formData.date} onChange={handleChange} className="bg-[#c0462d] p-2 focus:outline-none focus:ring-0 focus:border-transparent
">
            {["23 Jul 2025", "24 Jul 2025", "25 Jul 2025"].map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>

          <input
            name="occasion"
            placeholder="Occasion (Optional)"
            value={formData.occasion}
            onChange={handleChange}
            className="col-span-1 p-2 bg-[#c0462d] focus:outline-none focus:ring-0 focus:border-transparent"
          />

          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="col-span-1 p-2 bg-[#c0462d] focus:outline-none focus:ring-0 focus:border-transparent"
          />

          <input
            name="mobile"
            placeholder="Mobile No"
            value={formData.mobile}
            onChange={handleChange}
            className="col-span-1 p-2 bg-[#c0462d] focus:outline-none focus:ring-0 focus:border-transparent"
          />
        </div>

        <div className="bg-black text-white p-8 ">
          <h2 className={`lg:text-2xl text-xl font-black mb-4 ${cinzelDecorative.className}`}>{t("headline")}</h2>
          <p className="mb-2 text-sm font-medium mt-3">{t("info_1")}</p>
          <p className="mb-2 text-sm font-medium mt-3">
            {t("info_2")} <a href="mailto:coccodrillo@bigspontino.com" className="underline text-sm font-medium">coccodrillo@bigsquadra.com</a>.
          </p>
          <p className="text-sm font-medium text-gray-400 mt-3">
            {t("info_3")} <a href="https://www.bigspontino.com/" target="_blank" className="underline">https://www.bigspontino.com/</a>
          </p>

            <div className={`mt-8 inline-block py-2 px-4 text-xl border-t-2 border-b-2 border-white text-white uppercase tracking-widest hover:bg-[#c0462d] font-black hover:text-white transition ${cinzel.className}`}>
            {t('confirm')}
          </div>
        </div>
        </div>

        <div className="w-full lg:w-2/5 h-full flex flex-col justify-center items-center lg:items-end text-center lg:text-right px-4 sm:px-8 py-8">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-serif mb-4 sm:mb-6 uppercase text-[#c0462d] font-black ${cinzelDecorative.className}`}
          >
            <span className="border-b-[3px] border-[#c0462d] pb-2 sm:pb-4 inline-block w-fit">
              {t('title')}
            </span>
          </h2>

          <p
            className={`text-base sm:text-[1.12rem] leading-snug max-w-xl whitespace-pre-line mb-4 sm:mb-6 ${poppins.className}`}
          >
            {t('description')}
          </p>

          <div
            className={`grid grid-cols-2 sm:grid-cols-4 gap-4 w-full sm:w-fit justify-center sm:justify-end ${poppins.className}`}
          >
            {timeSlots.map((slot) => (
              <button
                key={slot}
                className={`p-2 h-12 sm:h-14 text-lg sm:text-xl text-white text-center justify-self-center sm:justify-self-end flex items-center justify-center transition 
                  ${formData.selectedTime === slot ? 'bg-[#c0462d]' : 'bg-[#c0462d]'}`}
                onClick={() => handleTimeSelect(slot)}
              >
                {slot}
              </button>
            ))}
          </div>

          <div
            className={`mt-6 sm:mt-8 inline-block py-2 px-4 text-base sm:text-xl border-t-2 border-b-2 border-[#c0462d] text-[#c0462d] uppercase tracking-widest hover:bg-[#c0462d] font-black hover:text-white transition ${cinzel.className}`}
          >
            {t('alert_me')}
          </div>
        </div>  


      </div>
      
    </div>
  );
};

export default Reservation;
