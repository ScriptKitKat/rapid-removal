import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

// Assets
import logo from "@/assets/logo.webp"
import {Bebas_Neue} from "next/font/google"

const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] })

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto px-4 py-12">
            <div className="grid md:grid-cols-4 gap-8">
                <div>
                <Image src={logo.src} alt="Rapid Removal DFW Logo" width={150} height={50} className="mb-4" />
                <p className="text-gray-400 text-sm">© 2025 Rapid Removal. All rights reserved.</p>
                </div>

                <div>
                <h3 className="font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                    <li>
                    <Link href="/" className="text-gray-400 hover:text-green-500 text-sm">
                        Home
                    </Link>
                    </li>
                    <li>
                    <Link href="/about#services" className="text-gray-400 hover:text-green-500 text-sm">
                        Services
                    </Link>
                    </li>
                    <li>
                    <Link href="/about" className="text-gray-400 hover:text-green-500 text-sm">
                        About Us
                    </Link>
                    </li>
                    <li>
                    <Link href="/contact" className="text-gray-400 hover:text-green-500 text-sm">
                        Contact
                    </Link>
                    </li>
                    <li>
                    <Link href="/testimonial" className="text-gray-400 hover:text-green-500 text-sm">
                        Testimonials
                    </Link>
                    </li>
                </ul>
                </div>

                <div>
                <h3 className="font-bold mb-4">Follow Us</h3>
                <ul className="space-y-2">
                    <li>
                    <Link href="https://www.facebook.com/profile.php?id=100087879264156" className="text-gray-400 hover:text-green-500 text-sm">
                        Facebook
                    </Link>
                    </li>
                    <li>
                    <Link href="https://www.yelp.com/biz/rapid-removal-dfw-plano" className="text-gray-400 hover:text-green-500 text-sm">
                        Yelp
                    </Link>
                    </li>
                    <li>
                    <Link href="https://www.linkedin.com/company/rapid-removal-dfw/" className="text-gray-400 hover:text-green-500 text-sm">
                        LinkedIn
                    </Link>
                    </li>
                </ul>
                </div>

                <div>
                <h3 className="font-bold mb-4">Hours</h3>
                <ul className="space-y-2">
                    <li className="text-gray-400 text-sm font-bold">Monday - Saturday</li>
                    <li className="text-gray-400 text-sm">7:00 am - 7:00 pm</li>
                    <li className="text-gray-400 text-sm font-bold">Sunday</li>
                    <li className="text-gray-400 text-sm">Closed</li>
                </ul>
                </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
                <div className="flex space-x-4 mb-4 md:mb-0">
                <Link href="#" className="text-gray-400 hover:text-green-500 text-sm">
                    Privacy Policy
                </Link>
                <Link href="#" className="text-gray-400 hover:text-green-500 text-sm">
                    Terms of Service
                </Link>
                <Link href="#" className="text-gray-400 hover:text-green-500 text-sm">
                    Cookie Settings
                </Link>
                </div>
                <div className="flex space-x-2">
                <Link href="https://www.facebook.com/profile.php?id=100087879264156" className="text-gray-400 hover:text-green-500">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                    ></path>
                    </svg>
                </Link>
                <Link href="https://www.yelp.com/biz/rapid-removal-dfw-plano" className="text-gray-400 hover:text-green-500">
                    <span className="sr-only">Yelp</span>
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 15 24" aria-hidden="true">
                        <path 
                        d="m4.188 10.095.736-.17.073-.02A.813.813 0 0 0 5.45 8.65a1 1 0 0 0-.3-.258 3 3 0 0 0-.428-.198l-.808-.295a76 76 0 0 0-1.364-.493C2.253 7.3 2 7.208 1.783 7.14c-.041-.013-.087-.025-.124-.038a2.1 2.1 0 0 0-.606-.116.72.72 0 0 0-.572.245 2 2 0 0 0-.105.132 1.6 1.6 0 0 0-.155.309c-.15.443-.225.908-.22 1.376.002.423.013.966.246 1.334a.8.8 0 0 0 .22.24c.166.114.333.129.507.141.26.019.513-.045.764-.103l2.447-.566zm8.219-3.911a4.2 4.2 0 0 0-.8-1.14 1.6 1.6 0 0 0-.275-.21 2 2 0 0 0-.15-.073.72.72 0 0 0-.621.031c-.142.07-.294.182-.496.37-.028.028-.063.06-.094.089-.167.156-.353.35-.574.575q-.51.516-1.01 1.042l-.598.62a3 3 0 0 0-.298.365 1 1 0 0 0-.157.364.8.8 0 0 0 .007.301q0 .007.003.013a.81.81 0 0 0 .945.616l.074-.014 3.185-.736c.251-.058.506-.112.732-.242.151-.088.295-.175.394-.35a.8.8 0 0 0 .093-.313c.05-.434-.178-.927-.36-1.308M6.706 7.523c.23-.29.23-.722.25-1.075.07-1.181.143-2.362.201-3.543.022-.448.07-.89.044-1.34-.022-.372-.025-.799-.26-1.104C6.528-.077 5.644-.033 5.04.05q-.278.038-.553.104a8 8 0 0 0-.543.149c-.58.19-1.393.537-1.53 1.204-.078.377.106.763.249 1.107.173.417.41.792.625 1.185.57 1.036 1.15 2.066 1.728 3.097.172.308.36.697.695.857q.033.015.068.025c.15.057.313.068.469.032l.028-.007a.8.8 0 0 0 .377-.226zm-.276 3.161a.74.74 0 0 0-.923-.234 1 1 0 0 0-.145.09 2 2 0 0 0-.346.354c-.026.033-.05.077-.08.104l-.512.705q-.435.591-.861 1.193c-.185.26-.346.479-.472.673l-.072.11c-.152.235-.238.406-.282.559a.7.7 0 0 0-.03.314c.013.11.05.217.108.312q.046.07.1.138a1.6 1.6 0 0 0 .257.237 4.5 4.5 0 0 0 2.196.76 1.6 1.6 0 0 0 .349-.027 2 2 0 0 0 .163-.048.8.8 0 0 0 .278-.178.7.7 0 0 0 .17-.266c.059-.147.098-.335.123-.613l.012-.13c.02-.231.03-.502.045-.821q.037-.735.06-1.469l.033-.87a2.1 2.1 0 0 0-.055-.623 1 1 0 0 0-.117-.27Zm5.783 1.362a2.2 2.2 0 0 0-.498-.378l-.112-.067c-.199-.12-.438-.246-.719-.398q-.644-.353-1.295-.695l-.767-.407c-.04-.012-.08-.04-.118-.059a2 2 0 0 0-.466-.166 1 1 0 0 0-.17-.018.74.74 0 0 0-.725.616 1 1 0 0 0 .01.293c.038.204.13.406.224.583l.41.768q.341.65.696 1.294c.152.28.28.52.398.719q.036.057.068.112c.145.239.261.39.379.497a.73.73 0 0 0 .596.201 2 2 0 0 0 .168-.029 1.6 1.6 0 0 0 .325-.129 4 4 0 0 0 .855-.64c.306-.3.577-.63.788-1.006q.045-.08.076-.165a2 2 0 0 0 .051-.161q.019-.083.029-.168a.8.8 0 0 0-.038-.327.7.7 0 0 0-.165-.27">
                        </path>
                    
                    </svg>
                </Link>
                <Link href="https://www.linkedin.com/company/rapid-removal-dfw/" className="text-gray-400 hover:text-green-500">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm15.25 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/>
                    </svg>
                </Link>
                </div>
            </div>
            </div>

            <div className="bg-gray-900 py-4">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center mb-4 md:mb-0">
                <Phone className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-green-500 font-bold">CALL (214) 225-9545</span>
                </div>
                <Link href="/contact#quote">
                    <Button className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-sm">
                    <p className={bebas.className + " text-[20px]"}>GET A FREE QUOTE TODAY</p>
                    </Button>
                </Link>
            </div>
            </div>
        </footer>
    )
};