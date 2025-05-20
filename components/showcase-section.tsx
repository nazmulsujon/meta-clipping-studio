'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { showcaseContent } from '@/lib/constants';

interface ShowcaseImage {
  id: string;
  src: string;
  alt: string;
}

function ShowcaseGallery({
  images,
  setIndex,
  setOpen,
  index,
}: {
  images: ShowcaseImage[];
  setIndex: (i: number) => void;
  setOpen: (v: boolean) => void;
  index: number;
}) {
  return (
    <div className="w-fit mx-auto flex pb-20 pt-10 overflow-x-auto"
      style={{
        scrollbarWidth: 'none',
      }}
    >
      {images.map((item, i) => (
        <motion.img
          key={item.id}
          whileTap={{ scale: 0.95 }}
          className={`cursor-pointer object-cover transition-all ease-in-out duration-300 h-[400px] md:h-[500px] ${index === i ? 'w-[400px]' : 'xl:w-[100px] md:w-[30px] sm:w-[20px] w-[14px]'
            }`}
          src={item.src}
          onMouseEnter={() => setIndex(i)}
          onClick={() => {
            setIndex(i);
            setOpen(true);
          }}
          layoutId={item.id}
          alt={item.alt}
        />
      ))}
    </div>
  );
}


export default function ShowcaseSection() {
  const [index, setIndex] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.classList.remove('overflow-hidden');
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  return (
    <section id='gallery' className="py-16 bg-white relative">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl font-bold text-center mb-12 text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {showcaseContent.title}
        </motion.h2>

        <ShowcaseGallery
          images={showcaseContent.images as ShowcaseImage[]}
          index={index}
          setIndex={setIndex}
          setOpen={setOpen}
        />

        <AnimatePresence>
          {open && (
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="dark:bg-black/40 bg-white/40 backdrop-blur-sm fixed inset-0 z-50 grid place-content-center"
              onClick={() => setOpen(false)}
            >
              <div onClick={(e) => e.stopPropagation()}>
                <motion.div
                  layoutId={showcaseContent.images[index].id}
                  className="w-[400px] h-[400px] rounded-2xl cursor-default"
                >
                  <img
                    src={showcaseContent.images[index].src}
                    alt={showcaseContent.images[index].alt}
                    className="rounded-2xl h-full w-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}