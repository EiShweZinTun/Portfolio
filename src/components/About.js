import React from 'react'
// intersection observer hook
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// varients
import { fadeIn } from '../varients';
//image
import aa from '../assets/aa.png';

const About = () => {
  const [ ref ] = useInView({
    threshold : 0.5,
  });
  return (
    <section className = 'section' id='about' ref= {ref}>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen m-auto'>
          {/*image*/}
          <div className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top '>
            <img src={aa} />
          </div>
          {/*text*/}
          <motion.div 
            varients={fadeIn('left',0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount:0.3 }}
            className='flex-1 max-w-[640px] lg:max-w-[640px]'>
            <h2 className='h2 text-accent'>About me:</h2>
            <h3 className='h3 mb-4'>I'm Full-Stack Developer with over 4 years of experience.</h3>
            <p className='mb-6'>I graduated from Taunggyi Technology University ( Myanmar ) with a specialization in Information Technology ( IT ). I completed my Bachelor's of Technology in 2017 and my Bachelor of Engineering in 2019.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About