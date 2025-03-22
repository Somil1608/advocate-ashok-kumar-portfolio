


// import React from 'react';
// import Slider from 'react-slick';
// import { FaQuoteLeft } from 'react-icons/fa';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// const Testimonials = () => {
//   const testimonials = [
//     {
//       text: "Ashok Kumar is one of the finest advocates I’ve worked with. His dedication and legal expertise are unmatched, and he ensures the client’s interests are always prioritized.",
//       author: "Advocate Ranbir Singh Kharkali, District Court Jagadhri, Haryana",
//       image: "https://scontent.fixc8-4.fna.fbcdn.net/v/t1.6435-9/168492402_3814151098703171_3308655922797498400_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=WWTn-KkOXbUQ7kNvgGZQBaa&_nc_oc=Adm1Bz2Z4C6a8qwXsSZ37ZBMb1qyyGYG45vrc_rvgite9BpRPZUDDPFH-q5LcboUvkD8-NETNDSMijdoaNlFioTf&_nc_zt=23&_nc_ht=scontent.fixc8-4.fna&_nc_gid=RCfErEwDDBMo4HzW_hYwqg&oh=00_AYFFgoTaNr-VVMI7A6DBe-QASoP8pzwTZBt3nkpPbef0SA&oe=68035A8A"
//     },
//     {
//       text: "A professional who brings clarity and confidence to complex legal matters. Highly respected among peers and clients alike.",
//       author: "Ravinder Budhwar, AAG - Chandigarh",
//       image: "https://scontent.fixc8-2.fna.fbcdn.net/v/t1.6435-9/38894208_1806318789464222_4883457328281550848_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Nsljv27PZB0Q7kNvgFr68R6&_nc_oc=Adm9ZSQOSONRZFn6xhAqmO9CG-1EjzVqJ9j9DG3ivoZEPFuDJmwnbpI6rLFpv3H9ORQnkAwENgTDqs8UoIj9uIYz&_nc_zt=23&_nc_ht=scontent.fixc8-2.fna&_nc_gid=uBgcvIXi0sR3cF9ldH5gwQ&oh=00_AYHQhyiSWUHXGeRRR3NTuPCkbbrmUimDbmZFAunTQyLKYw&oe=6803499B"
//     },
//     {
//       text: "Ashok Kumar's strategic approach to both civil and criminal cases is commendable. A trustworthy name in the legal fraternity.",
//       author: "Kailash Chauhan, Advocate, Chandigarh High Court",
//       image: "https://scontent.fixc8-1.fna.fbcdn.net/v/t39.30808-6/414686965_7155738761160054_8851580216330502671_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=QSEWL2HmpLcQ7kNvgEPn-qV&_nc_oc=Adm9yikuEj9ytcbCm7hU_2ATQCiV_jvxXQ1WYhpCACQkemuvsfIk_iwhZHhE4XrCqiAgjyQFTTL9PY6bi_KMOqv7&_nc_zt=23&_nc_ht=scontent.fixc8-1.fna&_nc_gid=0-D2Fl2yhCkjdIkoRMG9pA&oh=00_AYFNmJ1uMBZLUbM5vPpDsXfM5Ke8IL1513pGqyIxfNn8Sw&oe=67E1DF4B"
//     },
//     {
//       text: "I've seen Advocate Ashok Kumar successfully handle some of the toughest cases with remarkable results. His client-focused approach is inspiring.",
//       author: "Vineeth Rathore, Advocate, Haryana State High Court",
//       image: "https://scontent.fixc8-2.fna.fbcdn.net/v/t39.30808-6/321831893_714349543360682_5136910451384128257_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=pBef3QO-tg0Q7kNvgHip11h&_nc_oc=Adnsun4ZXUO2on0wSmT9Ghm2O6m7drRgG12N3l8q_Q2Z5YgGnAYR_XSBNS0v7MGO-yrHVxZvYKjPDRfs1868C3FB&_nc_zt=23&_nc_ht=scontent.fixc8-2.fna&_nc_gid=7SemMSw7ME6kk5ytbhY05Q&oh=00_AYE5-39XuOT4zvVzvp3ioqxRJxrdrdIDkPF-yA6mB4twXQ&oe=67E1D316"
//     },
//     {
//       text: "Sandeep and I have collaborated with Ashok Kumar on several cases. His legal acumen and courtroom presence make him a standout professional.",
//       author: "Sandeep, Senior Advocate, Punjab & Haryana High Court",
//       image: "https://scontent.fixc8-4.fna.fbcdn.net/v/t1.6435-9/36270042_10215318869956889_3042938115367895040_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=25A3z0NyIUgQ7kNvgEvyu7H&_nc_oc=AdkkxHiD6RPBfuO7tU2RhWe7t_PtNmXtOiMeKTw0pNy3O0_e8M9vTs1KLgJsmgRXd5keO4QPH7QkXM1POsZ1ISBJ&_nc_zt=23&_nc_ht=scontent.fixc8-4.fna&_nc_gid=8GUgSRBg4k77EOEdMjxTww&oh=00_AYFA2AOzdusuMYBYynt5T1Cp7bcPOLm2Th09cqjhP_Xrpg&oe=68034C81"
//     }    
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     centerMode: true,
//     centerPadding: "40px",
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: { slidesToShow: 1, centerPadding: "20px" },
//       },
//     ],
//   };

//   return (
//     <section className="py-24 bg-[var(--primary-color)] text-white">
//       <h2 className="text-4xl font-heading mb-12 text-center relative inline-block">
//         Client Testimonials
//         <span className="block w-16 h-1 bg-gold-accents mt-2 mx-auto rounded-full"></span>
//       </h2>

//       <div className="max-w-7xl mx-auto px-6">
//         <Slider {...settings}>
//           {testimonials.map((testimonial, index) => (
//             <div key={index} className="relative bg-[#0f223e] mx-4 my-8 p-10 rounded-xl shadow-lg transition transform hover:scale-105">
//               <FaQuoteLeft className="absolute top-4 left-4 text-gold-accents text-3xl opacity-70" />
//               <img src={testimonial.image} alt={testimonial.author} className="w-20 h-20 rounded-full border-4 border-gold-accents mx-auto mb-6 object-cover" />
//               <p className="italic text-gray-300 leading-relaxed mb-6">"{testimonial.text}"</p>
//               <p className="font-semibold text-gold-accents">{testimonial.author}</p>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;



import React from 'react';
import Slider from 'react-slick';
import { FaQuoteLeft } from 'react-icons/fa';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const testimonials = [
    {
            text: "Ashok Kumar is one of the finest advocates I’ve worked with. His dedication and legal expertise are unmatched, and he ensures the client’s interests are always prioritized.",
            author: "Adv. Ranbir Singh Kharkali, National Secretary Akhil Bharatiya Adhivakta Parishad ",
            image: "https://scontent.fixc8-4.fna.fbcdn.net/v/t1.6435-9/168492402_3814151098703171_3308655922797498400_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=WWTn-KkOXbUQ7kNvgGZQBaa&_nc_oc=Adm1Bz2Z4C6a8qwXsSZ37ZBMb1qyyGYG45vrc_rvgite9BpRPZUDDPFH-q5LcboUvkD8-NETNDSMijdoaNlFioTf&_nc_zt=23&_nc_ht=scontent.fixc8-4.fna&_nc_gid=RCfErEwDDBMo4HzW_hYwqg&oh=00_AYFFgoTaNr-VVMI7A6DBe-QASoP8pzwTZBt3nkpPbef0SA&oe=68035A8A"
          },
          {
            text: "A professional who brings clarity and confidence to complex legal matters. Highly respected among peers and clients alike.",
            author: "Ravinder Budhwar, Additional Advocate General Haryana",
            image: "https://scontent.fixc8-2.fna.fbcdn.net/v/t1.6435-9/38894208_1806318789464222_4883457328281550848_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Nsljv27PZB0Q7kNvgFr68R6&_nc_oc=Adm9ZSQOSONRZFn6xhAqmO9CG-1EjzVqJ9j9DG3ivoZEPFuDJmwnbpI6rLFpv3H9ORQnkAwENgTDqs8UoIj9uIYz&_nc_zt=23&_nc_ht=scontent.fixc8-2.fna&_nc_gid=uBgcvIXi0sR3cF9ldH5gwQ&oh=00_AYHQhyiSWUHXGeRRR3NTuPCkbbrmUimDbmZFAunTQyLKYw&oe=6803499B"
          },
          {
            text: "Ashok Kumar's strategic approach to both civil and criminal cases is commendable. A trustworthy name in the legal fraternity.",
            author: "Kailash Chauhan, Sr. Advocate, Dist. Court Karnal",
            image: "https://scontent.fixc8-1.fna.fbcdn.net/v/t39.30808-6/414686965_7155738761160054_8851580216330502671_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=QSEWL2HmpLcQ7kNvgEPn-qV&_nc_oc=Adm9yikuEj9ytcbCm7hU_2ATQCiV_jvxXQ1WYhpCACQkemuvsfIk_iwhZHhE4XrCqiAgjyQFTTL9PY6bi_KMOqv7&_nc_zt=23&_nc_ht=scontent.fixc8-1.fna&_nc_gid=0-D2Fl2yhCkjdIkoRMG9pA&oh=00_AYFNmJ1uMBZLUbM5vPpDsXfM5Ke8IL1513pGqyIxfNn8Sw&oe=67E1DF4B"
          },
          {
            text: "I've seen Advocate Ashok Kumar successfully handle some of the toughest cases with remarkable results. His client-focused approach is inspiring.",
            author: "Adv. Kavinder Singh, Representative of Hon’ble Union Minister Manohar Lal Khattar",
            image: "https://scontent.fixc8-5.fna.fbcdn.net/v/t39.30808-6/311696526_5330790300353646_6533721967548491994_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=oSDZyLpnA3EQ7kNvgFJZhiG&_nc_oc=Adnr8hCmyuF2zVNyhlGaD62GWbRsTyGpxRlOTqjuEK4xNHHyIcuFlJlHxQAlyy0uYdrvn2uWGA5wU8lszJXVLjUA&_nc_zt=23&_nc_ht=scontent.fixc8-5.fna&_nc_gid=n4qF_97RFqSrAj94Psc9ig&oh=00_AYFxe_1G6OwQ87Zx9QdzzY_t8sjVR_T2PXjz0nHsgvHiQg&oe=67E34FC1"
          },
          {
            text: "I have collaborated with Ashok Kumar on several cases. His legal acumen and courtroom presence make him a standout professional.",
            author: "Naresh Kumar Barana, Sr. Advocate, Dist. Court Karnal",
            image: "https://scontent.fixc8-2.fna.fbcdn.net/v/t39.30808-6/270600798_4477387525693261_8198185495049164866_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=itE0So9Ez7QQ7kNvgHjen9K&_nc_oc=AdkWjxST7e6Fc5IlrR_oBru9gDw4ovCXkxPyRzLpyntN-vHcb3xUbYpjVrTpHimbsNOSa-KWhS9__-XobdxkWdwv&_nc_zt=23&_nc_ht=scontent.fixc8-2.fna&_nc_gid=3VadWeea-BJErGNAX5co6w&oh=00_AYHc9P_kWGLagalTDCA1E6Za8lzwPyo9dqGHD1PMY46xpw&oe=67E362D6"
          }   
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
