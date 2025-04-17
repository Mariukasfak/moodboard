'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import truckImage from '../src/assets/raw-removebg-preview.png'

interface HeroSectionProps {
  onItemSubmit: (item: string) => void
}

export default function HeroSection({ onItemSubmit }: HeroSectionProps) {
  const [itemName, setItemName] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (itemName.trim() !== '') {
      setIsSubmitted(true)
      
      // Po pateikimo trumpas uždelsimas prieš perėjimą į kitą sekciją
      setTimeout(() => {
        onItemSubmit(itemName)
      }, 800)
    }
  }

  // Fokus į įvesties lauką po komponento užkrovimo
  useEffect(() => {
    setTimeout(() => {
      inputRef.current?.focus()
    }, 1500)
  }, [])

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Foninis paveikslas su overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90 z-10"></div>
        <div className="absolute inset-0 bg-[url('/src/assets/hero-bg-appliances.webp')] bg-cover bg-center opacity-40 z-0"></div>
      </div>

      {/* Dekoratyviniai elementai */}
      <motion.div 
        className="absolute top-20 right-20 w-20 h-20 rounded-full"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: [0.2, 0.5, 0.2], scale: 1 }}
        transition={{ 
          opacity: { repeat: Infinity, duration: 5 },
          scale: { duration: 1, delay: 1 }
        }}
        style={{ background: 'radial-gradient(circle, #00D9B2 0%, rgba(0,217,178,0) 70%)' }}
      />
      
      <motion.div 
        className="absolute bottom-40 left-20 w-16 h-16 rounded-full"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: [0.1, 0.3, 0.1], scale: 1 }}
        transition={{ 
          opacity: { repeat: Infinity, duration: 4 },
          scale: { duration: 1, delay: 1.3 }
        }}
        style={{ background: 'radial-gradient(circle, #FF9438 0%, rgba(255,148,56,0) 70%)' }}
      />

      {/* Pagrindinė turinio dalis */}
      <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Kairė pusė su antrašte, įvesties lauku ir mygtuku su foniniu bluru */}
        <div className="backdrop-blur-lg bg-black/60 p-8 rounded-xl w-full md:w-1/2 max-w-md">
          <motion.div
            className="w-full md:w-1/2 z-10 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold text-[#00D9B2] mb-4" 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Kas tavo kieme laukia kelionės?
            </motion.h1>
            
            <motion.p
              className="text-white/80 text-lg mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Tavo nenaudojami daiktai gali pradėti naują kelionę ir tapti kažkam reikalingi
            </motion.p>
            
            <form onSubmit={handleSubmit} className="space-y-5 max-w-md">
              <div className="w-full relative">
                <motion.div
                  className="absolute inset-0 rounded-md"
                  initial={{ boxShadow: "0 0 0 rgba(0, 217, 178, 0)" }}
                  animate={{ 
                    boxShadow: isHovered 
                      ? "0 0 15px rgba(0, 217, 178, 0.4)" 
                      : "0 0 0 rgba(0, 217, 178, 0)" 
                  }}
                  transition={{ duration: 0.3 }}
                />
                <input
                  ref={inputRef}
                  type="text"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  onFocus={() => setIsHovered(true)}
                  onBlur={() => setIsHovered(false)}
                  placeholder="rašyk daikto pavadinimą"
                  className="w-full bg-transparent border-2 border-[#1E1E1E] focus:border-[#00D9B2] rounded-md px-4 py-4 text-white placeholder-gray-500 focus:outline-none transition-all duration-300"
                  required
                />
              </div>
              
              <motion.button
                type="submit"
                className="w-full bg-[#FF9438] hover:bg-opacity-90 text-black text-lg uppercase font-bold py-4 px-6 rounded-md transition-all duration-300"
                whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(255, 148, 56, 0.4)" }}
                whileTap={{ scale: 0.98 }}
              >
                UŽSAKYTI
              </motion.button>
            </form>
          </motion.div>
        </div>
        
        {/* Dešinė pusė su sunkvežimio paveikslėliu */}
        <motion.div
          className="hidden md:block w-full md:w-1/2 relative"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <div className="relative w-full h-[400px] flex items-center justify-center">
            <Image
              src={truckImage}
              alt="Perdirbimo sunkvežimis"
              width={500}
              height={400}
              style={{ objectFit: 'contain' }}
              priority
              className="drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Dekoratyvinė banguojanti linija apačioje */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <svg width="100%" height="100" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <motion.path 
            d="M0,70 C300,30 600,110 900,70 C1200,30 1440,70 1440,70 L1440,100 L0,100 Z" 
            fill="#00D9B2" 
            opacity="0.2"
            animate={{
              d: [
                "M0,70 C300,30 600,110 900,70 C1200,30 1440,70 1440,70 L1440,100 L0,100 Z",
                "M0,70 C300,110 600,30 900,70 C1200,110 1440,70 1440,70 L1440,100 L0,100 Z",
                "M0,70 C300,30 600,110 900,70 C1200,30 1440,70 1440,70 L1440,100 L0,100 Z"
              ]
            }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "easeInOut"
            }}
          />
        </svg>
      </motion.div>
    </section>
  )
}