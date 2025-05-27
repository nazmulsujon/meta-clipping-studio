'use client';

import React, { useRef, useState, useEffect } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';

interface UnsplashGridProps {
    images: {
        id: string;
        src: string;
        alt: string;
    }[];
};


export function UnsplashGrid({ images }: UnsplashGridProps) {
    const [selected, setSelected] = useState<string | null>(null);

    return (
        <>
            <div className='container mx-auto sm:p-4 px-2 py-4'>
                <div className='columns-1 md:columns-2 lg:columns-3 gap-2'>
                    {images.map((item, index) => (
                        <ImageItem key={index} src={item.src} index={index} setSelected={setSelected} />
                    ))}
                </div>
            </div>
            <Modal selected={selected} setSelected={setSelected} />
        </>
    );
}

interface ImageItemProps {
    src: string;
    index: number;
    setSelected: React.Dispatch<React.SetStateAction<string | null>>;
}

function ImageItem({ src, index, setSelected }: ImageItemProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.figure
            initial='hidden'
            animate={isInView && 'visible'}
            ref={ref}
            className="inline-block group w-full rounded-md relative cursor-pointer"
            onClick={() => setSelected(src)}
        >
            <motion.img
                whileHover={{ scale: 1.025 }}
                src={src}
                alt={`service-image-${index}`}
                className='w-full md:min-h-[500px] shadow-xl image-full rounded-md object-cover'
            />
        </motion.figure>
    );
}

interface ModalProps {
    selected: string | null;
    setSelected: React.Dispatch<React.SetStateAction<string | null>>;
}

function Modal({ selected, setSelected }: ModalProps) {
    useEffect(() => {
        if (selected) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setSelected(null);
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [selected]);

    return (
        <AnimatePresence>
            {selected && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelected(null)}
                    className='fixed inset-0 bg-black/70 backdrop-blur-sm z-50 cursor-pointer flex items-center justify-center'
                >
                    <motion.div
                        onClick={(e) => e.stopPropagation()}
                        className='relative w-full max-w-4xl p-4'
                    >
                        <button
                            className='absolute top-2 right-2 p-2 text-white z-10'
                            onClick={() => setSelected(null)}
                        >
                            <X size={24} />
                        </button>
                        <Image
                            src={selected}
                            alt="Preview"
                            width={800}
                            height={600}
                            className='w-full max-h-[80vh] object-contain rounded-lg bg-white'
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
