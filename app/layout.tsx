import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Transportuok - Interaktyvus transportavimo paslaugų puslapis',
  description: 'Daiktų išvežimas ir perdirbimas kaip vizualinis pasakojimas',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="lt">
      <body className={inter.className}>{children}</body>
    </html>
  )
}