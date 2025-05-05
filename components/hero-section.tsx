"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { heroContent } from "@/lib/constants"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const currentHero = heroContent[currentIndex]

  return (
    <section className="relative h-screen w-full overflow-hidden pt-20">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-[#e8b4b8]/30 z-10" />
          <Image
            src={currentHero.image || "/placeholder.svg?height=1080&width=1920"}
            alt="Hero background"
            fill
            className="object-fill"
            priority
          />
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-4 h-full flex items-center relative z-20">
        <div className="max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white mb-6">{currentHero.title}</h1>
              <p className="text-xl md:text-2xl text-white mb-8">{currentHero.description}</p>
              <Button asChild size="lg" className="bg-[#1e4976] hover:bg-[#2c5282] text-white rounded-none px-8">
                <Link href="/contact">{currentHero.buttonText}</Link>
              </Button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {heroContent.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full ${idx === currentIndex ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
