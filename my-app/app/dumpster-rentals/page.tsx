"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, ChevronDown, ChevronUp } from "lucide-react"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

import {Oswald, Bebas_Neue} from "next/font/google"

const oswald = Oswald({ subsets: ["latin"], weight: ["400", "700"]})
const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] })

const faqData = [
  {
    question: "How long can I keep the dumpster?",
    answer:
      "Our standard rental period is 7-10 days. If you need the dumpster for a longer period, just let us know and we can arrange an extended rental at a reasonable daily rate. We're flexible with your project timeline.",
  },
  {
    question: "What can I put in the dumpster?",
    answer:
      "You can dispose of most household and construction debris including furniture, appliances, construction materials, yard waste, and general household items. Prohibited items include hazardous materials, chemicals, paint, batteries, and tires.",
  },
  {
    question: "Do you offer same-day delivery?",
    answer:
      "Yes! We offer same-day delivery and pickup services throughout the DFW area. Contact us before 2 PM and we can typically have your dumpster delivered the same day, subject to availability.",
  },
  {
    question: "What size dumpster do I need?",
    answer:
      "The size depends on your project scope. A 10-yard is perfect for small cleanouts, 20-yard works well for medium renovations, and 30-yard is ideal for large construction projects. Our team can help you choose the right size.",
  },
  {
    question: "Are there any additional fees?",
    answer:
      "Our pricing is transparent with no hidden fees. The quoted price includes delivery, pickup, disposal, and up to the weight limit. Additional charges only apply for overage fees if weight limits are exceeded or for prohibited items.",
  },
]

export default function DumpsterRentalsPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companySize: "",
    projectDetails: "",
    deliveryAddress: "",
  })

  const [openFaq, setOpenFaq] = useState<number | null>(null)

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

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="flex flex-col min-h-screen">
        <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gray-900 text-white py-20 md:py-32">
          <div className="absolute inset-0 z-0">
            <Image
              src="/dumpster-hero-bg.png"
              alt="Dumpster Rental Truck"
              fill
              className="object-cover opacity-70"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Fast & Affordable Dumpster Rentals</h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Same-day delivery and pickup services throughout the Dallas-Fort Worth area. Choose from multiple sizes to
              fit your project needs.
            </p>
            <Button className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-md text-lg">
              RESERVE YOUR DUMPSTER TODAY
            </Button>
          </div>
        </section>

        {/* Dumpster Sizes & Pricing Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Dumpster Sizes & Pricing</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose the perfect size for your project. All rentals include delivery, pickup, and disposal fees.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* 10 Yard Dumpster */}
              <div className="border border-gray-200 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold mb-4">10 YARD DUMPSTER</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$299</span>
                  <p className="text-sm text-gray-500 mt-1">7-10 DAY RENTAL</p>
                </div>
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 rounded-md mb-6">
                  GET STARTED
                </Button>
                <ul className="text-left space-y-2">
                  <li className="flex items-center text-sm">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Perfect for small cleanouts
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Bathroom renovations
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Small home projects
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Garage cleanouts
                  </li>
                </ul>
              </div>

              {/* 20 Yard Dumpster */}
              <div className="border border-gray-200 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold mb-4">20 YARD DUMPSTER</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$399</span>
                  <p className="text-sm text-gray-500 mt-1">7-10 DAY RENTAL</p>
                </div>
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 rounded-md mb-6">
                  GET STARTED
                </Button>
                <ul className="text-left space-y-2">
                  <li className="flex items-center text-sm">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Medium renovations
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Kitchen remodels
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Basement cleanouts
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Roofing projects
                  </li>
                </ul>
              </div>

              {/* 30 Yard Dumpster */}
              <div className="border border-gray-200 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold mb-4">30 YARD DUMPSTER</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$499</span>
                  <p className="text-sm text-gray-500 mt-1">7-10 DAY RENTAL</p>
                </div>
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 rounded-md mb-6">
                  GET STARTED
                </Button>
                <ul className="text-left space-y-2">
                  <li className="flex items-center text-sm">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Large construction projects
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Whole house cleanouts
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Commercial projects
                  </li>
                  <li className="flex items-center text-sm">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Estate cleanouts
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Perfect For Your Project Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Perfect For Your Project</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our dumpsters are ideal for a wide range of residential and commercial projects.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Home Renovations"
                    width={300}
                    height={200}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Home Renovations</h3>
                <p className="text-gray-600 text-sm">
                  Kitchen remodels, bathroom updates, flooring replacement and other home improvement projects.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Estate Cleanouts"
                    width={300}
                    height={200}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Estate Cleanouts</h3>
                <p className="text-gray-600 text-sm">
                  Property cleanouts, moving cleanouts, and large-scale decluttering projects.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Special Events"
                    width={300}
                    height={200}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Special Events</h3>
                <p className="text-gray-600 text-sm">
                  Festival cleanups, large gatherings, and temporary event management solutions.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Construction Projects"
                    width={300}
                    height={200}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Construction Projects</h3>
                <p className="text-gray-600 text-sm">
                  New construction, demolition, roofing projects, and commercial construction debris.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reserve Your Dumpster Form Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Reserve Your Dumpster</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Fill out the form below and we'll get back to you with your quote and availability.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 mb-2">
                  Dumpster Size
                </label>
                <select
                  id="companySize"
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  required
                >
                  <option value="">Select size</option>
                  <option value="10-yard">10 Yard Dumpster - $299</option>
                  <option value="20-yard">20 Yard Dumpster - $399</option>
                  <option value="30-yard">30 Yard Dumpster - $499</option>
                  <option value="not-sure">Not sure - Help me choose</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details
                </label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  rows={4}
                  value={formData.projectDetails}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-vertical"
                />
              </div>

              <div className="mb-8">
                <label htmlFor="deliveryAddress" className="block text-sm font-medium text-gray-700 mb-2">
                  Delivery Address
                </label>
                <input
                  type="text"
                  id="deliveryAddress"
                  name="deliveryAddress"
                  value={formData.deliveryAddress}
                  onChange={handleInputChange}
                  placeholder="Street address, City, State, ZIP"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>

              <div className="text-center">
                <Button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-lg text-lg"
                >
                  GET YOUR QUOTE & RESERVE YOUR DUMPSTER TODAY
                </Button>
              </div>
            </form>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">FAQs</h2>
              <p className="text-gray-600 mb-12">Common questions about our dumpster rental services and policies.</p>

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

              <div className="mt-12 text-center">
                <h3 className="text-xl font-bold mb-4">Still have questions?</h3>
                <p className="text-gray-600 mb-6">
                  Our team is here to help you choose the right dumpster for your project.
                </p>
                <Button
                  variant="outline"
                  className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                  asChild
                >
                  <Link href="/contact">Contact</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
        <Footer />
    </div>
  )
}
