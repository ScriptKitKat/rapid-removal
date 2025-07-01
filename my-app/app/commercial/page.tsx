"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

import {Oswald, Bebas_Neue} from "next/font/google"
import ctaimg from "@/assets/ctaimg.jpg"

import commercialsplash from "@/assets/commercialsplash.jpg"
import commercialimg from "@/assets/commercialimg.jpg"
import commercialimg2 from "@/assets/commercialimg2.jpg"
import commercialreview from "@/assets/commercialreview.jpg"

import commercialbefore1 from "@/assets/commercialbefore1.jpg"
import commercialbefore2 from "@/assets/commercialbefore2.jpg"
import commercialafter1 from "@/assets/commercialafter1.jpg"
import commercialafter2 from "@/assets/commercialafter2.jpg"

const oswald = Oswald({ subsets: ["latin"], weight: ["400", "700"]})
const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] })

export default function CommercialJunkServicesPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const beforeAfterImages = [
    { before: commercialbefore1, after: commercialafter1 },
    { before: commercialbefore2, after: commercialafter2},
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
    
        {/* Main content area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className={oswald.className + " text-4xl font-bold mb-4"}>Commercial Junk Services</h1>
                <p className="text-gray-700 mb-6">
                  Whether it's an office building or retail space, Rapid Removal DFW handles commercial cleanouts,
                  equipment removal, and construction debris. Professional service you can count on!
                </p>
                <Link href="/contact#quote" className="inline-block mb-6">
                  <Button className="bg-green-400 hover:bg-green-600 text-black hover:text-white font-medium px-6 py-6 border-2 border-green-700 text-md rounded-sm">
                    <p className={bebas.className + " text-[30px]"}>GET A FREE ESTIMATE</p>
                  </Button>
                </Link>
                
              </div>
              <div className="bg-gray-200 h-64 md:h-80 rounded-lg flex items-center justify-center">
                <Image
                  src={commercialsplash.src}
                  alt="Commercial Junk Removal"
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
              Commercial Junk Removal & Cleanout Services
            </h2>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
              Rapid Removal DFW delivers fast, professional solutions to your commercial junk removal needs. Our team
              handles office cleanouts, retail space clearing, and construction debris across the DFW business
              community.
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                <div className="relative w-full aspect-[1/1] rounded-lg overflow-hidden">
                  <Image
                  src={commercialimg.src}
                  alt="Cluttered office space needing junk removal"
                  fill
                  className="object-cover w-full h-full"
                  />
                </div>
                </div>
              <div className="order-1 md:order-2">
                <h3 className={oswald.className + " text-xl font-bold text-green-600 uppercase mb-6"}>Commercial Junk Removal Services</h3>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <ul className="space-y-3">
                      <li className="text-gray-700">Construction debris removal</li>
                      <li className="text-gray-700">Interior and exterior cleaning</li>
                      <li className="text-gray-700">Warehouse cleanout services</li>
                      <li className="text-gray-700">Office cleanouts</li>
                      <li className="text-gray-700">Equipment disposal</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-3">
                      <li className="text-gray-700">Litter pick up for lots and greenbelts</li>
                      <li className="text-gray-700">Foreclosure cleanouts</li>
                      <li className="text-gray-700">Retail space cleanout</li>
                      <li className="text-gray-700">Tenant cleanouts</li>
                      <li className="text-gray-700">Industrial waste removal</li>
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
            <h2 className={oswald.className + " text-2xl md:text-3xl font-bold uppercase mb-6"}>Same Day Commercial Pick Up</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-700 mb-6">
                  Need to clear out your commercial space quickly? Our professional team specializes in commercial junk
                  removal for businesses of all sizes. From single office cleanouts to entire building renovations, our
                  trained professionals handle your commercial waste removal needs efficiently and professionally.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Office Equipment</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>Filing cabinets</li>
                      <li>Conference tables</li>
                      <li>Computers and monitors</li>
                      <li>Printers, copiers, fax machines</li>
                      <li>Cubicles and partitions</li>
                      <li>Office décor and shelving</li>
                      <li>Paper clutter and outdated files</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Commercial Items</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>Drywall scraps</li>
                      <li>Lumber and wood</li>
                      <li>Insulation</li>
                      <li>Tile and flooring</li>
                      <li>Carpet and padding</li>
                      <li>Roofing materials</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">-</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>Scrap metal</li>
                      <li>Plumbing and electrical waste</li>
                      <li>Furniture and fixtures</li>
                      <li>Building materials</li>
                    </ul>
                  </div>
                </div>

                <Button className="bg-green-400 hover:bg-green-600 text-black hover:text-white font-medium px-6 py-6 border-2 border-green-700 text-lg rounded-sm">
                  <p className={bebas.className}>GET A FREE ESTIMATE</p>
                </Button>
              </div>
              <div>
                <Image
                  src={commercialimg2.src}
                  alt="Workers removing commercial equipment"
                  width={600}
                  height={500}
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
              See the dramatic transformations our commercial junk removal services provide to businesses across DFW.
            </p>

            <div className="relative max-w-5xl mx-auto">
              {/* Current slide */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-200 rounded-lg overflow-hidden">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={beforeAfterImages[currentSlide].before || "/placeholder.svg?height=400&width=400"}
                      alt={`Before commercial junk removal - example ${currentSlide + 1}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 bg-gray-900 text-white px-4 py-2 text-sm font-medium">
                      BEFORE
                    </div>
                  </div>
                </div>
                <div className="bg-gray-200 rounded-lg overflow-hidden">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={beforeAfterImages[currentSlide].after || "/placeholder.svg?height=400&width=400"}
                      alt={`After commercial junk removal - example ${currentSlide + 1}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 bg-green-500 text-white px-4 py-2 text-sm font-medium">
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
                  src={commercialreview.src}
                  alt="Satisfied business customer"
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
                  "Provided services for my work place. The team was amazing. Extremely professional and efficient. 
                  Completed the job in a timely manner. Will definitely be using them again!"
                </blockquote>
                <div className="flex items-center">
                  <div className="mr-4">
                    <p className="font-medium">Yvonne Booker</p>
                    <p className="text-sm text-gray-500">Manager, Dallas</p>
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
                  <Link href={"tel:+12142335545"}>
                    <Button className="bg-green-400 hover:bg-green-600 text-black hover:text-white font-medium px-5 py-6 border-2 border-green-700 text-lg rounded-sm">
                      <p className={bebas.className + " text-[30px]"}>CALL (214) 233-5545</p>
                    </Button>
                  </Link>
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
