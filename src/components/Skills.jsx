// Skills.jsx
import React from 'react';

const Skills = () => {
  const skills = [
    { title: "Legal Research", level: 90 },
    { title: "Negotiation", level: 85 },
    { title: "Client Communication", level: 95 },
  ];

  return (
    <section className="py-20 bg-gray-50 rounded-2xl shadow-lg max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-heading text-primary mb-10 relative inline-block">
        Skills & Competencies
        <span className="block w-16 h-1 bg-secondary mt-2 mx-auto"></span>
      </h2>

      <div className="space-y-8">
        {skills.map((skill, index) => (
          <div key={index} className="text-left">
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-secondary">{skill.title}</span>
              <span className="text-gray-600">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-secondary h-4 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;