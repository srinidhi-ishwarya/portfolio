// src/Home.js
import React from 'react';
import { useNavigate } from "react-router-dom";
import Footer from './Footer';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import ScrollSectionbottom from './scrollanimation/scrollbottom';
import Hero from './Herosection';
import Navbar from './NavBar';


const Home = () => {
  const navigate=useNavigate();
  const handleNavigation = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    navigate("/contact-whatsapp"); // Navigate programmatically
  };
 
  return (
    
        <div className="bg-[#0f0f3d] text-white font-sans min-h-screen">
          
          {/* <header className="w-full shadow-md">
            <div className="flex justify-between items-center py-4 px-0">
            
              <div className="flex items-center">
                <img
                  src="assets/port-removebg-preview.png"
                  alt="Logo"
                  className="w-10 h-10 rounded-full"
                />
                <h1 className="ml-1 text-xl font-bold">Portfolio</h1>
              </div>
              // {/* Navigation Links 
              <nav>
                <ul className="flex space-x-8 text-lg font-medium">
                  <li>
                    <a href="#home" className="hover:text-gray-400">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="hover:text-gray-400">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#skills" className="hover:text-gray-400">
                      Skills
                    </a>
                  </li>
                  <li>
                    <a href="#projects" className="hover:text-gray-400">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="hover:text-gray-400">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
              // {/* GitHub Button 
              <a
                href="https://github.com/your-github-url"
                className="bg-white text-black py-2 px-4 rounded-md font-bold hover:bg-gray-200 mr-10"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </header> */}
    
          {/* Hero Section */}
          
          <section id="home" >
          <Hero/>

</section>

          
        {/*About Section*/}
              <section
              id="about"
              className="m-6"
            >
          
           <About/>
            </section>
            
             {/*About Section*/}
             <section
             id="skills"
             className="mt-20"
           >
         
          <Skills/>
          
           </section>
        {/*Project Section*/}
        <section
        id='projects'
        className='mt-20'
        >
          <Projects/>

        </section>
        <section
        id='contact'
        className='mt-6'
        >
          {/* <Contact1/> */}

        </section>
        <ScrollSectionbottom>
        <div className="m-40 text-center justify-center">
          <p className='text-3xl italiana-regular'>Thank you for viewing!
          </p><br />  
          {/* <p className='text-3xl italiana-regular'>Stay in touch.</p> */}
        </div>
        </ScrollSectionbottom>
        {/*Footer Section*/}
           <section
           id="footer"
           className="mt-20 "
         ><Footer/>
         </section>
        </div>

      );
    };
    
    
 
export default Home;
