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
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-white hover:bg-blue-400">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-blue-600 border-t border-blue-400 shadow-lg z-50">
          <nav className="flex flex-col p-4 space-y-4">
            <button
              onClick={() => handleNavClick("#about")}
              className="text-white font-heading font-semibold text-lg hover:text-blue-200 transition-colors py-2 text-left"
            >
              ABOUT
            </button>
            <button
              onClick={() => handleNavClick("#cta")}
              className="text-white font-heading font-semibold text-lg hover:text-blue-200 transition-colors py-2 text-left"
            >
              JOIN
            </button>
            <button
              onClick={() => handleNavClick("#contact")}
              className="text-white font-heading font-semibold text-lg hover:text-blue-200 transition-colors py-2 text-left"
            >
              CONTACT
            </button>
            <Button className="bg-white text-blue-500 px-8 py-2 rounded-full font-heading font-bold hover:bg-blue-100 mt-4 border-2 border-white">
              BUY NOW
            </Button>
          </nav>
        </div>
      )}
    </div>
  )
}
