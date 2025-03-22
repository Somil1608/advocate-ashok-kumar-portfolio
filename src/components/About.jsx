import React from 'react';
import { FaLinkedin, FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import aboutImg from '../assets/as.jpeg';

const About = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Image Section */}
        <div className="w-full md:w-1/2 relative">
          <img 
            src={aboutImg} 
            alt="Advocate Ashok Kumar" 
            className="w-full h-full object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 px-6 md:px-10">
          <h2 className="text-4xl font-heading text-primary mb-4">About Advocate Ashok Kumar Sirsi</h2>
          <h3 className="text-lg text-secondary mb-6">General Secretary, Haryana Adhivakta Parishad</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Advocate <span className="font-bold text-secondary">Ashok Kumar Sirsi</span> is a distinguished legal professional with over <span className="font-semibold text-primary">15 years of experience</span> 
            practicing at the District Courts, Karnal, Haryana. 
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            He specializes in <span className="text-secondary">Civil Law, Criminal Defense, Family Law, Property Disputes, and Contract Law</span>. Known for his strategic legal acumen, 
            meticulous case research, and commitment to justice, Advocate Sirsi has successfully represented hundreds of clients across Haryana.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Beyond the courtroom, he holds a prominent leadership role as the <span className="font-bold text-primary">General Secretary of Haryana Adhivakta Parishad</span>, 
            where he plays a key role in shaping the legal fraternity through seminars, publications, and welfare programs. His vision is rooted in fostering an ethically 
            strong, informed, and socially responsible community of advocates.
          </p>
          <a href="#contact" className="inline-block bg-secondary text-white px-6 py-3 rounded-md text-sm uppercase font-semibold hover:bg-primary transition">
            Schedule Consultation
          </a>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-8">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition">
              <FaFacebookF size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition">
              <FaWhatsapp size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition">
              <FaInstagram size={24} />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
