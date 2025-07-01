"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

import { Oswald, Bebas_Neue } from "next/font/google"
import contactimg from "@/assets/contact.jpg"


const oswald = Oswald({ subsets: ["latin"], weight: ["400", "700"] })
const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] })

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    notes: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // You would typically send this data to your backend
  }

  return (
    <div className="flex flex-col min-h-screen">
        <Navbar />
    
        {/* Main content area */}
        <main className="flex-grow">
            {/* Hero Section */}
            <section
              className="relative bg-gray-600 text-white py-20"
              style={{
                backgroundImage: `url(${contactimg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              >
                <div className="absolute inset-0 bg-black/60" aria-hidden="true">
                </div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className={oswald.className + " text-3xl md:text-4xl lg:text-5xl font-bold mb-6"}>Contact Us</h1>
                    <p className="text-lg max-w-2xl mx-auto text-gray-200">
                    Ready to get rid of your junk? Contact Rapid Removal DFW today for fast, affordable, and reliable junk
                    removal services throughout the Dallas-Fort Worth area.
                    </p>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-16 bg-white" id="quote">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div>
                    <h2 className={oswald.className + " text-3xl font-bold mb-6"}>Get Your Free Quote</h2>
                    <p className="text-gray-600 mb-8">
                    Fill out the form below and we'll get back to you with a free estimate for your junk removal needs.
                    Same-day service available!
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                            First Name *
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            required
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                            placeholder="Enter your first name"
                        />
                        </div>
                        <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name *
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            required
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                            placeholder="Enter your last name"
                        />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                        </label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                        placeholder="Enter your email address"
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                        </label>
                        <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                        placeholder="(201) 123-4567"
                        />
                    </div>

                    <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                        City *
                        </label>
                        <input
                        type="text"
                        id="city"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                        placeholder="Enter your city"
                        />
                    </div>

                    <div>
                        <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                        Junk Removal Notes
                        </label>
                        <textarea
                        id="notes"
                        name="notes"
                        rows={4}
                        value={formData.notes}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors resize-vertical"
                        placeholder="Please describe what items you need removed, approximate quantity, location details, and any special requirements..."
                        />
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-4 px-6 rounded-md text-lg transition-colors"
                    >
                        <p className={oswald.className + " font-bold"}>REQUEST SERVICE</p>
                    </Button>

                    <p className="text-sm text-gray-500 text-center">
                        By submitting this form, you agree to receive communications from Rapid Removal DFW. We respect your
                        privacy and will never share your information.
                    </p>
                    </form>
                </div>

                {/* Contact Information */}
                <div className="bg-green-50 p-8 rounded-lg">
                    <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                    <div className="space-y-6">
                    <div className="flex items-start">
                        <Phone className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                        <div>
                        <h4 className="font-medium text-gray-900">Phone</h4>
                        <Link href={"tel:+12142335545"}>
                            <p className="text-gray-600">(214) 233-5545</p>
                        </Link>
                        
                        <p className="text-sm text-gray-500">Available 7 days a week</p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <Mail className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                        <div>
                        <h4 className="font-medium text-gray-900">Email</h4>
                        <p className="text-gray-600">info@rapidremovaldfw.com</p>
                        <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <MapPin className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                        <div>
                        <h4 className="font-medium text-gray-900">Service Area</h4>
                        <p className="text-gray-600">Dallas-Fort Worth Metroplex</p>
                        <p className="text-sm text-gray-500">
                            Including Dallas, Plano, Frisco, Allen, McKinney, and surrounding areas
                        </p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <Clock className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                        <div>
                        <h4 className="font-medium text-gray-900">Business Hours</h4>
                        <div className="text-gray-600">
                            <p>Monday - Saturday: 7:00 AM - 7:00 PM</p>
                            <p>Sunday: Closed</p>
                        </div>
                        <p className="text-sm text-gray-500">Emergency services available</p>
                        </div>
                    </div>
                    </div>

                    <div className="mt-8 p-4 bg-white rounded-lg border border-green-200">
                    <h4 className="font-medium text-gray-900 mb-2">Why Choose Us?</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Same-day service available</li>
                        <li>• Transparent, upfront pricing</li>
                        <li>• Fully licensed and insured</li>
                        <li>• Eco-friendly disposal practices</li>
                        <li>• 100% satisfaction guarantee</li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-16 bg-green-50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-4">Need Immediate Service?</h2>
                <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                For urgent junk removal needs or if you prefer to speak with someone directly, give us a call. Our
                friendly team is ready to help you get started right away.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href={"tel:+12142335545"}>
                        <Button className="bg-green-400 hover:bg-green-600 text-black hover:text-white font-medium px-5 py-6 border-2 border-green-700 text-lg rounded-sm">
                            <Phone className="mr-2 h-5 w-5" />
                            <p className={bebas.className + " text-[30px]"}>CALL NOW: (214) 233-5545</p>
                        </Button>
                    </Link>
                    
                    <Button
                    variant="outline"
                    className="border-green-500 border-2 text-green-500 px-5 py-6 hover:bg-green-500 hover:text-white"
                    >
                        <Link href="service-areas" className={bebas.className + " text-[30px]"}>VIEW SERVICE AREAS</Link>
                    </Button>                          
                </div>
            </div>
            </section>
        </main>
        <Footer />
    </div>
  )
}
