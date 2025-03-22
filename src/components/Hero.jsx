import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../assets/as1.png'; 
import aboutmp4 from '../mp4law.mp4'; 

const Hero = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center h-screen text-white overflow-hidden">

      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={aboutmp4} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 w-full h-full bg-black opacity-50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 md:w-1/2 px-10 space-y-6 text-center md:text-left">
        <motion.p
          className="uppercase tracking-widest text-gold-accents"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Est. 2009
        </motion.p>
        <motion.h1
          className="font-heading text-5xl md:text-6xl leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Your Victory, Our Strategy
        </motion.h1>
        <motion.p
          className="text-court-gray"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Civil, Criminal & Family Law Solutions.
        </motion.p>
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <a
            href="#contact"
            className="inline-block text-base px-8 py-3 cursor-pointer text-primary font-black rounded-md bg-gold-accents shadow-lg transition-transform transform hover:scale-105"
          >
            Free Consultation
          </a>
        </motion.div>
      </div>

      {/* Image */}
      <motion.div
        className="relative z-10 mt-10 md:w-1/2 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <img
          src={aboutImg}
          alt="Advocate"
          className="w-[80%] h-auto rounded-xl shadow-lg"
        />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <a href="#about">
          <svg
            className="w-8 h-8 text-gold-accents animate-bounce"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </motion.div>

    </section>
  );
};

export default Hero;