"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { ScrollArea } from "./ui/scroll-area"

interface ServiceItem {
  label: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
}

interface ServicesDropdownProps {
  item: {
    label: string
    href: string
    items?: ServiceItem[]
  }
}

export function ServicesDropdown({ item }: ServicesDropdownProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button className="px-3 py-2 text-white hover:text-blue-200 transition-colors font-medium text-sm flex items-center">
        {item.label}
        <ChevronDown className="ml-1 h-4 w-4" />
      </button>

      <AnimatePresence>
        {isHovered && item.items && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-[300px] bg-[#4682b4] rounded-sm shadow-lg z-50"
          >
            <ScrollArea className="h-[500px]">
              <div className="space-y-1">
                {item.items.map((subItem, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2, delay: idx * 0.02 }}
                  >
                    <Link
                      href={`/services/${subItem.href}`}
                      className="flex items-center px-4 py-3 text-white hover:bg-[#3a6d99] w-full transition-colors"
                    >
                      {subItem.icon && <subItem.icon className="mr-2 h-4 w-4" />}
                      <span>{subItem.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>
          </motion.div>

        )}
      </AnimatePresence>
    </div>
  )
}
