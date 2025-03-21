import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaFacebookF, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_bd4etpw', 'template_ztgj75r', form.current, 'dfkiiSS4xGHBLHcaY')
      .then(() => {
        alert('Thank you! Your message has been sent.');
      }, () => {
        alert('Oops! Something went wrong. Please try again.');
      });
    e.target.reset();
  };

  return (
    <section className="relative py-24 bg-gradient-to-r from-[#0e1e2d] via-[#1a2c3f] to-[#0e1e2d] overflow-hidden text-white">

      {/* Glass Background */}
      <div className="absolute inset-0 backdrop-blur-xl opacity-80"></div>

      <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-center">

        {/* Info Section */}
        <div className="md:w-1/2 space-y-10 z-10">
          <h2 className="text-4xl font-heading mb-4">Let’s Start a Conversation</h2>
          <p className="text-gray-300 leading-relaxed">Whether it's a legal query or a case evaluation, we're here to guide you through every step. Reach out now — justice starts with a single message.</p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-secondary" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-secondary" />
              <span>ashok.kumar@example.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-secondary" />
              <span>District Courts, Karnal, Haryana</span>
            </div>
          </div>

          <div className="flex space-x-4 mt-8">
            <a href="#" className="hover:text-secondary transition text-lg"><FaLinkedin /></a>
            <a href="https://www.facebook.com/profile.php?id=61557533192790" className="hover:text-secondary transition text-lg"><FaFacebookF /></a>
            <a href="https://www.instagram.com/sirsiashokkumar?igsh=cDN1cGYyZTR1a2ty" className="hover:text-secondary transition text-lg"><FaInstagram /></a>
          </div>
        </div>

        {/* Form Section */}
        <form ref={form} onSubmit={sendEmail} className="md:w-1/2 bg-white text-gray-800 p-10 rounded-xl shadow-2xl space-y-6 relative z-10">
          <h3 className="text-2xl font-heading mb-6 text-center text-[var(--primary-color)]">Quick Consultation Request</h3>
          <input type="text" name="user_name" required placeholder="Your Name" className="w-full border border-gray-300 rounded-md p-4 focus:outline-none focus:border-secondary" />
          <input type="email" name="user_email" required placeholder="Your Email" className="w-full border border-gray-300 rounded-md p-4 focus:outline-none focus:border-secondary" />
          <textarea name="message" rows="4" required placeholder="Your Message" className="w-full border border-gray-300 rounded-md p-4 focus:outline-none focus:border-secondary"></textarea>
          <button type="submit" className="w-full bg-secondary text-white py-3 rounded-md font-semibold hover:bg-primary transition">Send Message</button>
        </form>

      </div>

    </section>
  );
};

export default Contact;
