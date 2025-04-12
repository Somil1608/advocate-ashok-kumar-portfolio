import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import aboutImg from '../assets/as1.png'; 
import aboutmp4 from '../mp4law.mp4'; 
import emblemImg from '../assets/emblem1.png';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const texts = [
    "Our Sacred Duty",
    "Your Legal Guardian",
    "Justice Advocate",
    "Legal Protector"
  ];

  useEffect(() => {
    let timeout;
    const currentString = texts[currentText];

    if (isTyping && !isDeleting) {
      // Typing effect
      if (displayText.length < currentString.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentString.slice(0, displayText.length + 1));
        }, 100);
      } else {
        // Pause after typing
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else if (isDeleting) {
      // Deleting effect
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        // Move to next text
        setIsDeleting(false);
        setCurrentText((prev) => (prev + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, isDeleting, currentText]);

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
      <div className="relative z-10 md:w-1/2 px-10 space-y-8 text-center md:text-left">
        {/* Cultural Motto with National Emblem */}
        <motion.div
          className="absolute top-4 left-1/2 transform -translate-x-1/2 text-center py-2 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute w-24 h-24 rounded-full border-2 border-gold-accents/20 animate-pulse"></div>
            <div className="absolute w-32 h-32 rounded-full border-2 border-gold-accents/10 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
          <div className="relative">
            {/* National Emblem */}
            <div className="mb-3">
              <img 
                src={emblemImg} 
                alt="Indian National Emblem" 
                className="w-24 h-24 mx-auto object-contain mix-blend-screen"
              />
            </div>
            <div className="relative">
              <span className="text-gold-accents text-7xl font-bold tracking-wider block font-['Tiro_Devanagari_Hindi'] italic">सत्यमेव जयते</span>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-gold-accents/0 via-gold-accents/50 to-gold-accents/0"></div>
              </div>
            
          </div>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          className="flex items-center gap-2 mt-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="flex items-center gap-1">
            <div className="relative">
              <div className="w-2 h-2 rounded-full bg-gold-accents animate-pulse"></div>
              <div className="absolute inset-0 rounded-full bg-gold-accents/20 animate-ping"></div>
            </div>
            <p className="uppercase tracking-wider text-gold-accents text-[11px] font-medium whitespace-nowrap">Trusted Since 2009</p>
          </div>
          <div className="h-4 w-px bg-gradient-to-b from-gold-accents/0 via-gold-accents/30 to-gold-accents/0"></div>
          <div className="flex items-center gap-1">
            <div className="relative">
              <svg className="w-3 h-3 text-gold-accents" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-gold-accents animate-pulse"></div>
            </div>
            <p className="text-[11px] text-court-gray whitespace-nowrap">1000+ Cases Resolved</p>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h1 className="font-heading text-3xl md:text-5xl leading-tight">
            <span className="relative">
              Your Legal Rights
              <div className="absolute -bottom-1 left-0 w-16 h-0.5 bg-gold-accents"></div>
            </span>
            <motion.span
              className="text-gold-accents block mt-2 relative min-h-[2.5rem] w-[280px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="absolute left-0 top-0 whitespace-nowrap">
                {displayText}
                {(!isTyping || !isDeleting) && displayText.length === texts[currentText].length && (
                  <span className="inline-block w-1 h-5 bg-gold-accents ml-1 animate-blink"></span>
                )}
              </span>
            </motion.span>
          </h1>
        </motion.div>

        {/* Services Description */}
        <motion.p
          className="text-court-gray text-sm mt-6 whitespace-nowrap"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Expert Legal Solutions in Civil, Criminal & Family Law
        </motion.p>

        {/* CTA Section */}
        <motion.div
          className="space-y-3 mt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm px-5 py-2.5 cursor-pointer text-primary font-black rounded-md bg-gold-accents shadow-lg transition-all transform hover:scale-105 hover:shadow-gold-accents/30 relative overflow-hidden whitespace-nowrap"
          >
            <span className="relative z-10">Schedule Free Consultation</span>
            <svg className="w-4 h-4 relative z-10 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-gold-accents to-gold-accents/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <p className="text-[11px] text-court-gray flex items-center gap-2 whitespace-nowrap">
            <svg className="w-3 h-3 text-gold-accents" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389 21.034 21.034 0 01-.554-.6 19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z" clipRule="evenodd" />
            </svg>
            Available in Hindi, English & Regional Languages
          </p>
        </motion.div>
      </div>

      {/* Image */}
      <motion.div
        className="relative z-10 mt-8 md:w-1/2 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <img
          src={aboutImg}
          alt="Advocate"
          className="w-[65%] h-auto rounded-xl shadow-lg"
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