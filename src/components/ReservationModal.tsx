'use client';

import { X } from 'lucide-react';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservationModal({ isOpen, onClose }: Props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
    } else {
      // Delay unmounting to let animation finish
      setTimeout(() => setShow(false), 300);
    }
  }, [isOpen]);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      date: '',
      time: '',
    },
    onSubmit: (values) => {
      console.log('Reservation Data:', values);
      onClose();
    },
  });

  if (!isOpen && !show) return null;

  return (
    <div
      className={`
        fixed bottom-6 right-6 z-[100] w-full max-w-md
        transform transition-transform duration-800
        ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
      `}
    >
      <div className="relative bg-white text-black rounded-xl shadow-2xl p-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-bold mb-6 text-center uppercase tracking-widest">
          Reserve a Table
        </h2>

        {/* Form */}
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={formik.handleChange}
            value={formik.values.name}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm"
          />

          <div className="flex gap-4">
            <input
              type="date"
              name="date"
              onChange={formik.handleChange}
              value={formik.values.date}
              className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm"
            />
            <input
              type="time"
              name="time"
              onChange={formik.handleChange}
              value={formik.values.time}
              className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition font-semibold tracking-wide uppercase"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
