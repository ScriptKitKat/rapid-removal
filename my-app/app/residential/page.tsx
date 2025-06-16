"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

import { Oswald, Bebas_Neue } from "next/font/google"
import ctaimg from "@/assets/ctaimg.jpg"
import residentialsplash from "@/assets/residentialsplash.jpg"
import residentialitems from "@/assets/residentialitems.jpg"
import reviewhappy from "@/assets/reviewhappy.jpg"

import residentialbefore1 from "@/assets/residentialbefore1.jpg"
import residentialbefore2 from "@/assets/residentialbefore2.jpg"
import residentialbefore3 from "@/assets/residentialbefore3.jpg"
import residentialafter1 from "@/assets/residentialafter1.jpg"
import residentialafter2 from "@/assets/residentialafter2.jpg"
import residentialafter3 from "@/assets/residentialafter3.jpg"

import garage from "@/assets/garageresidential.jpg"


const oswald = Oswald({ subsets: ["latin"], weight: ["400", "700"], display: "swap" })
const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400", display: "swap" })


export default function ResidentialJunkServicesPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const beforeAfterImages = [
    { before: residentialbefore1, after: residentialafter1 },
    { before: residentialbefore2, after: residentialafter2 },
    { before: residentialbefore3, after: residentialafter3 },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % beforeAfterImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + beforeAfterImages.length) % beforeAfterImages.length)
  }

  return (
    <div className="flex flex-col min-h-screen">
        <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="mr-10">
                <h1 className={`${oswald.className} text-4xl font-bold mb-4`}>Residential Junk Services</h1>
                <p className="text-gray-700 mb-6">
                  Whether it's a home or Rapid Removal DFW, We haul furniture, appliances, and clutter. Same-day service
                  you can count on!
                </p>
                <Button className="bg-green-400 hover:bg-green-600 text-black hover:text-white font-medium px-6 py-6 border-2 border-green-700 text-md rounded-sm">
                  <p className={bebas.className + " text-[30px]"}>GET A FREE ESTIMATE</p>
                </Button>
              </div>
              <div className="bg-gray-200 h-64 md:h-80 rounded-lg flex items-center justify-center">
                <Image
                  src={residentialsplash.src}
                  alt="Residential Junk Removal"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Junk Removal & Cleanout Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className={oswald.className + " text-2xl md:text-3xl font-bold text-center uppercase mb-4"}>
              Junk Removal & Cleanout Services
            </h2>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
              Rapid Removal DFW delivers fast, affordable solutions to your junk removal needs. Our team handles clutter
              and debris in both residential and commercial properties across the DFW area.
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <Image
                  src={garage.src}
                  alt="Cluttered garage needing junk removal"
                  width={600}
                  height={500}
                  className="rounded-lg object-cover w-full"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className={bebas.className + " text-xl font-bold text-green-600 uppercase mb-6"}>Junk Removal Services</h3>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <ul className="space-y-3">
                      <li className="text-gray-700">Home cleanouts</li>
                      <li className="text-gray-700">Yard cleanouts</li>
                      <li className="text-gray-700">Basement cleanout services</li>
                      <li className="text-gray-700">Garage cleanouts</li>
                      <li className="text-gray-700">Bulk Pickup</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-3">
                      <li className="text-gray-700">Attic space cleanouts</li>
                      <li className="text-gray-700">Hoarder removal</li>
                      <li className="text-gray-700">Remodel debris removal</li>
                      <li className="text-gray-700">Moving cleanouts</li>
                      <li className="text-gray-700">Furniture Removal</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="bg-green-400 hover:bg-green-600 text-black hover:text-white font-medium px-6 py-6 border-2 border-green-700 text-lg rounded-sm">
                    <p className={bebas.className}>GET A FREE ESTIMATE</p>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Same Day Item Pick Up Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className={bebas.className + " text-2xl md:text-3xl font-bold uppercase mb-6"}>Same Day Item Pick Up</h2>
                <p className="text-gray-700 mb-6">
                  Looking for what to do with your bulky, hard-to-haul junk? Our professional junk removal team is ready
                  to help with all your junk removal needs. From single appliances to entire homes, our trained
                  professionals can take care of your unique junk removal needs.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Appliances</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>Refrigerators</li>
                      <li>Washers</li>
                      <li>Dryers</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Pickup</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>Mattresses</li>
                      <li>Cardboard</li>
                      <li>Trash pickup</li>
                      <li>TV disposal</li>
                      <li>Cabinets</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">_</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>Remodel debris</li>
                      <li>Yard debris</li>
                      <li>Storage sheds</li>
                      <li>Electronics</li>
                      <li>Carpet</li>
                    </ul>
                  </div>
                </div>

                <Button className="bg-green-400 hover:bg-green-600 text-black hover:text-white font-medium px-6 py-6 border-2 border-green-700 text-lg rounded-sm">
                  <p className={bebas.className}>GET A FREE ESTIMATE</p>
                </Button>
              </div>
              <div>
                <Image
                  src={residentialitems.src}
                  alt="Residential junk items in a truck"
                  width={600}
                  height={100}
                  className="rounded-lg object-cover w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Before & After Results Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className={oswald.className + " text-2xl md:text-3xl font-bold text-center mb-4"}>Before & After Results</h2>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
              See the dramatic transformations our junk removal services provide to homes across DFW.
            </p>

            <div className="relative max-w-5xl mx-auto">
              {/* Current slide */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-200 rounded-lg overflow-hidden">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={beforeAfterImages[currentSlide].before || "/placeholder.svg?height=400&width=400"}
                      alt={`Before junk removal - example ${currentSlide + 1}`}
                      fill
                      className="object-cover"
                    />
                    <div className={bebas.className + " absolute bottom-0 left-0 bg-gray-900 text-white px-4 py-2 text-sm font-medium"}>
                      BEFORE
                    </div>
                  </div>
                </div>
                <div className="bg-gray-200 rounded-lg overflow-hidden">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={beforeAfterImages[currentSlide].after || "/placeholder.svg?height=400&width=400"}
                      alt={`After junk removal - example ${currentSlide + 1}`}
                      fill
                      className="object-cover"
                    />
                    <div className={bebas.className + " absolute bottom-0 left-0 bg-green-500 text-white px-4 py-2 text-sm font-medium"}>
                      AFTER
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all z-10"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6 text-gray-600" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all z-10"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6 text-gray-600" />
              </button>
            </div>

            {/* Slide indicators */}
            <div className="flex justify-center mt-8">
              {beforeAfterImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 mx-2 rounded-full transition-colors ${
                    index === currentSlide ? "bg-green-500" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src={reviewhappy.src}
                  alt="Satisfied customer"
                  width={500}
                  height={400}
                  className="rounded-lg object-cover w-full"
                />
              </div>
              <div>
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-green-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg italic mb-6">
                  "I had an excellent experience with Rapid Removal DFW! They were incredibly responsive via text,
                  scheduled me quickly, and came out the very next day. They showed up right on time and were 
                  impressively quick and efficient in removing the trash from my garage. The entire process 
                  was seamless and hassle-free. I highly recommend their services and will definitely use them again in the future. Thank you for making this so easy!"
                </blockquote>
                <div className="flex items-center">
                  <div className="mr-4">
                    <p className="font-medium">Saajan Bhakta</p>
                    <p className="text-sm text-gray-500">Dallas, Residential Client</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-green-50">
          <div className="container px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center px-6">
              <div>
                <h2 className={oswald.className + " text-2xl md:text-3xl font-bold mb-4"}>Need Junk Gone Today? Call Now!</h2>
                <p className="text-gray-600 mb-8">
                  Experience fast, affordable junk removal services tailored to your needs in the DFW area.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-green-400 hover:bg-green-600 text-black hover:text-white font-medium px-5 py-6 border-2 border-green-700 text-lg rounded-sm">
                    <p className={bebas.className + " text-[30px]"}>CALL (214) 225-9545</p>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-green-500 border-2 text-green-500 px-5 py-6 hover:bg-green-500 hover:text-white"
                  >
                    <p className={bebas.className + " text-[30px]"}>BOOK ONLINE</p>
                  </Button>
                </div>
              </div>
              <Image src={ctaimg.src} alt="junk removal truck" width={500} height={500} className="rounded-lg" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}