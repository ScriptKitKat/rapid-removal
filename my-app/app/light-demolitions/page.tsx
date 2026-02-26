"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Check, Star, Shield, Clock, MapPin, ChevronDown, ChevronUp } from "lucide-react"

import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

import demo from "@/assets/shed-demo.jpg"
import demoimg from "@/assets/demolition.jpg"

import {Oswald, Bebas_Neue} from "next/font/google"

const oswald = Oswald({ subsets: ["latin"], weight: ["400", "700"]})
const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] })

const faqData = [
  {
    question: "How much does light demolition cost?",
    answer:
      "Pricing depends on the scope of work — the type of structure, size, and accessibility. We provide free, no-obligation estimates so you know exactly what to expect before any work begins. Contact us for a custom quote.",
  },
  {
    question: "Do you handle permits?",
    answer:
      "Most light demolition projects don't require permits, but for jobs that do (like structural modifications), we'll guide you through the process and help you understand what's needed before we start.",
  },
  {
    question: "How long does a typical light demolition take?",
    answer:
      "Most residential light demo jobs are completed in a single day. Larger or more complex projects may take 2-3 days. We'll give you a clear timeline during your free estimate.",
  },
  {
    question: "Do you haul away the debris?",
    answer:
      "Yes! Complete debris removal and cleanup is included with every light demolition project. We leave your space broom-clean and ready for the next phase of your renovation.",
  },
  {
    question: "What's the difference between light demolition and full demolition?",
    answer:
      "Light demolition involves selective removal of non-structural elements — walls, flooring, fixtures, sheds, decks, and fencing. Full demolition means bringing down an entire structure. We specialize in the precise, controlled removal that renovation projects require.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Absolutely. Rapid Removal DFW is fully licensed and insured, protecting you and your property throughout the entire demolition process.",
  },
]

function QuoteForm({ id }: { id: string }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectType: "",
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
        <label htmlFor={`${id}-projectType`} className="block text-sm font-medium text-gray-700 mb-1">
          Project Type
        </label>
        <select
          id={`${id}-projectType`}
          name="projectType"
          value={formData.projectType}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          required
        >
          <option value="">Select a project type</option>
          <option value="interior-walls">Interior Wall Removal</option>
          <option value="shed-outbuilding">Shed / Outbuilding Demolition</option>
          <option value="deck-patio">Deck / Patio Removal</option>
          <option value="flooring">Flooring & Tile Removal</option>
          <option value="fixtures-cabinets">Fixtures & Cabinet Removal</option>
          <option value="fencing">Fence Removal</option>
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
          placeholder="Describe what needs to be demolished..."
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

export default function LightDemolitionsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

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
              src={demo.src}
              alt="Light Demolition Work"
              fill
              className="object-cover opacity-30"
              priority
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h1 className={oswald.className + " text-4xl md:text-5xl font-bold mb-4"}>
                  Professional Light Demolition in DFW
                </h1>
                <p className="text-gray-200 mb-6 text-lg">
                  Safe, efficient, and professional light demolition services for your home or business. We handle the
                  small-scale demolition work — including full cleanup and debris hauling — so you don&apos;t have to.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <Link href="tel:+12142335545">
                    <Button className="bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-6 border-2 border-white/30 text-md rounded-sm">
                      <Phone className="mr-2 h-5 w-5" />
                      <p className={bebas.className + " text-[24px]"}>(214) 233-5545</p>
                    </Button>
                  </Link>
                </div>
                <p className="text-green-400 text-sm font-medium">Free estimates &bull; Licensed & insured &bull; Same-day consultations</p>
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
                <Clock className="h-6 w-6 mb-1" />
                <p className={bebas.className + " text-lg"}>Same-Day Consultations</p>
              </div>
              <div className="flex flex-col items-center">
                <Star className="h-6 w-6 mb-1 fill-current" />
                <p className={bebas.className + " text-lg"}>5-Star Rated</p>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="h-6 w-6 mb-1" />
                <p className={bebas.className + " text-lg"}>Licensed & Insured</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="h-6 w-6 mb-1" />
                <p className={bebas.className + " text-lg"}>Serving All of DFW</p>
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
                    Think of it as &ldquo;selective removal&rdquo; — we take out only what you want removed while keeping everything
                    else intact and undamaged. It&apos;s perfect for renovation projects, space modifications, or when you
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

        {/* What We Can Demolish Section - Expanded */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className={oswald.className + " text-3xl font-bold text-center mb-4"}>What We Can Demolish</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Every project includes full debris removal, cleanup, and hauling — we leave your space ready for the next step.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Interior Walls</h3>
                <p className="text-gray-600 mb-3">
                  Non-load-bearing walls, partition walls, and room dividers. Perfect for opening up spaces or
                  reconfiguring layouts.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Drywall & plaster removal</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Framing teardown</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Full cleanup included</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Sheds & Outbuildings</h3>
                <p className="text-gray-600 mb-3">
                  Small storage sheds, garden buildings, old garages, and other standalone structures on your property.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Complete structure teardown</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Foundation cleanup</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />All materials hauled away</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Decks & Patios</h3>
                <p className="text-gray-600 mb-3">
                  Old wooden decks, concrete patios, and outdoor structures that need to be removed or replaced.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Wood & composite deck removal</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Post & footing extraction</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Site left clean & level</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Flooring & Tiles</h3>
                <p className="text-gray-600 mb-3">
                  Old flooring, ceramic tiles, hardwood, carpet removal, and subfloor preparation for renovations.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Tile, hardwood & carpet</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Subfloor prep available</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Dust & debris cleanup</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Fixtures & Cabinets</h3>
                <p className="text-gray-600 mb-3">
                  Kitchen cabinets, bathroom fixtures, built-in furniture, and other installed components.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Cabinet & countertop removal</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Tub, toilet & vanity removal</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />All fixtures hauled away</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Fencing</h3>
                <p className="text-gray-600 mb-3">
                  Old fences, gates, and boundary structures that need removal or replacement.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Wood, chain-link & iron</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Post removal included</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Ready for new fence install</li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-10">
              <Link href="#quote">
                <Button className="bg-green-400 hover:bg-green-600 text-black hover:text-white font-medium px-6 py-6 border-2 border-green-700 text-md rounded-sm">
                  <p className={bebas.className + " text-[24px]"}>GET YOUR FREE ESTIMATE</p>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Our Light Demolition Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <Image
                  src={demoimg.src}
                  alt="Professional demolition team at work"
                  width={600}
                  height={500}
                  className="rounded-lg object-cover w-full"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className={oswald.className + " text-3xl font-bold mb-6"}>Why Choose Our Light Demolition Services?</h2>
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
                      <h3 className="font-bold text-lg">Complete Cleanup Included</h3>
                      <p className="text-gray-600">
                        We handle all debris removal and cleanup, leaving your space broom-clean and ready for the next phase of your project.
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
            <h2 className={oswald.className + " text-3xl font-bold text-center mb-12"}>Our Simple Process</h2>
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Contact Us</h3>
                <p className="text-gray-600">
                  Call us or fill out the form to describe your light demolition needs.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Free Estimate</h3>
                <p className="text-gray-600">
                  We&apos;ll assess the work and provide a detailed, no-obligation estimate.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">Schedule Work</h3>
                <p className="text-gray-600">
                  Once approved, we&apos;ll schedule the demolition at a time that works for you.
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

            {/* CTA */}
            <div className="text-center mt-10">
              <Link href="#quote">
                <Button className="bg-green-400 hover:bg-green-600 text-black hover:text-white font-medium px-6 py-6 border-2 border-green-700 text-md rounded-sm">
                  <p className={bebas.className + " text-[24px]"}>GET STARTED — FREE ESTIMATE</p>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Social Proof / Testimonials Section */}
        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className={oswald.className + " text-3xl md:text-4xl font-bold mb-4"}>What Our Customers Say</h2>
              <p className="text-gray-600">Real reviews from real DFW customers.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-green-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 text-sm mb-4 italic">
                  &ldquo;Great guys to work with! Very kind and professional. Also the best prices I have found. They came the same day I contacted them, so they work really quickly to get you scheduled.&rdquo;
                </blockquote>
                <p className="font-medium text-gray-900">Scott</p>
                <p className="text-sm text-gray-500">Home Owner, Dallas</p>
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
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className={oswald.className + " text-3xl md:text-4xl font-bold mb-4"}>Frequently Asked Questions</h2>
              <p className="text-gray-600 mb-12">Common questions about our light demolition services.</p>

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

        {/* Bottom Quote Form + CTA */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className={oswald.className + " text-3xl md:text-4xl font-bold mb-4"}>Ready to Start Your Demolition Project?</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Every light demolition project is unique. Get your free, no-obligation estimate today — our team will assess your project and provide transparent pricing.
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
      </main>
    <Footer />
    </div>
  )
}
