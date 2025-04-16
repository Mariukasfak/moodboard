'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion'

interface JourneySectionProps {
  item?: string
}

export default function JourneySection({ item = 'daiktas' }: JourneySectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })
  const controls = useAnimation()
  const [currentStep, setCurrentStep] = useState(2) // Pradedama nuo perdirbimo etapo (3-ias iš 5)
  const [isPlaying, setIsPlaying] = useState(false) // Auto-navigacija išjungta pagal nutylėjimą
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  // Animuojamas kelionės žemėlapis
  const mapXPosition = useTransform(scrollYProgress, [0, 1], ['-10%', '5%'])
  const mapScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.05])
  const mapOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.8])
  
  // Kelionės etapai
  const journeySteps = [
    {
      title: "Paėmimas",
      description: `Mūsų specialistai atvyksta pasiimti jūsų ${item} tiesiai iš namų, todėl jums nereikia rūpintis transportavimu.`,
      icon: "📦",
      color: "#00D9B2",
      position: "10%"
    },
    {
      title: "Įvertinimas",
      description: `Mūsų ekspertai atidžiai įvertina ${item} būklę ir nustato jo vertę pagal rinkos standartus.`,
      icon: "🔍",
      color: "#FFB347",
      position: "30%"
    },
    {
      title: "Perdirbimas",
      description: `${item} keliauja į mūsų perdirbimo centrą, kur atsakingai išmontuojamas į atskiras medžiagas. Specialistai kruopščiai atskiria visus įvairius komponentus: metalą, plastiką, elektronines dalis ir stiklą.`,
      icon: "♻️",
      color: "#83C75D",
      position: "50%"
    },
    {
      title: "Naujas gyvenimas",
      description: `Jūsų ${item} medžiagos tampa naujų produktų dalimi, užbaigdamos tvarų žiedinės ekonomikos ciklą.`,
      icon: "🌱",
      color: "#9381FF",
      position: "70%"
    },
    {
      title: "Poveikis aplinkai",
      description: `Perdirbdami savo ${item}, jūs sumažinote anglies dvideginio išmetimą ir prisidėjote prie švaresnės planetos kūrimo.`,
      icon: "🌍",
      color: "#4EA8DE",
      position: "90%"
    }
  ]

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
      
      // Automatiškai keičiame kelionės etapus
      if (isPlaying) {
        const interval = setInterval(() => {
          setCurrentStep(prev => (prev + 1) % journeySteps.length)
        }, 6000) // Ilgesnė pauzė tarp etapų (6 sekundės vietoj 4)
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
      className="relative py-24 md:py-32 bg-gradient-to-b from-[#121212] to-[#1D2B3A] overflow-hidden"
    >
      {/* Animuotas fonas */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          className="absolute w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(0, 217, 178, 0.15) 0%, rgba(0, 0, 0, 0) 50%)`
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut"
          }}
        />
        
        {/* Animuotos linijos fone */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-r from-transparent via-[#00D9B2]/10 to-transparent h-px"
            style={{
              width: '100%',
              top: `${10 + i * 8}%`,
              left: 0,
              transformOrigin: i % 2 === 0 ? 'left' : 'right'
            }}
            animate={{
              x: i % 2 === 0 ? ['0%', '100%', '0%'] : ['0%', '-100%', '0%'],
              opacity: [0.1, 0.3, 0.1]
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
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {item === 'daiktas' ? 'Daiktų kelionė' : `${item} kelionė`}
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Sužinokite, kaip vyksta nereikalingų daiktų perdirbimo procesas ir kaip jie tampa žiedinės ekonomikos dalimi
          </motion.p>
          
          {/* Kelionės kontrolės */}
          <motion.div 
            className="flex justify-center items-center mt-6 space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
            >
              {isPlaying ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <rect x="6" y="5" width="4" height="14" rx="1" fill="currentColor" />
                  <rect x="14" y="5" width="4" height="14" rx="1" fill="currentColor" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" fill="currentColor" />
                </svg>
              )}
            </button>
            <div className="text-sm text-white/60">
              {isPlaying ? 'Auto-navigacija' : 'Navigacija pristabdyta'}
            </div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Kelionės vizualizacija */}
          <div className="order-2 md:order-1 relative">
            <motion.div 
              className="relative w-full h-[400px] bg-[#0A2342]/80 rounded-2xl p-6 overflow-hidden border border-[#1E3959] shadow-[0_0_30px_rgba(0,217,178,0.15)]"
              style={{
                x: mapXPosition,
                scale: mapScale,
                opacity: mapOpacity
              }}
            >
              {/* Žemėlapio fonas */}
              <motion.div 
                className="absolute inset-0 bg-[url('/images/map_output.webp')] bg-cover bg-center opacity-20"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.15, 0.25, 0.15]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 20,
                  ease: "easeInOut"
                }}
              />
              
              {/* SVG kelias su animacija */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                <defs>
                  <linearGradient id="journeyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00D9B2" />
                    <stop offset="25%" stopColor="#FFB347" />
                    <stop offset="50%" stopColor="#83C75D" />
                    <stop offset="75%" stopColor="#9381FF" />
                    <stop offset="100%" stopColor="#4EA8DE" />
                  </linearGradient>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>
                
                {/* Kelionės linija */}
                <motion.path
                  d="M 50,200 C 100,100 150,300 200,150 S 300,250 350,200"
                  fill="none"
                  stroke="url(#journeyGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  filter="url(#glow)"
                  variants={mapPathVariants}
                  initial="hidden"
                  animate={controls}
                />
                
                {/* Kelionės taškai */}
                {journeySteps.map((step, index) => {
                  const progress = index / (journeySteps.length - 1);
                  const x = 50 + 300 * progress;
                  const y = 200 + Math.sin(progress * Math.PI) * (index % 2 ? 50 : -50);
                  
                  return (
                    <g key={index}>
                      <motion.circle
                        cx={x}
                        cy={y}
                        r={index === currentStep ? 10 : 6}
                        fill={step.color}
                        stroke="#0A2342"
                        strokeWidth="2"
                        variants={nodeVariants}
                        initial="hidden"
                        animate={controls}
                        custom={index}
                        whileHover={{ scale: 1.2 }}
                        onClick={() => {
                          setCurrentStep(index);
                          setIsPlaying(false);
                        }}
                        style={{ cursor: 'pointer' }}
                      />
                      
                      {/* Pulsavimo efektas dabartiniam žingsniui */}
                      {index === currentStep && (
                        <motion.circle
                          cx={x}
                          cy={y}
                          r={10}
                          fill="transparent"
                          stroke={step.color}
                          strokeWidth="2"
                          animate={{
                            r: [10, 20, 10],
                            opacity: [0.8, 0, 0.8]
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 2,
                            ease: "easeInOut"
                          }}
                        />
                      )}
                      
                      {/* Žingsnis ir etiketas */}
                      <motion.g
                        initial={{ opacity: 0 }}
                        animate={index === currentStep ? { opacity: 1 } : { opacity: 0.3 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => {
                          setCurrentStep(index);
                          setIsPlaying(false);
                        }}
                        style={{ cursor: 'pointer' }}
                      >
                        {/* Ikona */}
                        <motion.text
                          x={x}
                          y={y}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fontSize="12"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                        >
                          {step.icon}
                        </motion.text>
                        
                        {/* Etiketas */}
                        <motion.text
                          x={x}
                          y={y + (index % 2 ? 25 : -25)}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fill="white"
                          fontSize="10"
                          fontWeight="bold"
                          style={{ fontFamily: 'sans-serif' }}
                          initial={{ opacity: 0 }}
                          animate={index === currentStep ? { opacity: 1 } : { opacity: 0.7 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                        >
                          {index + 1}. {step.title}
                        </motion.text>
                      </motion.g>
                    </g>
                  );
                })}
                
                {/* Animuojamas daikto indikatorius */}
                <motion.g
                  animate={{
                    x: [50, 125, 200, 275, 350],
                    y: [200, 150, 150, 200, 200]
                  }}
                  transition={{
                    duration: 20,
                    times: [0, 0.25, 0.5, 0.75, 1],
                    ease: "easeInOut",
                    repeat: Infinity
                  }}
                >
                  <motion.circle
                    r={8}
                    fill="#FFD700"
                    animate={{
                      scale: [1, 1.2, 1],
                      fillOpacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Švytėjimo efektas */}
                  <motion.circle
                    r={12}
                    fill="transparent"
                    stroke="#FFD700"
                    strokeWidth="2"
                    animate={{
                      r: [12, 20, 12],
                      opacity: [0.5, 0, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.g>
              </svg>
              
              {/* Legendos pavadinimai */}
              <motion.div 
                className="absolute bottom-4 left-4 text-xs text-white/60 flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <div className="w-3 h-3 rounded-full bg-[#FFD700] mr-2" />
                {item === 'daiktas' ? 'Jūsų daiktas' : item}
              </motion.div>
              
              <motion.div 
                className="absolute bottom-4 right-4 text-xs text-white/60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.7 }}
              >
                Realus laikas: 1-3 dienos
              </motion.div>
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
                className="bg-[#1A2F45]/80 rounded-2xl p-8 border border-[#1E3959] shadow-[0_0_20px_rgba(0,217,178,0.1)]"
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-6"
                  style={{ backgroundColor: `${journeySteps[currentStep].color}20` }}
                >
                  <motion.div
                    animate={{
                      scale: [0.9, 1.1, 0.9],
                      rotate: [0, 10, 0, -10, 0]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {journeySteps[currentStep].icon}
                  </motion.div>
                </div>
                
                <h3 
                  className="text-2xl md:text-3xl font-bold mb-4"
                  style={{ color: journeySteps[currentStep].color }}
                >
                  {journeySteps[currentStep].title}
                </h3>
                
                <p className="text-gray-300 mb-6 text-lg">
                  {journeySteps[currentStep].description}
                </p>
                
                {/* Progreso indikatorius */}
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full"
                    style={{ backgroundColor: journeySteps[currentStep].color }}
                    initial={{ width: "0%" }}
                    animate={{ width: `${(currentStep + 1) / journeySteps.length * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                
                {/* Navigacijos mygtukai */}
                <div className="flex justify-between mt-8">
                  <button 
                    onClick={() => {
                      setCurrentStep(prev => (prev === 0 ? journeySteps.length - 1 : prev - 1));
                      setIsPlaying(false);
                    }}
                    className="flex items-center text-white/70 hover:text-white transition-colors duration-300 bg-[#1E3959]/50 hover:bg-[#1E3959] px-3 py-2 rounded-lg"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Ankstesnis
                  </button>
                  
                  <div className="bg-[#1E3959]/50 px-3 py-2 rounded-lg text-white/80 text-sm font-medium">
                    {currentStep + 1} iš {journeySteps.length}
                  </div>
                  
                  <button 
                    onClick={() => {
                      setCurrentStep(prev => (prev === journeySteps.length - 1 ? 0 : prev + 1));
                      setIsPlaying(false);
                    }}
                    className="flex items-center text-white/70 hover:text-white transition-colors duration-300 bg-[#1E3959]/50 hover:bg-[#1E3959] px-3 py-2 rounded-lg"
                  >
                    Sekantis
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Papildoma informacija */}
            <motion.div 
              className="mt-6 bg-[#1A2F45]/60 rounded-xl p-4 border border-[#1E3959]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <div className="flex items-start">
                <div className="bg-[#00D9B2]/20 p-2 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00D9B2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-white/80">
                    Mūsų perdirbimo procesas atitinka aukščiausius Europos Sąjungos aplinkosaugos standartus. Visi daiktai perdirbami maksimaliai efektyviai, siekiant išsaugoti vertingus išteklius ir mažinti atliekų kiekius.
                  </p>
                </div>
              </div>
              {/* Žiedinės ekonomikos paaiškinimas */}
              <div className="flex items-start mt-4">
                <div className="bg-[#83C75D]/20 p-2 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#83C75D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-white/80">
                    Žiedinė ekonomika reiškia, kad produktai ir medžiagos nuolat cirkuliuoja uždarame cikle - nuo gamybos iki perdirbimo ir pakartotinio panaudojimo, užuot būnant išmesti po vienkartinio panaudojimo.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* CTA mygtukas */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <motion.a 
            href="/contact"
            className="inline-block px-8 py-4 bg-[#00D9B2] text-[#0A2342] font-bold rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 217, 178, 0.5)" }}
            whileTap={{ scale: 0.98 }}
          >
            Pradėkite savo daikto kelionę
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}