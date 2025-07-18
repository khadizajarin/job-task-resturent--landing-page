'use client';

import Link from 'next/link';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Il Menu', href: '/menu' },
  { label: 'Events', href: '/events' },
  { label: 'La Storia', href: '/history' },
  { label: 'Impressions', href: '/gallery' },
  { label: 'Contatto', href: '/contact' },
  { label: 'Jobs', href: '/jobs' },
];

export default function Navbar() {
  return (
    <header className="w-full bg-transparent text-white py-4 h-[5rem] fixed top-0 z-50 overflow-hidden">
        <div className="whitespace-nowrap animate-[slide-left_30s_linear_infinite] text-sm px-20">
            OPENING HOURS: Wed–Fri: 11:00 – 23:00 | Sat: 10:00 – 23:00 | Sun: 10:00 – 17:00
        </div>

        <style jsx global>{`
            @keyframes slide-left {
            0% {
                transform: translateX(100%);
            }
            100% {
                transform: translateX(-100%);
            }
            }
        `}</style>
        </header>

  );
}