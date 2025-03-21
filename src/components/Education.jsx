// Education.jsx
import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  const educationList = [
    { title: "Bachelor of Arts", year: "1995" },
    { title: "Master of Arts in Public Administration", year: "1997" },
    { title: "Bachelor of Laws (LLB)", year: "2008" },
  ];

  return (
    <section className="py-20 bg-white rounded-2xl shadow-lg max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-heading text-primary mb-10 relative inline-block">
        Education & Certifications
        <span className="block w-16 h-1 bg-secondary mt-2 mx-auto"></span>
      </h2>

      <div className="flex flex-col md:flex-row justify-center gap-8">
        {educationList.map((edu, index) => (
          <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-md flex flex-col items-center">
            <FaGraduationCap className="text-secondary text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-secondary mb-2">{edu.title}</h3>
            <span className="text-gray-600 text-sm">{edu.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;