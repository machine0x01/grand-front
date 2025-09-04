"use client"
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import Planet3D from './HallBall3d';

function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { 
    amount: 0.3,
    once: false 
  });
  
  React.useEffect(() => {
    // Effect for potential future use with view animations
  }, [isInView]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  const footerLinks = [
    {
      title: "Courses",
      links: ["Graphic Design", "Motion Graphics", "3D Animation", "Blender", "UI/UX Design"]
    },
    {
      title: "Company",
      links: ["About Us", "Our Team", "Careers", "Blog", "Press"]
    },
    {
      title: "Support",
      links: ["Help Center", "Contact", "Community", "Documentation", "FAQ"]
    }
  ];

  return (
   <footer ref={footerRef} className="relative bg-gradient-to-b from-black via-slate-950 to-black overflow-hidden">
     {/* Animated Stars Background - Matching Hero */}
     {/* <AnimatedStars 
       count={100}
       glowIntensity="medium"
       animationSpeed="normal"
       zIndex={0}
     />
      */}
     {/* Nebula-like background effects - Matching Hero */}
     <div className="absolute inset-0 opacity-20">
       <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-15 animate-pulse"></div>
       <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-blue-600 rounded-full blur-3xl opacity-15 animate-pulse" style={{animationDelay: '1s'}}></div>
       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-600 rounded-full blur-3xl opacity-10 animate-pulse" style={{animationDelay: '2s'}}></div>
     </div>

     {/* Footer Content */}
     <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
         {/* Company Info */}
         <div className="lg:col-span-1">
           <div>
             <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
               GRAND NOTION
             </h3>
             <p className="text-purple-200 mb-6 leading-relaxed">
               Empowering creators worldwide with cutting-edge design, animation, and creative skills.
             </p>
             
             {/* Contact Info */}
             <div className="space-y-3">
               <div className="flex items-center gap-3">
                 <Mail className="w-4 h-4 text-purple-400" />
                 <span className="text-purple-200 text-sm">hello@grandnotion.com</span>
               </div>
               <div className="flex items-center gap-3">
                 <Phone className="w-4 h-4 text-purple-400" />
                 <span className="text-purple-200 text-sm">+1 (555) 123-4567</span>
               </div>
               <div className="flex items-center gap-3">
                 <MapPin className="w-4 h-4 text-purple-400" />
                 <span className="text-purple-200 text-sm">Creative District, Design City</span>
               </div>
             </div>
           </div>
         </div>

         {/* Footer Links */}
         {footerLinks.map((section) => (
           <div key={section.title}>
             <h4 className="text-white font-semibold mb-4">{section.title}</h4>
             <ul className="space-y-2">
               {section.links.map((link) => (
                 <li key={link}>
                   <a 
                     href="#" 
                     className="text-purple-200 hover:text-white transition-colors duration-300 text-sm"
                   >
                     {link}
                   </a>
                 </li>
               ))}
             </ul>
           </div>
         ))}
       </div>

       {/* Social Links */}
       <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-slate-800">
         <div className="flex gap-4 mb-4 sm:mb-0">
           {socialLinks.map((social) => (
             <motion.a
               key={social.label}
               href={social.href}
               whileHover={{ scale: 1.1, y: -2 }}
               whileTap={{ scale: 0.95 }}
               className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-full flex items-center justify-center hover:border-purple-400/50 transition-all duration-300"
               aria-label={social.label}
             >
               <social.icon className="w-4 h-4 text-purple-400" />
             </motion.a>
           ))}
         </div>

         <div className="flex items-center gap-4">
           <p className="text-purple-200 text-sm">
             © 2024 Grand Notion. All rights reserved.
           </p>
           
           <motion.button
             onClick={scrollToTop}
             whileHover={{ scale: 1.1, y: -2 }}
             whileTap={{ scale: 0.95 }}
             className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
             aria-label="Scroll to top"
           >
             <ArrowUp className="w-4 h-4 text-white" />
           </motion.button>
         </div>
       </div>
     </div>

     {/* 3D Planet - Full width, only top half visible */}
     <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-[120%] h-[32rem] overflow-hidden">
       <Planet3D className="w-full h-full" />
     </div>
   </footer>
  );
}

export default Footer;
