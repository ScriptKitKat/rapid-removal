"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X, ChevronDown, ChevronUp } from "lucide-react"

// Assets
import logo from "@/assets/logo.webp"
import {Bebas_Neue} from "next/font/google"

const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] })

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      setServicesOpen(false) // Reset services dropdown when opening menu
    }
  }

  const toggleServices = () => {
    setServicesOpen(!servicesOpen)
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
        aria-label="Toggle mobile menu"
      >
        <Menu className="h-6 w-6 text-gray-700" />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={toggleMenu} />

          {/* Menu Panel */}
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <Image src={logo} alt="Rapid Removal DFW Logo" width={40} height={40} className="h-10 w-auto" />
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                  aria-label="Close mobile menu"
                >
                  <X className="h-6 w-6 text-gray-700" />
                </button>
              </div>

              {/* Navigation */}
              <div className="flex-1 overflow-y-auto py-4">
                <nav className="px-4 space-y-2">
                  {/* Services Dropdown */}
                  <div>
                    <button
                      onClick={toggleServices}
                      className="flex items-center justify-between w-full py-3 text-left text-lg font-medium text-gray-900 hover:text-green-500 focus:outline-none"
                    >
                      Services
                      {servicesOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                    </button>

                    {servicesOpen && (
                      <div className="ml-4 mt-2 space-y-3">
                        <Link
                          href="/residential"
                          className="block py-2 text-gray-700 hover:text-green-500"
                          onClick={toggleMenu}
                        >
                          Residential Junk Removal
                        </Link>
                        <Link
                          href="/commercial"
                          className="block py-2 text-gray-700 hover:text-green-500"
                          onClick={toggleMenu}
                        >
                          Commercial Junk Removal
                        </Link>
                        <Link
                          href="/dumpster-rentals"
                          className="block py-2 text-gray-700 hover:text-green-500"
                          onClick={toggleMenu}
                        >
                          Dumpster Rentals
                        </Link>
                        <Link
                          href="/light-demolitions"
                          className="block py-2 text-gray-700 hover:text-green-500"
                          onClick={toggleMenu}
                        >
                          Light Demolitions
                        </Link>
                        <Link
                          href="/exterior-cleaning"
                          className="block py-2 text-gray-700 hover:text-green-500"
                          onClick={toggleMenu}
                        >
                          Exterior Cleaning
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Other Navigation Items */}
                  <Link
                    href="/about"
                    className="block py-3 text-lg font-medium text-gray-900 hover:text-green-500"
                    onClick={toggleMenu}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/contact"
                    className="block py-3 text-lg font-medium text-gray-900 hover:text-green-500"
                    onClick={toggleMenu}
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="#blog"
                    className="block py-3 text-lg font-medium text-gray-900 hover:text-green-500"
                    onClick={toggleMenu}
                  >
                    Blog
                  </Link>
                </nav>
              </div>

              {/* Call-to-Action Buttons */}
              <div className="p-4 space-y-3 border-t">
                <Button
                  className="bg-green-500 hover:bg-green-300 w-full py-5 text-white hover:text-black rounded-sm border-2 hover:border-green-700"
                  onClick={toggleMenu}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  CALL (214) 225-9545
                </Button>
                <Button
                  variant="outline"
                  className="w-full rounded-sm border-2 border-black text-black hover:bg-black hover:text-white font-bold py-5 text-lg"
                  onClick={toggleMenu}
                >
                  GET A FREE ESTIMATE
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
};

export default function Navbar() {
  return (
      <header className="sticky top-0 bg-white py-3 px-4 border-b z-50">
        <div className="container mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center overflow-visible" style={{ zIndex: 1 }}>
            <div className="relative" style={{ height: "40px", overflow: "visible" }}>
              <Image
              src={logo.src}
              alt="Rapid Removal DFW Logo"
              width={80}
              height={80}
              className="h-20 w-auto -mt-3"
              style={{ maxHeight: "64px" }}//can control the height of the logo and it will cause the logo to stick out
              priority
              />
            </div>
            <span className="sr-only">Rapid Removal DFW</span>
            </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <Link
                href="/about#services"
                className="text-sm font-medium text-gray-700 hover:text-green-500 flex items-center"
              >
                Services
                <svg
                  className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {/* Services Dropdown */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Our Services</h3>
                  <div className="grid grid-cols-1 gap-1">
                    <Link
                      href="/residential"
                      className="flex items-center p-3 rounded-lg hover:bg-green-50 transition-colors group/item"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover/item:bg-green-200 transition-colors">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900 group-hover/item:text-green-600">Residential</p>
                        <p className="text-xs text-gray-500">Home junk removal & cleanouts</p>
                      </div>
                    </Link>

                    <Link
                      href="/commercial"
                      className="flex items-center p-3 rounded-lg hover:bg-green-50 transition-colors group/item"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover/item:bg-green-200 transition-colors">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900 group-hover/item:text-green-600">Commercial</p>
                        <p className="text-xs text-gray-500">Business junk removal & cleanouts</p>
                      </div>
                    </Link>

                    <Link
                      href="/dumpster-rentals"
                      className="flex items-center p-3 rounded-lg hover:bg-green-50 transition-colors group/item"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover/item:bg-green-200 transition-colors">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3m-7 0h10"
                          />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900 group-hover/item:text-green-600">
                          Dumpster Rentals
                        </p>
                      </div>
                    </Link>

                    <Link
                      href="/light-demolitions"
                      className="flex items-center p-3 rounded-lg hover:bg-green-50 transition-colors group/item"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover/item:bg-green-200 transition-colors">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 20l7-7-3-3 7-7M14 10l6 6M10 14l-6 6"
                          />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900 group-hover/item:text-green-600">
                          Light Demolitions
                        </p>
                      </div>
                    </Link>

                    <Link
                      href="/exterior-cleaning"
                      className="flex items-center p-3 rounded-lg hover:bg-green-50 transition-colors group/item"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover/item:bg-green-200 transition-colors">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3zm6 13l.75 2.25L21 18l-2.25.75L18 21l-.75-2.25L15 18l2.25-.75L18 16zm-12 0l.75 2.25L9 18l-2.25.75L6 21l-.75-2.25L3 18l2.25-.75L6 16z"
                          />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900 group-hover/item:text-green-600">
                          Exterior Cleaning
                        </p>
                      </div>
                    </Link>
                  </div>

                  <div className="mt-2 pt-4 border-t border-gray-100">
                    <Link
                      href="/contact"
                      className="block w-full text-center bg-green-500 hover:bg-green-300 text-white hover:text-black rounded-sm border-2 hover:border-green-700 font-medium py-2 px-4 transition-colors"
                    >
                      <p className={bebas.className + " text-[20px]"}>Get Free Quote</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-green-500">
              About Us
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-green-500">
              Contact Us
            </Link>
            <Link href="#blog" className="text-sm font-medium text-gray-700 hover:text-green-500">
              Blog
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
            className="bg-green-500 hover:bg-green-300 py-5 text-white hover:text-black rounded-sm border-2 hover:border-green-700">
            <p className={bebas.className + " text-[18px]"}>Call (214)-233-5545</p>
            </Button>
            <MobileMenu />
          </div>
        </div>
      </header>
  )
};