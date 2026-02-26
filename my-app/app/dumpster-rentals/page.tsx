"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, ChevronDown, ChevronUp, Star, Truck, Clock, Shield, MapPin } from "lucide-react"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

import {Oswald, Bebas_Neue} from "next/font/google"
import dumpstersplash from "@/assets/dumpster-hero.jpeg"
import renovation from "@/assets/renovation.jpeg"
import estate from "@/assets/residentialsplash.jpg"
import festival from "@/assets/festival.jpg"
import construction from "@/assets/construction.jpg"

const oswald = Oswald({ subsets: ["latin"], weight: ["400", "700"]})
const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] })

const faqData = [
  {
    question: "How long can I keep the dumpster?",
    answer:
      "All listed prices come with three days included. Additional days are $10 per day. (Inquire for pricing for our long term dumpster rentals)",
  },
  {
    question: "What can I put in the dumpster?",
    answer: (
      <span>
        We can take everything <b>EXCEPT</b> the following:
        <ul className="list-disc ml-6 mt-2">
          <li>DIRT</li>
          <li>BRICK</li>
          <li>CONCRETE</li>
          <li>LIQUIDS (OILS, PAINTS, ETC...)</li>
          <li>TIRES</li>
          <li>ANYTHING THAT HAS CONTAINED OR CONTAINS FREON</li>
          <li>BATTERIES</li>
        </ul>
      </span>
    ),
  },
  {
    question: "Do you offer same-day delivery?",
    answer:
      "Yes! We can typically do same day delivery or delivery within 24 hours. Contact us as early as possible to guarantee same-day availability.",
  },
  {
    question: "What size dumpster do I need?",
    answer: (
      <span>
        <b>15-Yard Dumpster</b>
        <ul className="list-disc ml-6 mt-2">
          <li>Great for small cleanouts and bathroom renovations</li>
          <li>Holds about 75 full-size trash bags</li>
          <li>Small home projects and garage cleanouts</li>
        </ul>
        <b>18-Yard Dumpster</b>
        <ul className="list-disc ml-6 mt-2">
          <li>Over 100 full-size trash bags can fit</li>
          <li>Large items like a mattress, couch, dresser, and boxes</li>
          <li>Yard waste or debris</li>
          <li>Medium renovations and kitchen remodels</li>
        </ul>
        <b>25-Yard Dumpster</b>
        <ul className="list-disc ml-6 mt-2">
          <li>150 trash bags worth of junk</li>
          <li>A full home worth of furniture, boxes, and appliances</li>
          <li>Debris from a full-scale remodel project</li>
          <li>Commercial junk removal and roofing projects</li>
        </ul>
      </span>
    ),
  },
  {
    question: "What happens if I go over the weight limit?",
    answer:
      "Each rental includes 2 tons (4,000 lbs). If your load exceeds that, there is a $40 charge per additional 1,000 lbs. We'll weigh the dumpster at the landfill and let you know if there are any overage charges.",
  },
  {
    question: "How does delivery and pickup work?",
    answer:
      "We'll deliver the dumpster to the location you specify - driveway, parking lot, or job site. Just make sure there's clear access for our truck. When you're done loading, give us a call or text and we'll pick it up, usually within 24 hours.",
  },
  {
    question: "Still not sure?",
    answer:
      "Text or email us a photo of what you're tossing — we'll help you choose the right size so you don't have to guess.",
  },
]

function QuoteForm({ id }: { id: string }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dumpsterSize: "",
    projectDetails: "",
    deliveryAddress: "",
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
    <form id={id} onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor={`${id}-firstName`} className="block text-sm font-medium text-gray-700 mb-2">
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
          <label htmlFor={`${id}-lastName`} className="block text-sm font-medium text-gray-700 mb-2">
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

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor={`${id}-email`} className="block text-sm font-medium text-gray-700 mb-2">
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
          <label htmlFor={`${id}-phone`} className="block text-sm font-medium text-gray-700 mb-2">
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

      <div className="mb-6">
        <label htmlFor={`${id}-dumpsterSize`} className="block text-sm font-medium text-gray-700 mb-2">
          Dumpster Size
        </label>
        <select
          id={`${id}-dumpsterSize`}
          name="dumpsterSize"
          value={formData.dumpsterSize}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          required
        >
          <option value="">Select a dumpster size</option>
          <option value="15-yard">15 Yard Dumpster - $375</option>
          <option value="18-yard">18 Yard Dumpster - $425</option>
          <option value="25-yard">25 Yard Dumpster - $525</option>
          <option value="not-sure">Not sure - Help me choose</option>
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor={`${id}-deliveryAddress`} className="block text-sm font-medium text-gray-700 mb-2">
          Delivery Address
        </label>
        <input
          type="text"
          id={`${id}-deliveryAddress`}
          name="deliveryAddress"
          value={formData.deliveryAddress}
          onChange={handleInputChange}
          placeholder="Street address, City, State, ZIP"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          required
        />
      </div>

      <div className="mb-8">
        <label htmlFor={`${id}-projectDetails`} className="block text-sm font-medium text-gray-700 mb-2">
          Project Details
        </label>
        <textarea
          id={`${id}-projectDetails`}
          name="projectDetails"
          rows={4}
          value={formData.projectDetails}
          onChange={handleInputChange}
          placeholder="Tell us about your project..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-vertical"
        />
      </div>

      <div className="text-center">
        <Button
          type="submit"
          className="bg-green-400 hover:bg-green-600 text-black hover:text-white font-medium px-6 py-6 border-2 border-green-700 text-md rounded-sm">
          <p className={bebas.className + " text-[30px]"}>REQUEST YOUR QUOTE</p>
        </Button>
      </div>
    </form>
  )
}

export default function DumpsterRentalsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

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
              src={dumpstersplash.src}
              alt="Dumpster Rental Truck"
              fill
              className="object-cover opacity-90"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className={oswald.className + " text-4xl md:text-5xl lg:text-6xl font-bold mb-6"}>
              DFW&apos;s #1 Dumpster Rental — Delivered Today
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Same-day delivery. Transparent pricing. 3-day rentals with 2 tons included. Serving the entire Dallas-Fort Worth metroplex.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#quote" className="inline-block">
                <Button className="bg-green-400 hover:bg-green-600 text-black hover:text-white font-medium px-6 py-6 border-2 border-green-700 text-md rounded-sm">
                  <p className={bebas.className + " text-[30px]"}>GET YOUR FREE QUOTE</p>
                </Button>
              </Link>
              <Link href="tel:+12142335545" className="inline-block">
                <Button className="bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-6 border-2 border-white/30 text-md rounded-sm">
                  <Phone className="mr-2 h-5 w-5" />
                  <p className={bebas.className + " text-[30px]"}>(214) 233-5545</p>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Trust Stats Bar */}
        <section className="bg-green-500 py-4">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
              <div className="flex flex-col items-center">
                <Truck className="h-6 w-6 mb-1" />
                <p className={bebas.className + " text-lg"}>Same-Day Delivery</p>
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
                <p className={bebas.className + " text-lg"}>Locally Owned — DFW</p>
              </div>
            </div>
          </div>
        </section>

        {/* Dumpster Sizes & Pricing Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className={oswald.className + " text-3xl md:text-4xl font-bold mb-4"}>Dumpster Sizes & Pricing</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose the perfect size for your project. All rentals include a 3-day rental period and 2 tons of weight. Extra days are $10/day and overages are $40 per additional 1,000 lbs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* 15 Yard Dumpster */}
              <div className="border-2 border-gray-200 rounded-lg p-6 text-center hover:border-green-500 transition-colors">
                <h3 className={oswald.className + " text-xl font-bold mb-2"}>15 YARD DUMPSTER</h3>
                <p className="text-sm text-gray-500 mb-4">14&apos; L x 7.5&apos; W x 4.5&apos; H</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-green-600">$375</span>
                  <p className="text-sm text-gray-500 mt-1">3 Day Rental + 2 Tons Included</p>
                </div>
                <Link href="#quote">
                  <Button className="w-full bg-green-400 hover:bg-green-600 text-black hover:text-white font-medium py-3 border-2 border-green-700 rounded-sm mb-6">
                    <p className={bebas.className + " text-[20px]"}>REQUEST A QUOTE</p>
                  </Button>
                </Link>
                <div className="text-left space-y-3">
                  <p className="text-sm font-medium text-gray-900">Holds ~75 trash bags</p>
                  <ul className="text-left space-y-2">
                    {["Small cleanouts & decluttering", "Bathroom renovations", "Single-room remodels", "Garage cleanouts", "Small roofing jobs"].map((item) => (
                      <li key={item} className="flex items-start text-sm">
                        <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 18 Yard Dumpster - Most Popular */}
              <div className="border-2 border-green-500 rounded-lg p-6 text-center relative shadow-lg">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className={bebas.className + " bg-green-500 text-white px-4 py-1 rounded-full text-sm"}>MOST POPULAR</span>
                </div>
                <h3 className={oswald.className + " text-xl font-bold mb-2"}>18 YARD DUMPSTER</h3>
                <p className="text-sm text-gray-500 mb-4">16&apos; L x 7.5&apos; W x 5&apos; H</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-green-600">$425</span>
                  <p className="text-sm text-gray-500 mt-1">3 Day Rental + 2 Tons Included</p>
                </div>
                <Link href="#quote">
                  <Button className="w-full bg-green-400 hover:bg-green-600 text-black hover:text-white font-medium py-3 border-2 border-green-700 rounded-sm mb-6">
                    <p className={bebas.className + " text-[20px]"}>REQUEST A QUOTE</p>
                  </Button>
                </Link>
                <div className="text-left space-y-3">
                  <p className="text-sm font-medium text-gray-900">Holds 100+ trash bags</p>
                  <ul className="text-left space-y-2">
                    {["Kitchen & medium renovations", "Basement or attic cleanouts", "Yard waste & debris", "Multi-room decluttering", "Flooring & carpet removal"].map((item) => (
                      <li key={item} className="flex items-start text-sm">
                        <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 25 Yard Dumpster */}
              <div className="border-2 border-gray-200 rounded-lg p-6 text-center hover:border-green-500 transition-colors">
                <h3 className={oswald.className + " text-xl font-bold mb-2"}>25 YARD DUMPSTER</h3>
                <p className="text-sm text-gray-500 mb-4">20&apos; L x 7.5&apos; W x 5.5&apos; H</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-green-600">$525</span>
                  <p className="text-sm text-gray-500 mt-1">3 Day Rental + 2 Tons Included</p>
                </div>
                <Link href="#quote">
                  <Button className="w-full bg-green-400 hover:bg-green-600 text-black hover:text-white font-medium py-3 border-2 border-green-700 rounded-sm mb-6">
                    <p className={bebas.className + " text-[20px]"}>REQUEST A QUOTE</p>
                  </Button>
                </Link>
                <div className="text-left space-y-3">
                  <p className="text-sm font-medium text-gray-900">Holds ~150 trash bags</p>
                  <ul className="text-left space-y-2">
                    {["Full home cleanouts", "Large-scale renovations", "Construction & roofing debris", "Estate cleanouts", "Commercial projects"].map((item) => (
                      <li key={item} className="flex items-start text-sm">
                        <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA below pricing */}
            <div className="text-center mt-10">
              <p className="text-gray-600 mb-4">Not sure which size? Text us a photo and we&apos;ll help you choose.</p>
              <Link href="tel:+12142335545">
                <Button className="bg-green-400 hover:bg-green-600 text-black hover:text-white font-medium px-6 py-6 border-2 border-green-700 text-md rounded-sm">
                  <Phone className="mr-2 h-5 w-5" />
                  <p className={bebas.className + " text-[24px]"}>CALL (214) 233-5545</p>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Perfect For Your Project Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className={oswald.className + " text-3xl md:text-4xl font-bold mb-4"}>Perfect For Your Project</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our dumpsters are ideal for a wide range of residential and commercial projects.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <Image
                    src={renovation.src}
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
                    src={estate.src}
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
                    src={festival.src}
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
                    src={construction.src}
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

            {/* CTA */}
            <div className="text-center mt-10">
              <Link href="#quote">
                <Button className="bg-green-400 hover:bg-green-600 text-black hover:text-white font-medium px-6 py-6 border-2 border-green-700 text-md rounded-sm">
                  <p className={bebas.className + " text-[24px]"}>GET YOUR FREE QUOTE</p>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Quote Form Section */}
        <section id="quote" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className={oswald.className + " text-3xl md:text-4xl font-bold mb-4"}>Get Your Free Dumpster Quote</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Fill out the form below and we&apos;ll get back to you with a personalized quote for your project. Most quotes are returned within the hour.
              </p>
            </div>
            <QuoteForm id="quote-form-top" />
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
                  &ldquo;Rapid Removal was not only fast to deliver the dumpster but they were very kind and easy to work with in a tough situation. I cannot recommend them enough!&rdquo;
                </blockquote>
                <p className="font-medium text-gray-900">Kristel Underwood</p>
                <p className="text-sm text-gray-500">Homeowner, Allen</p>
              </div>

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
                  &ldquo;Kevin and his team are AMAZING! They help us with multiple houses. They are quick to respond. Work hard and in a timely manner.&rdquo;
                </blockquote>
                <p className="font-medium text-gray-900">Pamplona Properties</p>
                <p className="text-sm text-gray-500">Business Owner, Irving</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className={oswald.className + " text-3xl md:text-4xl font-bold mb-4"}>Frequently Asked Questions</h2>
              <p className="text-gray-600 mb-12">Common questions about our dumpster rental services and policies.</p>

              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg bg-white">
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
                <Link href="tel:+12142335545">
                  <Button className="bg-green-400 hover:bg-green-600 text-black hover:text-white font-medium px-6 py-6 border-2 border-green-700 text-md rounded-sm">
                    <Phone className="mr-2 h-5 w-5" />
                    <p className={bebas.className + " text-[24px]"}>CALL (214) 233-5545</p>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Quote Form + CTA */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className={oswald.className + " text-3xl md:text-4xl font-bold mb-4"}>Ready to Rent Your Dumpster?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Get your dumpster delivered as soon as today. Fill out the form below or call us directly for instant scheduling.
              </p>
            </div>
            <QuoteForm id="quote-form-bottom" />
            <div className="text-center mt-8">
              <p className="text-gray-500 text-sm">Or call us now for immediate service:</p>
              <Link href="tel:+12142335545" className="text-green-600 font-bold text-xl hover:text-green-700">(214) 233-5545</Link>
            </div>
          </div>
        </section>
      </main>
        <Footer />
    </div>
  )
}
