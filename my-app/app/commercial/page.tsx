"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Star, ChevronLeft, ChevronRight, ChevronDown, ChevronUp, Shield, Clock, MapPin, Building2 } from "lucide-react"
import { useState } from "react"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

import {Oswald, Bebas_Neue} from "next/font/google"
import ctaimg from "@/assets/ctaimg.jpg"

import commercialsplash from "@/assets/commercialsplash.jpg"
import commercialimg from "@/assets/commercialimg.jpg"
import commercialimg2 from "@/assets/commercialimg2.jpg"

import commercialbefore1 from "@/assets/commercialbefore1.jpg"
import commercialbefore2 from "@/assets/commercialbefore2.jpg"
import commercialafter1 from "@/assets/commercialafter1.jpg"
import commercialafter2 from "@/assets/commercialafter2.jpg"

const oswald = Oswald({ subsets: ["latin"], weight: ["400", "700"]})
const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] })

const faqData = [
  {
    question: "Do you offer recurring commercial service?",
    answer:
      "Yes! We offer ongoing junk removal contracts for businesses that need regular cleanouts, construction debris removal, or property maintenance. Contact us to set up a recurring schedule that works for your business.",
  },
  {
    question: "Can you work after hours or on weekends?",
    answer:
      "Absolutely. We understand businesses can't always shut down for cleanouts. We offer flexible scheduling including evenings and weekends to minimize disruption to your operations.",
  },
  {
    question: "Do you handle hazardous materials?",
    answer:
      "We handle most commercial waste, but hazardous materials (chemicals, asbestos, medical waste) require specialized disposal. We can help identify what we can take and refer you to licensed hazmat specialists for the rest.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve the entire Dallas-Fort Worth metroplex including Dallas, Plano, Frisco, McKinney, Allen, Richardson, Garland, Irving, Arlington, Fort Worth, and all surrounding communities.",
  },
  {
    question: "How fast can you get here?",
    answer:
      "We offer same-day service for most commercial jobs. Call us in the morning and we can often be on-site by the afternoon. For larger projects, we'll schedule a walkthrough and start ASAP.",
  },
  {
    question: "Do you provide dumpsters for commercial projects?",
    answer:
      "Yes! We offer 15, 18, and 25-yard dumpster rentals perfect for ongoing construction projects, renovation debris, or large-scale cleanouts. Visit our Dumpster Rentals page for sizing and pricing.",
  },
]

function QuoteForm({ id }: { id: string }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    industryType: "",
    serviceAddress: "",
    projectDetails: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <form id={id} onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor={`${id}-firstName`} className="block text-sm font-medium text-gray-700 mb-1">
            First name
          </label>
          <input
            type="text"
            id={`${id}-firstName`}
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            required
          />
        </div>
        <div>
          <label htmlFor={`${id}-lastName`} className="block text-sm font-medium text-gray-700 mb-1">
            Last name
          </label>
          <input
            type="text"
            id={`${id}-lastName`}
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            required
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor={`${id}-email`} className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id={`${id}-email`}
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            required
          />
        </div>
        <div>
          <label htmlFor={`${id}-phone`} className="block text-sm font-medium text-gray-700 mb-1">
            Phone number
          </label>
          <input
            type="tel"
            id={`${id}-phone`}
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            required
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor={`${id}-industryType`} className="block text-sm font-medium text-gray-700 mb-1">
          Industry / Project Type
        </label>
        <select
          id={`${id}-industryType`}
          name="industryType"
          value={formData.industryType}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          required
        >
          <option value="">Select your industry</option>
          <option value="property-management">Property Management</option>
          <option value="construction">Construction / Renovation</option>
          <option value="retail">Retail / Storefront</option>
          <option value="office">Office / Corporate</option>
          <option value="healthcare">Healthcare</option>
          <option value="restaurant">Restaurant / Hospitality</option>
          <option value="warehouse">Warehouse / Industrial</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor={`${id}-serviceAddress`} className="block text-sm font-medium text-gray-700 mb-1">
          Service Address
        </label>
        <input
          type="text"
          id={`${id}-serviceAddress`}
          name="serviceAddress"
          value={formData.serviceAddress}
          onChange={handleInputChange}
          placeholder="Street address, City, State, ZIP"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor={`${id}-projectDetails`} className="block text-sm font-medium text-gray-700 mb-1">
          Project Details
        </label>
        <textarea
          id={`${id}-projectDetails`}
          name="projectDetails"
          rows={3}
          value={formData.projectDetails}
          onChange={handleInputChange}
          placeholder="Describe your commercial junk removal needs..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-vertical"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-green-400 hover:bg-green-600 text-black hover:text-white font-medium px-6 py-6 border-2 border-green-700 text-md rounded-sm">
        <p className={bebas.className + " text-[28px]"}>GET YOUR FREE ESTIMATE</p>
      </Button>
    </form>
  )
}

export default function CommercialJunkServicesPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

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

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="flex flex-col min-h-screen">
        <Navbar />

      <main className="flex-grow">
        {/* Hero Section with Inline Quote Form */}
        <section className="bg-gray-900 py-16 relative">
          <div className="absolute inset-0 z-0">
            <Image
              src={commercialsplash.src}
              alt="Commercial Junk Removal"
              fill
              className="object-cover opacity-30"
              priority
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h1 className={oswald.className + " text-4xl md:text-5xl font-bold mb-4"}>
                  Commercial Junk Removal & Cleanout Services — DFW
                </h1>
                <p className="text-gray-200 mb-6 text-lg">
                  Whether it&apos;s an office building, retail space, or construction site, Rapid Removal DFW handles commercial cleanouts,
                  equipment removal, and construction debris. Professional service your business can count on.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <Link href="tel:+12142335545">
                    <Button className="bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-6 border-2 border-white/30 text-md rounded-sm">
                      <Phone className="mr-2 h-5 w-5" />
                      <p className={bebas.className + " text-[24px]"}>(214) 233-5545</p>
                    </Button>
                  </Link>
                </div>
                <p className="text-green-400 text-sm font-medium">Same-day service &bull; Licensed & insured &bull; Free estimates</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-xl" id="quote">
                <h3 className={oswald.className + " text-2xl font-bold mb-4 text-gray-900"}>Get Your Free Estimate</h3>
                <QuoteForm id="hero-form" />
              </div>
            </div>
          </div>
        </section>

        {/* Trust Stats Bar */}
        <section className="bg-green-500 py-4">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
              <div className="flex flex-col items-center">
                <Building2 className="h-6 w-6 mb-1" />
                <p className={bebas.className + " text-lg"}>Businesses Served</p>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="h-6 w-6 mb-1" />
                <p className={bebas.className + " text-lg"}>Same-Day Service</p>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="h-6 w-6 mb-1" />
                <p className={bebas.className + " text-lg"}>Licensed & Insured</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="h-6 w-6 mb-1" />
                <p className={bebas.className + " text-lg"}>Full DFW Coverage</p>
              </div>
            </div>
          </div>
        </section>

        {/* Commercial Services Section - Expanded */}
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
                  <Link href="#quote">
                    <Button className="bg-green-400 hover:bg-green-600 text-black hover:text-white font-medium px-6 py-6 border-2 border-green-700 text-lg rounded-sm">
                      <p className={bebas.className}>GET A FREE ESTIMATE</p>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Served Section - NEW */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className={oswald.className + " text-2xl md:text-3xl font-bold text-center mb-4"}>Industries We Serve</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              We work with businesses across every industry in the DFW metroplex. No job is too big or too small.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Property Management</h3>
                <p className="text-gray-600 text-sm">Tenant turnover cleanouts, eviction cleanups, property maintenance, and recurring service for multi-unit complexes.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Construction</h3>
                <p className="text-gray-600 text-sm">Job site debris removal, renovation waste hauling, dumpster rentals for active construction projects.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Retail</h3>
                <p className="text-gray-600 text-sm">Store closings, inventory disposal, fixture removal, and complete retail space cleanouts for new tenants.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Office / Corporate</h3>
                <p className="text-gray-600 text-sm">Office furniture removal, cubicle teardown, electronics recycling, and full office cleanouts during relocations.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Healthcare</h3>
                <p className="text-gray-600 text-sm">Medical office cleanouts, old equipment removal, and facility renovation debris for healthcare providers.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Restaurant / Hospitality</h3>
                <p className="text-gray-600 text-sm">Kitchen equipment removal, restaurant cleanouts, and renovation debris for hospitality businesses.</p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-10">
              <Link href="#quote">
                <Button className="bg-green-400 hover:bg-green-600 text-black hover:text-white font-medium px-6 py-6 border-2 border-green-700 text-md rounded-sm">
                  <p className={bebas.className + " text-[24px]"}>GET YOUR FREE COMMERCIAL ESTIMATE</p>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Same Day Commercial Pick Up Section */}
        <section className="py-16 bg-white">
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
                      <li>Office shelving</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Construction Debris</h4>
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
                    <h4 className="font-medium text-gray-900 mb-2">Other Items</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>Scrap metal</li>
                      <li>Plumbing waste</li>
                      <li>Furniture and fixtures</li>
                      <li>Building materials</li>
                    </ul>
                  </div>
                </div>

                <Link href="#quote">
                  <Button className="bg-green-400 hover:bg-green-600 text-black hover:text-white font-medium px-6 py-6 border-2 border-green-700 text-lg rounded-sm">
                    <p className={bebas.className}>GET A FREE ESTIMATE</p>
                  </Button>
                </Link>
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
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className={oswald.className + " text-2xl md:text-3xl font-bold text-center mb-4"}>Before & After Results</h2>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
              See the dramatic transformations our commercial junk removal services provide to businesses across DFW.
            </p>

            <div className="relative max-w-5xl mx-auto">
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

        {/* Social Proof / Testimonials Section */}
        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className={oswald.className + " text-3xl md:text-4xl font-bold mb-4"}>Trusted by DFW Businesses</h2>
              <p className="text-gray-600">See what our commercial clients have to say.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-green-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 text-sm mb-4 italic">
                  &ldquo;Provided services for my work place. The team was amazing. Extremely professional and efficient.
                  Completed the job in a timely manner. Will definitely be using them again!&rdquo;
                </blockquote>
                <p className="font-medium text-gray-900">Yvonne Booker</p>
                <p className="text-sm text-gray-500">Manager, Dallas</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-green-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 text-sm mb-4 italic">
                  &ldquo;Kevin and his team are AMAZING! They help us with multiple houses. They are quick to respond. Work hard and in a timely manner.&rdquo;
                </blockquote>
                <p className="font-medium text-gray-900">Pamplona Properties</p>
                <p className="text-sm text-gray-500">Business Owner, Irving</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-green-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 text-sm mb-4 italic">
                  &ldquo;The owners showed they really care about their work and go above and beyond. Definitely my go to from now on!&rdquo;
                </blockquote>
                <p className="font-medium text-gray-900">Lily Martinez</p>
                <p className="text-sm text-gray-500">Homeowner, Dallas</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className={oswald.className + " text-3xl md:text-4xl font-bold mb-4"}>Frequently Asked Questions</h2>
              <p className="text-gray-600 mb-12">Common questions about our commercial junk removal services.</p>

              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                    >
                      <span className="font-medium text-gray-900">{faq.question}</span>
                      {openFaq === index ? (
                        <ChevronUp className="h-5 w-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Quote Form */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className={oswald.className + " text-3xl md:text-4xl font-bold mb-4"}>Get Your Commercial Quote Today</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Tell us about your commercial junk removal needs and we&apos;ll provide a fast, free estimate. Same-day service available.
                </p>
              </div>
              <QuoteForm id="bottom-form" />
              <div className="text-center mt-8">
                <p className="text-gray-500 text-sm">Or call us now for immediate service:</p>
                <Link href="tel:+12142335545" className="text-green-600 font-bold text-xl hover:text-green-700">(214) 233-5545</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-green-50">
          <div className="container px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center px-6">
              <div>
                <h2 className={oswald.className + " text-2xl md:text-3xl font-bold mb-4"}>Need Commercial Junk Gone Today?</h2>
                <p className="text-gray-600 mb-8">
                  Experience fast, affordable commercial junk removal services tailored to your business needs in the DFW area.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href={"tel:+12142335545"}>
                    <Button className="bg-green-400 hover:bg-green-600 text-black hover:text-white font-medium px-5 py-6 border-2 border-green-700 text-lg rounded-sm">
                      <p className={bebas.className + " text-[30px]"}>CALL (214) 233-5545</p>
                    </Button>
                  </Link>
                  <Link href="#quote">
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
        <Footer />
    </div>
  )
}
