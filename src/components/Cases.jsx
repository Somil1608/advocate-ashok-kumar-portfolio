import React, { useEffect, useRef, useState } from 'react';
import { FaMedal, FaBalanceScaleLeft, FaHandshake } from 'react-icons/fa';

const Cases = () => {
  const lineRef = useRef(null);
  const [lineHeight, setLineHeight] = useState('0%');

  const cases = [
    {
      title: "Property Dispute Win",
      desc: "Represented client in a high-stakes property dispute, securing a favorable judgment.",
      icon: <FaBalanceScaleLeft className="text-secondary text-3xl mb-2" />,
      year: "2023"
    },
    {
      title: "Criminal Defense Victory",
      desc: "Achieved acquittal for a client falsely accused in a criminal case.",
      icon: <FaMedal className="text-secondary text-3xl mb-2" />,
      year: "2021"
    },
    {
      title: "Family Law Settlement",
      desc: "Negotiated a fair settlement in a complex family law case involving custody and property division.",
      icon: <FaHandshake className="text-secondary text-3xl mb-2" />,
      year: "2019"
    },
    
  ];

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('cases-section');
      if (!element) return;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      const offsetTop = element.offsetTop;
      const fullHeight = element.offsetHeight;

      const scrollPosition = scrollTop + windowHeight;
      const fillHeight = Math.min(100, ((scrollPosition - offsetTop) / fullHeight) * 50);

      setLineHeight(`${Math.max(0, Math.min(100, fillHeight))}%`);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initialize on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="cases-section" className="relative py-16 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-heading text-center text-white mb-12 relative inline-block">
        Notable Cases
        <span className="block w-12 h-1 bg-secondary mt-2 mx-auto"></span>
      </h2>

      {/* Vertical Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full flex justify-center">
        <div className="w-1 bg-white relative">
          <div
            ref={lineRef}
            className="absolute top-0 left-0 w-full bg-secondary transition-all duration-200"
            style={{ height: lineHeight }}
          ></div>
        </div>
      </div>

      <div className="space-y-10 relative">
        {cases.map((caseItem, index) => (
          <div key={index} className={`flex flex-col md:flex-row items-center relative ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>

            {/* Connector Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-secondary border-2 border-white z-10"></div>

            {/* Case Content */}
            <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:mr-10 text-left' : 'md:ml-10 text-right'}`}>
              <div className="flex flex-col items-center md:items-start">
                {caseItem.icon}
                <h3 className="text-lg font-semibold text-secondary mb-1">{caseItem.title}</h3>
                <p className="text-gray-400 text-sm">{caseItem.desc}</p>
                <span className="text-xs text-gray-500 mt-1">{caseItem.year}</span>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Cases;