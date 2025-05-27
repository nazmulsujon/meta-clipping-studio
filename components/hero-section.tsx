"use client"

import { heroContent } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

export function HeroSection() {
  return (
    <section className="relative w-full pt-20 pb-10 mt-8">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        pagination={{ clickable: true }}
        spaceBetween={100}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        modules={[EffectCoverflow, Pagination]}
        className="h-[80vh]"
      >
        {heroContent.map((hero, index) => (
          <SwiperSlide
            key={index}
            className="!w-[300px] md:!w-[800px] relative rounded-[2px] overflow-hidden shadow-lg"
          >
            <Image
              src={hero.image || "/placeholder.svg?height=600&width=800"}
              alt={hero.title}
              fill
              className="object-cover z-0"
            />
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-center p-6 text-center text-white">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">{hero.title}</h2>
              <p className="text-lg md:text-xl mb-6">{hero.description}</p>
              <Button
                asChild
                size="lg"
                className="bg-[#1e4976] hover:bg-[#2c5282] text-white rounded-none px-8"
              >
                <Link href="#">{hero.buttonText}</Link>
              </Button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
