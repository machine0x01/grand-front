"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play, Video, Users, Award, Star, CheckCircle } from "lucide-react"
import AnimatedStars from "./AnimatedStars"




export default function MotionGraphicsSection() {
  return (
    <section id="motion-graphics" className="min-h-screen relative overflow-hidden bg-gradient-to-b from-black via-slate-950 to-black">
      {/* Background 3D Elements */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div> */}

      {/* Space Stars - Matching Hero and About */}
      <AnimatedStars
        count={50}
        glowIntensity="low"
        animationSpeed="slow"
        zIndex={0}
      />
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="inline-block p-4 rounded-full bg-amber-500 mb-6">
            <Video className="w-12 h-12 text-white" />
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            Motion Graphics
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Bring your designs to life with dynamic motion graphics.
            Learn animation principles and create engaging visual content.
          </p>

          {/* Course Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {[
              { number: "16", label: "Weeks" },
              { number: "1,923", label: "Students" },
              { number: "4.8", label: "Rating" },
              { number: "95%", label: "Success Rate" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group cursor-pointer"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="relative">
                  <div className="text-4xl font-bold text-amber-300 mb-2 group-hover:text-amber-200 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-amber-200 group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </div>
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-amber-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl scale-150 group-hover:scale-100" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Course Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Course Description */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white mb-4">What You&apos;ll Learn</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-purple-200 group-hover:text-white transition-colors duration-300">Master Adobe Creative Suite tools (Photoshop, Illustrator, InDesign)</p>
                </div>
                <div className="flex items-start space-x-3 group">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-purple-200 group-hover:text-white transition-colors duration-300">Learn color theory and typography principles</p>
                </div>
                <div className="flex items-start space-x-3 group">
                  <div className="w-6 h-6 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-purple-200 group-hover:text-white transition-colors duration-300">Create brand identities and marketing materials</p>
                </div>
                <div className="flex items-start space-x-3 group">
                  <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-purple-200 group-hover:text-white transition-colors duration-300">Understand print and digital design workflows</p>
                </div>
              </div>
            </div>




          </div>

          {/* Right Column - Video Player with Timeline */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-amber-400/50 transition-all duration-300 group">
              <h4 className="text-2xl font-bold text-white mb-6 text-center">Video Player & Timeline</h4>

              {/* Video Player */}
              <div className="bg-black rounded-lg p-4 mb-6">
                <div className="relative bg-amber-600 rounded-lg h-32 flex items-center justify-center">
                  <Play className="w-12 h-12 text-white opacity-80" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="bg-black/50 rounded-full h-1">
                      <div className="bg-amber-400 h-1 rounded-full w-1/3"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Interface */}
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4 group-hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-amber-300 text-sm">Timeline Sequence</span>
                    <span className="text-amber-300 text-sm">00:00 - 00:30</span>
                  </div>

                  {/* Timeline Tracks with Moving Playhead */}
                  <div className="space-y-2 relative">
                    {/* Moving Playhead */}
                    <motion.div
                      className="absolute top-0 bottom-0 w-0.5 bg-red-500 z-10"
                      initial={{ left: "0%" }}
                      animate={{ left: "100%" }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />

                    <div className="flex items-center space-x-2">
                      <span className="text-amber-300 text-xs w-16">Video</span>
                      <div className="flex-1 h-8 bg-amber-500 rounded flex items-center justify-center relative overflow-hidden">
                        <span className="text-white text-xs font-semibold z-20">Main Footage</span>
                        {/* Video Thumbnails */}
                        <div className="absolute inset-0 flex">
                          {Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className="flex-1 h-full bg-amber-400 opacity-60"></div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <span className="text-amber-300 text-xs w-16">Audio</span>
                      <div className="flex-1 h-6 bg-amber-600 rounded flex items-center justify-center relative overflow-hidden">
                        <span className="text-white text-xs font-semibold z-20">Background Music</span>
                        {/* Audio Waveform */}
                        <div className="absolute inset-0 flex items-end justify-around px-2">
                          {[45, 78, 32, 89, 56, 23, 67, 41].map((height, i) => (
                            <div key={i} className="w-1 bg-white opacity-40" style={{ height: `${height}%` }}></div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <span className="text-amber-300 text-xs w-16">Text</span>
                      <div className="flex-1 h-6 bg-amber-400 rounded flex items-center justify-center relative overflow-hidden">
                        <span className="text-white text-xs font-semibold z-20">Title Animation</span>
                        {/* Text Animation Preview */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-4">
                  <p className="text-amber-200 text-sm">Master professional video editing workflows</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features */}
         {/* Additional Features */}
         <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Users, title: "Live Sessions", desc: "Weekly Q&A with industry experts" },
            { icon: Award, title: "Portfolio Building", desc: "Create 10+ professional projects" },
            { icon: Star, title: "Global Community", desc: "Connect with designers worldwide" }
          ].map((feature, index) => (
            <div key={index} className="">
              <div className="relative w-full max-w-xl">
                <div className="group relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900/50 px-6 py-8 shadow-lg transition-all duration-300 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 hover:bg-slate-800/50 backdrop-blur-sm">

                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30">
                    <feature.icon className="h-6 w-6 text-purple-400" />
                  </div>

                  <h1 className="relative z-50 mb-4 text-xl font-bold text-white">
                    {feature.title}
                  </h1>

                  <p className="relative z-50 mb-4 text-base font-normal text-purple-200">
                    {feature.desc}
                  </p>

                  {/* Meteor effect */}
                  {/* The Meteors component was removed, so this will be removed or replaced */}
                </div>
              </div>
            </div>


          ))}
        </div>


        {/* CTA Button */}
        <div className="text-center">
          <button className="group bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/25">
            Start Learning
            <ArrowRight className="inline-block ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  )
} 