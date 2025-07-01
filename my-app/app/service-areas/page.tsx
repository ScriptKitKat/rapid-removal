"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, MapPin } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"


import { Oswald, Bebas_Neue } from "next/font/google"
import ctaimg from "@/assets/ctaimg.jpg"
import locationimg from "@/assets/locations.jpg"

const oswald = Oswald({ subsets: ["latin"], weight: ["400", "700"] })
const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] })


const serviceAreas = [
  { name: "Collin County", type: "county" },
  { name: "Plano", type: "city" },
  { name: "Allen", type: "city" },
  { name: "McKinney", type: "city" },
  { name: "Frisco", type: "city" },
  { name: "Fairview", type: "city" },
  { name: "Richardson", type: "city" },
  { name: "Sachse", type: "city" },
  { name: "Wylie", type: "city" },
  { name: "Murphy", type: "city" },
  { name: "Prosper", type: "city" },
  { name: "Celina", type: "city" },
  { name: "Rockwall", type: "city" },
  { name: "Garland", type: "city" },
  { name: "Rowlett", type: "city" },
  { name: "Carrollton", type: "city" },
  { name: "The Colony", type: "city" },
  { name: "Dallas", type: "city" },
  { name: "Mesquite", type: "city" },
]

export default function ServiceAreasPage() {
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar/>
        <main className="flex-grow">
            {/* Hero Section */}
            <section className="bg-green-50 py-16">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className={oswald.className + " text-4xl md:text-5xl font-bold mb-6"}>Service Areas</h1>
                    <p className="text-lg text-gray-700 mb-8">
                    Rapid Removal DFW proudly offers fast, affordable junk removal, dumpster rentals, and cleanup services
                    throughout the Dallas-Fort Worth metroplex. Below is a list of the cities and neighborhoods we
                    currently serve. Don't see your area? Give us a call – we may still be able to help!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                    <Link href={"tel:+12142335545"}>
                        <Button className="bg-green-500 hover:bg-green-300 py-5 text-white hover:text-black border-2 justify-center">
                            <Phone className="mr-2 h-5 w-5" />
                            <p className={bebas.className + " text-[20px]"}>CALL (214) 233-5545</p>
                        </Button>
                    </Link>
                    <Button className="bg-gray-900 hover:bg-gray-500 text-white  px-6 py-5 rounded-sm">
                        <p className={bebas.className +  " text-[20px]"}>GET A FREE ESTIMATE</p>
                    </Button>
                    </div>
                </div>
                <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
                    <Image src={locationimg} alt="image of a truck by apartments"></Image>
                </div>
                </div>
            </div>
            </section>

            {/* Service Areas Section */}
            <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className={oswald.className + " text-3xl font-bold text-center mb-12"}>We proudly serve the DFW area:</h2>
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Google Maps */}
                <div className="bg-gray-200 rounded-lg overflow-hidden">
                    <div className="h-96 relative">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429155.3198302891!2d-97.04419754999999!3d32.82058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974b%3A0xb9ec9ba4f647678f!2sDallas-Fort%20Worth%20Metroplex%2C%20TX!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="DFW Service Area Map"
                    ></iframe>
                    </div>
                    <div className="p-4 bg-gray-100">
                    <p className="text-sm text-gray-600 text-center">
                        Don't see your city? Call us! We still may be able to help!
                    </p>
                    </div>
                </div>

                {/* Cities List */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                    {serviceAreas.slice(0, Math.ceil(serviceAreas.length / 2)).map((area, index) => (
                        <div key={index} className="flex items-center">
                        <MapPin className="h-5 w-5 text-gray-600 mr-3 flex-shrink-0" />
                        <span className={bebas.className + " text-gray-800 text-[20px]"}>{area.name}</span>
                        </div>
                    ))}
                    </div>
                    <div className="space-y-4">
                    {serviceAreas.slice(Math.ceil(serviceAreas.length / 2)).map((area, index) => (
                        <div key={index} className="flex items-center">
                        <MapPin className="h-5 w-5 text-gray-600 mr-3 flex-shrink-0" />
                        <span className={bebas.className + " text-gray-800 text-[20px]"}>{area.name}</span>
                        </div>
                    ))}
                    </div>
                </div>
                </div>
            </div>
            </section>

            {/* Call to Action Section */}
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
                        <Button
                            variant="outline"
                            className="border-green-500 border-2 text-green-500 px-5 py-6 hover:bg-green-500 hover:text-white"
                        >
                            <p className={bebas.className + " text-[30px]"}>BOOK ONLINE</p>
                        </Button>
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
