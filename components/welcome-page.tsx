import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

const backgroundImages = [
  
  '/images/welcome page2.jpeg',
  '/images/welcome5.jpeg',
  '/images/welcome4.jpeg',
  '/images/welcome page3.jpeg',
]

export function WelcomePage({ onExplore }: { onExplore: () => void }) {
  const [currentBg, setCurrentBg] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {backgroundImages.map((bg, index) => (
        <Image
          key={bg}
          src={bg}
          alt={`Welcome to SSVGI ${index + 1}`}
          layout="fill"
          objectFit="cover"
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentBg ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/70 via-orange-500/70 to-red-500/70" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-center text-white"
      >
        <h1 className="text-6xl font-bold mb-4 shadow-text">"SSVGI Clubtopia" Welcomes you </h1>
        <p className="text-2xl mb-8 shadow-text">Empowering Minds, Shaping Futures</p>
        <Button
          onClick={onExplore}
          size="lg"
          className="bg-white text-amber-600 hover:bg-amber-100 hover:text-amber-700 text-xl px-8 py-4"
        >
          Let's Explore
        </Button>
      </motion.div>
    </div>
  )
}

