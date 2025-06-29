import './App.css'
import { NavHashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { BsEnvelopeArrowUp } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';
import { IoPersonSharp } from "react-icons/io5";
import { SiFalcon } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { SiHtml5 } from "react-icons/si";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiTailwindcss  } from "react-icons/si";
import { RiVuejsFill, RiNextjsFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { AiOutlineJavaScript } from "react-icons/ai";






function App() {

  const [isMenuOpen, setIsMenuOpen] = useState();
  

  return (
    <>
      <div className='bg-[#181918] px-[20px]  md:px-[40px] py-[30px] min-h-[100vh] nav-bg'>
        <nav className='fixed top-0 left-0 w-full z-50 flex items-center justify-between px-[20px] md:px-[40px] 
        py-[20px] border-b border-[#333] backdrop-blur-sm bg-[#181918]'>
          <NavHashLink smooth to='#hero'>
            <img src="/logo3.png" alt="" className='w-[50px] h-[50px]' />
          </NavHashLink>
          <div className='md:flex text-[#fefefe] gap-10 lg:gap-20 hidden text-[20px]'>
            <ul className='flex items-center gap-10'>
              <NavHashLink smooth to='#about'>
                <li className='cursor-pointer'>About</li>
              </NavHashLink>
              <NavHashLink smooth to='#services'>
                <li className='cursor-pointer'>Services</li>
              </NavHashLink>
              <NavHashLink smooth to='#skills'>
                <li className='cursor-pointer'>Skills</li>
              </NavHashLink>
              <NavHashLink smooth to='#projects'>
                <li className='cursor-pointer'>Projects</li>
              </NavHashLink>
            </ul>
            <a href="mailto:annabelowigho@gmail.com">
              <div className='flex border-2 border-[#fefefe] items-center justify-center px-6 py-2 gap-4 rounded-lg
              hover:bg-[#fefefe] hover:text-[#181918] hover:scale-105 hover:shadow-xl transition-all duration-500 ease-in-out'>
                <BsEnvelopeArrowUp />
                <button className='cursor-pointer'>Contact Me</button>
              </div>
            </a>
          </div>

       {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`text-[40px] z-50 relative ${isMenuOpen ? "text-black" : "text-[#e0e0e0]"}`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <IoMdClose /> : <HiOutlineMenuAlt3 />}
            </button>

            {isMenuOpen && (
              <div className="fixed top-0 right-0 h-screen w-[80%] p-5 bg-white z-40 shadow-lg">
                <ul onClick={() => setIsMenuOpen(false)} className="pt-20 text-black text-[20px] font-semibold">
                  <NavHashLink smooth to='#about'>
                    <li className='cursor-pointer'>About</li>
                  </NavHashLink>
                  <NavHashLink smooth to='#services'>
                    <li className='cursor-pointer pt-10'>Services</li>
                  </NavHashLink>
                  <NavHashLink smooth to='#skills'>
                    <li className='cursor-pointer pt-10'>Skills</li>
                  </NavHashLink>
                  <NavHashLink smooth to='#projects'>
                    <li className='cursor-pointer pt-10'>Projects</li>
                  </NavHashLink>
                </ul>

                <a href="mailto:annabelowigho@gmail.com">
                  <div className="mt-16 flex items-center justify-center gap-4 border-2 border-black px-6 py-2 rounded-lg text-black">
                    <BsEnvelopeArrowUp />
                    <button className="cursor-pointer text-[20px] font-semibold">Contact Me</button>
                  </div>
                </a>
              </div>
            )}
          </div>
        </nav>
        

        {/* <div className="relative w-[480px] h-[480px] flex items-center justify-center">
          <div className="w-full md:w-[480px] h-[310px] md:h-[480px] bg-[#2c2d2c] rounded-full flex items-center 
          justify-center overflow-hidden shadow-lg border-[6px] border-[#1f1f1f]">
            <img src="/anna.png" alt="Annabel" className="pt-4" />
          </div>
          <div className="animate-orbit">
            <div className="absolute bg-[#1f1f1f]/60 w-[80px] h-[80px] rounded-full flex items-center justify-center"
            style={{ transform: 'translate(200px, 0)' }}>
              <FaReact className="text-[60px] text-[#00d1f7]" />
            </div>
          </div>
          <div className="animate-orbit" style={{ animationDelay: '-1.33s' }}>
            <div className="absolute bg-[#1f1f1f]/60 w-[80px] h-[80px] rounded-full flex items-center justify-center"
              style={{ transform: 'translate(200px, 0)' }}>
                <AiOutlineJavaScript className="text-[40px] text-white" />
            </div>
          </div>
          <div className="animate-orbit" style={{ animationDelay: '-2.66s' }}>
            <div className="absolute bg-[#1f1f1f]/60 w-[80px] h-[80px] rounded-full flex items-center justify-center"
            style={{ transform: 'translate(200px, 0)' }}>
              <SiTailwindcss className="text-[40px] text-[#00bcff]" />
            </div>
          </div>
        </div> */}


        {/* Hero Section */}
        <div id="hero"
        className="pt-[130px] md:pt-40 lg:pt-34 px-[20px] lg:px-[50px] flex flex-col lg:flex-row items-center justify-between gap-16 
        md:gap-34 lg:gap-8 xl:gap-20"
        onClick={() => setIsMenuOpen(false)}
        role="region"
        aria-label="Hero section">
          <div className="text-[#e0e0e0] animate-fade-in">
            <h1 className="text-[40px] lg:text-[40px] xl:text-[60px] font-bold text-center lg:text-left leading-tight">
              Owigho Ufuoma Annabel
            </h1>
            <p className="text-[30px] md:text-[40px] lg:text-[30px] text-center lg:text-left pt-3 font-semibold text-[#00bcff]">
              Frontend Developer
            </p>
            <p className="text-lg text-center lg:text-left pt-5 leading-relaxed">
              Crafting pixel-perfect, user-friendly web experiences with React, Tailwind, and JavaScript.
            </p>
            <div className="flex justify-center lg:justify-start gap-4 pt-8">
              {/* <a href="#projects"
              className="px-4 md:px-6 py-3 bg-[#00bcff] text-[#1a1a1a] font-semibold rounded-full hover:bg-[#00d1f7] hover:scale-105 
              transition-transform duration-300 hero-view">
                View My Work
              </a>
              <a href="mailto:annabelowigho@gmail.com"
              className="px-4 md:px-6 py-3 border border-[#00bcff] text-[#00bcff] font-semibold rounded-full hover:bg-[#00bcff]/10 
              transition-colors duration-300">
                Contact Me
              </a> */}
              <a href="#projects">
                <div className='flex border-2 border-[#fefefe] items-center justify-center px-6 py-2 gap-4 rounded-lg font-semibold
                hover:bg-[#fefefe] hover:text-[#181918] hover:scale-105 hover:shadow-xl transition-all duration-500 ease-in-out'>
                  {/* <BsEnvelopeArrowUp /> */}
                  <button className='cursor-pointer'>View My Work</button>
                </div>
              </a>
            </div>
          </div>
            
          <div className="relative animate-slide-in">
            <div className="w-[310px] md:w-[480px] h-[310px] md:h-[480px] bg-[#2c2d2c] rounded-full flex items-center justify-center 
            overflow-hidden shadow-2xl border-[6px] border-[#1f1f1f]">
              <img src="/anna.png" alt="Portrait of Annabel, Frontend Developer" className="scale-110 translate-y-4"/>
            </div>
            {/* Orbiting Icons with Tooltips */}
            <div className="animate-orbit group absolute bg-[#1f1f1f]/60 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center 
            justify-center top-10 left-0 md:top-10 md:left-8 hover:scale-110 hover:bg-[#1f1f1f]/80 transition-transform duration-300">
              <FaReact className="text-4xl md:text-5xl text-[#00d1f7]" />
              <span className="absolute hidden group-hover:block bg-[#1f1f1f] text-white text-sm px-2 py-1 rounded top-[-30px] 
              whitespace-nowrap">
                React
              </span>
            </div>
            <div className="animate-orbit group absolute bg-[#1f1f1f]/60 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center 
            justify-center bottom-8 right-0 md:right-30 md:-bottom-5 hover:scale-110 hover:bg-[#1f1f1f]/80 transition-transform duration-300">
              <AiOutlineJavaScript className="text-3xl md:text-4xl text-[#f7df1e]" />
              <span className="absolute hidden group-hover:block bg-[#1f1f1f] text-white text-sm px-2 py-1 rounded bottom-[-30px] 
              whitespace-nowrap">
                JavaScript
              </span>
            </div>
            <div className="animate-orbit group absolute bg-[#1f1f1f]/60 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center 
            justify-center right-5 md:right-12 top-4 md:top-6 hover:scale-110 hover:bg-[#1f1f1f]/80 transition-transform duration-300">
              <SiTailwindcss className="text-3xl md:text-4xl text-[#00bcff]" />
              <span className="absolute hidden group-hover:block bg-[#1f1f1f] text-white text-sm px-2 py-1 rounded top-[-30px] 
              whitespace-nowrap">
                Tailwind CSS
              </span>
            </div>
          </div>
          {/* <div className="absolute bottom-8 flex flex-col items-center animate-bounce">
            <span className="text-[#e0e0e0] text-sm">Scroll Down</span>
            <svg className="w-6 h-6 text-[#00bcff] mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div> */}
        </div>
      </div>

      <div className='bg-[#f0f1f0]'>
          {/* About Section */}
          <section id='about'>
            <div className='py-[30px] md:py-[50px] lg:py-[80px] px-[20px] md:[35px] lg:px-[50px] xl:px-[100px] 
            flex flex-col lg:flex-row items-center gap-10'>
            <div className='w-full lg:w-1/2'>
              <h2 className='text-center md:text-start text-[40px] lg:text-[50px] font-semibold'>About me</h2>
                <div className='text-justify space-y-4'>
                  <p className=''>
                    I'm Owigho Ufuoma Annabel, a Frontend Developer with a Computer Science background and a passion for building responsive, 
                    user-friendly web applications. Skilled in React, Next.js, JavaScript, TypeScript, and Tailwind CSS, I focus on creating 
                    accessible, high-performance interfaces that enhance user experiences.
                  </p>
                  <p className=''>
                    At Schoolville Limited and Vechy Graphix, I've contributed to various projects like the Electra Motors website and the Delta State 
                    ICT Youth Empowerment Programme website, designing dynamic UI components and optimizing performance. I enjoy collaborating 
                    with teams, staying current with frontend trends, and mentoring aspiring developers. Let's work together to create 
                    innovative, impactful web solutions!
                  </p>
                </div>
              </div>
              <div className='w-full lg:w-1/2 xl:pl-14 space-y-5 md:space-y-10'>
                <div className='bg-[#e0e0e0] px-1 py-1 -skew-x-8'>
                  <div className='bg-[#181918] px-10 py-10 text-center'>
                    <a href=" https://github.com/annaelowigho">
                      <button className="relative text-[#e0e0e0] font-semibold text-[20px] md:text-[22px] cursor-pointer after:content-[''] after:absolute 
                      after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#e0e0e0] after:scale-x-0 after:origin-right 
                      after:transition-transform after:duration-500 hover:after:scale-x-100 hover:after:origin-left">
                        Checkout my GitHub Profile
                      </button>
                    </a>
                  </div>
                </div>
                <div className='bg-[#e0e0e0] px-1 py-1 -skew-x-8'>
                  <div className='bg-[#181918] px-10 py-10 text-center'>
                    <a href="https://drive.google.com/file/d/1eI5XRHLcJXH5tzGoAq76Oq7jVS-_m3QP/view?usp=drive_link">
                      <button className="relative text-[#e0e0e0] font-semibold text-[20px] md:text-[22px] cursor-pointer after:content-[''] after:absolute 
                      after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#e0e0e0] after:scale-x-0 after:origin-right 
                      after:transition-transform after:duration-500 hover:after:scale-x-100 hover:after:origin-left">
                        Checkout my CV
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */} 
          <section id='services'>
            <div className=' py-[50px] '>
              <h3 className='text-center text-[30px] md:text-[45px] lg:text-[50px] font-semibold pb-2'>My Services</h3>
              <p className='text-center text-[18px] md:text-[24px] pb-5 px-3 md:px-8'>
                I offer design-focused frontend development tailored to your business needs.
              </p>
              <div className='lg:hidden'>
                <div className='flex flex-col md:flex-row flex-wrap items-center justify-center gap-[40px]'>
                    <div>
                      <div className='bg-[#e0e0e0] h-[150px] w-[300px] flex flex-col items-center justify-center'>
                          <img src="/creative-design-icon-removebg-preview.png" alt="Creative Design" className="w-[80px] h-[80px]" />
                          <p className="text-[#414141] text-[18px] font-semibold">Creative Design</p>
                      </div>
                      <div className='h-[150px] w-[300px] shadow-[0_10px_20px_#e0e0e0] flex justify-center items-center px-5'>
                          <p className="text-[#414141] text-center">
                              Innovation and Creativity are my forte. I bring fresh, inventive ideas to your project, making you stand out.
                          </p>
                      </div>
                    </div>
                    <div>
                      <div className='bg-[#e0e0e0] h-[150px] w-[300px] flex flex-col items-center justify-center'>
                          <img src="/responsive-icon.png" alt="Creative Design" className="w-[60px] h-[60px]" />
                          <p className="text-[#414141] text-[18px] font-semibold">Responsive Design</p>
                      </div>
                      <div className='h-[150px] w-[300px] shadow-[0_20px_40px_#e0e0e0] flex justify-center items-center px-5'>
                          <p className="text-[#414141] text-center">
                              Seamless across all devices. Your project will look and work flawlessly, no matter the screen size.
                          </p>
                      </div>
                    </div>
                    <div>
                      <div className='bg-[#e0e0e0] h-[150px] w-[300px] flex flex-col items-center justify-center'>
                          <img src="/clean-design-icon-removebg-preview.png" alt="Creative Design" className="w-[80px] h-[80px]" />
                          <p className="text-[#414141] text-[18px] font-semibold">Clean and Nice Design</p>
                      </div>
                      <div className='h-[150px] w-[300px] shadow-[0_20px_40px_#e0e0e0] flex justify-center items-center px-5'>
                          <p className="text-[#414141] text-center">
                              Simplicity meets sophistication. I deliver polished, efficient, and maintainable solutions.
                          </p>
                      </div>
                    </div>
                    <div>
                      <div className='bg-[#e0e0e0] h-[150px] w-[300px] flex flex-col items-center justify-center'>
                          <img src="/design-support-icon-removebg-preview.png" alt="Creative Design" className="w-[60px] h-[60px]" />
                          <p className="text-[#414141] text-[18px] font-semibold">Support</p>
                      </div>
                      <div className='h-[150px] w-[300px] shadow-[0_20px_40px_#e0e0e0] flex justify-center items-center px-5'>
                          <p className="text-[#414141] text-center">
                              I've got your back beyond launch. Count on me for consistent support and continuous improvement.
                          </p>
                      </div>
                    </div>
                </div>
              </div>
              <div className='hidden lg:block'>
                <div className='flex items-center justify-center pt-[100px] pb-[50px] gap-[20px] xl:gap-[40px]'>
                  <div className="relative w-[220px] xl:w-[250px] h-[150px] group">
                    <div className="absolute inset-0 bg-[#e0e0e0] z-10 flex flex-col justify-center items-center transition-transform duration-700
                    transform translate-y-0 group-hover:-translate-y-[100px]">
                      <img src="/creative-design-icon-removebg-preview.png" alt="Creative Design" className="w-[80px] h-[80px]" />
                      <p className="text-[#414141] text-[18px] font-semibold">Creative Design</p>
                    </div>
                    <div className="relative w-[220px] xl:w-[250px] h-[150px] flex justify-center items-center p-5 box-border transition-all duration-800 
                    transform translate-y-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-[50px] shadow-[0_20px_40px_#e0e0e0]">
                      <div className="text-center">
                        <p className="text-[#414141]">
                          Innovation and Creativity are my forte. I bring fresh, inventive ideas to your project, making you stand out.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative w-[220px] xl:w-[250px] h-[150px] group">
                    <div className="absolute inset-0 bg-[#e0e0e0] z-10 flex flex-col justify-center items-center transition-transform duration-700
                    transform translate-y-0 group-hover:-translate-y-[100px]">
                      <img src="/responsive-icon.png" alt="Creative Design" className="w-[60px] h-[60px]" />
                      <p className="text-[#414141] text-[18px] font-semibold pt-4">Responsive Design</p>
                    </div>
                    <div className="relative w-[220px] xl:w-[250px] h-[150px] flex justify-center items-center p-5 box-border transition-all duration-800 
                    transform translate-y-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-[50px] shadow-[0_20px_40px_#e0e0e0]">
                      <div className="text-center">
                        <p className="text-[#414141]">
                          Seamless across all devices. Your project will look and work flawlessly, no matter the screen size.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative w-[220px] xl:w-[250px] h-[150px] group">
                    <div className="absolute inset-0 bg-[#e0e0e0] z-10 flex flex-col justify-center items-center transition-transform duration-700
                    transform translate-y-0 group-hover:-translate-y-[100px]">
                      <img src="/clean-design-icon-removebg-preview.png" alt="Creative Design" className="w-[80px] h-[80px]" />
                      <p className="text-[#414141] text-[18px] font-semibold">Clean and Nice Design</p>
                    </div>
                    <div className="relative w-[220px] xl:w-[250px] h-[150px] flex justify-center items-center p-5 box-border transition-all duration-800 
                    transform translate-y-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-[50px] shadow-[0_20px_40px_#e0e0e0]">
                      <div className="text-center">
                        <p className="text-[#414141]">
                          Simplicity meets sophistication. I deliver polished, efficient, and maintainable solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative w-[220px] xl:w-[250px] h-[150px] group">
                    <div className="absolute inset-0 bg-[#e0e0e0] z-10 flex flex-col justify-center items-center transition-transform duration-700
                    transform translate-y-0 group-hover:-translate-y-[100px]">
                      <img src="/design-support-icon-removebg-preview.png" alt="Creative Design" className="w-[60px] h-[60px]" />
                      <p className="text-[#414141] text-[18px] font-semibold pt-4">Support</p>
                    </div>
                    <div className="relative w-[220px] xl:w-[250px] h-[150px] flex justify-center items-center p-5 box-border transition-all duration-800 
                    transform translate-y-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-[50px] shadow-[0_20px_40px_#e0e0e0]">
                      <div className="text-center">
                        <p className="text-[#414141]">
                          I've got your back beyond launch. Count on me for consistent support and continuous improvement.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <a href="mailto:annabelowigho@gmail.com">
                  <div className="mt-10 w-[250px] flex items-center justify-center gap-4 border-2 border-[#181918] px-6 py-3 rounded-lg text-[20px]
                  font-semibold hover:bg-[#181918] hover:text-[#fefefe] hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out">
                    <BsEnvelopeArrowUp />
                    <button className="cursor-pointer">Contact Me</button>
                  </div>
                </a>
              </div>
            </div>
          </section>
      </div>

      {/* Skills Section */}
      <section id='skills'>
        <div className='py-[30px] md:py-[50px] lg:py-[80px] px-[20px] md:[35px] lg:px-[50px] xl:px-[100px]'>
          <h3 className='text-center text-[28px] md:text-[45px] lg:text-[50px] font-semibold pb-2'>My Skills</h3>
          <p className='text-center text-[18px] md:text-[24px] pb-5 md:pb-10 xl:pb-14'>
            Tools and technologies I use to build seamless, interactive web experiences. 
          </p>
          <div  className='
          flex items-center justify-center '>
            <div className='grid grid-cols-3'>
              <div className='flex flex-col items-center justify-center border-r-2 border-b-2 border-gray-300 
              w-[120px] h-[100px] md:w-[180px] md:h-[160px] lg:w-[280px] lg:h-[257px]'>
                <SiHtml5 className='text-[30px] md:text-[40px] lg:text-[60px]'/>
                <p className='text-[20px] font-medium'>HTML</p>
              </div>
              <div className='flex flex-col items-center justify-center border-r-2 border-b-2 border-gray-300 
              w-[120px] h-[100px] md:w-[180px] md:h-[160px] lg:w-[280px] lg:h-[257px]'>
                <IoLogoCss3 className='text-[30px] md:text-[40px] lg:text-[60px]'/>
                <p className='text-[20px] font-medium'>CSS</p>
              </div>
              <div className='flex flex-col items-center justify-center border-b-2 border-gray-300 
              w-[120px] h-[100px] md:w-[180px] md:h-[160px] lg:w-[280px] lg:h-[257px]'>
                <IoLogoJavascript className='text-[30px] md:text-[40px] lg:text-[60px]'/>
                <p className='text-[20px] font-medium'>JavaScript</p>
              </div>
              <div className='flex flex-col items-center justify-center border-r-2 border-b-2 border-gray-300 
              w-[120px] h-[100px] md:w-[180px] md:h-[160px] lg:w-[280px] lg:h-[257px]'>
                <SiTypescript className='text-[30px] md:text-[40px] lg:text-[60px]'/>
                <p className='text-[20px] font-medium'>TypeScript</p>
              </div>
              <div className='flex flex-col items-center justify-center border-r-2 border-b-2 border-gray-300 
              w-[120px] h-[100px] md:w-[180px] md:h-[160px] lg:w-[280px] lg:h-[257px]'>
                <SiTailwindcss className='text-[30px] md:text-[40px] lg:text-[60px]'/>
                <p className='text-[20px] font-medium'>TailwindCSS</p>
              </div>
              <div className='flex flex-col items-center justify-center border-b-2 border-gray-300 
              w-[120px] h-[100px] md:w-[180px] md:h-[160px] lg:w-[280px] lg:h-[257px]'>
                <FaBootstrap className='text-[30px] md:text-[40px] lg:text-[60px]'/>
                <p className='text-[20px] font-medium'>Bootstrap</p>
              </div>
              <div className='flex flex-col items-center justify-center border-r-2 border-gray-300
              w-[120px] h-[100px] md:w-[180px] md:h-[160px] lg:w-[280px] lg:h-[257px]'>
                <RiVuejsFill className='text-[30px] md:text-[40px] lg:text-[60px]'/>
                <p className='text-[20px] font-medium'>Vue</p>
              </div>
              <div className='flex flex-col items-center justify-center border-r-2 border-gray-300
              w-[120px] h-[100px] md:w-[180px] md:h-[160px] lg:w-[280px] lg:h-[257px]'>
                <FaReact className='text-[30px] md:text-[40px] lg:text-[60px]'/>
                <p className='text-[20px] font-medium'>React</p>
              </div>
              <div className='flex flex-col items-center justify-center
              w-[120px] h-[100px] md:w-[180px] md:h-[160px] lg:w-[280px] lg:h-[257px]'>
                <RiNextjsFill className='text-[30px] md:text-[40px] lg:text-[60px]'/>
                <p className='text-[20px] font-medium'>Nextjs</p>
              </div>
            </div>
          </div>
        </div>
        
      </section>

      {/* Projects Section */}
      <section id='projects'>
        <div className='bg-[#f0f1f0] py-[50px] px-[30px] xl:px-[150px]'>
            <h3 className='text-center text-[28px] md:text-[45px] lg:text-[50px] font-semibold'>My Projects</h3>
            <p className='text-center text-[18px] md:text-[24px] pb-5 md:pb-10 xl:pb-14'>
              Some Things I've Built 
            </p>
            <div className='space-y-10 md:space-y-20'>
              <div className='flex flex-col md:flex-row justify-center gap-[20px] md:gap-[40px] lg:gap-[100px]'>
                <div className='w-full md:w-3/8'>
                  <h3 className='text-[30px] md:text-[30px] font-semibold pb-3'>Electra Motors</h3>
                  <p className='text-[16px] lg:text-[20px] text-justify pb-4'>
                    I was the sole frontend developer for this project - a clean, responsive website built to represent Electra Motors, 
                    the first CNG conversion center in Delta State, Nigeria. The site highlights their innovative services and provides key 
                    information for customers transitioning to cleaner energy.
                  </p>
                  <a 
                    href="https://electramotors.ng" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='inline-flex items-center gap-2 text-[18px] text-[#1f1f1f] hover:underline transition duration-500'
                  >
                    <button className='cursor-pointer text-[18px]'>Visit website </button>
                    <FaExternalLinkAlt className='text-[16px] cursor-pointer'/>
                  </a>
                </div>
                <Link
                  to="https://electramotors.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-full md:w-[400px] h-[500px] overflow-hidden rounded-lg shadow-md block"
                  >
                  <img
                    src="/electra-img.jpeg"
                    alt="Electra Motors preview"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#c1bdd5]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-[#c1bdd5]/70 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center text-center p-4">
                    <p className="text-[24px] text-gray-800 font-semibold">
                      Electra Motors
                      <br />
                      <span className="text-[18px] font-normal"> 
                        <span className='font-semibold'>Technology:</span> JavaScript, React, TailwindCSS
                      </span>
                    </p>
                  </div>
                </Link>
              </div>
              <div className='flex flex-col md:flex-row-reverse justify-center gap-[20px] md:gap-[40px] lg:gap-[100px]'>
                <div className='w-full md:w-3/8'>
                  <h3 className='text-[30px] md:text-[30px] font-semibold pb-3'>Delta State Auditor General (PCMS)</h3>
                  <p className='text-[16px] lg:text-[20px] text-justify pb-4'>
                    I contributed to the development of the official platform for the Delta State Auditor General’s Personnel & Certificate 
                    Management System (PCMS) — an institutional platform mandated to promote accountability, transparency, and integrity in 
                    the financial management of public funds across all Ministries, Departments, and Agencies (MDAs) of the Delta State 
                    Government.
                  </p>
                  <a 
                    href="https://www.dsgauditoffice.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='inline-flex items-center gap-2 text-[18px] text-[#1f1f1f] hover:underline transition duration-500'
                  >
                    <button className='cursor-pointer text-[18px]'>Visit website </button>
                    <FaExternalLinkAlt className='text-[16px] cursor-pointer'/>
                  </a>
                </div>
                <Link
                  to="https://www.dsgauditoffice.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-full md:w-[400px] h-[500px] overflow-hidden rounded-lg shadow-md block"
                  >
                  <img
                    src="/auditor-general.jpeg"
                    alt="Delta State ICT-YEP preview"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#c1bdd5]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-[#c1bdd5]/70 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center text-center p-4">
                    <p className="text-[24px] text-gray-800 font-semibold">
                      Delta State Auditor General (PCMS)
                      <br />
                      <span className="text-[18px] font-normal"> 
                        <span className='font-semibold'>Technology:</span> Vuejs, Tailwind CSS, JavaScript
                      </span>
                    </p>
                  </div>
                </Link>
              </div>
              <div className='flex flex-col md:flex-row justify-center gap-[20px] md:gap-[40px] lg:gap-[100px]'>
                <div className='w-full md:w-3/8'>
                  <h3 className='text-[30px] md:text-[30px] font-semibold pb-3'>Delta State ICT-YEP</h3>
                  <p className='text-[16px] lg:text-[20px] text-justify pb-4'>
                    I contributed to building the official platform for Delta State's ICT-YEP — a government initiative aimed at empowering 
                    youths with tech skills. The platform includes a registration page and a full-featured online learning system, complete 
                    with student and tutor dashboards for course access and management.
                  </p>
                  <a 
                    href="https://deltastateictyep.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='inline-flex items-center gap-2 text-[18px] text-[#1f1f1f] hover:underline transition duration-500'
                  >
                    <button className='cursor-pointer text-[18px]'>Visit website </button>
                    <FaExternalLinkAlt className='text-[16px] cursor-pointer'/>
                  </a>
                </div>
                <Link
                  to="https://deltastateictyep.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-full md:w-[400px] h-[500px] overflow-hidden rounded-lg shadow-md block"
                  >
                  <img
                    src="/ict-yep.jpeg"
                    alt="Delta State ICT-YEP preview"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#c1bdd5]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-[#c1bdd5]/70 opacity-0 group-hover:opacity-100 transition-all duration-500 
                  flex items-center justify-center text-center p-4">
                    <p className="text-[24px] text-gray-800 font-semibold">
                      Delta State ICT-YEP
                      <br />
                      <span className="text-[18px] font-normal"> 
                        <span className='font-semibold'>Technology:</span> HTML, TailwindCSS, JavaScript
                      </span>
                    </p>
                  </div>
                </Link>
              </div>
              <div className='flex flex-col md:flex-row-reverse justify-center gap-[20px] md:gap-[40px] lg:gap-[100px]'>
                <div className='w-full md:w-3/8'>
                  <h3 className='text-[30px] md:text-[30px] font-semibold pb-3'>Movies</h3>
                  <p className='text-[16px] lg:text-[20px] text-justify pb-4'>
                    A simple movie browsing app built while learning React. It uses the TMDB API to fetch real-time movie data, 
                    allowing users to explore trending films with clean visuals and responsive design. This project helped me understand 
                    API integration, dynamic routing, and component structuring in React.
                  </p>
                  <a 
                    href="https://my-movie-tau.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='inline-flex items-center gap-2 text-[18px] text-[#1f1f1f] hover:underline transition duration-500'
                  >
                    <button className='cursor-pointer text-[18px]'>Visit website </button>
                    <FaExternalLinkAlt className='text-[16px] cursor-pointer'/>
                  </a>
                </div>
                <Link
                  to="https://my-movie-tau.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-full md:w-[400px] h-[500px] overflow-hidden rounded-lg shadow-md block"
                  >
                  <img
                    src="/movies.png"
                    alt="Movies preview"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#c1bdd5]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-[#c1bdd5]/70 opacity-0 group-hover:opacity-100 transition-all duration-500 flex 
                  items-center justify-center text-center p-4">
                    <p className="text-[24px] text-gray-800 font-semibold">
                      Movies
                      <br />
                      <span className="text-[18px] font-normal"> 
                        <span className='font-semibold'>Technology:</span> JavaScript, React, TailwindCSS
                      </span>
                    </p>
                  </div>
                </Link>
              </div>
            </div>
        </div>
      </section>

      <div className='bg-[#181918] py-5 '>
        <p className='text-center text-white text-[16px]'>© 2025 Annabel - All Rights Reserved</p>
      </div>
    </>
  )
}

export default App




