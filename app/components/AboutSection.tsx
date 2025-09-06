"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Target,
  Eye,
  BookOpen,
  Users,
  Award,
  Zap,
  Sparkles,
  Play,
  Star,
  CheckCircle,
  Globe,
  Heart,
  Shield,
  Lightbulb
} from "lucide-react";
import AnimatedStars from "./AnimatedStars";

export default function AboutSection() {
  const [activeSection, setActiveSection] = useState<string>("mission");

  const companyData = {
    mission: {
      title: "Our Mission",
      subtitle: "Empowering Creative Minds",
      description: "We&apos;re on a mission to democratize creative education, making world-class design and animation skills accessible to everyone, everywhere.",
      icon: Target,
      color: "from-blue-500 to-purple-600",
      bgColor: "from-blue-500/10 to-purple-600/10",
      borderColor: "border-blue-500/30"
    },
    vision: {
      title: "Our Vision",
      subtitle: "Future of Creative Learning",
      description: "To become the global leader in creative education, building a world where anyone with passion can master the art of digital creation.",
      icon: Eye,
      color: "from-purple-500 to-pink-600",
      bgColor: "from-purple-500/10 to-purple-600/10",
      borderColor: "border-purple-500/30"
    },
    story: {
      title: "Our Story",
      subtitle: "From Passion to Purpose",
      description: "Born from a love of creativity and technology, we&apos;ve evolved from a small design studio to a comprehensive creative education platform.",
      icon: BookOpen,
      color: "from-pink-500 to-red-600",
      bgColor: "from-pink-500/10 to-red-600/10",
      borderColor: "border-pink-500/30"
    }
  };

  const stats = [
    { number: "50K+", label: "Students Worldwide", icon: Users },
    { number: "200+", label: "Course Modules", icon: BookOpen },
    { number: "95%", label: "Success Rate", icon: Award },
    { number: "24/7", label: "Support Available", icon: Shield }
  ];

  const values = [
    { title: "Innovation", description: "Pushing creative boundaries", icon: Lightbulb, color: "from-yellow-400 to-orange-500" },
    { title: "Excellence", description: "Quality in everything we do", icon: Star, color: "from-blue-400 to-cyan-500" },
    { title: "Community", description: "Building creative networks", icon: Heart, color: "from-pink-400 to-rose-500" },
    { title: "Accessibility", description: "Education for everyone", icon: Globe, color: "from-green-400 to-emerald-500" }
  ];

  return (
    <section id="about" className="relative min-h-screen py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-black via-slate-950 to-black">
      {/* Animated Background Elements - Matching Hero */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-purple-600/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-blue-600/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-indigo-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Space Stars - Matching Hero */}
      <AnimatedStars 
        count={50}
        glowIntensity="low"
        animationSpeed="slow"
        zIndex={0}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full backdrop-blur-sm mb-6 sm:mb-8 text-xs sm:text-sm">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
            <span className="text-blue-200 font-medium">Creative Education Platform</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            We&apos;re Building the
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Future of Learning
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-purple-200 max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4">
            Empowering creators worldwide with cutting-edge design, animation, and creative skills.
            Join thousands of students who&apos;ve transformed their passion into profession.
          </p>
        </div>

        {/* Interactive Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center mb-16 sm:mb-20 lg:mb-24">
          {/* Content Section */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-4 sm:space-y-6"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br ${companyData[activeSection as keyof typeof companyData].color} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg`}>
                    {(() => {
                      const IconComponent = companyData[activeSection as keyof typeof companyData].icon;
                      return <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                      {companyData[activeSection as keyof typeof companyData].title}
                    </h3>
                    <p className="text-sm sm:text-base text-purple-300 font-medium">
                      {companyData[activeSection as keyof typeof companyData].subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base md:text-lg text-purple-200 leading-relaxed">
                  {companyData[activeSection as keyof typeof companyData].description}
                </p>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Interactive Visual Section */}
          <div className="relative order-1 lg:order-2">
            {/* Main Visual Container - Galaxy Background */}
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 rounded-2xl sm:rounded-3xl border border-slate-700/50 backdrop-blur-sm overflow-hidden">
              {/* Galaxy Background with Stars */}
              <div className="absolute inset-0">
                {/* Deep space gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>

                {/* Nebula clouds */}
                <div className="absolute top-0 left-0 w-full h-full opacity-30">
                  <div className="absolute top-10 left-10 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-20 right-20 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-80 lg:h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
                  <div className="absolute top-1/2 left-1/2 w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 lg:w-72 lg:h-72 bg-pink-500/20 rounded-full blur-3xl"></div>
                </div>

                {/* Scattered stars */}
                {[...Array(30)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white rounded-full"
                    style={{
                      left: `${(i * 5) % 100}%`,
                      top: `${(i * 7) % 100}%`,
                    }}
                    animate={{
                      opacity: [0.2, 1, 0.2],
                      scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2 + (i % 3),
                      repeat: Infinity,
                      delay: (i % 2) * 2,
                    }}
                  />
                ))}

                {/* Shooting stars */}
                {[...Array(2)].map((_, i) => (
                  <motion.div
                    key={`shooting-${i}`}
                    className="absolute w-0.5 h-8 sm:h-12 md:h-16 bg-gradient-to-r from-white via-blue-200 to-transparent rounded-full"
                    style={{
                      left: `${20 + i * 30}%`,
                      top: `${10 + i * 20}%`,
                    }}
                    animate={{
                      x: [0, 100],
                      y: [0, 100],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      delay: i * 2,
                    }}
                  />
                ))}
              </div>

              {/* Central Sun */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                  scale: { duration: 4, repeat: Infinity }
                }}
                className="absolute top-1/2 left-1/2 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-2xl shadow-orange-500/50 flex items-center justify-center"
              >
                {/* Sun glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/50 to-orange-500/50 rounded-full blur-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full"></div>
                <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
                </div>
              </motion.div>

              {/* Clean Wave-like Orbit Paths */}
              <svg className="absolute top-1/2 left-1/2 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] -translate-x-1/2 -translate-y-1/2" viewBox="0 0 400 400">
                {/* Mercury's clean wave orbit */}
                <path
                  d="M 200 200 m -80 0 a 80 80 0 1 1 160 0 a 80 80 0 1 1 -160 0"
                  fill="none"
                  stroke="url(#purpleGradient)"
                  strokeWidth="1.5"
                  opacity="0.4"
                  className="animate-pulse"
                  style={{ animationDuration: '4s' }}
                />

                {/* Venus's clean wave orbit */}
                <path
                  d="M 200 200 m -120 0 a 120 120 0 1 1 240 0 a 120 120 0 1 1 -240 0"
                  fill="none"
                  stroke="url(#blueGradient)"
                  strokeWidth="1.5"
                  opacity="0.4"
                  className="animate-pulse"
                  style={{ animationDuration: '4s', animationDelay: '1s' }}
                />

                {/* Earth's clean wave orbit */}
                <path
                  d="M 200 200 m -160 0 a 160 160 0 1 1 320 0 a 160 160 0 1 1 -320 0"
                  fill="none"
                  stroke="url(#pinkGradient)"
                  strokeWidth="1.5"
                  opacity="0.4"
                  className="animate-pulse"
                  style={{ animationDuration: '4s', animationDelay: '2s' }}
                />

                {/* Saturn's clean wave orbit */}
                <path
                  d="M 200 200 m -200 0 a 200 200 0 1 1 400 0 a 200 200 0 1 1 -400 0"
                  fill="none"
                  stroke="url(#yellowGradient)"
                  strokeWidth="1.5"
                  opacity="0.4"
                  className="animate-pulse"
                  style={{ animationDuration: '4s', animationDelay: '3s' }}
                />

                {/* Subtle wave ripples - clean and orderly */}
                <path
                  d="M 200 200 m -80 0 a 80 80 0 1 1 160 0 a 80 80 0 1 1 -160 0"
                  fill="none"
                  stroke="url(#purpleGradient)"
                  strokeWidth="0.5"
                  opacity="0.8"
                  className="animate-pulse"
                  style={{ animationDuration: '6s' }}
                />

                <path
                  d="M 200 200 m -120 0 a 120 120 0 1 1 240 0 a 120 120 0 1 1 -240 0"
                  fill="none"
                  stroke="url(#blueGradient)"
                  strokeWidth="0.5"
                  opacity="0.8"
                  className="animate-pulse"
                  style={{ animationDuration: '6s', animationDelay: '1s' }}
                />

                <path
                  d="M 200 200 m -160 0 a 160 160 0 1 1 320 0 a 160 160 0 1 1 -320 0"
                  fill="none"
                  stroke="url(#pinkGradient)"
                  strokeWidth="0.5"
                  opacity="0.8"
                  className="animate-pulse"
                  style={{ animationDuration: '6s', animationDelay: '2s' }}
                />

                <path
                  d="M 200 200 m -200 0 a 200 200 0 1 1 400 0 a 200 200 0 1 1 -400 0"
                  fill="none"
                  stroke="url(#yellowGradient)"
                  strokeWidth="0.5"
                  opacity="0.8"
                  className="animate-pulse"
                  style={{ animationDuration: '6s', animationDelay: '3s' }}
                />

                {/* Gradient definitions */}
                <defs>
                  <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#ec4899" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0.8" />
                  </linearGradient>
                  <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
                  </linearGradient>
                  <linearGradient id="pinkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ec4899" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#f97316" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#ec4899" stopOpacity="0.8" />
                  </linearGradient>
                  <linearGradient id="yellowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#eab308" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#f97316" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#eab308" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Orbiting Planets - Around Sun Center */}
              {[
                { name: "Mercury", size: "w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8", texture: "from-gray-300 via-gray-500 to-gray-700", orbit: 35, speed: 6, startAngle: 0 },
                { name: "Venus", size: "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-10 lg:h-10", texture: "from-yellow-200 via-orange-300 to-red-500", orbit: 45, speed: 12, startAngle: 90 },
                { name: "Earth", size: "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-12 lg:h-12", texture: "from-blue-500 via-green-400 to-blue-600", orbit: 90, speed: 14, startAngle: 180 },
                { name: "Saturn", size: "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-12 lg:h-12", texture: "from-yellow-100 via-orange-200 to-yellow-300", orbit: 110, speed: 28, startAngle: 270 },
              ].map((planet) => (
                <motion.div
                  key={planet.name}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    width: `${planet.orbit * 2}px`,
                    height: `${planet.orbit * 2}px`,
                    marginLeft: `-${planet.orbit}px`,
                    marginTop: `-${planet.orbit}px`,
                    borderRadius: "50%",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: planet.speed, repeat: Infinity, ease: "linear" }}
                >
                  <div
                    className={`${planet.size} rounded-full bg-gradient-to-br ${planet.texture} shadow-lg absolute`}
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: `rotate(${planet.startAngle}deg) translate(${planet.orbit}px, -50%)`,
                    }}
                  >
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/80">
                      {/* {planet.name} */}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Floating Info Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-16 left-4 sm:top-20 sm:left-8 w-20 h-16 sm:w-24 sm:h-18 md:w-28 md:h-20 lg:w-32 lg:h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl sm:rounded-2xl border border-purple-400/30 backdrop-blur-sm flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">50K+</div>
                  <div className="text-xs text-purple-200">Students</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute top-12 right-6 sm:top-16 sm:right-12 w-16 h-12 sm:w-20 sm:h-14 md:w-24 md:h-16 lg:w-28 lg:h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl sm:rounded-2xl border border-blue-400/30 backdrop-blur-sm flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="text-lg sm:text-xl font-bold text-white">200+</div>
                  <div className="text-xs text-blue-200">Courses</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 2 }}
                className="absolute bottom-16 left-8 sm:bottom-20 sm:left-16 w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-pink-500/20 to-red-500/20 rounded-xl sm:rounded-2xl border border-pink-400/30 backdrop-blur-sm flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="text-lg sm:text-xl font-bold text-white">95%</div>
                  <div className="text-xs text-pink-200">Success</div>
                </div>
              </motion.div>
            </div>

            {/* Interactive Navigation Buttons */}
            <div className="absolute -bottom-12 sm:-bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col sm:flex-row gap-2 sm:gap-4">
              {Object.entries(companyData).map(([key, data]) => (
                <motion.button
                  key={key}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveSection(key)}
                  className={`px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 text-xs sm:text-sm ${activeSection === key
                      ? `bg-gradient-to-r ${data.color} text-white shadow-lg shadow-purple-500/25`
                      : `bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:bg-slate-700/50`
                    }`}
                >
                  {data.title}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-16 sm:mb-20 lg:mb-24">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl sm:rounded-2xl border border-purple-400/30 mx-auto mb-3 sm:mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-purple-400" />
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
              <div className="text-xs sm:text-sm text-purple-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Core Values Section */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">Our Core Values</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-purple-200 max-w-xs sm:max-w-sm md:max-w-2xl mx-auto px-4">
              The principles that guide everything we do and every decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value) => (
              <div key={value.title} className="group">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br ${value.color} rounded-xl sm:rounded-2xl mx-auto mb-3 sm:mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white text-center mb-2">{value.title}</h3>
                <p className="text-xs sm:text-sm text-purple-200 text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-400/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Ready to Start Your Creative Journey?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-purple-200 mb-6 sm:mb-8 max-w-xs sm:max-w-sm md:max-w-2xl mx-auto px-4">
              Join thousands of creators who&apos;ve already transformed their skills and careers with our platform
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg sm:rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                Start Learning
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 sm:px-8 sm:py-4 bg-slate-800/50 text-white font-semibold rounded-lg sm:rounded-xl border border-slate-700/50 hover:bg-slate-700/50 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                View Courses
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
