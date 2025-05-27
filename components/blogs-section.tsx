"use client"

import { motion } from "framer-motion"
import { blogsContent } from "@/lib/constants"
import Image from "next/image"
import Link from "next/link"

export function BlogsSection() {
  return (
    <section id="blogs" className="py-16 bg-[#e8b4b8]/30">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl font-bold text-center mb-12 text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {blogsContent.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogsContent.blogs.map((blog, index) => (
            <motion.div
              key={index}
              className="bg-white overflow-hidden flex flex-col border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-72">
                <Image
                  src={blog.image || `/placeholder.svg?height=192&width=384&text=Blog${index + 1}`}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 bg-[#1e4976] text-white text-xs px-2 py-1">{blog.category}</div>
              </div>
              <div className="p-4 flex-grow">
                <h3 className="text-lg font-semibold mb-4">{blog.title}</h3>
                <p>{blog.description}</p>
              </div>
              <div className="p-4 pt-0 mt-auto">
                <Link
                  href={blog.link}
                  className="block text-center bg-[#1e4976] text-white py-2 px-4 text-sm hover:bg-[#2c5282] transition-colors"
                >
                  READ MORE
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
