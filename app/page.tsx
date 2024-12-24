'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white opacity-10"
            style={{
              width: Math.random() * 100 + 20,
              height: Math.random() * 100 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: Math.random() * 10 + 10,
            }}
          />
        ))}
      </div>
      <motion.div
        className="relative bg-white bg-opacity-20 backdrop-blur-lg rounded-3xl p-12 shadow-lg"
        style={{
          transformStyle: 'preserve-3d',
        }}
        animate={{
          rotateX: mousePosition.y / 50,
          rotateY: -mousePosition.x / 50,
        }}
      >
        <h1 className="text-8xl font-bold font-mono text-white text-center" style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>
          Hello
        </h1>
      </motion.div>
    </main>
  )
}

