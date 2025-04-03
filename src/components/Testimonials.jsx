import React from 'react';
import Slider from 'react-slick';
import { FaQuoteLeft } from 'react-icons/fa';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import T1img from '../assets/ranbir_photo.jpg';
import T2img from '../assets/budhwar_photo.jpg'; 
import T3img from '../assets/kailash_photo.jpg'; 
import T4img from '../assets/kavinder_photo.jpg'; 
import T5img from '../assets/nareshk_photo.jpg'; 



const Testimonials = () => {
  const testimonials = [
    {
            text: "Ashok Kumar is one of the finest advocates I’ve worked with. His dedication and legal expertise are unmatched, and he ensures the client’s interests are always prioritized.",
            author: "Adv. Ranbir Singh Kharkali, National Secretary Akhil Bharatiya Adhivakta Parishad ",
            image: T1img
          },
          {
            text: "A professional who brings clarity and confidence to complex legal matters. Highly respected among peers and clients alike.",
            author: "Ravinder Budhwar, Additional Advocate General Haryana",
            image: T2img          },
          {
            text: "Ashok Kumar's strategic approach to both civil and criminal cases is commendable. A trustworthy name in the legal fraternity.",
            author: "Kailash Chauhan, Sr. Advocate, Dist. Court Karnal",
            image: T3img          },
          {
            text: "I've seen Advocate Ashok Kumar successfully handle some of the toughest cases with remarkable results. His client-focused approach is inspiring.",
            author: "Adv. Kavinder Singh, Representative of Hon’ble Union Minister Manohar Lal Khattar",
            image: T4img          },
          {
            text: "I have collaborated with Ashok Kumar on several cases. His legal acumen and courtroom presence make him a standout professional.",
            author: "Naresh Kumar Barana, Sr. Advocate, Dist. Court Karnal",
            image: T5img          }   
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "40px",
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, centerPadding: "20px" },
      },
    ],
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-heading mb-12 relative inline-block text-primary">
          Client Testimonials
          <span className="block w-16 h-1 bg-secondary mt-2 mx-auto rounded-full"></span>
        </h2>

        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative bg-gray-50 mx-4 my-8 p-10 rounded-xl shadow-lg transition transform hover:scale-105">
              <FaQuoteLeft className="absolute top-4 left-4 text-secondary text-3xl opacity-70" />
              <img src={testimonial.image} alt={testimonial.author} className="w-20 h-20 rounded-full border-4 border-secondary mx-auto mb-6 object-cover" />
              <p className="italic text-gray-700 leading-relaxed mb-6">"{testimonial.text}"</p>
              <p className="font-semibold text-secondary">{testimonial.author}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
