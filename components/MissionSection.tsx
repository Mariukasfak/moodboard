'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function MissionSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  // Parallax efektai
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.1])
  
  // Tvarumo statistika (animuojami skaičiai)
  const sustainabilityStats = [
    { label: "CO₂ sumažėjimas", value: "45%", icon: "environment" },
    { label: "Sutaupoma medžiagų", value: "680t", icon: "recycling" },
    { label: "Pakartotinai panaudota", value: "92%", icon: "recycling" }
  ];
  
  return (
    <section 
      ref={ref}
      className="relative min-h-screen bg-[#1b1b1b] overflow-hidden flex items-center justify-center py-20"
    >
      {/* Connecting line from previous section */}
      <div className="connecting-line" />
    
      {/* Parallax fonas */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, scale }}
      >
        {/* Gamtos vaizdas fone */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ 
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/straipsnis3.webp')" 
          }}
        />
      </motion.div>
      
      {/* Turinys */}
      <motion.div 
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#00ffb2] mb-6">
            Tvarumas mūsų DNR
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Kiekvienas išvežtas daiktas = mažiau atliekų
          </p>
        </motion.div>
        
        {/* Tvarumo statistika */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {sustainabilityStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-effect p-6 backdrop-blur-sm"
            >
              <div className={`icon-${stat.icon} mx-auto mb-4`} />
              <motion.div 
                className="text-4xl font-bold text-[#00ffb2] mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.4 + index * 0.2,
                  type: "spring" 
                }}
                viewport={{ once: true }}
              >
                {stat.value}
              </motion.div>
              <p className="text-white/70">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: "🌱",
              title: "Mažiau atliekų",
              description: "Jūsų išmesti daiktai nepatenka į sąvartyną, o tampa naujos vertės šaltiniu."
            },
            {
              icon: "🔄",
              title: "Žiedinė ekonomika",
              description: "Prisidedame prie žiedinės ekonomikos principo, kur daiktai neišmetami, o perdirbami."
            },
            {
              icon: "🌍",
              title: "Mažesnis pėdsakas",
              description: "Kiekvienas perdirbtas daiktas sumažina anglies dvideginio emisiją ir taupome gamtos išteklius."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#1b1b1b]/70 backdrop-blur-sm p-6 rounded-xl border border-[#00ffb2]/30 hover:border-[#00ffb2] transition-all"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-[#00ffb2] mb-3">{item.title}</h3>
              <p className="text-white/70">{item.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Vizualinis prieš/po perdirbimo efektas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden mb-16"
        >
          <div className="transform-before-after w-full h-full">
            <div 
              className="before-img"
              style={{ 
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/images/straipsnis2.webp')" 
              }}
            />
            <div 
              className="after-img"
              style={{ 
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('/images/straipsnis4.webp')" 
              }}
            />
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <motion.div 
              className="bg-[#1b1b1b]/60 backdrop-blur-sm px-8 py-6 rounded-lg"
              whileInView={{ 
                boxShadow: [
                  "0 0 0 rgba(0, 255, 178, 0)",
                  "0 0 30px rgba(0, 255, 178, 0.3)",
                  "0 0 10px rgba(0, 255, 178, 0.2)"
                ]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Prisijunkite prie mūsų misijos
              </h3>
              <p className="text-[#00ffb2]">
                Kartu kurkime švaresnę aplinką ateities kartoms
              </p>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Perdirbimo proceo vizualizacija */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-[#00ffb2] mb-6">Perdirbimo ciklas</h3>
          
          <div className="relative p-2">
            {/* Apskritas ciklo diagramos fonas */}
            <svg className="w-full h-auto max-w-lg mx-auto" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="200" cy="200" r="150" stroke="#333" strokeWidth="2" strokeDasharray="5 5" />
              
              <motion.circle 
                cx="200" 
                cy="200" 
                r="150" 
                stroke="#00ffb2" 
                strokeWidth="3"
                strokeDasharray="942"
                strokeDashoffset="942"
                whileInView={{ strokeDashoffset: 0 }}
                transition={{ duration: 3, ease: "easeInOut" }}
                viewport={{ once: true }}
              />
              
              {/* Ciklo etapai */}
              {[
                { x: 200, y: 50, text: "Išvežimas", color: "#ff8c42" },
                { x: 320, y: 140, text: "Rūšiavimas", color: "#ffffff" },
                { x: 320, y: 260, text: "Perdirbimas", color: "#00ffb2" },
                { x: 200, y: 350, text: "Transformacija", color: "#00ffb2" },
                { x: 80, y: 260, text: "Naujas produktas", color: "#ffffff" },
                { x: 80, y: 140, text: "Pratęstas tarnavimas", color: "#ff8c42" }
              ].map((item, i) => (
                <g key={i}>
                  <motion.circle
                    cx={item.x}
                    cy={item.y}
                    r="10"
                    fill={item.color}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                  />
                  <motion.text
                    x={item.x}
                    y={item.y + 30}
                    textAnchor="middle"
                    fill="white"
                    fontSize="14"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.7 + i * 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {item.text}
                  </motion.text>
                </g>
              ))}
            </svg>
          </div>
        </motion.div>
        
        {/* Sekantis žingsnis rodyklė */}
        <motion.div 
          className="section-divider mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="section-arrow" />
        </motion.div>
      </motion.div>
    </section>
  )
}