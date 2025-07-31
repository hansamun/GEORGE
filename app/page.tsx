import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"
import { ScrollAnimations } from "@/components/scroll-animations"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-blue-500">
      <ScrollAnimations />

      {/* Header */}
      <header className="relative flex items-center justify-between px-4 sm:px-6 py-4 max-w-7xl mx-auto bg-blue-500">
        <div className="flex items-center">
          <Image
            src="/george-mascot.png"
            alt="Based George's Mascot"
            width={50}
            height={50}
            className="sm:w-[60px] sm:h-[60px] hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#about"
            className="text-white font-heading font-semibold text-lg hover:text-blue-200 transition-colors"
          >
            ABOUT
          </a>
          <a
            href="#cta"
            className="text-white font-heading font-semibold text-lg hover:text-blue-200 transition-colors"
          >
            JOIN
          </a>
          <a
            href="#contact"
            className="text-white font-heading font-semibold text-lg hover:text-blue-200 transition-colors"
          >
            CONTACT
          </a>
        </nav>

        {/* Desktop Buy Button */}
        <Button className="hidden md:block bg-white text-blue-500 px-8 py-2 rounded-full font-heading font-bold hover:bg-blue-100 border-2 border-white">
          BUY NOW
        </Button>

        {/* Mobile Navigation */}
        <MobileNav />
      </header>

      {/* Hero Section */}
      <section className="text-center py-8 sm:py-12 px-4 sm:px-6">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-heading font-bold text-white mb-8 sm:mb-16 tracking-tight leading-tight fade-in-up">
          BASED GEORGE'S
        </h1>

        <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row justify-center items-center max-w-5xl mx-auto mb-8 sm:mb-16">
          {/* First Image */}
          <div className="transform hover:scale-105 transition-transform duration-300 w-full max-w-[280px] fade-in-left stagger-1">
            <Image
              src="/george-photo-1.png"
              alt="George the monkey"
              width={280}
              height={350}
              className="object-cover object-center rounded-lg w-full h-auto"
            />
          </div>

          {/* Second Image */}
          <div className="transform hover:scale-105 transition-transform duration-300 w-full max-w-[280px] fade-in-up stagger-2">
            <Image
              src="/george-photo-2.png"
              alt="George the monkey"
              width={280}
              height={350}
              className="object-cover object-center rounded-lg w-full h-auto"
            />
          </div>

          {/* Third Image */}
          <div className="transform hover:scale-105 transition-transform duration-300 w-full max-w-[280px] fade-in-right stagger-3">
            <Image
              src="/george-photo-3.png"
              alt="George the monkey"
              width={280}
              height={350}
              className="object-cover object-center rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-bold text-center mb-8 sm:mb-12 text-white fade-in-up">
          ABOUT
        </h2>

        <div className="space-y-6 sm:space-y-8 text-base sm:text-lg leading-relaxed text-center font-body">
          <p className="font-medium text-blue-100 fade-in-up stagger-1">
            Georgie Boy the monkey, who originally joined his family as an emotional support animal, quickly became
            beloved by millions of followers thanks to cheeky photos of him and his adorable demeanor, which his family
            often showed off on TikTok. He regularly received gifts from around the world, including everything from fan
            art and snacks to toys and stickers. He even opened his own fan mail on video, delighting viewers with his
            exuberant attitude and "monkey selfies."
          </p>

          <p className="font-medium text-blue-100 fade-in-up stagger-2">
            Sadly, on June 7th at 4PM, George passed away. "We have devastating news," the family wrote, "George went to
            the vet for a regular check up on his teeth. During, there were complications with the anaesthesia, starting
            a long fight for his life. Through the fight, George was sent thousands of thoughts and prayers with the
            hope that he would make it."
          </p>

          <p className="font-medium text-blue-100 fade-in-up stagger-3">
            The family continued, "On June 7th at 4pm Central Georgie Boy passed away. George was a light when things
            seemed dark. And he was a reminder of the love that exists in all of us. Though the fun-loving life of
            George has left, his spirit of hope and love lives on. We love you, George."
          </p>

          <p className="font-medium text-blue-100 fade-in-up stagger-4">
            Now, for the anniversary of George's passing, the family are planning a commemorative 'Based George's' token
            which will be coming to the Solana blockchain to raise awareness, and raise money for charity. The family
            also are in the process of relaunching their 17 million follower TikTok account with brand new content of
            George's family. So together, we can keep George's memory alive forever.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="bg-blue-600 py-12 sm:py-16 px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-4xl md:text-6xl font-heading font-bold text-white mb-8 sm:mb-12 tracking-tight leading-tight fade-in-up">
          READY TO JOIN THE MOVEMENT?
        </h2>

        <div className="flex flex-col gap-4 sm:gap-6 sm:flex-row justify-center items-center mb-8 sm:mb-12 max-w-4xl mx-auto">
          <Button className="bg-white text-blue-500 px-8 sm:px-12 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-heading font-bold hover:bg-blue-100 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto border-2 border-white fade-in-left stagger-1">
            JOIN (X)
          </Button>
          <Button className="bg-white text-blue-500 px-8 sm:px-12 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-heading font-bold hover:bg-blue-100 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto border-2 border-white fade-in-up stagger-2">
            JOIN (TELEGRAM)
          </Button>
          <Button className="bg-white text-blue-500 px-8 sm:px-12 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-heading font-bold hover:bg-blue-100 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto border-2 border-white fade-in-right stagger-3">
            BUY ON APE.STORE
          </Button>
        </div>

        <div className="bg-white rounded-lg p-4 sm:p-6 max-w-4xl mx-auto border-2 border-blue-300 fade-in-up stagger-4">
          <p className="text-blue-600 font-mono text-sm sm:text-lg md:text-xl font-body font-semibold break-all">
            CONTRACT ADDRESS: COMING SOON
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-blue-600 py-8 sm:py-12 px-4 sm:px-6">
        <div className="flex justify-center mb-4 sm:mb-6 fade-in-up">
          <Image
            src="/george-mascot.png"
            alt="Based George's Mascot"
            width={50}
            height={50}
            className="sm:w-[60px] sm:h-[60px] opacity-70"
          />
        </div>

        <div className="max-w-4xl mx-auto text-center fade-in-up stagger-1">
          <p className="text-white font-heading font-semibold text-base sm:text-lg mb-2">
            © 2025 Based George's. All rights reserved.
          </p>
          <p className="text-blue-200 font-body text-sm">In loving memory of Georgie Boy</p>
        </div>
      </footer>
    </div>
  )
}
