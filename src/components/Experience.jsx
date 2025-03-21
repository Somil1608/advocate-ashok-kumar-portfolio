import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const experiences = [
  {
    title: "District Courts, Karnal",
    period: "2009 - Present",
    description: "Practicing as a senior advocate focusing on civil and criminal cases. Successfully handled over 500 cases, achieving favorable outcomes through strategic representation and detailed research."
  },
  // You can easily add more entries here later
];

const Experience = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-heading text-primary mb-16 text-center relative inline-block">
          Professional Experience
          <span className="block w-16 h-1 bg-gold-accents mt-2 mx-auto"></span>
        </h2>

        <div className="relative border-l-2 border-gold-accents pl-10 space-y-12">

          {experiences.map((item, index) => (
            <div key={index} className="relative">
              <FaCheckCircle className="absolute -left-4 top-2 text-gold-accents text-xl bg-white rounded-full shadow" />
              <h3 className="text-2xl font-semibold text-primary mb-2">{item.title}</h3>
              <p className="text-sm uppercase tracking-widest text-court-gray mb-4">{item.period}</p>
              <p className="text-gray-700 leading-relaxed">{item.description}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Experience;
