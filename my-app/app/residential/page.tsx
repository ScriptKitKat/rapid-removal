"use client"

import type React from "react"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Star, ChevronLeft, ChevronRight, ChevronDown, ChevronUp, Shield, Clock, MapPin, Home } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

import { Oswald, Bebas_Neue } from "next/font/google"
import ctaimg from "@/assets/ctaimg.jpg"
import residentialsplash from "@/assets/residentialsplash.jpg"
import residentialitems from "@/assets/residentialitems.jpg"

import residentialbefore1 from "@/assets/residentialbefore1.jpg"
import residentialbefore2 from "@/assets/residentialbefore2.jpg"
import residentialbefore3 from "@/assets/residentialbefore3.jpg"
import residentialafter1 from "@/assets/residentialafter1.jpg"
import residentialafter2 from "@/assets/residentialafter2.jpg"
import residentialafter3 from "@/assets/residentialafter3.jpg"

import garage from "@/assets/garageresidential.jpg"


const oswald = Oswald({ subsets: ["latin"], weight: ["400", "700"], display: "swap" })
const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400", display: "swap" })

const faqData = [
  {
    question: "How much does residential junk removal cost?",
    answer:
      "Pricing depends on the volume of junk and type of items. We provide free, upfront estimates so you know the cost before we start. No hidden fees — the price we quote is the price you pay.",
  },
  {
    question: "Do I need to be home during pickup?",
    answer:
      "Not necessarily! As long as the items are accessible (in a driveway, garage, or designated area), we can handle the removal. Just let us know the details when you schedule.",
  },
  {
    question: "What items can't you take?",
    answer:
      "We can take almost everything! The main exceptions are hazardous materials (chemicals, paint, oil), dirt/concrete/brick, tires, items containing freon, and batteries. If you're unsure, just ask — we're happy to help.",
  },
  {
    question: "How fast can you come?",
    answer:
      "We offer same-day service throughout the DFW area. Call us in the morning and we can often be at your home by the afternoon. For larger projects, we'll schedule a time that works best for you.",
  },
  {
    question: "Do you donate usable items?",
    answer:
      "Yes! Whenever possible, we donate items in good condition to local charities and donation centers. We believe in keeping usable items out of landfills.",
  },
  {
    question: "Do you clean up after the removal?",
    answer:
      "Absolutely. We don't just haul away your junk — we sweep up the area and leave your space clean and ready to use. That's our standard on every job.",
  },
]

const serviceAreas = [
  "Dallas", "Plano", "Frisco", "McKinney", "Allen", "Richardson", "Garland",
  "Mesquite", "Rowlett", "Rockwall", "Sachse", "Wylie", "Murphy", "Prosper",
  "Celina", "Fairview", "The Colony", "Carrollton",
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
          What do you need removed?
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
          <option value="furniture">Furniture Removal</option>
          <option value="appliances">Appliance Removal</option>
          <option value="garage-cleanout">Garage Cleanout</option>
          <option value="full-home">Full Home / Estate Cleanout</option>
          <option value="yard-waste">Yard Waste & Debris</option>
          <option value="renovation-debris">Renovation / Remodel Debris</option>
          <option value="moving">Moving Cleanout</option>
          <option value="hoarding">Hoarding Cleanup</option>
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
          placeholder="Tell us about what you need removed..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-vertical"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-green-400 hover:bg-green-600 text-black hover:text-white font-medium px-6 py-6 border-2 border-green-700 text-md rounded-sm">
        <p className={bebas.className + " text-[28px]"}>GET YOUR FREE QUOTE</p>
      </Button>
    </form>
  )
}

export default function ResidentialJunkServicesPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

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
              src={residentialsplash.src}
              alt="Residential Junk Removal"
              fill
              className="object-cover opacity-30"
              priority
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h1 className={`${oswald.className} text-4xl md:text-5xl font-bold mb-4`}>
                  Same-Day Residential Junk Removal in DFW
                </h1>
                <p className="text-gray-200 mb-6 text-lg">
                  We haul furniture, appliances, yard waste, and clutter from your home — fast, affordable, and hassle-free.
                  Same-day service you can count on across the entire Dallas-Fort Worth area.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <Link href="tel:+12142335545">
                    <Button className="bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-6 border-2 border-white/30 text-md rounded-sm">
                      <Phone className="mr-2 h-5 w-5" />
                      <p className={bebas.className + " text-[24px]"}>CALL (214) 233-5545</p>
                    </Button>
                  </Link>
                </div>
                <p className="text-green-400 text-sm font-medium">Same-day pickup &bull; Free estimates &bull; We do the heavy lifting</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-xl" id="quote">
                <h3 className={oswald.className + " text-2xl font-bold mb-4 text-gray-900"}>Get Your Free Quote</h3>
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
                <Home className="h-6 w-6 mb-1" />
                <p className={bebas.className + " text-lg"}>Homes Served</p>
              </div>
              <div className="flex flex-col items-center">
                <Star className="h-6 w-6 mb-1 fill-current" />
                <p className={bebas.className + " text-lg"}>5-Star Rated</p>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="h-6 w-6 mb-1" />
                <p className={bebas.className + " text-lg"}>Same-Day Service</p>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="h-6 w-6 mb-1" />
                <p className={bebas.className + " text-lg"}>Licensed & Insured</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section - NEW */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className={oswald.className + " text-3xl md:text-4xl font-bold text-center mb-4"}>How It Works</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Getting rid of your junk is easier than you think. Three simple steps and it&apos;s gone.</p>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className={oswald.className + " text-xl font-bold mb-3"}>Call or Book Online</h3>
                <p className="text-gray-600">
                  Give us a call or fill out the form. Tell us what you need removed and we&apos;ll provide a free estimate.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className={oswald.className + " text-xl font-bold mb-3"}>We Show Up</h3>
                <p className="text-gray-600">
                  Our team arrives on time, confirms the price, and gets to work. We do all the heavy lifting — you just point.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className={oswald.className + " text-xl font-bold mb-3"}>Junk Gone</h3>
                <p className="text-gray-600">
                  We haul everything away and sweep up. Your space is clean and clutter-free. It&apos;s that easy.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-10">
              <Link href="#quote">
                <Button className="bg-green-400 hover:bg-green-600 text-black hover:text-white font-medium px-6 py-6 border-2 border-green-700 text-md rounded-sm">
                  <p className={bebas.className + " text-[24px]"}>SCHEDULE YOUR PICKUP</p>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Junk Removal Services Section - Expanded */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className={oswald.className + " text-2xl md:text-3xl font-bold text-center uppercase mb-4"}>
              What We Remove
            </h2>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
              If it&apos;s in your home and you want it gone, we can probably take it. Here&apos;s a look at the most common items and services we handle.
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
                <h3 className={oswald.className + " text-xl font-bold text-green-600 uppercase mb-6"}>Residential Junk Removal Services</h3>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Furniture & Household</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>Couches & sofas</li>
                      <li>Mattresses & bed frames</li>
                      <li>Dressers & tables</li>
                      <li>Desks & bookshelves</li>
                      <li>Patio furniture</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Appliances & Electronics</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>Refrigerators & freezers</li>
                      <li>Washers & dryers</li>
                      <li>Ovens & dishwashers</li>
                      <li>TVs & monitors</li>
                      <li>Computers & printers</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Cleanout Services</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>Garage cleanouts</li>
                      <li>Attic & basement cleanouts</li>
                      <li>Full home / estate cleanouts</li>
                      <li>Hoarder cleanups</li>
                      <li>Moving cleanouts</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Yard & Construction</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>Yard waste & brush</li>
                      <li>Remodel debris</li>
                      <li>Carpet & flooring</li>
                      <li>Storage sheds</li>
                      <li>Fencing & decking</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <Link href="#quote">
                    <Button className="bg-green-400 hover:bg-green-600 text-black hover:text-white font-medium px-6 py-6 border-2 border-green-700 text-lg rounded-sm">
                      <p className={bebas.className}>GET A FREE QUOTE</p>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Same Day Item Pick Up Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className={oswald.className + " text-2xl md:text-3xl font-bold uppercase mb-6"}>Same Day Pickup Available</h2>
                <p className="text-gray-700 mb-6">
                  Looking for what to do with your bulky, hard-to-haul junk? Our professional junk removal team is ready
                  to help with all your junk removal needs. From single appliances to entire homes, our trained
                  professionals can take care of your unique junk removal needs — often the same day you call.
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
                    <h4 className="font-medium text-gray-900 mb-2">Bulky Items</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>Mattresses</li>
                      <li>Cardboard</li>
                      <li>TV disposal</li>
                      <li>Cabinets</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Debris</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>Remodel debris</li>
                      <li>Yard debris</li>
                      <li>Electronics</li>
                      <li>Carpet</li>
                    </ul>
                  </div>
                </div>

                <Link href="#quote">
                  <Button className="bg-green-400 hover:bg-green-600 text-black hover:text-white font-medium px-6 py-6 border-2 border-green-700 text-lg rounded-sm">
                    <p className={bebas.className}>SCHEDULE YOUR PICKUP</p>
                  </Button>
                </Link>
              </div>
              <div>
                <Image
                  src={residentialitems.src}
                  alt="Residential junk items in a truck"
                  width={600}
                  height={400}
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
              See the dramatic transformations our junk removal services provide to homes across DFW.
            </p>

            <div className="relative max-w-5xl mx-auto">
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
              <h2 className={oswald.className + " text-3xl md:text-4xl font-bold mb-4"}>What Our Customers Say</h2>
              <p className="text-gray-600">Real reviews from real DFW homeowners.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-green-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 text-sm mb-4 italic">
                  &ldquo;I had an excellent experience with Rapid Removal DFW! They were incredibly responsive via text,
                  scheduled me quickly, and came out the very next day. They showed up right on time and were
                  impressively quick and efficient in removing the trash from my garage.&rdquo;
                </blockquote>
                <p className="font-medium text-gray-900">Saajan Bhakta</p>
                <p className="text-sm text-gray-500">Property Manager, McKinney</p>
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
              <p className="text-gray-600 mb-12">Common questions about our residential junk removal services.</p>

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

        {/* Service Areas Section - NEW */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className={oswald.className + " text-3xl md:text-4xl font-bold mb-4"}>Areas We Serve</h2>
              <p className="text-gray-600 mb-8">Proud to serve homeowners across the entire Dallas-Fort Worth metroplex.</p>
              <div className="flex flex-wrap justify-center gap-3">
                {serviceAreas.map((area) => (
                  <span key={area} className="bg-white border border-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 shadow-sm">
                    <MapPin className="w-3 h-3 inline mr-1 text-green-500" />
                    {area}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-6">Don&apos;t see your city? Call us — we likely serve your area too!</p>
            </div>
          </div>
        </section>

        {/* Bottom Quote Form */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className={oswald.className + " text-3xl md:text-4xl font-bold mb-4"}>Ready to Get Rid of Your Junk?</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Fill out the form below for a free, no-obligation quote. Same-day service available throughout DFW.
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
