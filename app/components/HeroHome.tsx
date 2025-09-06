'use client'

import React from 'react'
import AnimatedStars from './AnimatedStars'
import dynamic from 'next/dynamic'

// Dynamically import the 3D scene to avoid SSR issues
const MoonScene = dynamic(() => import('./MoonScene'), { 
  ssr: false,
  loading: () => null
})
const LaptopScene = dynamic(() => import('./LaptopScene'), { 
  ssr: false,
  loading: () => null
})

export default function HeroHome() {

  return (
    <section 
      id="home" 
      className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-primary via-purple-800 to-primary px-4 sm:px-6 lg:px-8 overflow-hidden"
      role="banner"
      aria-label="Hero section - Grand Notion Motion Design School"
    >
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
        {/* SEO Optimized Subtitle */}
        <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium mb-2 sm:mb-3 md:mb-4 text-blue-200 drop-shadow-lg">
          <span className="font-semibold text-white">Motion</span> Design School
        </h2>

        {/* Huge Main Title with Primary Color Gradient */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] 2xl:text-[22rem] font-extrabold leading-[0.8] text-center tracking-tight drop-shadow-2xl mb-4 sm:mb-6 md:mb-8">
          <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            GRAND
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-500 via-purple-400 to-blue-500 bg-clip-text text-transparent">
            NOTION
          </span>
        </h1>

        {/* SEO Optimized Subtitle */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl text-blue-100 drop-shadow-lg leading-relaxed">
          Learn Motion Design and 3D Animation from zero to professional level. 
          <br className="hidden sm:block" /> 
          Master industry-standard tools and create stunning visual content.
        </p>

        {/* SEO Rich Content - Hidden but accessible to search engines */}
        <div className="sr-only">
          <h3>Professional Motion Design Training</h3>
          <p>Grand Notion offers comprehensive motion design courses covering After Effects, Cinema 4D, Blender, and more. Learn from industry professionals and build a portfolio that gets you hired.</p>
          <ul>
            <li>Motion Graphics Design</li>
            <li>3D Animation</li>
            <li>Visual Effects</li>
            <li>Character Animation</li>
            <li>Cinema 4D Training</li>
            <li>After Effects Mastery</li>
          </ul>
        </div>
      </div>

      {/* 3D Scene - Optimized responsive positioning and sizing */}
      <div 
        className="absolute bottom-0 left-0 w-full h-1/3 sm:w-3/4 sm:h-1/2 md:w-2/3 md:h-3/5 lg:w-1/2 lg:h-4/5 xl:w-[500px] xl:h-[700px] animate-slide-in-left"
        aria-label="3D Astronaut Animation"
      >
        <MoonScene />
      </div>

             <div 
         className="absolute top-0 right-0 w-full h-1/3 sm:w-3/4 sm:h-1/2 md:w-2/3 md:h-3/5 lg:w-1/2 lg:h-4/5 xl:w-[500px] xl:h-[700px] animate-slide-in-right"
         aria-label="3D Laptop Animation"
       >
         <LaptopScene />
       </div>

      {/* Optimized CSS for slide-in animation */}
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
        
        @keyframes slide-in-right {
          0% {
            transform: translateX(100%);
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
        
        .animate-slide-in-right {
          animation: slide-in-right 1.5s ease-out forwards;
        }
        
        @media (max-width: 640px) {
          .animate-slide-in-left {
            animation: slide-in-left 1s ease-out forwards;
          }
          .animate-slide-in-right {
            animation: slide-in-right 1s ease-out forwards;
          }
        }

        /* Responsive text scaling for huge text */
        @media (max-width: 640px) {
          .text-6xl { font-size: 3.5rem; }
        }
        
        @media (min-width: 641px) and (max-width: 768px) {
          .text-7xl { font-size: 4.5rem; }
        }
        
        @media (min-width: 769px) and (max-width: 1024px) {
          .text-8xl { font-size: 6rem; }
        }
        
        @media (min-width: 1025px) and (max-width: 1280px) {
          .text-9xl { font-size: 8rem; }
        }
        
        @media (min-width: 1281px) and (max-width: 1536px) {
          .text-\\[12rem\\] { font-size: 12rem; }
        }
        
        @media (min-width: 1537px) {
          .text-\\[30rem\\] { font-size: 30rem; }
        }
      `}</style>
    </section>
  )
}
