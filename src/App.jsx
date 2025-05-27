import './App.css'
import { Link } from 'react-router-dom'
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { BsEnvelopeArrowUp } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';
import { IoPersonSharp } from "react-icons/io5";
import { SiFalcon } from "react-icons/si";
import { FaArrowRightLong } from "react-icons/fa6";



function App() {

  const [isMenuOpen, setIsMenuOpen] = useState()

  return (
    <>
      <div className='bg-[#181918] px-[20px]  md:px-[40px] py-[30px] min-h-screen'>
        <nav className='flex items-center justify-between'>
          <img src="/logo3.png" alt="" className='w-[50px] h-[50px]'/>
          {/* <HiOutlineMenuAlt3 className='md:hidden text-[#fefefe] text-[40px]'/> */}
          <div className='md:flex text-[#fefefe] gap-20 hidden text-[20px]'>
            <ul className='flex items-center gap-10'>
              <li className='cursor-pointer'>About</li>
              <li className='cursor-pointer'>Projects</li>
              <li className='cursor-pointer'>Skills</li>
            </ul>
            <div className='flex border-2 border-[#fefefe] items-center justify-center px-6 py-2 gap-4'>
              <BsEnvelopeArrowUp />
              <button className='cursor-pointer'>Contact me</button>
            </div>
          </div>
          {/* Mobile menu */}
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
                <ul className="pt-20 space-y-10 text-black text-[18px]">
                  <li className="cursor-pointer">About</li>
                  <li className="cursor-pointer">Projects</li>
                  <li className="cursor-pointer">Skills</li>
                </ul>

                <div className="mt-10 flex items-center justify-center gap-4 border-2 border-black px-6 py-2 rounded-lg text-black">
                  <BsEnvelopeArrowUp />
                  <button className="cursor-pointer">Contact Me</button>
                </div>
              </div>
            )}
          </div>
        </nav>
        {/* Hero Section */}
        <div className='pt-20 md:pt-40 px-[20px] lg:px-[50px] xl:px-[100px] flex flex-col lg:flex-row'>
            <div className='text-[#e0e0e0]'>
              <h1 className='text-[60px] text-center lg:text-start leading-16'>
              Owigho Ufuoma Annabel
              </h1>
              <p className='text-[30px]  text-center lg:text-start pt-3'>Frontend Engineer</p>
              <p className='text-center lg:text-start pt-5'>
                Frontend Engineer passionate about building great web experiences.
              </p>
            </div>
        </div>
      </div>

      {/* About Section */}
      <div className='py-[30px] md:py-[50px] lg:py-[80px] px-[20px] md:[35px] lg:px-[50px] xl:px-[100px] 
      flex flex-col lg:flex-row items-center gap-10'>
        <div className='w-full lg:w-1/2'>
          <h2 className='text-center md:text-start text-[40px] lg:text-[60px] font-bold'>About me</h2>
          <div className='text-justify space-y-4'>
              <p className=''>
                Greetings, I'm Owigho Ufuoma Annabel, a dedicated Frontend Developer from Delta State, Nigeria. My academic journey 
                unfolded in the realm of Computer Science, serving as a canvas for my journey into the dynamic realm of web development 
                and establishing a robust foundation for me in technology.
              </p>
              <p className=''>
                I wield proficiency in HTML, CSS, Tailwind, JavaScript, and React. Despite having under a year of hands-on experience, 
                my dedication to the craft is unwavering. Web development is not just a job for me; it's s a genuine passion. I find joy 
                in the challenges it presents and the opportunity to continually expand my problem-solving and analytical skills. 
                The ever-evolving nature of the tech industry fuels my enthusiasm to learn and adapt.
              </p>
              <p>
                My mission is to contribute to the digital landscape by crafting web interfaces that are not only intuitive and visually 
                appealing but also resonate with people. I believe in the transformative power of technology to bring ideas to life, 
                and I'm committed to delivering solutions that not only meet but exceed expectations. Each project is a chance for both 
                professional and personal growth, and I navigate this exciting journey in web development with a deep commitment to continuous 
                learning and improvement. Beyond code, I'm a relentless explorer of design trends and a connoisseur of user experiences. 
                Let's collaborate and turn your visionary ideas into awe-inspiring realities.
              </p>
          </div>
        </div>
        <div className='w-full lg:w-1/2 xl:pl-14 space-y-5 md:space-y-10'>
          <div className='bg-[#e0e0e0] px-1 py-1 -skew-x-8'>
            <div className='bg-[#181918] px-10 py-10'>
              {/* <p>Projects</p> */}
            </div>
          </div>
          <div className='bg-[#e0e0e0] px-1 py-1 -skew-x-8'>
            <div className='bg-[#181918] px-10 py-10'>
              {/* <p>Projects</p> */}
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */} 
      <div className=' pb-[50px] '>
        <h3 className='text-center text-[30px] md:text-[45px] lg:text-[50px] font-semibold pb-5'>My Services</h3>
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
                    <img src="/creative-design-icon-removebg-preview.png" alt="Creative Design" className="w-[80px] h-[80px]" />
                    <p className="text-[#414141] text-[18px] font-semibold">Creative Design</p>
                </div>
                <div className='h-[150px] w-[300px] shadow-[0_20px_40px_#e0e0e0] flex justify-center items-center px-5'>
                    <p className="text-[#414141] text-center">
                        Innovation and Creativity are my forte. I bring fresh, inventive ideas to your project, making you stand out.
                    </p>
                </div>
              </div>
              <div>
                <div className='bg-[#e0e0e0] h-[150px] w-[300px] flex flex-col items-center justify-center'>
                    <img src="/creative-design-icon-removebg-preview.png" alt="Creative Design" className="w-[80px] h-[80px]" />
                    <p className="text-[#414141] text-[18px] font-semibold">Creative Design</p>
                </div>
                <div className='h-[150px] w-[300px] shadow-[0_20px_40px_#e0e0e0] flex justify-center items-center px-5'>
                    <p className="text-[#414141] text-center">
                        Innovation and Creativity are my forte. I bring fresh, inventive ideas to your project, making you stand out.
                    </p>
                </div>
              </div>
              <div>
                <div className='bg-[#e0e0e0] h-[150px] w-[300px] flex flex-col items-center justify-center'>
                    <img src="/creative-design-icon-removebg-preview.png" alt="Creative Design" className="w-[80px] h-[80px]" />
                    <p className="text-[#414141] text-[18px] font-semibold">Creative Design</p>
                </div>
                <div className='h-[150px] w-[300px] shadow-[0_20px_40px_#e0e0e0] flex justify-center items-center px-5'>
                    <p className="text-[#414141] text-center">
                        Innovation and Creativity are my forte. I bring fresh, inventive ideas to your project, making you stand out.
                    </p>
                </div>
              </div>
          </div>
        </div>
        <div className='hidden lg:block'>
          <div className='flex items-center justify-center pt-[100px] pb-[50px] gap-[40px]'>
            <div className="relative w-[250px] h-[150px] group">
              <div className="absolute inset-0 bg-[#e0e0e0] z-10 flex flex-col justify-center items-center transition-transform duration-700
              transform translate-y-0 group-hover:-translate-y-[100px]">
                <img src="/creative-design-icon-removebg-preview.png" alt="Creative Design" className="w-[80px] h-[80px]" />
                <p className="text-[#414141] text-[18px] font-semibold">Creative Design</p>
              </div>
              <div className="relative w-[250px] h-[150px] flex justify-center items-center p-5 box-border transition-all duration-800 
              transform translate-y-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-[50px] shadow-[0_20px_40px_#e0e0e0]">
                <div className="text-center">
                  <p className="text-[#414141]">
                    Innovation and Creativity are my forte. I bring fresh, inventive ideas to your project, making you stand out.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative w-[250px] h-[150px] group">
              <div className="absolute inset-0 bg-[#e0e0e0] z-10 flex flex-col justify-center items-center transition-transform duration-700
              transform translate-y-0 group-hover:-translate-y-[100px]">
                <img src="/creative-design-icon-removebg-preview.png" alt="Creative Design" className="w-[80px] h-[80px]" />
                <p className="text-[#414141] text-[18px] font-semibold">Creative Design</p>
              </div>
              <div className="relative w-[250px] h-[150px] flex justify-center items-center p-5 box-border transition-all duration-800 
              transform translate-y-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-[50px] shadow-[0_20px_40px_#e0e0e0]">
                <div className="text-center">
                  <p className="text-[#414141]">
                    Innovation and Creativity are my forte. I bring fresh, inventive ideas to your project, making you stand out.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative w-[250px] h-[150px] group">
              <div className="absolute inset-0 bg-[#e0e0e0] z-10 flex flex-col justify-center items-center transition-transform duration-700
              transform translate-y-0 group-hover:-translate-y-[100px]">
                <img src="/creative-design-icon-removebg-preview.png" alt="Creative Design" className="w-[80px] h-[80px]" />
                <p className="text-[#414141] text-[18px] font-semibold">Creative Design</p>
              </div>
              <div className="relative w-[250px] h-[150px] flex justify-center items-center p-5 box-border transition-all duration-800 
              transform translate-y-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-[50px] shadow-[0_20px_40px_#e0e0e0]">
                <div className="text-center">
                  <p className="text-[#414141]">
                    Innovation and Creativity are my forte. I bring fresh, inventive ideas to your project, making you stand out.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative w-[250px] h-[150px] group">
              <div className="absolute inset-0 bg-[#e0e0e0] z-10 flex flex-col justify-center items-center transition-transform duration-700
              transform translate-y-0 group-hover:-translate-y-[100px]">
                <img src="/creative-design-icon-removebg-preview.png" alt="Creative Design" className="w-[80px] h-[80px]" />
                <p className="text-[#414141] text-[18px] font-semibold">Creative Design</p>
              </div>
              <div className="relative w-[250px] h-[150px] flex justify-center items-center p-5 box-border transition-all duration-800 
              transform translate-y-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-[50px] shadow-[0_20px_40px_#e0e0e0]">
                <div className="text-center">
                  <p className="text-[#414141]">
                    Innovation and Creativity are my forte. I bring fresh, inventive ideas to your project, making you stand out.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <div className="mt-10 w-[250px] flex items-center justify-center gap-4 border-2 border-black px-6 py-3 rounded-lg text-[20px]
          font-semibold">
            <BsEnvelopeArrowUp />
            <button className="cursor-pointer">Contact Me</button>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className='py-[50px] px-[30px] xl:px-[150px]'>
          <h3 className='text-center text-[30px] md:text-[45px] lg:text-[50px] font-semibold'>My Projects</h3>
          <p className='text-center text-[16px] md:text-[24px] pb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ratione tempore placeat quae, distinctio aspernatur?</p>
          <div className='space-y-10 md:space-y-20'>
            <div className='flex flex-col md:flex-row justify-center gap-[20px] md:gap-[40px] lg:gap-[100px]'>
              <div className='w-full md:w-3/8'>
                <h3 className='text-[30px] md:text-[30px] font-semibold pb-2'>Electra Motors</h3>
                <p className='text-[16px] lg:text-[20px] text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore quasi sapiente aliquid dignissimos? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit quis dignissimos ad natus tempora eius aliquid architecto, assumenda tenetur labore dolores, veritatis rem, ipsum quam praesentium! Beatae id molestias explicabo.</p>
                <a 
                  href="https://electramotors.ng" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='flex items-center gap-2 underline cursor-pointer text-green-300'
                >
                  <button className='cursor-pointer'>View project</button>
                  <FaArrowRightLong className='cursor-pointer'/>
                </a>
              </div>
              <img src="/movies.png" alt="" className='w-[400px] h-[500px] object-cover'/>
            </div>
            <div className='flex flex-col md:flex-row-reverse justify-center gap-[20px] md:gap-[40px] lg:gap-[100px]'>
              <div className='w-full md:w-3/8'>
                <h3 className='text-[30px] md:text-[30px] font-semibold pb-2'>Electra Motors</h3>
                <p className='text-[16px] lg:text-[20px] text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore quasi sapiente aliquid dignissimos? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit quis dignissimos ad natus tempora eius aliquid architecto, assumenda tenetur labore dolores, veritatis rem, ipsum quam praesentium! Beatae id molestias explicabo.</p>
                <a 
                  href="https://electramotors.ng" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='flex items-center gap-2 underline cursor-pointer text-green-300'
                >
                  <button className='cursor-pointer'>View project</button>
                  <FaArrowRightLong className='cursor-pointer'/>
                </a>
              </div>
              <img src="/movies.png" alt="" className='w-[400px] h-[500px] object-cover'/>
            </div>
            <div className='flex flex-col md:flex-row justify-center gap-[20px] md:gap-[40px] lg:gap-[100px]'>
              <div className='w-full md:w-3/8'>
                <h3 className='text-[30px] md:text-[30px] font-semibold pb-2'>Electra Motors</h3>
                <p className='text-[16px] lg:text-[20px] text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore quasi sapiente aliquid dignissimos? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit quis dignissimos ad natus tempora eius aliquid architecto, assumenda tenetur labore dolores, veritatis rem, ipsum quam praesentium! Beatae id molestias explicabo.</p>
                <a 
                  href="https://electramotors.ng" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='flex items-center gap-2 underline cursor-pointer text-green-300'
                >
                  <button className='cursor-pointer'>View project</button>
                  <FaArrowRightLong className='cursor-pointer'/>
                </a>
              </div>
              <img src="/movies.png" alt="" className='w-[400px] h-[500px] object-cover'/>
            </div>
            <div className='flex flex-col md:flex-row-reverse justify-center gap-[20px] md:gap-[40px] lg:gap-[100px]'>
              <div className='w-full md:w-3/8'>
                <h3 className='text-[30px] md:text-[30px] font-semibold pb-2'>Electra Motors</h3>
                <p className='text-[16px] lg:text-[20px] text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore quasi sapiente aliquid dignissimos? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit quis dignissimos ad natus tempora eius aliquid architecto, assumenda tenetur labore dolores, veritatis rem, ipsum quam praesentium! Beatae id molestias explicabo.</p>
                <a 
                  href="https://electramotors.ng" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='flex items-center gap-2 underline cursor-pointer text-green-300'
                >
                  <button className='cursor-pointer'>View project</button>
                  <FaArrowRightLong className='cursor-pointer'/>
                </a>
              </div>
              <img src="/movies.png" alt="" className='w-[400px] h-[500px] object-cover'/>
            </div>
          </div>
      </div>

    </>
  )
}

export default App




