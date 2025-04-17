'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import journeyData from '../src/data/journeyData'
import RecyclePath from '../src/components/RecyclePath'
import { ItemIcon, RecycleIcon, TransformationEffect } from '../src/components/RecycleIcons'

interface JourneySectionProps {
  item?: string
}

export default function JourneySection({ item = 'daiktas' }: JourneySectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })
  const controls = useAnimation()
  const [currentStep, setCurrentStep] = useState(0) // Pradedama nuo pirmo žingsnio
  const [isPlaying, setIsPlaying] = useState(true) // Auto-navigacija įjungta pagal nutylėjimą
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  // Animuojamas kelionės žemėlapis
  const mapXPosition = useTransform(scrollYProgress, [0, 1], ['-10%', '5%'])
  const mapScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.05])
  const mapOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.8])
  
  // Gauname kelionės etapus pagal daikto tipą ir konvertuojame į masyvą
  const currentJourneyItem = journeyData[item] || journeyData['daiktas'];
  const stagesArray = Object.keys(currentJourneyItem.stages)
    .sort((a, b) => Number(a) - Number(b))
    .map(key => currentJourneyItem.stages[Number(key)]);
  const journeySteps = stagesArray;

  // Nustatome spalvą pagal daikto tipą
  const itemColorMap: Record<string, string> = {
    'buitinė technika': '#36A281',
    'elektronika': '#9381FF',
    'baldai': '#3B995B',
    'metalo laužas': '#4EA8DE',
    'daiktas': '#62BB46'
  };
  const itemColor = itemColorMap[item] || '#62BB46';

  // Efektas automatiniam etapų keitimui
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
      
      // Automatiškai keičiame kelionės etapus
      if (isPlaying) {
        const interval = setInterval(() => {
          setCurrentStep(prev => (prev + 1) % journeySteps.length)
        }, 5000) // 5 sekundės tarp etapų
        return () => clearInterval(interval)
      }
    } else {
      controls.start("hidden")
    }
  }, [isInView, controls, isPlaying, journeySteps.length])

  const lineVariants = {
    hidden: { width: "0%" },
    visible: { 
      width: "100%",
      transition: { 
        duration: 1.5,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  }

  const nodeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 10 }
    }
  }
  
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 10,
        delay: 0.3
      }
    }
  }
  
  const mapPathVariants = {
    hidden: { pathLength: 0 },
    visible: { 
      pathLength: 1,
      transition: { 
        duration: 2,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-gradient-to-b from-[#0D2D19] to-[#031011] overflow-hidden"
    >
      {/* Animuoti lapai fone - sumažintas elementų kiekis */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: `${15 + Math.random() * 20}px`,
              height: `${15 + Math.random() * 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: `${itemColor}30`,
              borderRadius: '50% 0 50% 50%', // Lapų forma
              opacity: 0.4,
            }}
            animate={{
              y: [0, 100, 200],
              x: [0, Math.random() * 50 - 25, Math.random() * 100 - 50],
              rotate: [0, 360],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              repeat: Infinity,
              duration: 15 + Math.random() * 20,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        ))}
        
        {/* Animuotos linijos fone - sumažintas elementų kiekis */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px"
            style={{
              width: '100%',
              top: `${10 + i * 15}%`,
              left: 0,
              backgroundImage: `linear-gradient(90deg, transparent, ${itemColor}20, transparent)`,
              transformOrigin: i % 2 === 0 ? 'left' : 'right'
            }}
            animate={{
              x: i % 2 === 0 ? ['0%', '100%', '0%'] : ['0%', '-100%', '0%'],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              repeat: Infinity,
              duration: 15 + i * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div 
            className="inline-block mb-4 bg-[#167d36] p-1 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-[#031011] rounded-full p-3">
              <motion.div
                animate={{
                  rotate: [0, 10, 0, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-4xl"
              >
                <ItemIcon itemType={item} size={40} />
              </motion.div>
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-white">
              Žiedinė kelionė: <span className="text-[#62BB46]">antras {item} gyvenimas</span>
            </span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Jūsų nebereikalingas {item} niekada nesibaigia – jis transformuojasi į naujus išteklius planetai.
          </motion.p>
          
          {/* Kelionės kontrolės - supaprastintos */}
          <motion.div 
            className="flex justify-center items-center mt-4 space-x-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#167d36]/20 hover:bg-[#167d36]/40 transition-all duration-300 border border-[#167d36]/40"
            >
              {isPlaying ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#62BB46]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <rect x="6" y="5" width="4" height="14" rx="1" fill="currentColor" />
                  <rect x="14" y="5" width="4" height="14" rx="1" fill="currentColor" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#62BB46]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" fill="currentColor" />
                </svg>
              )}
            </button>
            <div className="text-xs text-[#62BB46] font-medium">
              {isPlaying ? 'Automatinis režimas' : 'Rankinis režimas'}
            </div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Kelionės vizualizacija */}
          <div className="order-2 md:order-1 relative">
            <motion.div 
              className="relative w-full h-[420px] bg-[#031011]/90 rounded-xl p-5 overflow-hidden border border-[#167d36]/30 shadow-[0_0_20px_rgba(22,125,54,0.15)]"
              style={{
                x: mapXPosition,
                scale: mapScale,
                opacity: mapOpacity
              }}
            >
              {/* SVG kelias su perdirbimo kelione */}
              <RecyclePath itemType={item} currentStage={currentStep + 1} />
              
              {/* Aktyvaus etapo rodiklis */}
              <motion.div
                className="absolute top-3 left-0 right-0 text-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.5 }}
                    className="bg-[#031011]/80 inline-block px-4 py-2 rounded-lg border-b-2"
                    style={{ borderColor: itemColor }}
                  >
                    <span className="text-white text-sm font-medium">
                      {journeySteps[currentStep].title}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
              
              {/* Vizualinis palyginimas */}
              <div className="absolute bottom-3 left-0 w-full flex justify-center">
                <div className="flex items-center space-x-6 bg-[#031011]/70 px-4 py-2 rounded-lg">
                  <div className="flex flex-col items-center">
                    <div className="text-[10px] uppercase tracking-wider text-white/60">Prieš</div>
                    <div className="mt-1 text-xl grayscale opacity-80">
                      <ItemIcon itemType={item} />
                    </div>
                  </div>
                  <div className="text-[#167d36] flex flex-col items-center">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                    <div className="text-[10px] uppercase tracking-wider text-white/60">Procesas</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-[10px] uppercase tracking-wider text-white/60">Po</div>
                    <motion.div 
                      className="mt-1 text-xl"
                      animate={{
                        scale: [1, 1.1, 1],
                        filter: ["brightness(1)", "brightness(1.3)", "brightness(1)"]
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 3
                      }}
                    >
                      <RecycleIcon stage={currentStep + 1} itemType={item} size={28} />
                    </motion.div>
                  </div>
                </div>
              </div>
              {/* Interaktyvūs etapų indikatoriai */}
              <div className="flex justify-center mt-4 space-x-2">
                {journeySteps.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => { setCurrentStep(idx); setIsPlaying(false); }}
                    className={`w-3 h-3 rounded-full transition-all ${currentStep === idx ? itemColor : 'bg-white/50'}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Kelionės informacija */}
          <div className="order-1 md:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 100, 
                  damping: 10
                }}
                className="bg-[#031011]/90 rounded-xl p-6 md:p-7 border border-[#167d36]/40 shadow-[0_0_15px_rgba(22,125,54,0.1)]"
              >
                <div className="flex items-center mb-5">
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center text-2xl"
                    style={{ 
                      backgroundColor: `${itemColor}20`,
                      boxShadow: `0 0 15px ${itemColor}30` 
                    }}
                  >
                    {journeySteps[currentStep].icon}
                  </div>
                  <div className="ml-4">
                    <h3 
                      className="text-2xl font-bold"
                      style={{ color: itemColor }}
                    >
                      {journeySteps[currentStep].title}
                    </h3>
                    <p className="text-white/60 text-sm">
                      {`Etapas ${currentStep + 1} iš ${journeySteps.length}`}
                    </p>
                  </div>
                </div>
                
                {/* Aprašymas */}
                <div className="bg-[#031011] rounded-lg p-4 border border-[#167d36]/20 mb-5">
                  <p className="text-gray-300 leading-relaxed">
                    {journeySteps[currentStep].description}
                  </p>
                </div>
                
                {/* Rodikliai sekcija pašalinta */}
                
                {/* Progreso indikatorius */}
                <div className="w-full h-1 bg-[#031011] rounded-full overflow-hidden mb-5">
                  <motion.div 
                    className="h-full"
                    style={{ 
                      backgroundColor: itemColor 
                    }}
                    initial={{ width: "0%" }}
                    animate={{ width: `${(currentStep + 1) / journeySteps.length * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                
                {/* Navigacijos mygtukai */}
                <div className="flex justify-between">
                  <motion.button 
                    onClick={() => {
                      setCurrentStep(prev => (prev === 0 ? journeySteps.length - 1 : prev - 1));
                      setIsPlaying(false);
                    }}
                    className="flex items-center text-white/80 hover:text-white transition-colors duration-300 bg-[#031011] hover:bg-[#0A2515] px-3 py-2 rounded-lg text-sm"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Ankstesnis
                  </motion.button>
                  
                  <motion.button 
                    onClick={() => {
                      setCurrentStep(prev => (prev === journeySteps.length - 1 ? 0 : prev + 1));
                      setIsPlaying(false);
                    }}
                    className="flex items-center text-white/80 hover:text-white transition-colors duration-300 bg-[#031011] hover:bg-[#0A2515] px-3 py-2 rounded-lg text-sm"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Sekantis
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Faktai - integracija į žiedinę ekonomiką */}
            <motion.div 
              className="mt-4 bg-[#167d36]/10 rounded-lg p-4 border border-[#167d36]/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <h4 className="text-white font-medium mb-2 flex items-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#167d36" strokeWidth="2"/>
                  <path d="M12 17V17.01" stroke="#167d36" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 14V8" stroke="#167d36" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Ar žinojote?
              </h4>
              {item === 'buitinė technika' && (
                <p className="text-white/70 text-sm">
                  Perdirbant vieną buitinės technikos prietaisą sutaupoma energija, kurios užtektų 
                  {currentStep === 4 ? ' išjungti 20 LED lempučių ištisus metus.' : ' apšviesti butą ištisą mėnesį.'}
                </p>
              )}
              {item === 'elektronika' && (
                <p className="text-white/70 text-sm">
                  Vieno kompiuterio perdirbimas sutaupo pakankamai energijos, kad
                  {currentStep === 4 ? ' galėtumėte krauti savo telefoną 4000 kartų.' : ' sumažintumėte CO₂ kiekį, lygų 9 kg anglies.'}
                </p>
              )}
              {item === 'baldai' && (
                <p className="text-white/70 text-sm">
                  Perdirbant medinius baldus išsaugote medžius -
                  {currentStep === 4 ? ' viena tona perdirbtos medienos išsaugo 17 medžių.' : ' vienas perdirbtas stalas gali išsaugoti iki 5 medžių.'}
                </p>
              )}
              {item === 'metalo laužas' && (
                <p className="text-white/70 text-sm">
                  Metalą galima perdirbti begalę kartų -
                  {currentStep === 4 ? ' įdomu, bet jūs galbūt jau naudojate daiktus, kurie buvo perdirbti daugiau nei 10 kartų.' : ' perdirbant metalą sutaupoma iki 95% energijos, lyginant su gavyba.'}
                </p>
              )}
              {item === 'daiktas' && (
                <p className="text-white/70 text-sm">
                  Tinkamai perdirbant atliekas galime
                  {currentStep === 4 ? ' sumažinti šiltnamio efektą sukeliančių dujų kiekį iki 30%.' : ' sumažinti atliekų sąvartynuose kiekį iki 80%.'}
                </p>
              )}
            </motion.div>
          </div>
        </div>
        
        {/* CTA mygtukas */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <motion.a 
            href="/kontaktai#contact-form"
            className="inline-flex items-center px-6 py-3 bg-[#167d36] text-white font-semibold rounded-lg hover:bg-[#136B2E] transition-colors focus:outline-none focus:ring-2 focus:ring-[#167d36]/50"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="mr-2">♻️</span>
            Pradėkite tvarų perdirbimą
          </motion.a>
          <p className="mt-3 text-white/60 text-xs">
            Nemokamas paėmimas Kaune ir apylinkėse
          </p>
        </motion.div>
      </div>
    </section>
  )
}