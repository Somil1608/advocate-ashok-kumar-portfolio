import React from 'react';
import { FaUsers, FaGavel, FaBookOpen, FaGlobe, FaRegLightbulb } from 'react-icons/fa';

const Leadership = () => {
  const highlights = [
    {
      icon: <FaUsers className="text-secondary text-4xl mb-4 animate-pulse" />,
      title: "General Secretary, Haryana Adhivakta Parishad",
      description: "Spearheading Haryana Adhivakta Parishad's mission to foster unity, excellence, and welfare across the legal community in Haryana."
    },
    {
      icon: <FaGavel className="text-secondary text-4xl mb-4 animate-bounce" />,
      title: "Legal Seminars & Advocacy Reforms",
      description: "Driving impactful seminars, reform discussions, and advocacy circles including legal reforms like the Farmers Acts 2020."
    },
    {
      icon: <FaBookOpen className="text-secondary text-4xl mb-4 animate-pulse" />,
      title: "Publications & Legal Literature",
      description: "Published thought leadership articles in journals like Nyayapravah, promoting gender inclusivity and modern legal discourse."
    },
    {
      icon: <FaGlobe className="text-secondary text-4xl mb-4 animate-bounce" />,
      title: "Digital Engagement & Leadership",
      description: "Leading digital transformation of Haryana Adhivakta Parishad via platforms like Facebook & YouTube to connect advocates statewide."
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-r from-[#0e1e2d] via-[#1a2c3f] to-[#0e1e2d] text-white overflow-hidden">
      
      {/* SVG Background Animation */}
      <svg className="absolute inset-0 w-full h-full opacity-10 animate-pulse" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 320">
        <path fill="#c3a65a" fillOpacity="0.3" d="M0,64L48,69.3C96,75,192,85,288,85.3C384,85,480,75,576,85.3C672,96,768,128,864,122.7C960,117,1056,75,1152,64C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
      </svg>

      {/* Heading */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-4xl font-heading mb-4">Leadership & Contributions</h2>
        <h3 className="italic text-gray-300 mb-6">Empowering Advocates • Driving Reforms • Building Communities</h3>
        <span className="block w-20 h-1 bg-secondary mx-auto rounded-full"></span>
      </div>

      {/* Highlights Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {highlights.map((item, index) => (
          <div key={index} className={`p-8 rounded-xl shadow-lg bg-[#162132] transition-transform transform hover:scale-105 text-center`}>
            {item.icon}
            <h3 className="text-xl font-semibold text-secondary mb-3">{item.title}</h3>
            <p className="text-gray-300 text-sm">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Haryana Adhivakta Parishad Info */}
      <div className="relative z-10 max-w-5xl mx-auto mt-16 text-center text-lg text-gray-200 px-6 animate-fadeIn">
      <a 
  href="https://www.facebook.com/p/Adhivakta-Parishad-Haryana-100063798502693/" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="inline-block transition-transform duration-300 transform hover:scale-105 relative group text-secondary text-2xl mb-6 font-bold"
>
  About Haryana Adhivakta Parishad
  <span className="absolute left-0 bottom-0 w-0 h-1 bg-secondary transition-all duration-300 group-hover:w-full rounded-full"></span>
</a>

        <p className="mb-4 leading-relaxed">
          <strong>Haryana Adhivakta Parishad</strong> is the leading advocate organization fostering unity, welfare, and legal excellence among advocates across Haryana. Committed to ethical advocacy and community upliftment, the Parishad is recognized for organizing seminars, welfare programs, and legal reforms statewide.
        </p>
        <p className="mb-4 leading-relaxed">
          As part of the <strong>Akhil Bharatiya Adhivakta Parishad</strong>, it ensures Haryana's robust representation at national forums and actively participates in policy discussions, social justice reforms, and professional growth platforms.
        </p>
        <p className="mb-4 leading-relaxed">
          From thought leadership articles to leveraging digital platforms, the Parishad envisions an informed, collaborative, and justice-driven legal community contributing meaningfully to society.
        </p>

        <div className="mt-10 text-secondary font-bold">— Advocate Ashok Kumar Sirsi</div>
      </div>

    </section>
  );
};

export default Leadership;
