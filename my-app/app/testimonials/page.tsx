"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, ArrowRight } from "lucide-react"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

import { Oswald, Bebas_Neue } from "next/font/google"

import testimonialsBanner from "@/assets/testimonials.jpeg"
import testimonials2 from "@/assets/testimonials2.jpeg"

const oswald = Oswald({ subsets: ["latin"], weight: ["400", "700"] })
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

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${star <= rating ? "text-green-500" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gray-900 text-white py-20 md:py-32">
          <div className="absolute inset-0 z-0">
            <Image
              src={testimonialsBanner.src}
              alt="Happy customers"
              fill
              className="object-cover opacity-90"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className={oswald.className + " text-4xl md:text-5xl lg:text-6xl font-bold mb-6"}>
              What Our Customers Say
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Don't just take our word for it. Hear from real customers who trust Rapid Removal DFW for their junk removal, dumpster rental, and cleanup needs.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
              <div>
                <p className={oswald.className + " text-4xl font-bold text-green-500"}>5.0</p>
                <p className="text-gray-600 text-sm mt-1">Average Rating</p>
              </div>
              <div>
                <p className={oswald.className + " text-4xl font-bold text-green-500"}>100+</p>
                <p className="text-gray-600 text-sm mt-1">Happy Customers</p>
              </div>
              <div>
                <p className={oswald.className + " text-4xl font-bold text-green-500"}>Same Day</p>
                <p className="text-gray-600 text-sm mt-1">Service Available</p>
              </div>
              <div>
                <p className={oswald.className + " text-4xl font-bold text-green-500"}>DFW</p>
                <p className="text-gray-600 text-sm mt-1">Area Coverage</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className={oswald.className + " text-3xl md:text-4xl font-bold mb-4"}>Customer Reviews</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We take pride in every job, big or small. Here's what our customers have to say about working with us.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition-shadow"
                >
                  <div>
                    <StarRating rating={testimonial.rating} />
                    <p className="text-gray-700 mt-4 italic">"{testimonial.text}"</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image + Trust Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={testimonials2.src}
                  alt="Rapid Removal DFW team at work"
                  width={600}
                  height={500}
                  className="rounded-lg object-cover w-full"
                />
              </div>
              <div>
                <h2 className={oswald.className + " text-3xl font-bold mb-6"}>Why Customers Choose Us</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Fast Response Times</h3>
                      <p className="text-gray-600">Same-day service available throughout the DFW area.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Transparent Pricing</h3>
                      <p className="text-gray-600">No hidden fees or surprise charges. What we quote is what you pay.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Professional Team</h3>
                      <p className="text-gray-600">Friendly, hardworking crew that treats your property with respect.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Locally Owned</h3>
                      <p className="text-gray-600">We know the DFW area and care about our community.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className={oswald.className + " text-3xl md:text-4xl font-bold mb-6"}>Ready to Experience the Difference?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Join our growing list of satisfied customers. Get fast, affordable, and professional junk removal services today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact#quote">
                <Button className="bg-green-400 hover:bg-green-600 text-black hover:text-white font-medium px-6 py-6 border-2 border-green-700 text-md rounded-sm">
                  <p className={bebas.className + " text-[30px]"}>GET A FREE ESTIMATE</p>
                </Button>
              </Link>
              <Link href="tel:+12142335545">
                <Button
                  variant="outline"
                  className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-medium px-8 py-6 rounded-sm text-lg flex items-center justify-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  <p className={bebas.className + " text-[24px]"}>CALL (214) 233-5545</p>
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
