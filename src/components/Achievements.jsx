import React from 'react';
import CountUp from 'react-countup';
import { FaAward, FaTrophy } from 'react-icons/fa';

const Achievements = () => {
  const awards = [
    { 
      icon: <FaAward className="text-gold-accents text-5xl mb-6" />, 
      title: "Bar Council of Punjab & Haryana", 
      subtitle: "Recognized Legal Practitioner, Registered Since 2009" 
    },
    { 
      icon: <FaTrophy className="text-gold-accents text-5xl mb-6" />, 
      title: "General Secretary - Haryana Adhivakta Parishad", 
      subtitle: "Driving Legal Reforms & Advocate Welfare Initiatives" 
    },
  ];
  

  return (
    <section className="py-24 bg-[var(--primary-color)] text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-heading mb-16 relative inline-block">
          Achievements & Awards
          <span className="block w-20 h-1 bg-gold-accents mt-2 mx-auto rounded-full"></span>
        </h2>

        {/* Awards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {awards.map((award, index) => (
            <div key={index} className="flex flex-col items-center bg-[#0f223e] p-8 rounded-xl shadow-lg hover:scale-105 transition">
              {award.icon}
              <h3 className="text-xl font-semibold text-gold-accents mb-2 mt-4 uppercase tracking-widest">{award.title}</h3>
              <p className="text-gray-400 text-sm">{award.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Counters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center">
            <h3 className="text-5xl font-heading text-gold-accents mb-2 border-b-2 border-gold-accents pb-2">
              <CountUp end={500} duration={3} />+
            </h3>
            <p className="text-gray-300 uppercase text-sm tracking-widest">Cases Won</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-5xl font-heading text-gold-accents mb-2 border-b-2 border-gold-accents pb-2">
              <CountUp end={15} duration={4} />+
            </h3>
            <p className="text-gray-300 uppercase text-sm tracking-widest">Years Experience</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-5xl font-heading text-gold-accents mb-2 border-b-2 border-gold-accents pb-2">
              <CountUp end={99} duration={5} />%
            </h3>
            <p className="text-gray-300 uppercase text-sm tracking-widest">Client Satisfaction</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Achievements;
