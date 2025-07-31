"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-black hover:bg-gray-100">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
          <nav className="flex flex-col p-4 space-y-4">
            <button
              onClick={() => handleNavClick("#about")}
              className="text-black font-heading font-semibold text-lg hover:text-gray-600 transition-colors py-2 text-left"
            >
              ABOUT
            </button>
            <button
              onClick={() => handleNavClick("#cta")}
              className="text-black font-heading font-semibold text-lg hover:text-gray-600 transition-colors py-2 text-left"
            >
              JOIN
            </button>
            <button
              onClick={() => handleNavClick("#contact")}
              className="text-black font-heading font-semibold text-lg hover:text-gray-600 transition-colors py-2 text-left"
            >
              CONTACT
            </button>
            <Button className="bg-black text-white px-8 py-2 rounded-full font-heading font-bold hover:bg-gray-800 mt-4">
              BUY NOW
            </Button>
          </nav>
        </div>
      )}
    </div>
  )
}
