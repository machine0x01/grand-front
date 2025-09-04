'use client'

import React from 'react'
import AnimatedStars from './AnimatedStars'
import dynamic from 'next/dynamic'

// Dynamically import the 3D scene to avoid SSR issues
const MoonScene = dynamic(() => import('./MoonScene'), { 
  ssr: false,
  loading: () => null
})

export default function HeroHome() {

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-slate-950 to-black px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Stars Background */}
      <AnimatedStars 
        count={100}
        glowIntensity="medium"
        zIndex={0}
      />
      
      {/* Nebula-like background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-purple-600 rounded-full blur-3xl opacity-15 animate-pulse"></div>
        <div
          className="absolute top-3/4 right-1/4 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-blue-600 rounded-full blur-3xl opacity-15 animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-indigo-600 rounded-full blur-3xl opacity-10 animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium mb-2 sm:mb-3 md:mb-4 text-blue-200 drop-shadow-lg">
          <span className="font-semibold text-white">Motion</span> Design School
        </h2>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[10rem] font-extrabold leading-none text-center tracking-tight text-white drop-shadow-2xl mb-4 sm:mb-6 md:mb-8">
          <span className="bg-gradient-to-r from-blue-200 via-white to-purple-200 bg-clip-text text-transparent">
            GRAND
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-200 via-white to-blue-200 bg-clip-text text-transparent">
            NOTION
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl text-blue-100 drop-shadow-lg leading-relaxed">
          Learning and practicing from zero to pro <br className="hidden sm:block" /> Motion Design and CG
          area
        </p>
      </div>

      {/* 3D Scene - Responsive positioning and sizing */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 sm:w-3/4 sm:h-1/2 md:w-2/3 md:h-3/5 lg:w-1/2 lg:h-4/5 xl:w-[500px] xl:h-[700px] animate-slide-in-left">
        <MoonScene />
      </div>

      {/* Custom CSS for slide-in animation */}
      <style jsx>{`
        @keyframes slide-in-left {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 1.5s ease-out forwards;
        }
        
        @media (max-width: 640px) {
          .animate-slide-in-left {
            animation: slide-in-left 1s ease-out forwards;
          }
        }
      `}</style>
    </div>
  )
}
