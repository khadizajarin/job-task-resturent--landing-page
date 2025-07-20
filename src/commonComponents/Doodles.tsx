'use client';

import Image from 'next/image';

export default function DoodleBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {/* Top left corner */}
      <Image
        src="/images/event-doodle1.png"
        alt="Doodle 1"
        width={80}
        height={80}
        className="absolute top-4 left-6 opacity-30 rotate-[5deg] hidden sm:block"
      />

      {/* Top right */}
      <Image
        src="/images/event-doodle2.png"
        alt="Doodle 2"
        width={70}
        height={70}
        className="absolute top-12 right-6 opacity-25 rotate-12 hidden sm:block"
      />

      {/* Center-left (visible on md+) */}
      <Image
        src="/images/event-doodle3.png"
        alt="Doodle 3"
        width={90}
        height={90}
        className="absolute top-[32%] left-4 opacity-40 -rotate-[10deg] hidden md:block"
      />

      {/* Center-right */}
      <Image
        src="/images/event-doodle4.png"
        alt="Doodle 4"
        width={90}
        height={90}
        className="absolute top-[35%] right-4 opacity-40 rotate-[10deg] hidden md:block"
      />

      {/* Bottom left */}
      <Image
        src="/images/event-doodle5.png"
        alt="Doodle 5"
        width={80}
        height={80}
        className="absolute bottom-8 left-6 opacity-35 rotate-[-8deg]"
      />

      {/* Bottom right */}
      <Image
        src="/images/event-doodle6.png"
        alt="Doodle 6"
        width={80}
        height={80}
        className="absolute bottom-6 right-4 opacity-35 rotate-[6deg]"
      />

      {/* Center accent doodle */}
      <Image
        src="/images/event-doodle7.png"
        alt="Doodle 7"
        width={100}
        height={100}
        className="absolute top-1/2 left-1/2 opacity-20 -translate-x-1/2 -translate-y-1/2 rotate-[15deg] hidden lg:block"
      />
    </div>
  );
}
