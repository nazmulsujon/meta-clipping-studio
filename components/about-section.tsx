"use client";

import { motion } from "framer-motion";
import { aboutContent } from "@/lib/constants";
import Image from "next/image";
import { Laptop, Shield, LineChart, Globe, Award, Briefcase } from "lucide-react";

export function AboutSection() {
  const cardIcons = [
    { icon: Laptop, color: "#1e4976" },
    { icon: Shield, color: "#1e4976" },
    { icon: LineChart, color: "#1e4976" },
    { icon: Globe, color: "#1e4976" },
    { icon: Award, color: "#1e4976" },
    { icon: Briefcase, color: "#1e4976" },
  ];

  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl font-bold text-center mb-20 text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {aboutContent.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-20">
          {aboutContent.columns.map((column, index) => {
            const IconComponent = cardIcons[index % cardIcons.length].icon;
            return (
              <motion.div
                key={index}
                className="bg-white shadow-md relative pt-16 pb-6 px-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                  <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-md">
                    <IconComponent className="w-12 h-12" style={{ color: cardIcons[index % cardIcons.length].color }} />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4 text-gray-700 text-center mt-8">{column.title}</h3>
                <ul className="space-y-2">
                  {column.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-600">
                      • {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-3xl mx-auto mt-10 md:mt-16">
          <div className="md:col-span-2">
            {aboutContent.skills.map((skill, index) => (
              <motion.div
                key={index}
                className="mb-4"
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                  <span className="text-sm font-medium text-gray-700">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#1e4976] h-2 rounded-full" style={{ width: `${skill.percentage}%` }}></div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-32 h-32 relative mb-2">
              <Image
                src={aboutContent.certification.image || "/placeholder.svg?height=128&width=128&text=ISO%209001"}
                alt="ISO Certification"
                width={128}
                height={128}
                className="object-contain"
              />
            </div>
            <span className="text-[#1e4976] font-bold">{aboutContent.certification.text}</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
