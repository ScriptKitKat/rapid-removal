"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Check, ArrowRight } from "lucide-react"

import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

import demo from "@/assets/shed-demo.jpg"
import demoimg from "@/assets/demolition.jpg"

import {Oswald, Bebas_Neue} from "next/font/google"

const oswald = Oswald({ subsets: ["latin"], weight: ["400", "700"]})
const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] })

export default function LightDemolitionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className={oswald.className + " text-4xl font-bold mb-4"}>Light Demolition Services</h1>
                <p className="text-gray-700 mb-6 text-lg">
                  Safe, efficient, and professional light demolition services for your home or business. We handle the
                  small-scale demolition work so you don't have to worry about it.
                </p>
                <Link href="/contact#quote" className="inline-block mb-6">
                  <Button className="bg-green-400 hover:bg-green-600 text-black hover:text-white font-medium px-6 py-6 border-2 border-green-700 text-md rounded-sm">
                    <p className={bebas.className + " text-[30px]"}>GET A FREE ESTIMATE</p>
                  </Button>
                </Link>
              </div>
              <div className="bg-gray-200 h-64 md:h-80 rounded-lg flex items-center justify-center">
                <Image
                  src={demo.src}
                  alt="Light Demolition Work"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What is Light Demolition Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className={oswald.className + " text-3xl font-bold text-center mb-8"}>What is Light Demolition?</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-gray-700 mb-6 text-lg">
                    Light demolition refers to the careful removal of smaller structures, interior elements, or
                    non-load-bearing components from buildings. Unlike major demolition that brings down entire
                    structures, light demolition is precise and controlled.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Think of it as "selective removal" - we take out only what you want removed while keeping everything
                    else intact and undamaged. It's perfect for renovation projects, space modifications, or when you
                    need to remove specific elements from your property.
                  </p>
                  <p className="text-gray-700">
                    Our experienced team uses the right tools and techniques to ensure the job is done safely and
                    efficiently, with minimal disruption to your daily routine.
                  </p>
                </div>
                <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
                  <Image
                    src={demoimg.src}
                    alt="Light demolition explanation"
                    width={500}
                    height={400}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Can Demolish Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className={oswald.className + " text-3xl font-bold text-center mb-12"}>What We Can Demolish</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Interior Walls</h3>
                <p className="text-gray-600">
                  Non-load-bearing walls, partition walls, and room dividers. Perfect for opening up spaces or
                  reconfiguring layouts.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Sheds & Outbuildings</h3>
                <p className="text-gray-600">
                  Small storage sheds, garden buildings, old garages, and other standalone structures on your property.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 10h16M4 14h16M4 18h16"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Decks & Patios</h3>
                <p className="text-gray-600">
                  Old wooden decks, concrete patios, and outdoor structures that need to be removed or replaced.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Flooring & Tiles</h3>
                <p className="text-gray-600">
                  Old flooring, ceramic tiles, hardwood, carpet removal, and subfloor preparation for renovations.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Fixtures & Cabinets</h3>
                <p className="text-gray-600">
                  Kitchen cabinets, bathroom fixtures, built-in furniture, and other installed components.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Fencing</h3>
                <p className="text-gray-600">
                  Old fences, gates, and boundary structures that need removal or replacement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Light Demolition Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Professional demolition team at work"
                  width={600}
                  height={500}
                  className="rounded-lg object-cover w-full"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-6">Why Choose Our Light Demolition Services?</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Check className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg">Safe & Professional</h3>
                      <p className="text-gray-600">
                        Our trained team follows all safety protocols and uses proper equipment to ensure safe
                        demolition.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg">Precise & Controlled</h3>
                      <p className="text-gray-600">
                        We remove only what needs to go, protecting surrounding areas and structures from damage.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg">Complete Cleanup</h3>
                      <p className="text-gray-600">
                        We handle all debris removal and cleanup, leaving your space ready for the next phase of your
                        project.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg">Licensed & Insured</h3>
                      <p className="text-gray-600">
                        Fully licensed and insured for your peace of mind and protection during the demolition process.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Simple Process</h2>
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Contact Us</h3>
                <p className="text-gray-600">
                  Call us or fill out our contact form to describe your light demolition needs.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Free Estimate</h3>
                <p className="text-gray-600">
                  We'll visit your property to assess the work and provide a detailed, no-obligation estimate.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">Schedule Work</h3>
                <p className="text-gray-600">
                  Once approved, we'll schedule the demolition at a time that works best for you.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold mb-3">Complete & Clean</h3>
                <p className="text-gray-600">
                  We complete the demolition safely and clean up all debris, leaving your space ready.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Demolition Project?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Every light demolition project is unique. Contact us today for a free, no-obligation estimate tailored to
              your specific needs. Our experienced team will assess your project and provide you with a detailed plan
              and transparent pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-green-500 hover:bg-green-600 text-white font-medium px-8 py-4 rounded-lg text-lg flex items-center justify-center"
                asChild
              >
                <Link href="/contact">
                  GET A FREE ESTIMATE
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-medium px-8 py-4 rounded-lg text-lg flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                CALL (214) 233-6545
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              Free estimates • Licensed & insured • Same-day consultations available
            </p>
          </div>
        </section>
      </main>
    <Footer />
    </div>
  )
}
