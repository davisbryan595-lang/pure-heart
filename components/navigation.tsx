"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import DonateModal from "@/components/DonateModal" // ✅ import the popup modal

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Meet the Team", href: "#team" },
  { name: "Contact Us", href: "#contact" },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-[#283971]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 relative group">
            <div className="relative">
              <Image
                src="/plogo.png"
                alt="Pure Heart Athletics"
                width={350}
                height={200}
                className="h-28 w-auto transition-transform duration-500 group-hover:scale-105"
              />
              {/* Glossy Shine Overlay */}
              <div className="absolute inset-0 rounded-md overflow-hidden pointer-events-none">
                <div className="absolute inset-0 -skew-x-12 translate-x-[-150%] bg-gradient-to-r from-white/40 to-transparent animate-shine"></div>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white px-4 py-2 rounded-md transition-all duration-300 font-medium hover:bg-white hover:text-[#283971] hover:shadow-md"
              >
                {link.name}
              </a>
            ))}
            {/* ✅ Donate Button Modal */}
            <div className="ml-4">
              <DonateModal />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-[#283971]/95 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-3 px-4 text-white hover:bg-white hover:text-[#283971] rounded-md transition-all duration-300 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}

            {/* ✅ Donate Modal for mobile */}
            <div className="px-4 mt-3">
              <DonateModal />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
