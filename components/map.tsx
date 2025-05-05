"use client"

import { useEffect, useRef } from "react"
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
      // Fix for Leaflet icon issues
      delete (L.Icon.Default.prototype as any)._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "/leaflet/marker-icon-2x.png",
        iconUrl: "/leaflet/marker-icon.png",
        shadowUrl: "/leaflet/marker-shadow.png",
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

  return <div ref={mapRef} className="h-full min-h-[300px] w-full rounded-md" />
}
