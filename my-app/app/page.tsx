"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

// Assets
import banner from "@/assets/banner.webp"
import team from "@/assets/team.webp"
import locations from "@/assets/locations.jpg"
import ctaimg from "@/assets/ctaimg.jpg"
import demolition from "@/assets/demolition.jpg"
import dumpster from "@/assets/dumpster.jpg"
import exterior from "@/assets/exterior.webp"

import {Oswald, Bebas_Neue} from "next/font/google"


const oswald = Oswald({ subsets: ["latin"], weight: ["400", "700"]})
const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] })

const testimonials = [
  {
    id: 1,
    text: "Great guys to work with! Very kind and professional. Also the best prices I have found. They came the same day I contacted them, so they work really quickly to get you scheduled. It was a great experience, I highly recommend them!",
    name: "Scott",
    location: "Home Owner, Dallas",
    rating: 5,
  },
  {
    id: 2,
    text: "Kevin and his team are AMAZING! They help us with multiple houses. They are quick to respond. Work hard and in a timely manner.",
    name: "Pamplona Properties",
    location: "Business Owner, Irving",
    rating: 5,
  },
  {
    id: 3,
    text: "The owners showed they really care about their work and go above and beyond. Definitely my go to from now on!",
    name: "Lily Martinez",
    location: "Homeowner, Dallas",
    rating: 5,
  },
  {
    id: 4,
    text: "Rapid Removal was not only fast to delivery the dumpster but they were very kind and easy to work with in a tough situation. I cannot recommend them enough!",
    name: "Kristel Underwood",
    location: "Homeowner, Allen",
    rating: 5,
  },
  {
    id: 5,
    text: "The entire process was seamless and hassle-free. I highly recommend their services and will definitely use them again in the future. Thank you for making this so easy!",
    name: "Saajan Bhakta",
    location: "Property Manager, McKinney",
    rating: 5,
  },
]

function TestimonialsCarousel() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index)
  }

  const current = testimonials[currentTestimonial]

  return (
    <div className="max-w-3xl mx-auto relative">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-center mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg key={star} className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          ))}
        </div>
        <p className="text-lg italic mb-6 min-h-[3rem]">"{current.text}"</p>
        <div className="flex items-center justify-center">
          <div className="mr-4">
            <p className="font-medium">{current.name}</p>
            <p className="text-sm text-gray-500">{current.location}</p>
          </div>
        </div>
      </div>

      {/* Navigation Arrows for desktop */}
      <button
        onClick={prevTestimonial}
        className="hidden md:block absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all md:-translate-x-12 md:left-0"
        aria-label="Previous testimonial"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-green-500"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      <button
        onClick={nextTestimonial}
        className="hidden md:block absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all md:translate-x-12 md:right-0"
        aria-label="Next testimonial"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-green-500"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>

      {/* Dot Indicators and mobile arrows */}
      <div className="flex flex-col items-center mt-8 space-y-4 md:space-y-0 md:flex-row md:justify-center md:items-center">
        <div className="flex justify-center">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 mx-1 rounded-full transition-colors ${
                index === currentTestimonial ? "bg-green-500" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        {/* Mobile arrows below dots */}
        <div className="flex justify-center gap-4 mt-4 md:hidden">
          <button
            onClick={prevTestimonial}
            className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all mx-2"
            aria-label="Previous testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-green-500"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all mx-2"
            aria-label="Next testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-green-500"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gray-900 text-white min-h-screen flex">
          <div className="absolute inset-0 z-0">
            <Image src={banner.src} alt="Junk Removal Truck" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40"></div>
          </div>
          <div className="container mx-auto px-4 py-20 md:py-32 relative z-10 flex flex-col justify-center min-h-screen">
            <div className="pl-4">
              <h1 className={oswald.className+" text-4xl sm:text-4xl md:text-5xl lg:text-6xl mb-4"}>
              Book a Same-Day Junk Removal
              </h1>
              <p className="text-sm lg:text-lg mb-8 max-w-xl">
              Experience hassle-free junk disposal with our same-day service. We cater to both residential and
              commercial needs, ensuring a clean space without breaking the bank.
              </p>
              <div className="w-full flex">
              <Link href="/contact#quote" className="w-full">
                <Button className="bg-green-400 hover:bg-green-600 text-black hover:text-white font-medium px-6 py-8 border-2 border-green-700 text-lg rounded-sm">
                  <p className={bebas.className + " text-[40px]"}>GET A FREE ESTIMATE</p>
                </Button>
              </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white px-4" id="services">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <span className="text-green-500 font-medium">Services</span>
              <h2 className={oswald.className + " text-2xl md:text-3xl font-bold mt-2"}>Your Trusted Partner for Junk Removal</h2>
              <p className="mt-4 text-gray-600 max-w-3xl">
                At Rapid Removal DFW, we specialize in fast and affordable junk removal services. Whether you're a
                homeowner or a business, we have the solutions to clear your space efficiently.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link
                href="/dumpster-rental"
                className="border rounded-lg overflow-hidden block focus:outline-none focus:ring-2 focus:ring-green-500 transition-shadow hover:shadow-lg cursor-pointer"
                tabIndex={0}
              >
                <div className="h-48 bg-gray-200 relative">
                  <div className="flex items-center justify-center h-full">
                    <Image src={dumpster} alt="Dumpster Rental" fill className="object-cover" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-2xl mb-2">Dumpster Rental Options Available</h3>
                  <p className="text-gray-600 mb-4">Choose from various sizes to meet your needs.</p>
                </div>
              </Link>
              <Link
                href="/exterior-cleaning"
                className="border rounded-lg overflow-hidden block focus:outline-none focus:ring-2 focus:ring-green-500 transition-shadow hover:shadow-lg cursor-pointer"
                tabIndex={0}
              >
                <div className="border rounded-lg overflow-hidden">
                  <div className="h-48 bg-gray-200 relative">
                    <div className="flex items-center justify-center h-full">
                      <Image src={exterior.src} alt="Dumpster Rental" fill className="object-cover" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-2xl mb-2">Expert Exterior Cleaning for Homebuilders</h3>
                    <p className="text-gray-600 mb-4">We provide thorough debris removal and power washing.</p>
                  </div>
                </div>
              </Link>

              <Link
                href="/light-demolitions"
                className="border rounded-lg overflow-hidden block focus:outline-none focus:ring-2 focus:ring-green-500 transition-shadow hover:shadow-lg cursor-pointer"
                tabIndex={0}
              >
                <div className="border rounded-lg overflow-hidden">
                  <div className="h-48 bg-gray-200 relative">
                    <div className="flex items-center justify-center h-full">
                      <Image src={demolition.src} alt="Demolition Services" fill className="object-cover" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-2xl mb-2">Reliable Light Demolition Services</h3>
                    <p className="text-gray-600 mb-4">Our team ensures safety and efficiency in every project.</p>
                  </div>
                </div>
              </Link>
              
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Image for desktop (left side) */}
              <div className="hidden md:flex order-2 md:order-1 justify-center">
                <Image src={team.src} alt="Rapid Removal DFW Team" width={500} height={500} className="rounded-lg" />
              </div>

              {/* Image for mobile (between heading and features) */}
              <div className="flex md:hidden justify-center my-8">
                <Image src={team.src} alt="Rapid Removal DFW Team" width={350} height={350} className="rounded-lg" />
              </div>
              <div className="order-1 md:order-2">
                <span className="text-green-500 font-medium">Why Us</span>
                <h2 className={oswald.className + " text-2xl md:text-4xl font-bold mt-2"}>Why Choose Rapid Removal DFW?</h2>
                <p className="mt-4 text-gray-600 max-w-3xl">
                  We are committed to providing the best junk removal services in the DFW area. Our team is dedicated to
                  delivering fast, reliable, and affordable solutions tailored to your needs.
                </p>
                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="font-bold text-xl">Fast and Reliable</h3>
                    <p className="text-gray-600 mt-2">
                      Count on our team to arrive on schedule and remove your junk removal needs promptly.
                    </p>
                  </div>
                  <hr className="my-4 border-black" />
                  <div>
                    <h3 className="font-bold text-xl">Affordable Solutions</h3>
                    <p className="text-gray-600 mt-2">
                      We provide competitive rates with no hidden fees, ensuring transparent pricing every time.
                    </p>
                  </div>
                  <hr className="my-4 border-black" />
                  <div>
                    <h3 className="font-bold text-xl">Locally Owned</h3>
                    <p className="text-gray-600 mt-2">
                      As a local business, we understand the community and tailor our services to your needs.
                    </p>
                  </div>
                  <hr className="my-4 border-black" />
                </div>

                <Link href="/contact#quote" className="w-full">
                  <Button className={bebas.className + " mt-8 bg-green-600 hover:bg-green-300 text-white hover:text-black text-[30px] px-6 py-8 rounded-sm border-2 border-green-500 hover:border-green-700"}>
                    GET AN INSTANT QUOTE
                  </Button>
                </Link>                
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-32 min-h-[70vh] bg-white flex items-center">
          <div className="container mx-auto px-4 text-center">
            <h2 className={oswald.className + " text-2xl md:text-3xl font-bold mb-12"}>Hear From Our Happy Clients</h2>

            <TestimonialsCarousel />
          </div>
        </section>

        {/* Locations Section */}
        <section className="py-32 min-h-[70vh] bg-white border-t flex items-center">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center px-6">
              <div>
          <div className="mb-8">
            <span className="text-sm text-green-500">Proudly Removing DFW's Junk</span>
            <h2 className={oswald.className + " text-4xl md:text-5xl font-bold mt-2"}>Locations</h2>
          </div>
          <p className="mb-6 text-xl text-gray-600">
            Rapid Removal DFW provides reliable junk removal, dumpster rental, and cleanup services across DFW — including Dallas, Frisco, Plano, Allen, McKinney, and more.
          </p>
          <Link href={"/service-areas"}>
          <Button
            variant="outline"
            className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white rounded-sm text-lg px-6 py-6 flex items-center justify-center"
          >
            <span className={bebas.className + " text-[30px]"}>VIEW ALL LOCATIONS</span>
          </Button>
          </Link>
              </div>
              <Image src={locations.src} alt="image of cleanupsite" width={500} height={500} className="rounded-lg" />
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

                  <Link href="/contact#quote" className="w-full">
                    <Button
                      variant="outline"
                      className="border-green-500 border-2 text-green-500 px-5 py-6 hover:bg-green-500 hover:text-white"
                    >
                      <p className={bebas.className + " text-[30px]"}>BOOK ONLINE</p>
                    </Button>
                  </Link>
                  
                </div>
              </div>
              <Image src={ctaimg.src} alt="junk removal truck" width={500} height={500} className="rounded-lg" />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
