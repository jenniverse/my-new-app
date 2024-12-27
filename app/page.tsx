'use client'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 flex items-center justify-center overflow-hidden">
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
      <div className="relative">
        <div className="hello-card bg-white font-mono bg-opacity-10 backdrop-blur-lg rounded-[40px] p-16 shadow-lg">
          <h1 className="text-8xl font-bold text-white text-center" style={{ textShadow: '0 0 10px rgba(255,255,255,0.3)' }}>
            Hello
          </h1>
        </div>
      </div>
    </main>
  )
}

