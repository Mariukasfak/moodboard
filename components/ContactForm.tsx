'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ContactFormProps {
  selectedItem: string
}

export default function ContactForm({ selectedItem }: ContactFormProps) {
  const [formData, setFormData] = useState({
    item: selectedItem || '',
    address: '',
    name: '',
    phone: '',
    email: '',
    notes: ''
  })
  
  const [formStep, setFormStep] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsAnimating(true)
    
    // Simuliuojam "išvykimą"
    setTimeout(() => {
      setIsSubmitted(true)
      setIsAnimating(false)
    }, 2000)
  }
  
  const handleNextStep = () => {
    if (formStep < 2) {
      setFormStep(prev => prev + 1)
    }
  }
  
  const handlePrevStep = () => {
    if (formStep > 0) {
      setFormStep(prev => prev - 1)
    }
  }
  
  return (
    <section className="min-h-screen bg-[#1b1b1b] flex items-center justify-center p-4 md:p-8">
      <motion.div 
        className="w-full max-w-2xl mx-auto bg-[#222] rounded-xl overflow-hidden shadow-xl border border-[#333]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Terminal antraštė */}
        <div className="bg-[#333] p-3 flex items-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
          <div className="text-gray-300 text-sm ml-4 font-mono">
            transportuok@terminal ~ $ užsakymas --new
          </div>
        </div>
        
        {/* Terminalo turinys */}
        <div className="p-6 md:p-8">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-3xl font-bold text-[#00ffb2] mb-6 font-mono">
                  &gt; Užsakymo forma
                </h2>
                
                <form onSubmit={handleSubmit}>
                  <AnimatePresence mode="wait">
                    {formStep === 0 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-6"
                      >
                        <div>
                          <label htmlFor="item" className="block text-[#00ffb2] font-mono mb-2">Daiktas</label>
                          <input
                            type="text"
                            id="item"
                            name="item"
                            value={formData.item}
                            onChange={handleChange}
                            placeholder="Pvz., Šaldytuvas"
                            className="w-full bg-[#333] text-white border border-[#444] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00ffb2] font-mono"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="address" className="block text-[#00ffb2] font-mono mb-2">Adresas</label>
                          <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Paėmimo adresas"
                            className="w-full bg-[#333] text-white border border-[#444] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00ffb2] font-mono"
                            required
                          />
                        </div>
                        
                        <motion.button
                          type="button"
                          onClick={handleNextStep}
                          className="w-full mt-6 bg-[#00ffb2] text-[#1b1b1b] py-3 px-6 rounded-md font-bold font-mono hover:bg-opacity-90 transition-all"
                          whileHover={{ boxShadow: '0 0 15px rgba(0, 255, 178, 0.5)' }}
                        >
                          Toliau &gt;
                        </motion.button>
                      </motion.div>
                    )}
                    
                    {formStep === 1 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-6"
                      >
                        <div>
                          <label htmlFor="name" className="block text-[#00ffb2] font-mono mb-2">Vardas</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Jūsų vardas"
                            className="w-full bg-[#333] text-white border border-[#444] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00ffb2] font-mono"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-[#00ffb2] font-mono mb-2">Telefonas</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+370 ..."
                            className="w-full bg-[#333] text-white border border-[#444] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00ffb2] font-mono"
                            required
                          />
                        </div>
                        
                        <div className="flex space-x-4">
                          <motion.button
                            type="button"
                            onClick={handlePrevStep}
                            className="flex-1 mt-6 bg-[#333] text-white py-3 px-6 rounded-md font-bold font-mono border border-[#444] hover:bg-opacity-90 transition-all"
                            whileHover={{ boxShadow: '0 0 10px rgba(255, 255, 255, 0.2)' }}
                          >
                            &lt; Atgal
                          </motion.button>
                          
                          <motion.button
                            type="button"
                            onClick={handleNextStep}
                            className="flex-1 mt-6 bg-[#00ffb2] text-[#1b1b1b] py-3 px-6 rounded-md font-bold font-mono hover:bg-opacity-90 transition-all"
                            whileHover={{ boxShadow: '0 0 15px rgba(0, 255, 178, 0.5)' }}
                          >
                            Toliau &gt;
                          </motion.button>
                        </div>
                      </motion.div>
                    )}
                    
                    {formStep === 2 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-6"
                      >
                        <div>
                          <label htmlFor="email" className="block text-[#00ffb2] font-mono mb-2">El. paštas</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="jusu@email.lt"
                            className="w-full bg-[#333] text-white border border-[#444] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00ffb2] font-mono"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="notes" className="block text-[#00ffb2] font-mono mb-2">Pastabos</label>
                          <textarea
                            id="notes"
                            name="notes"
                            value={formData.notes}
                            onChange={handleChange}
                            placeholder="Papildoma informacija..."
                            rows={3}
                            className="w-full bg-[#333] text-white border border-[#444] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00ffb2] font-mono"
                          />
                        </div>
                        
                        <div className="flex space-x-4">
                          <motion.button
                            type="button"
                            onClick={handlePrevStep}
                            className="flex-1 mt-6 bg-[#333] text-white py-3 px-6 rounded-md font-bold font-mono border border-[#444] hover:bg-opacity-90 transition-all"
                            whileHover={{ boxShadow: '0 0 10px rgba(255, 255, 255, 0.2)' }}
                          >
                            &lt; Atgal
                          </motion.button>
                          
                          <motion.button
                            type="submit"
                            className={`flex-1 mt-6 bg-[#ff8c42] text-white py-3 px-6 rounded-md font-bold font-mono hover:bg-opacity-90 transition-all ${isAnimating ? 'animate-pulse' : ''}`}
                            whileHover={{ boxShadow: '0 0 15px rgba(255, 140, 66, 0.5)' }}
                            disabled={isAnimating}
                          >
                            {isAnimating ? 'Siunčiama...' : 'Užsakyti'}
                          </motion.button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {/* Progreso indikatorius */}
                  <div className="mt-8 flex justify-between items-center">
                    <div className="w-full bg-[#333] h-2 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-[#00ffb2]"
                        initial={{ width: `${formStep * 50}%` }}
                        animate={{ width: `${(formStep + 1) * 33.33}%` }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                    <div className="ml-4 text-white font-mono">
                      {formStep + 1}/3
                    </div>
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="w-24 h-24 mx-auto mb-6 bg-[#00ffb2] rounded-full flex items-center justify-center"
                >
                  <svg className="w-12 h-12 text-[#1b1b1b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                
                <motion.h2
                  className="text-3xl font-bold text-[#00ffb2] mb-4 font-mono"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  Užsakymas priimtas!
                </motion.h2>
                
                <motion.p
                  className="text-white mb-8 font-mono"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  Mūsų furgonas jau pakeliui į {formData.address}!
                </motion.p>
                
                <motion.div
                  className="w-full h-16 relative mb-8 overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <div className="w-full h-3 bg-[#333] rounded-full overflow-hidden" />
                  <motion.div
                    className="absolute left-0 top-6 w-12 h-6 bg-[#ff8c42] rounded"
                    initial={{ left: '-10%' }}
                    animate={{ left: '100%' }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "linear"
                    }}
                  >
                    <div className="absolute top-0 right-0 w-3 h-2 bg-[#ff8c42]" />
                    <div className="absolute bottom-0 w-full h-1.5 flex justify-around px-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1b1b1b]" />
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1b1b1b]" />
                    </div>
                  </motion.div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  <p className="text-sm text-gray-400 font-mono mb-6">
                    Jūs gausite patvirtinimo SMS ({formData.phone})
                  </p>
                  
                  <motion.button
                    onClick={() => window.location.reload()}
                    className="inline-block bg-[#333] text-white py-2 px-6 rounded-md font-mono hover:bg-[#444] transition-all"
                    whileHover={{ x: 5 }}
                  >
                    &gt; Grįžti į pradžią
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  )
}