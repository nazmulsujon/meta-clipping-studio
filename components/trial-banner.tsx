"use client"

import { motion } from "framer-motion"
import { trialContent } from "@/lib/constants"
import Link from "next/link"
import Image from "next/image"

export function TrialBanner() {
  return (
    <section className="relative py-12 bg-[#1e4976] overflow-hidden lg:min-h-[500px] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src={trialContent.backgroundImage || "/placeholder.svg?height=200&width=1920&text=Trial"}
          alt="Background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {trialContent.title}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href={trialContent.buttonLink}
              className="inline-block bg-white text-[#1e4976] px-8 py-4 font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              {trialContent.buttonText}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}