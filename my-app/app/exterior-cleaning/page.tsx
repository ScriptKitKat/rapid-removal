"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Check, ArrowRight } from "lucide-react"

import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

import {Oswald, Bebas_Neue} from "next/font/google"

const oswald = Oswald({ subsets: ["latin"], weight: ["400", "700"]})
const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] })

export default function ExteriorCleaningPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className={oswald.className + " text-4xl font-bold mb-4"}>Exterior Cleaning Services</h1>
                <p className="text-gray-700 mb-6 text-lg">
                  Professional power washing and exterior cleaning services for homebuilders, contractors, and property
                  owners. We make your property look brand new again.
                </p>
                <Link href="/contact#quote" className="inline-block mb-6">
                  <Button className="bg-green-400 hover:bg-green-600 text-black hover:text-white font-medium px-6 py-6 border-2 border-green-700 text-md rounded-sm">
                    <p className={bebas.className + " text-[30px]"}>GET A FREE ESTIMATE</p>
                  </Button>
                </Link>
              </div>
              <div className="bg-gray-200 h-64 md:h-80 rounded-lg flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Exterior Cleaning Power Washing"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What is Exterior Cleaning Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">What is Exterior Cleaning?</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-gray-700 mb-6 text-lg">
                    Exterior cleaning is the process of removing dirt, grime, mold, mildew, and debris from the outside
                    surfaces of buildings and properties. We use professional-grade power washing equipment and
                    specialized techniques to restore your property's appearance.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Whether it's construction debris on a new build, years of accumulated dirt on siding, or stubborn
                    stains on concrete, our exterior cleaning services will make your property look fresh and
                    well-maintained.
                  </p>
                  <p className="text-gray-700">
                    We're especially popular with homebuilders and contractors who need final cleanup services to
                    prepare properties for handover or sale. Our thorough cleaning enhances curb appeal and property
                    value.
                  </p>
                </div>
                <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Before and after exterior cleaning"
                    width={500}
                    height={400}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Clean Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What We Clean</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">House Siding & Exteriors</h3>
                <p className="text-gray-600">
                  Vinyl, wood, brick, and stone siding. Remove dirt, mold, mildew, and construction residue from all
                  exterior surfaces.
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
                <h3 className="text-xl font-bold mb-3">Driveways & Walkways</h3>
                <p className="text-gray-600">
                  Concrete, asphalt, and paver surfaces. Remove oil stains, tire marks, dirt, and weather staining.
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
                <h3 className="text-xl font-bold mb-3">Decks & Patios</h3>
                <p className="text-gray-600">
                  Wood decks, composite decking, concrete patios, and outdoor living spaces. Restore original
                  appearance.
                </p>
              </div>

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
                <h3 className="text-xl font-bold mb-3">Commercial Buildings</h3>
                <p className="text-gray-600">
                  Office buildings, retail spaces, warehouses, and commercial properties. Professional appearance for
                  business success.
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
                <h3 className="text-xl font-bold mb-3">Fences & Gates</h3>
                <p className="text-gray-600">
                  Wood, vinyl, and metal fencing. Remove dirt, algae, and weather staining to extend fence life.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Construction Cleanup</h3>
                <p className="text-gray-600">
                  Post-construction debris removal, dust cleaning, and final exterior preparation for new builds and
                  renovations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Exterior Cleaning Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Professional power washing equipment"
                  width={600}
                  height={500}
                  className="rounded-lg object-cover w-full"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-6">Why Choose Our Exterior Cleaning Services?</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Check className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg">Professional Equipment</h3>
                      <p className="text-gray-600">
                        Commercial-grade power washers and specialized cleaning solutions for optimal results on any
                        surface.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg">Surface-Safe Techniques</h3>
                      <p className="text-gray-600">
                        We adjust pressure and cleaning methods for each surface type to prevent damage while achieving
                        maximum cleanliness.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg">Eco-Friendly Solutions</h3>
                      <p className="text-gray-600">
                        Environmentally safe cleaning products that are tough on dirt but gentle on your landscaping and
                        surroundings.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg">Homebuilder Specialists</h3>
                      <p className="text-gray-600">
                        Experienced in final construction cleanup and preparing new builds for handover with attention
                        to detail.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Perfect For Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Perfect For</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Homebuilders"
                    width={300}
                    height={200}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Homebuilders</h3>
                <p className="text-gray-600 text-sm">
                  Final cleanup for new construction projects. Make your builds shine for handover and marketing photos.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Property Managers"
                    width={300}
                    height={200}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Property Managers</h3>
                <p className="text-gray-600 text-sm">
                  Maintain curb appeal and property value with regular exterior cleaning and maintenance services.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Homeowners"
                    width={300}
                    height={200}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Homeowners</h3>
                <p className="text-gray-600 text-sm">
                  Restore your home's beauty and increase curb appeal for personal enjoyment or preparing for sale.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Business Owners"
                    width={300}
                    height={200}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Business Owners</h3>
                <p className="text-gray-600 text-sm">
                  Professional appearance for your business exterior to attract customers and maintain brand image.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Simple Process</h2>
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Contact Us</h3>
                <p className="text-gray-600">
                  Call us or fill out our contact form to describe your exterior cleaning needs and property details.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Free Assessment</h3>
                <p className="text-gray-600">
                  We'll visit your property to assess surfaces and provide a detailed, no-obligation estimate.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">Schedule Service</h3>
                <p className="text-gray-600">
                  Once approved, we'll schedule the cleaning at a time that works best for your project timeline.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold mb-3">Transform & Shine</h3>
                <p className="text-gray-600">
                  We complete the cleaning efficiently and leave your property looking fresh, clean, and impressive.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Property's Appearance?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Every property is different, and we tailor our exterior cleaning approach to your specific needs. Contact
              us today for a free, no-obligation estimate and see how we can make your property look its absolute best.
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
              Free estimates • Eco-friendly solutions • Same-day consultations available
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
