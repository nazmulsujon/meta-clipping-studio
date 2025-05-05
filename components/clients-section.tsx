"use client"

import { motion } from "framer-motion"
import { clientsContent } from "@/lib/constants"
import Image from "next/image"

export function ClientsSection() {
  // Duplicate logos to ensure smooth looping effect
  const scrollingClients = [...clientsContent.clients, ...clientsContent.clients]

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl font-bold text-center mb-12 text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {clientsContent.title}
        </motion.h2>

        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-16 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 100, //2s
              ease: "linear"
            }}
          >
            {scrollingClients.map((client, index) => (
              <div key={index} className="w-32 h-16 relative flex-shrink-0">
                <Image
                  src={
                    client.logo ||
                    `/placeholder.svg?height=64&width=128&text=${encodeURIComponent(client.name)}`
                  }
                  alt={client.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
