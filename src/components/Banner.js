import React from 'react';
//typeAnimation
import { TypeAnimation } from 'react-type-animation';
// motion
import { motion } from 'framer-motion';
//icons
import {FaFacebook, FaGithub, FaWhatsapp, FaYoutube} from 'react-icons/fa';
//variants
import { fadeIn } from '../varients';
//image
import banner from '../assets/banner.png';


const Banner = () => {
  return (
    <section className ='min-h-[85vh] lg:min-h-[78vh] flex items-center m-auto' id='home'>
      <div className='container mx-auto'>
        <div className='flex justify-between border-0'>
          <div className='m-auto'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              varients = {fadeIn('up',0.3)}
              initial="hidden"
              whiteInView={'show'}
              viewport={{once: false, amount:0.7}}
              className='text-[40px] font-bold leading-[0.8] lg:text-[80px]'>
              EiShweSin<span>Tun</span></motion.h1>
          </div>
          <motion.div 
            varients = { fadeIn('up',0.4)}
            initial="hidden"
            whiteInView={'show'}
            viewport={{once: false, amount:0.7}}
            className='mb-6 font-secondary font-semibold uppercase leading-[1] mt-5'>
            <span className='mr-4 text-white'>I am</span>
            <TypeAnimation sequence={[
              'Full-Stack Developer',3000
            ]}
            speed={50}
            />
          </motion.div>
          <motion.p
            varients = { fadeIn('up',0.5)}
            initial="hidden"
            whiteInView={'show'}
            viewport={{once: false, amount:0.7}}
            className='mb-8 max-w-lg  mx-auto lg:mx-0'>I am an experienced JavaScript developer with a strong proficiency in React.js and using related technologies.
            Results-driven JavaScript and React.js developer with 4 years of experience creating responsive and interactive web applications.Adept at collaborating with cross-functional teams to deliver high-quality software solutions.
</motion.p>
          <motion.div
            varients = { fadeIn('up',0.6)}
            initial="hidden"
            whiteInView={'show'}
            viewport={{once: false, amount:0.7}}
            className='flex mx-w-mx gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            <button className='btn btn-lg'>Contact me</button>
            <a href='#' className='text-gradient btn-link'>My Portfolio</a>
          </motion.div>
          {/* social Link */}
          <motion.div 
            varients = { fadeIn('up',0.7)}
            initial="hidden"
            whiteInView={'show'}
            viewport={{once: false, amount:0.7}}
            className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            <a href='#'>
              <FaGithub/>
            </a>
            <a href='#'>
              <FaFacebook/>
            </a>
            <a href='#'>
              <FaWhatsapp/>
            </a>
            <a href='#'>
              <FaYoutube/>
            </a>
          </motion.div>
          </div>
          <div className='mt-8'>
          <motion.div 
            varients = { fadeIn('down',0.5)}
            initial="hidden"
            whiteInView={'show'}
            className='hidden lg:flex flex-1 max-w-[380px] lg:max-w-[480px]'>
            <img src={banner}/>
          </motion.div> 
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner