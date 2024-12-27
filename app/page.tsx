'use client'

import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { Toaster, toast } from 'sonner'

export default function Home() {
  useEffect(() => {
    const timer = setTimeout(() => {
      toast('Hey there, welcome!', {
        duration: 5000,
        style: {
          background: 'rgba(255, 255, 255, 0.1)',
          color: 'white',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '20px',
          padding: '12px 20px',
          maxWidth: 'none',
          width: 'auto',
          textAlign: 'center',
          margin: '0 auto',
        },
      })
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 flex items-center justify-center overflow-hidden">
      <Toaster 
        position="top-center"
        toastOptions={{
          style: {
            background: 'transparent',
            boxShadow: 'none',
          },
        }}
      />
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
        <div className="hello-card bg-white bg-opacity-10 backdrop-blur-lg rounded-[40px] p-16 shadow-lg">
          <h1 className="text-8xl font-bold text-white text-center" style={{ textShadow: '0 0 10px rgba(255,255,255,0.3)' }}>
            Hello
          </h1>
        </div>
      </div>
    </main>
  )
}

