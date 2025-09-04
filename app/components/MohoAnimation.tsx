"use client"

import { ArrowRight, Users, Award, Star, CheckCircle } from "lucide-react"
import AnimatedStars from "./AnimatedStars"




export default function MohoAnimationSection() {
  return (
    <section id="moho-animation" className="min-h-screen relative overflow-hidden bg-gradient-to-b from-black via-slate-950 to-black">
            {/* Background 3D Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-gradient-to-br from-black/20 to-transparent"></div>
      </div>

      <AnimatedStars
        count={50}  
        glowIntensity="low"
        animationSpeed="slow"
        zIndex={0}
      />
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="inline-block p-4 rounded-full bg-violet-500 mb-6">
            <Users className="w-12 h-12 text-white" />
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            Moho Characters Animation
          </h1>
          <p className="text-xl md:text-2xl text-violet-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Master character animation with Moho Pro. Learn to create engaging 2D characters 
            and bring them to life with professional animation techniques.
          </p>

          {/* Course Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-violet-300 mb-2">14</div>
              <div className="text-violet-200">Weeks</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-violet-300 mb-2">1,456</div>
              <div className="text-violet-200">Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-violet-300 mb-2">4.7</div>
              <div className="text-violet-200">Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-violet-300 mb-2">92%</div>
              <div className="text-violet-200">Success Rate</div>
            </div>
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

            <div className="space-y-4">
              <h4 className="text-2xl font-semibold text-white">Course Duration</h4>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center justify-between">
                  <span className="text-violet-300">Total Hours:</span>
                  <span className="text-2xl font-bold text-violet-300">28 Hours</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-violet-300">Exercises:</span>
                  <span className="text-2xl font-bold text-violet-300">56 Projects</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-violet-300">Certification:</span>
                  <span className="text-violet-300 font-semibold">Included</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-2xl font-semibold text-white">Prerequisites</h4>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <p className="text-violet-100">Basic computer skills • Understanding of animation principles • Creative mindset</p>
              </div>
            </div>
          </div>

          {/* Right Column - Moho Animation Demo */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-violet-400/50 transition-all duration-300 group">
              <h4 className="text-2xl font-bold text-white mb-6 text-center">Follow-Through Animation</h4>
              
              {/* Moho Animation GIF */}
              <div className=" rounded-lg p-4 mb-6">
                <img 
                  src="https://moho.lostmarble.com/cdn/shop/files/follow_through2.gif?v=1691765371" 
                  alt="Moho Pro follow-through animation demo" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              
              <div className="text-center mt-4">
                <p className="text-violet-200 text-sm">Real Moho Pro animation demonstrating follow-through principles</p>
              </div>
            </div>
          </div>
        </div>

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
          <button className="group bg-violet-500 hover:bg-violet-600 text-white px-8 py-4 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/25">
            Start Learning
            <ArrowRight className="inline-block ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  )
} 