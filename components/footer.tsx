"use client"

import Link from "next/link"
import Image from "next/image"
import { footerContent, siteConfig, navItems } from "@/lib/constants"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import dynamic from "next/dynamic"

// Dynamically import the Map component with no SSR to avoid hydration issues
const MapWithNoSSR = dynamic(() => import("@/components/map").then((mod) => mod.Map), {
  ssr: false,
})

export function Footer() {
  const socialIcons = {
    Facebook: Facebook,
    Twitter: Twitter,
    Instagram: Instagram,
    LinkedIn: Linkedin,
    YouTube: Youtube,
  }

  return (
    <footer>
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {navItems.map((item, index) => (
            <div key={index} className="flex justify-center">
              <Link href={item.href} className="text-gray-600 hover:text-blue-600 text-sm">
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#1e4976] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">CONTACT US</h3>
                <p className="mb-2 flex items-start">
                  <span className="mr-2">📍</span>
                  <span>{footerContent.address}</span>
                </p>
                <p className="mb-2 flex items-start">
                  <span className="mr-2">📞</span>
                  <span>{footerContent.phone}</span>
                </p>
                <p className="mb-2 flex items-start">
                  <span className="mr-2">✉️</span>
                  <span>{footerContent.email}</span>
                </p>
                <div className="flex space-x-4 mt-4">
                  {footerContent.socialLinks.map((link, index) => {
                    const SocialIcon = socialIcons[link.name as keyof typeof socialIcons]
                    return (
                      <Link key={index} href={link.url} className="text-white hover:text-blue-200">
                        <SocialIcon className="h-5 w-5" />
                      </Link>
                    )
                  })}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">QUICK LINKS</h3>
                <ul className="space-y-2">
                  {footerContent.quickLinks.map((link, index) => (
                    <li key={index}>
                      <Link href={link.url} className="text-white hover:text-blue-200">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="h-[300px] rounded-md overflow-hidden">
              <MapWithNoSSR />
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-blue-700 text-center">
            <Image
              src="/logo-white.png"
              alt={siteConfig.name}
              width={150}
              height={50}
              className="h-12 w-auto mx-auto mb-4"
            />
            <p>
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
