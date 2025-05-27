"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import { servicesDetailsData } from "@/lib/constants"
import { UnsplashGrid } from "@/components/unsplash-grid"
import { Fragment } from "react"

export default function ServiceDetailsPage() {
    const { slug } = useParams()
    const selectedService = servicesDetailsData.find((s) => s.slug === slug)

    if (!selectedService) {
        return <div className="text-center pt-32 text-white">Service not found.</div>
    }

    return (
        <Fragment>

            <section className="bg-[#4a8db8] pt-32 py-16 px-4 text-center">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">
                        {selectedService.title.includes("Ghost/") ||
                            selectedService.title.includes("GHOST/") ? (
                            <>
                                <span className="text-[#7bd4ff]">
                                    {selectedService.title.split("/")[1]}
                                </span>
                            </>
                        ) : (
                            selectedService.title
                        )}
                    </h2>
                    <p className="text-white text-lg md:text-xl mb-10">
                        {selectedService.description}
                    </p>
                    <div className="flex justify-center gap-6 flex-wrap -space-x-10 hover:-space-x-6 hover:scale-105 transition-all duration-500 ease-in-out">
                        {selectedService.bannerImages.map((src, i) => (
                            <div
                                key={i}
                                className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white shadow-lg overflow-hidden flex items-center justify-center border-4 border-[#4a8db8] cursor-pointer"
                            >
                                <Image
                                    src={src}
                                    alt={`${selectedService.slug}-${i}`}
                                    width={128}
                                    height={128}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section>
                <UnsplashGrid images={selectedService.images!} />
            </section>
        </Fragment>
    )
}
