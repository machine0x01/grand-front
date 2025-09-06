'use client';

import React, { useState, useEffect } from 'react';
import { Check, Star, ArrowRight, Sparkles, Clock, Users, TrendingUp, Shield, Gift, Zap, Timer, Award, Target } from 'lucide-react';
import { bundles, type Bundle } from '../../../data/bundles';
import AnimatedStars from '../AnimatedStars';

interface BundleCardProps {
  bundle: Bundle;
  index: number;
}

// Countdown Timer Component
const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 23, minutes: 59, seconds: 59 }; // Reset for demo
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-2 rounded-full bg-red-500/20 px-3 py-1 text-xs font-semibold text-red-400">
      <Timer className="h-3 w-3" />
      <span>Limited Time:</span>
      <span className="font-mono">
        {timeLeft.hours.toString().padStart(2, '0')}:
        {timeLeft.minutes.toString().padStart(2, '0')}:
        {timeLeft.seconds.toString().padStart(2, '0')}
      </span>
    </div>
  );
};

const BundleCard: React.FC<BundleCardProps> = ({ bundle }) => {

  return (
    <div 
      className={`bundle-card group relative overflow-hidden rounded-3xl border transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 ${
        bundle.popular 
          ? 'border-purple-400/50 bg-gradient-to-br from-purple-900/30 via-purple-800/20 to-pink-900/30 shadow-xl shadow-purple-500/30 backdrop-blur-xl glow-effect' 
          : 'border-white/20 bg-gradient-to-br from-white/10 via-white/5 to-white/10 hover:border-white/30 hover:bg-gradient-to-br hover:from-white/15 hover:via-white/10 hover:to-white/15 backdrop-blur-lg'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: bundle.popular 
          ? 'linear-gradient(135deg, rgba(147, 51, 234, 0.3) 0%, rgba(236, 72, 153, 0.2) 50%, rgba(147, 51, 234, 0.3) 100%)'
          : 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.1) 100%)',
        backdropFilter: 'blur(20px)',
        boxShadow: bundle.popular 
          ? '0 25px 50px -12px rgba(147, 51, 234, 0.4), 0 0 0 1px rgba(147, 51, 234, 0.2)'
          : '0 25px 50px -12px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)'
      }}
    >
      {/* Popular Badge */}
      {bundle.popular && (
        <div className="absolute -top-1 -right-1 z-10">
          <div className="flex items-center gap-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1 text-xs font-semibold text-white shadow-lg animate-pulse">
            <Star className="h-3 w-3 fill-current" />
            Most Popular
          </div>
        </div>
      )}

      {/* Limited Time Badge */}
      {bundle.limitedTime && (
        <div className="absolute -top-1 -left-1 z-10">
          <div className="flex items-center gap-1 rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
            <Zap className="h-3 w-3" />
            Limited Time
          </div>
        </div>
      )}

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-4 left-4 h-1 w-1 bg-purple-400 rounded-full opacity-60 animate-ping" style={{ animationDelay: '0s' }} />
        <div className="absolute top-8 right-8 h-1.5 w-1.5 bg-pink-400 rounded-full opacity-40 animate-ping" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-8 left-8 h-1 w-1 bg-blue-400 rounded-full opacity-50 animate-ping" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-4 right-4 h-1.5 w-1.5 bg-cyan-400 rounded-full opacity-30 animate-ping" style={{ animationDelay: '3s' }} />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      {/* Animated Border */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
           style={{ 
             background: 'linear-gradient(45deg, transparent, rgba(147, 51, 234, 0.2), transparent, rgba(236, 72, 153, 0.2), transparent)',
             backgroundSize: '200% 200%',
             animation: 'gradientShift 3s ease infinite'
           }} />

      <div className="relative p-8">
        {/* Header */}
        <div className="mb-6">
          <div className="mb-4 flex items-center gap-3">
            <div className={`relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${
              bundle.popular ? 'from-purple-500 to-pink-500' : 'from-blue-500 to-cyan-500'
            } shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent" />
              <Sparkles className="h-7 w-7 text-white relative z-10" />
            </div>
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent group-hover:from-purple-300 group-hover:via-pink-300 group-hover:to-purple-300 transition-all duration-300">
                {bundle.title}
              </h3>
              <p className="text-sm text-slate-400 font-medium">
                {bundle.courses.length} Course{bundle.courses.length > 1 ? 's' : ''} • {bundle.studentsEnrolled?.toLocaleString()}+ Students
              </p>
            </div>
          </div>
          
          <p className="text-slate-300 leading-relaxed text-base">
            {bundle.description}
          </p>
        </div>

        {/* Social Proof Stats */}
        <div className="mb-6 grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2 rounded-lg bg-white/5 p-3">
            <Users className="h-4 w-4 text-blue-400" />
            <div>
              <p className="text-xs text-slate-400">Students</p>
              <p className="text-sm font-semibold text-white">{bundle.studentsEnrolled?.toLocaleString()}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-white/5 p-3">
            <TrendingUp className="h-4 w-4 text-green-400" />
            <div>
              <p className="text-xs text-slate-400">Success Rate</p>
              <p className="text-sm font-semibold text-white">{bundle.successRate}</p>
            </div>
          </div>
        </div>

        {/* Rating */}
        <div className="mb-6 flex items-center gap-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${
                  i < Math.floor(bundle.averageRating || 0) 
                    ? 'text-yellow-400 fill-current' 
                    : 'text-slate-600'
                }`} 
              />
            ))}
          </div>
          <span className="text-sm text-slate-300">
            {bundle.averageRating} ({bundle.totalReviews} reviews)
          </span>
        </div>

        {/* Courses List */}
        <div className="mb-6">
          <h4 className="mb-3 text-sm font-semibold text-white uppercase tracking-wider">
            Included Courses
          </h4>
          <div className="space-y-2">
            {bundle.courses.map((course) => (
              <div key={course.id} className="flex items-center gap-3 rounded-lg bg-white/5 p-3 transition-all duration-300 hover:bg-white/10 hover:scale-105">
                <div className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${course.color} text-lg shadow-md`}>
                  {course.icon}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-white">{course.name}</p>
                  <p className="text-xs text-slate-400">{course.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bonus Items */}
        {bundle.bonus && bundle.bonus.length > 0 && (
          <div className="mb-6">
            <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-white uppercase tracking-wider">
              <Gift className="h-4 w-4 text-yellow-400" />
              Bonus Items
            </h4>
            <ul className="space-y-2">
              {bundle.bonus.map((bonus, bonusIndex) => (
                <li key={bonusIndex} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-500/20 flex-shrink-0">
                    <Gift className="h-3 w-3 text-yellow-400" />
                  </div>
                  <span className="text-sm text-slate-300">{bonus}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Features */}
        <div className="mb-6">
          <h4 className="mb-3 text-sm font-semibold text-white uppercase tracking-wider">
            What&apos;s Included
          </h4>
          <ul className="space-y-2">
            {bundle.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-start gap-3">
                <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20 flex-shrink-0">
                  <Check className="h-3 w-3 text-green-400" />
                </div>
                <span className="text-sm text-slate-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing */}
        <div className="mb-6">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-white">{bundle.price}</span>
            {bundle.originalPrice && (
              <>
                <span className="text-lg text-slate-400 line-through">{bundle.originalPrice}</span>
                {bundle.discount && (
                  <span className="rounded-full bg-green-500/20 px-2 py-1 text-xs font-semibold text-green-400">
                    Save {bundle.discount}
                  </span>
                )}
              </>
            )}
          </div>
          {bundle.savings && (
            <p className="text-sm text-green-400 font-medium mt-1">
              You save {bundle.savings} compared to buying individually!
            </p>
          )}
        </div>

        {/* Guarantee */}
        {bundle.guarantee && (
          <div className="mb-6 flex items-center gap-2 rounded-lg bg-green-500/10 p-3 border border-green-500/20">
            <Shield className="h-5 w-5 text-green-400" />
            <span className="text-sm text-green-300 font-medium">{bundle.guarantee}</span>
          </div>
        )}

        {/* CTA Button */}
        <button className={`shimmer-effect group/btn w-full rounded-xl px-6 py-4 font-semibold text-white transition-all duration-300 ${
          bundle.popular
            ? 'bg-gradient-to-r from-purple-600 via-purple-500 to-pink-600 hover:from-purple-700 hover:via-purple-600 hover:to-pink-700 hover:shadow-xl hover:shadow-purple-500/40'
            : 'bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-600 hover:from-blue-700 hover:via-blue-600 hover:to-cyan-700 hover:shadow-xl hover:shadow-blue-500/40'
        } hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900 relative overflow-hidden`}>
          {/* Button Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
          
          {/* Pulsing Background */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
          
          <span className="relative flex items-center justify-center gap-2">
            <Zap className="h-4 w-4 transition-transform duration-300 group-hover/btn:rotate-12" />
            <span className="bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent font-bold">
              Enroll Now - Limited Time!
            </span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </span>
        </button>
      </div>
    </div>
  );
};

const BundleSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Motion Designer at Netflix",
      avatar: "👩‍💻",
      text: "The Complete Creator bundle transformed my career. I went from beginner to landing my dream job in 6 months!",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Freelance Animator",
      avatar: "👨‍🎨",
      text: "Best investment I've made. The bonus assets alone are worth more than the bundle price. Highly recommended!",
      rating: 5
    },
    {
      name: "Emma Davis",
      role: "Creative Director",
      avatar: "👩‍🎬",
      text: "The quality of instruction and community support is unmatched. My portfolio improved dramatically.",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="bundles" className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-slate-950 to-black">
      {/* Background Elements */}
      <AnimatedStars
        count={80}
        glowIntensity="medium"
        animationSpeed="medium"
        zIndex={0}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-purple-600 blur-3xl opacity-15 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 h-48 w-48 rounded-full bg-blue-600 blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 h-32 w-32 rounded-full bg-pink-600 blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 px-6 py-3 text-sm font-medium text-purple-300 mb-8 backdrop-blur-sm border border-purple-400/20">
            <Sparkles className="h-4 w-4 animate-pulse" />
            <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent font-semibold">
              Course Bundles
            </span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
            <span className="block">Choose Your</span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              Learning Path
            </span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8 font-light">
            Save more when you bundle courses together. Each package is carefully curated 
            to give you the skills you need to succeed in the creative industry.
          </p>

          {/* Countdown Timer */}
          <div className="flex justify-center mb-8">
            <CountdownTimer />
          </div>

          {/* Social Proof Banner */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-300 mb-8">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-blue-400" />
              <span>2,773+ Students Enrolled</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-yellow-400" />
              <span>96% Success Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span>4.9/5 Average Rating</span>
            </div>
          </div>
        </div>

        {/* Live Activity Indicator */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-green-500/20 px-4 py-2 text-sm font-medium text-green-400">
            <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse" />
            <span>3 people enrolled in the last hour</span>
          </div>
        </div>

        {/* Bundles Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto mb-16">
          {bundles.map((bundle, index) => (
            <BundleCard key={bundle.id} bundle={bundle} index={index} />
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            What Our Students Say
          </h3>
          <div className="relative">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{testimonials[currentTestimonial].avatar}</div>
                <div>
                  <h4 className="font-semibold text-white">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-sm text-slate-400">{testimonials[currentTestimonial].role}</p>
                </div>
                <div className="flex ml-auto">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-slate-300 italic">&ldquo;{testimonials[currentTestimonial].text}&rdquo;</p>
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-purple-400 w-8' : 'bg-slate-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10">
              <Target className="h-8 w-8 text-purple-400 mx-auto mb-3" />
              <h4 className="font-semibold text-white mb-2">Industry-Ready Skills</h4>
              <p className="text-sm text-slate-300">Learn exactly what employers are looking for</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10">
              <Clock className="h-8 w-8 text-blue-400 mx-auto mb-3" />
              <h4 className="font-semibold text-white mb-2">Lifetime Access</h4>
              <p className="text-sm text-slate-300">Keep learning at your own pace forever</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10">
              <Shield className="h-8 w-8 text-green-400 mx-auto mb-3" />
              <h4 className="font-semibold text-white mb-2">30-Day Guarantee</h4>
              <p className="text-sm text-slate-300">Not satisfied? Get your money back</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-semibold text-white mb-2">
                Need Help Choosing?
              </h3>
              <p className="text-slate-300">
                Our team is here to help you find the perfect learning path.
              </p>
            </div>
            <button className="group rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900">
              <span className="flex items-center gap-2">
                Get Free Consultation
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BundleSection;

// Custom CSS for advanced animations
const bundleSectionStyles = `
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  @keyframes glow {
    0%, 100% { box-shadow: 0 0 20px rgba(147, 51, 234, 0.3); }
    50% { box-shadow: 0 0 40px rgba(147, 51, 234, 0.6); }
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  .bundle-card {
    animation: float 6s ease-in-out infinite;
  }
  
  .bundle-card:nth-child(2) {
    animation-delay: 2s;
  }
  
  .bundle-card:nth-child(3) {
    animation-delay: 4s;
  }
  
  .glow-effect {
    animation: glow 3s ease-in-out infinite;
  }
  
  .shimmer-effect {
    position: relative;
    overflow: hidden;
  }
  
  .shimmer-effect::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    animation: shimmer 2s infinite;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = bundleSectionStyles;
  document.head.appendChild(styleSheet);
}
