"use client"

import { motion } from "framer-motion"
import { servicesContent } from "@/lib/constants"
import Image from "next/image"
import Link from "next/link"

export function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl font-bold text-center mb-12 text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {servicesContent.title}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {servicesContent.services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white overflow-hidden flex flex-col border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="relative h-72">
                <Image
                  src={
                    service.image || `/placeholder.svg?height=192&width=300&text=${encodeURIComponent(service.title)}`
                  }
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex-grow">
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{service.description}</p>
              </div>
              <div className="p-4 pt-0 mt-auto">
                <Link
                  href="#hero_banner"
                  className="block text-center bg-[#1e4976] text-white py-2 px-4 text-sm hover:bg-[#2c5282] transition-colors"
                >
                  Click ME
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
