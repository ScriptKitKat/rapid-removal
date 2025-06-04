"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// Assets
import {Oswald, Bebas_Neue} from "next/font/google"
import aboutimg from "@/assets/aboutimg.jpg"
import locations from "@/assets/locations.jpg"
import customer from "@/assets/happy-customer.jpg"

const oswald = Oswald({ subsets: ["latin"], weight: ["400", "700"] })
const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] })

export default function AboutPage() {
  return (
  <div className="flex flex-col min-h-screen">
    <Navbar/>
    <main className="flex-grow">
    {/* Hero Section */}
    <section className="relative bg-gradient-to-b from-green-600 via-green-700 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
        
        <h1 className={oswald.className + " text-3xl md:text-4xl lg:text-5xl font-bold mb-6"}>Your Space. Cleared Fast. Done Right.</h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-200">
            At Rapid Removal DFW, we're more than a junk removal company—we're your reliable partner in reclaiming clean, stress-free spaces
        </p>
        </div>
    </section>

    {/* About Section */}
    <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start mx-4">
            <div>
            <span className="text-sm text-green-500 tracking-wide">Proudly Serving DFW</span>
            <h2 className={oswald.className + " text-3xl font-bold mt-2 mb-6"}>About Rapid Removal DFW</h2>
            <div className="space-y-4 text-gray-600">
                <p>
                At Rapid Removal DFW, we pride ourselves on being the most reliable and efficient junk removal
                service in the Dallas-Fort Worth area. With years of experience in the industry, we understand that
                clearing out unwanted items can be overwhelming and time-consuming.
                </p>
                <p>
                Our professional team is dedicated to making the process as smooth and stress-free as possible. We
                handle everything from residential cleanouts to commercial property management, ensuring that your
                space is left clean and clutter-free. Whether you're dealing with old furniture, construction
                debris, or general household items, we have the expertise and equipment to handle it all.
                </p>
                <p>
                What sets us apart is our commitment to environmental responsibility. We don't just haul away your
                junk – we sort through items to donate what can be reused and recycle materials whenever possible.
                This approach helps reduce waste in landfills while supporting our local community through
                charitable donations.
                </p>
            </div>
            </div>
            <div className="flex items-center justify-center">
            <Image
                src={aboutimg}
                alt="Rapid Removal DFW Team"
                className="object-cover rounded-lg"
                width={600}
                height={320}
            />
            </div>
        </div>
        </div>
    </section>

        {/* Testimonial Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="flex justify-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <blockquote className="text-xl italic mb-6">
                "I had to remove trash after my bathroom project. I called these guys and they were at the property at the time we discussed, picked up everything clean. I'll be calling them to my future projects for sure!"
              </blockquote>
              <div className="flex items-center justify-center">
                <Image src={customer} alt="customer" className="w-12 h-12 rounded-full mr-4"></Image>
                {/* <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div> */}
                <div className="text-left">
                  <p className="font-medium">Petr Kashaev</p>
                  <p className="text-sm text-gray-500">Remodeler, Perfect Project Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-600 text-white" id="services">
          <div className="container mx-auto px-4">
            <h2 className={oswald.className + " text-3xl font-bold mb-12 text-center"}>Services We Offer</h2>
            <div className="grid md:grid-cols-3 gap-8 px-6">
              {/* Residential Services */}
              <div>
                <Link href="/residential" className="block mb-6 hover:text-green-500 transition-colors duration-200">
                    <h3 className="text-xl font-bold mb-6 underline">RESIDENTIAL</h3>
                </Link>
                <ul className="space-y-3">
                  {[
                    "Junk Removal",
                    "Bulk Pickup",
                    "Debris Removal",
                    "House Cleanouts",
                    "Hoarding Cleanouts",
                    "Trash Cleanouts",
                    "Attic Cleanouts",
                    "Basement Cleanouts",
                    "Moving Cleanouts",
                  ].map((service) => (
                    <li key={service} className="flex items-center">
                      <Check className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Commercial Services */}
              <div>
                <Link href="/commercial" className="block mb-6 hover:text-green-500 transition-colors duration-200">
                    <h3 className="text-xl font-bold mb-6 underline">COMMERCIAL</h3>
                </Link>
                <ul className="space-y-3">
                  {[
                    "Property Cleanouts",
                    "Office Cleanouts",
                    "Equipment Removal",
                    "Retail Space Cleanouts",
                    "Foreclosure Cleanouts",
                    "Estate Cleanouts",
                    "Construction Debris Removal",
                    "Junk Pickup",
                    "Debris Removal",
                  ].map((service) => (
                    <li key={service} className="flex items-center">
                      <Check className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Other Services */}
              <div className="space-y-8">
                <div>
                  <Link href="/dumpster" className="block mb-6 hover:text-green-500 transition-colors duration-200">
                  <h3 className="text-xl font-bold mb-4 underline">DUMPSTER RENTALS</h3>
                  </Link>
                </div>
                <div>
                  <Link href="/demolition" className="block mb-6 hover:text-green-500 transition-colors duration-200">
                  <h3 className="text-xl font-bold mb-4 underline">LIGHT DEMOLITIONS</h3>
                  </Link>
                </div>
                <div>
                    <Link href="/exterior-cleaning" className="block mb-6 hover:text-green-500 transition-colors duration-200">
                  <h3 className="text-xl font-bold mb-4 underline">EXTERIOR CLEANING</h3>
                    </Link>
                </div>
              </div>
            </div>
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
      </main>
      <Footer />
    </div>
  )
}
