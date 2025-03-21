import React, { useState, useEffect } from 'react';
import aboutImg from '../assets/as1.png'; 

const Hero = () => {
  const [showIndicator, setShowIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowIndicator(false);  // Hide on scroll
      } else {
        setShowIndicator(true);   // Show at top
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center h-screen text-white bg-gradient-to-r from-[#0A1A3A] to-[#1c1c1c] relative pt-32"> 
      
      <div className="md:w-1/2 px-10 space-y-6 text-center md:text-left">
        
        <p className="uppercase tracking-widest text-gold-accents">Est. 2009</p>
        <h1 className="font-heading text-h1 leading-tight">Your Victory, Our Strategy</h1>
        <p className="text-court-gray">Civil, Criminal & Family Law Solutions.</p>
        <div className="mt-6">
        <a href="#contact" class="
                text-base 
                px-[3.3em] py-[1em] 
                cursor-pointer 
                transform perspective-[200px] rotate-x-[15deg] 
                text-primary 
                font-black 
                border-none 
                rounded-[5px] 
                bg-gold-accents 
                shadow-[0_40px_29px_0_rgba(63,94,25,0.2)] 
                will-change-transform 
                transition-all duration-300 
                border-b-2 border-gold-accents
                hover:perspective-[180px] hover:rotate-x-[30deg] hover:translate-y-[2px] hover:bg-white
                active:perspective-[170px] active:rotate-x-[36deg] active:translate-y-[5px]
                ">Free Consultation
        </a>
        </div>
      </div>
     


      <div className="md:w-1/2 relative mt-10">
        <img 
          src={aboutImg} 
          alt="Advocate" 
          className="w-full h-[85%] object-cover mix-blend-overlay rounded-xl shadow-md" 
        />
      </div>
      

      {/* Scroll Indicator */}
      <div className={`absolute bottom-5 left-1/2 transform -translate-x-1/2 z-10 transition-opacity duration-500 ${showIndicator ? 'opacity-100' : 'opacity-0'}`}>
        <a href="#about">
          <svg className="w-8 h-8 text-gold-accents animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>

      
    </section>
  );
};

export default Hero;
