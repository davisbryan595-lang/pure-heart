"use client"

import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-secondary via-secondary to-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            {/* Logo with hover and shine animation */}
            <a href="#home" className="flex items-center space-x-2 relative group mb-6">
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

            <p className="text-white/80 leading-relaxed mb-6">
              Empowering athletes to reach their full potential through dedication, expert coaching, and a commitment to
              excellence.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/3xhalloffamer?utm_source=qr&igsh=MWN0N3VrZ3E0dzQ4dA=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/lola-jones-baker-88925a382?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-white/80 hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#team" className="text-white/80 hover:text-primary transition-colors">
                  Meet the Team
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-white/80">
              <li>
                <a href="mailto:Justoneminuteplease22@gmail.com" className="hover:text-primary transition-colors">
                  Justoneminuteplease22@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:3369807111" className="hover:text-primary transition-colors">
                  (336) 980-7111
                </a>
              </li>
              <li className="pt-2">
                <p className="font-semibold text-white">Service Areas:</p>
                <p>Carolinas & Virginia Area</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Pure Heart Athletics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
