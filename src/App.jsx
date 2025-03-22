import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Expertise from './components/Expertise.jsx';
import Experience from './components/Experience.jsx';
import Cases from './components/Cases.jsx';
import Achievements from './components/Achievements.jsx';
import Testimonials from './components/Testimonials.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Leadership from './components/Leadership.jsx';
import CursorParticles from './components/CursorParticles';


import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <div className="font-sans bg-[var(--primary-color)] text-white">
           
     <CursorParticles />

      <Header />
      <Hero />
      
      
      

      <main className="transition-colors duration-500">
        

        <section id="about">
          <About />
        </section>
        <section id="leadership">
          <Leadership />
        </section>
        

        <section id="expertise">
          <Expertise />
         
{/* --Green ball animation--
<div class="flex flex-col gap-5 group mx-2 cursor-pointer">
  <div class="font-sans bg-[var(--primary-color)] text-white" >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="group-hover:ease-in-out transition duration-700 group-hover:duration-1000 cursor-pointer object-center object-cover group-hover:scale-110 sm:group-hover:scale-150 w-16 sm:w-28 aspect-square rotate-0 group-hover:-rotate-[360deg] group-hover:stroke-lime-600 fill-lime-600 group-hover:-translate-y-12 group-hover:-skew-y-12 group-hover:skew-x-12"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        d="M7.202 15.967a7.987 7.987 0 0 1-3.552-1.26c-.898-.585-1.101-.826-1.101-1.306 0-.965 1.062-2.656 2.879-4.583C6.459 7.723 7.897 6.44 8.052 6.475c.302.068 2.718 2.423 3.622 3.531 1.43 1.753 2.088 3.189 1.754 3.829-.254.486-1.83 1.437-2.987 1.802-.954.301-2.207.429-3.239.33Zm-5.866-3.57C.589 11.253.212 10.127.03 8.497c-.06-.539-.038-.846.137-1.95.218-1.377 1.002-2.97 1.945-3.95.401-.417.437-.427.926-.263.595.2 1.23.638 2.213 1.528l.574.519-.313.385C4.056 6.553 2.52 9.086 1.94 10.653c-.315.852-.442 1.707-.306 2.063.091.24.007.15-.3-.319Zm13.101.195c.074-.36-.019-1.02-.238-1.687-.473-1.443-2.055-4.128-3.508-5.953l-.457-.575.494-.454c.646-.593 1.095-.948 1.58-1.25.381-.237.927-.448 1.161-.448.145 0 .654.528 1.065 1.104a8.372 8.372 0 0 1 1.343 3.102c.153.728.166 2.286.024 3.012a9.495 9.495 0 0 1-.6 1.893c-.179.393-.624 1.156-.82 1.404-.1.128-.1.127-.043-.148ZM7.335 1.952c-.67-.34-1.704-.705-2.276-.803a4.171 4.171 0 0 0-.759-.043c-.471.024-.45 0 .306-.358A7.778 7.778 0 0 1 6.47.128c.8-.169 2.306-.17 3.094-.005.85.18 1.853.552 2.418.9l.168.103-.385-.02c-.766-.038-1.88.27-3.078.853-.361.176-.676.316-.699.312a12.246 12.246 0 0 1-.654-.319Z"
      ></path>
    </svg>
  </div>
</div> */}

        </section>
        

        {/* <section id="experience">
          <Experience />
        </section> */}

        <section id="cases">
          <Cases />
        </section>

        <section id="achievements">
          <Achievements />
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>

        <section id="contact">
          <Contact />
        </section>

      </main>
     
    
    
      <footer>
        <Footer />
      </footer>

    </div>
  );
}

export default App;

