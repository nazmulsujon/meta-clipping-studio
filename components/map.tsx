"use client"

import { useEffect, useRef } from "react"
// @ts-ignore 
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import { siteConfig } from "@/lib/constants"

// Define footerContent or import it from a file
const footerContent = {
  address: "123 Main Street, Anytown USA", // Replace with actual address
}

export function Map() {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<L.Map | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && mapRef.current && !mapInstanceRef.current) {

      delete (L.Icon.Default.prototype as any)._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "/leaflet/icon.webp",
        iconUrl: "/leaflet/icon.webp",
      })

      // Create map
      const map = L.map(mapRef.current).setView(
        [siteConfig.location.lat, siteConfig.location.lng],
        siteConfig.location.zoom,
      )

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map)

      // Add marker
      L.marker([siteConfig.location.lat, siteConfig.location.lng])
        .addTo(map)
        .bindPopup(`<b>${siteConfig.name}</b><br>${footerContent.address}`)
        .openPopup()

      mapInstanceRef.current = map

      // Cleanup
      return () => {
        if (mapInstanceRef.current) {
          mapInstanceRef.current.remove()
          mapInstanceRef.current = null
        }
      }
    }
  }, [])

  return <div ref={mapRef} className="h-full min-h-[300px] w-full rounded-md z-40" />
}
