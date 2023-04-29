import React from 'react'
import Tilt from "react-parallax-tilt"
import{motion} from 'framer-motion';
import {styles} from '../styles';
import {services }from '../constants';
import{fadeIn,textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';
const ServiceCard=({index,title,icon})=>{return(
  <Tilt className='xs:w-[250px] w-full'>
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
  >
    <div
    options={{
      max:45,
      scale:1,
      speed:450
    }}
    className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
    >
      {/* this above className for tilting cards */}
      <img src={icon} alt={title}
       className='w-16 h-16 object-contain' 
      />
      <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
    </div>

    </motion.div>
  </Tilt>
)}
const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>
    <motion.p
    variants={fadeIn("","",0.1,1)}
    className='mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px]'
    >
      I'm a coding enthusiast and an aspiring computer engineer with basic knowledge in coding and design. I specialize in frontend development using HTML, CSS, JavaScript and React as well as in data structures and algorithms in C++. I am also skilled in SQL and PL/SQL database management, and have experience working with Git and Github for version control. I enjoy learning about new technologies and constantly improving my skills to stay up-to-date with the latest trends and best practices. I am seeking to explore and develop a divergent thinking by grabbing opportunities

    </motion.p>
    {/* Tilting cards */}
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service,index)=>(<
        ServiceCard key={service.title}index={index} {...service}/>))
      }
    </div>
    </>
  )
}

export default SectionWrapper(About,"about")