
"use client"
import React, { useState } from "react";
import { Cinzel, Cinzel_Decorative } from 'next/font/google';
import { Poppins } from 'next/font/google';
import { useTranslations } from 'next-intl';

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
    <div className={`bg-white h-screen flex items-center justify-center ${poppins.className}`}>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-11">
        <div className="w-full lg:w-2/3 text-white ">
        <img
          src="/images/reservation.png"
          alt="Restaurant Interior"
          className=" w-full h-auto"
        />

        <div className="grid grid-cols-3 gap-1 ">
          <select name="guests" value={formData.guests} onChange={handleChange} className="bg-[#c0462d] p-2">
            {[...Array(8)].map((_, i) => (
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            ))}
          </select>

          <select name="time" value={formData.time} onChange={handleChange} className="bg-[#c0462d] p-2">
            {["1 hr", "2 hr", "3 hr"].map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>

          <select name="date" value={formData.date} onChange={handleChange} className="bg-[#c0462d] p-2">
            {["23 Jul", "24 Jul", "25 Jul"].map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>

          <input
            name="occasion"
            placeholder="Occasion (Optional)"
            value={formData.occasion}
            onChange={handleChange}
            className="col-span-1 p-2 bg-[#c0462d]"
          />

          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="col-span-1 p-2 bg-[#c0462d]"
          />

          <input
            name="mobile"
            placeholder="Mobile No"
            value={formData.mobile}
            onChange={handleChange}
            className="col-span-1 p-2 bg-[#c0462d]"
          />
        </div>

        <div className="bg-black text-white p-6 ">
          <h2 className={`text-2xl font-black mb-4 ${cinzelDecorative.className}`}>{t("headline")}</h2>
          <p className="mb-2 text-sm font-medium mt-3">{t("info_1")}</p>
          <p className="mb-2 text-sm font-medium mt-3">
            {t("info_2")} <a href="mailto:coccodrillo@bigsquadra.com" className="underline text-sm font-medium">coccodrillo@bigsquadra.com</a>.
          </p>
          <p className="text-sm font-medium text-gray-400 mt-3">
            {t("info_3")} <a href="https://www.bigsquadra.com/" target="_blank" className="underline">https://www.bigsquadra.com/</a>
          </p>

            <div className={`mt-3 inline-block py-2 px-4 text-xl border-t-2 border-b-2 border-white text-white uppercase tracking-widest hover:bg-[#c0462d] font-black hover:text-white transition ${cinzel.className}`}>
            {t('confirm')}
          </div>
        </div>
        </div>

        <div className="w-full lg:w-1/3 h-full flex flex-col justify-center items-center text-right">
          <h2 className={`text-5xl font-serif mb-6 uppercase text-[#c0462d] font-black ${cinzelDecorative.className}`}>
            <span className="border-b-[3px] border-[#c0462d] pb-4 inline-block w-fit">
              {t('title')}
            </span>
          </h2>

          <p className={`text-[1.12rem] leading-tight max-w-2xl whitespace-pre-line mb-6 ${poppins.className}`}>
            {t('description')}
          </p>

          <div className={`grid grid-cols-4 gap-4 w-full justify-end ${poppins.className}`}>
            {timeSlots.map((slot) => (
              <button
                key={slot}
                className={`p-2 h-14 w-20 text-xl text-white text-center justify-self-end flex items-center justify-center transition 
                  ${formData.selectedTime === slot ? 'bg-[#c0462d]' : 'bg-[#a55a2c]'}`}
                onClick={() => handleTimeSelect(slot)}
              >
                {slot}
              </button>
            ))}
          </div>

          <div className={`mt-8 inline-block py-2 px-2 text-xl border-t-2 border-b-2 border-[#c0462d] text-[#c0462d] uppercase tracking-widest hover:bg-[#c0462d] font-black hover:text-white transition ${cinzel.className}`}>
            {t('alert_me')}
          </div>
        </div>

      </div>
      
    </div>
  );
};

export default Reservation;
