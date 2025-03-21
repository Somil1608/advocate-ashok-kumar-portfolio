import React from 'react';
import { FaBalanceScale, FaGavel, FaShieldAlt } from 'react-icons/fa';

const expertiseData = [
  {
    icon: <FaBalanceScale className="text-gold-accents text-5xl mb-6" />,
    title: "Civil Law",
    desc: "Handling disputes related to property, contracts, and civil rights."
  },
  {
    icon: <FaGavel className="text-gold-accents text-5xl mb-6" />,
    title: "Criminal Defense",
    desc: "Defending clients in criminal cases with a focus on justice and fairness."
  },
  {
    icon: <FaShieldAlt className="text-gold-accents text-5xl mb-6" />,
    title: "Family Law",
    desc: "Resolving family disputes, including divorce, custody, and inheritance."
  },
];

const Expertise = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-heading text-primary mb-16 relative inline-block">
          Areas of Expertise
          <span className="block w-16 h-1 bg-gold-accents mt-2 mx-auto"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {expertiseData.map((item, index) => (
            <div 
              key={index} 
              className={`p-10 text-center bg-white hover:shadow-xl transition duration-300 transform hover:-translate-y-2 ${index % 2 !== 0 ? 'md:translate-y-4' : ''}`}
            >
              {item.icon}
              <h3 className="text-2xl font-semibold text-primary mb-4 uppercase tracking-wide">{item.title}</h3>
              <p className="text-court-gray leading-relaxed">{item.desc}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Expertise;
