'use client';

import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

const images = [
  { src: '/images/gallery1.png', alt: 'Italian Dishes' },
  { src: '/images/gallery2.png', alt: 'Restaurant Interior' },
  { src: '/images/gallery3.png', alt: 'Spuntino Snacks' },
  { src: '/images/gallery4.png', alt: 'Guests Enjoying Meal' },
  { src: '/images/gallery5.png', alt: 'Bar and Aperitivo' },
  { src: '/images/gallery6.png', alt: 'Outdoor Seating' },
//   { src: '/images/gallery7.png', alt: 'Fresh Pasta Making' },
//   { src: '/images/gallery8.png', alt: 'Cozy Evening Setup' },
//   { src: '/images/gallery9.png', alt: 'Seasonal Ingredients' },
//   { src: '/images/gallery10.png', alt: 'Wine Selection' },
//   { src: '/images/gallery11.png', alt: 'Family Gathering' },
//   { src: '/images/gallery12.png', alt: 'Italian Decor' },
//   { src: '/images/gallery13.png', alt: 'Chef’s Special Dish' }
];

export default function GalleryMosaic() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="bg-white py-16 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Gallery</h2>
        <p className="text-gray-500 text-base">Visual flavors of Big Spuntino</p>
      </div>

      {/* Mosaic Layout */}
      <div className="grid grid-cols-6 auto-rows-[150px] gap-4">
        {images.map((img, i) => {
          const spanClass = (() => {
            switch (i) {
              case 0: return 'col-span-3 row-span-2';
              case 1: return 'col-span-3 row-span-1';
              case 2: return 'col-span-1 row-span-1';
              case 3: return 'col-span-2 row-span-2';
              case 4: return 'col-span-2 row-span-1';
              case 5: return 'col-span-2 row-span-1';
            //   case 6: return 'col-span-3 row-span-1';
            //   case 7: return 'col-span-2 row-span-2';
            //   case 8: return 'col-span-1 row-span-1';  // adjusted from 2 to 1 to balance right side
            //   case 9: return 'col-span-2 row-span-2';
            //   case 10: return 'col-span-2 row-span-1';
            //   case 11: return 'col-span-2 row-span-1';
            //   case 12: return 'col-span-1 row-span-1';  // new image to fill right side gap
            //   default: return 'col-span-2 row-span-1';
            }
          })();

          return (
            <motion.div
              key={i}
              className={`relative rounded-xl overflow-hidden cursor-pointer group shadow-lg ${spanClass}`}
              onClick={() => setSelected(i)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-2 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                {img.alt}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] w-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selected].src}
                alt={images[selected].alt}
                width={1200}
                height={800}
                className="rounded-xl object-contain w-full max-h-[80vh]"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 text-white bg-black/50 hover:bg-black/70 p-2 rounded-full"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
