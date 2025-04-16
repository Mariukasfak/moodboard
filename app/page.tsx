'use client'

import React, { useState, useRef, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import JourneySection from '../components/JourneySection'
import MissionSection from '../components/MissionSection'
import ContactForm from '../components/ContactForm'
import Footer from '../src/components/Footer'

export default function Home() {
  const [selectedItem, setSelectedItem] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const journeySectionRef = useRef<HTMLDivElement>(null)
  const missionSectionRef = useRef<HTMLDivElement>(null)
  const contactSectionRef = useRef<HTMLDivElement>(null)

  // Pradinė užkrovimo animacija
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [])

  // Seka navigaciją
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2
      
      // Galima pridėti aktyvios sekcijos sekimą navigacijai
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleItemSubmit = (item: string) => {
    setSelectedItem(item)
    // Sklandesnis slinkimas į kelionės sekciją po įvedimo
    setTimeout(() => {
      journeySectionRef.current?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }, 800)
  }

  // Navigacijos funkcijos
  const scrollToJourney = () => {
    journeySectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  
  const scrollToMission = () => {
    missionSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  
  const scrollToContact = () => {
    contactSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Pradinė užkrovimo animacija */}
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="relative"
              animate={{
                scale: [0.9, 1.1, 0.9],
                rotate: [0, 10, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut"
              }}
            >
              <img src="/ikona_spalvotas.svg" alt="Logo" className="w-24 h-24" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Fiksuota navigacija */}
      <motion.div 
        className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-40 px-4 py-2 bg-black/80 backdrop-blur-md rounded-full flex space-x-6 shadow-lg border border-gray-800"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-[#00D9B2] p-2 rounded-full hover:bg-[#00D9B2]/20 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7m-14 0l2 2m0 0l7 7 7-7m-14 0h14" />
          </svg>
        </button>
        <button 
          onClick={scrollToJourney}
          className="text-[#FFB347] p-2 rounded-full hover:bg-[#FFB347]/20 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        </button>
        <button 
          onClick={scrollToMission}
          className="text-[#83C75D] p-2 rounded-full hover:bg-[#83C75D]/20 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
        <button 
          onClick={scrollToContact}
          className="text-[#4EA8DE] p-2 rounded-full hover:bg-[#4EA8DE]/20 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </button>
      </motion.div>
      
      <HeroSection onItemSubmit={handleItemSubmit} />
      
      <div ref={journeySectionRef}>
        <JourneySection item={selectedItem} />
      </div>
      
      <div ref={missionSectionRef}>
        <MissionSection />
      </div>
      
      <div ref={contactSectionRef}>
        <ContactForm selectedItem={selectedItem} />
      </div>
      
      <Footer />
    </main>
  )
}