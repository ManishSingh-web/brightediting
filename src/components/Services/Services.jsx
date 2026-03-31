
import React from 'react'

import { FiLayers } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";

import { CiEraser } from "react-icons/ci";
import { BsCloudSun } from "react-icons/bs";
import { IoColorFilterOutline } from "react-icons/io5";
import { MdWbTwilight } from "react-icons/md";
import { motion } from 'framer-motion';
import Workflow from '../WorkFlow/Workflow';

const arrayofServices = [
    
      {
        id:1,
        icon: "✨",
        title:"HDR Photo Editing",
        Discription: "We blend multiple exposures to create perfectly balanced images with natural lighting and accurate colors.",
        checkpoints:[
            "✔ Bright interiors without overexposure",
            "✔ Balanced shadows & highlights",
            "✔ Natural, realistic finish"
        ]
    
    },
    {
        id:2,
        icon:"🪟",
        title:"Window View Enhancement (Window Pulls)",
        Discription: "Show clear and detailed outdoor views through windows — a must for premium listings.",
         checkpoints:[
            "✔ No blown-out windows",
            "✔ Sharp exterior visibility",
            "✔ High-end, luxury feel"
        ]
    
    },
  
    {
        id:3,
        icon: "☁️",
        title:"Sky Replacement",
        Discription: "Turn dull or overcast skies into vibrant, eye-catching backgrounds.",
        checkpoints:[
            "✔ Replace gray skies with blue, sunset, or dramatic clouds",
            "✔ Consistent look across listings",
            "✔ Sunset & twilight options available"
        ]
    
    },
    {
        id:4,
        icon: "🧹",
        title:"Object Removal",
        Discription: "Remove unwanted objects and distractions to create a clean, spacious look.",
          checkpoints:[
            "✔ Remove clutter, wires, blemishes",
            "✔ Clean surfaces and distractions",
            "✔ Enhance overall presentation"
        ]
    
    },
    {
        id:5,
        icon: "🎨",
        title:" Color Correction & Perspective Fix",
        Discription: "Ensure every image looks natural, straight, and visually appealing.",
            checkpoints:[
            "✔ Correct white balance & colors",
            "✔ Straight vertical lines (no distortion)",
            "✔ Professional composition"
        ]
    
    }
]

const Services = () => {
  return (
    <div className=' flex items-center justify-center flex-col gap-10 mt-20 flex-wrap px-4 '>
        <div className='h-auto w-full mt-15'>
              <h2 className='md:text-6xl sm:text-5xl max-sm:text-4xl text-center text-6xl text-gray-800 dark:text-white'>🏡 Real Estate Photo Editing | <span className='bg-linear-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent'> Services</span> </h2>
              
              <h3 className='md:text-4xl sm:text-3xl max-sm:text-2xl text-center text-4xl text-indigo-500 mt-15'>Professional Editing for Stunning Property Images</h3>

              <div className='max-w-200  mt-5 mx-auto'>
           <p className=' text-gray-600 dark:text-white' style={{fontFamily:"system-ui"}}>In today’s competitive real estate market, first impressions happen online.
             High-quality images are no longer optional they are essential. and create market-ready listings for agents and photographers.
             </p>                
              </div>

             <div className='max-w-200  mt-5 mx-auto'>
           <p className=' text-gray-600 dark:text-white'style={{fontFamily:"system-ui"}}>At Bright Editing, we help real estate agents and photographers transform ordinary property photos into clean, bright, and professional listing images that attract more buyers and generate more inquiries.
             </p>                
              </div>

               <h3 className='md:text-4xl sm:text-3xl max-sm:text-2xl text-center text-4xl   mt-15'>📸 <span className='text-indigo-500'>What We Offer</span> </h3>
        </div>

        {/* services we offer */}

        <div className='h-auto w-full text-xl font-bold text-gray-800 dark:text-white mx-auto p-4 inline-flex items-center justify-center flex-wrap gap-10  cursur-pointer '>
            {
                arrayofServices.map((item)=>{

                return(                   
                <motion.div 
                initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.2,
                scale: { type: "spring", visualDuration: 0.2, bounce: 0.3 },
               }}

                key={item.id} className='p-4 w-80 h-100 min-w-40 flex justify-center items-center flex-col  flex-wrap bg-white dark:bg-gray-950 dark:shadow-indigo-700 shadow-sm hover:shadow-lg transition duration-300 rounded-2xl dark:border border-gray-300 dark:border-gray-700 cursor-pointer'>
                <div className='flex items-center gap-2 text-2xl font-bold mb-4'>
                    {item.icon}
                </div>
                <h3 className='text-gray-950 dark:text-white hover:text-indigo-500'>{item.title}</h3> 
                <p className='text-sm font-normal  text-gray-800 dark:text-white mt-2 hover:text-indigo-500' style={{fontFamily:"system-ui"}}>{item.Discription}</p>
                        <ul className='text-sm font-normal  text-gray-800 dark:text-white mt-5 hover:text-indigo-500'>{item.checkpoints.map((items) => {
                    return (<li style={{ fontFamily: "system-ui" }} key={items}>{items}</li>
                    )
                })}</ul>
               </motion.div>
               )})
              }

         
        </div>
          
          <div className='flex items-center justify-evenly gap-10  mt-20 border-2 border-gray-300 dark:border-gray-700 rounded-2xl p-10  w-full flex-wrap'>
            <div className='h-auto -mt-5 text-xl font-bold text-gray-800 dark:text-white mx-auto  gap-5 cursur-pointer p-4'>
                   <h3 className='text-center text-indigo-500'>Turnaround Time </h3>
                   <p className=' text-center text-9xl max-sm:text-5xl  text-gray-600 dark:text-white'>24 hours</p>
            </div>
              
              <div className='h-auto -mt-5 text-xl font-bold text-gray-800 dark:text-white mx-auto items-center justify-center flex-wrap gap-5 cursur-pointer border-2 border-gray-300 dark:border-gray-700 rounded-2xl p-4'>
                  
                     <h3 className='text-center text-2xl'>🚀 <span className='bg-linear-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent'>Why Choose Bright Editing?</span> </h3>
          <div className='h-auto max-w-150 text-xl font-bold text-gray-800 dark:text-white mx-auto flex items-center justify-center cursur-pointer gap-5 flex-wrap'> 
              <p className='text-center text-gray-600 dark:text-white text-sm' style={{ fontFamily: "system-ui" }}>✅ Consistent, high-quality results</p>
              <p className='text-center text-gray-600 dark:text-white text-sm' style={{ fontFamily: "system-ui" }}>✅  Fast turnaround time (24 hours)</p>
              <p className='text-center text-gray-600 dark:text-white text-sm' style={{ fontFamily: "system-ui" }}>✅  Natural and realistic editing style </p>
              <p className='text-center text-gray-600 dark:text-white text-sm' style={{ fontFamily: "system-ui" }}>✅ Scalable for bulk projects</p>
              <p className='text-center text-gray-600 dark:text-white text-sm' style={{ fontFamily: "system-ui" }}>✅ Designed for agents & photographers</p>
            </div>
                  {/* ------------------------------------------- */}
        </div>
          </div>  

          {/* ----------------------------------------------- */}
           <div className='flex items-center justify-evenly gap-10  mt-20 border-2 border-gray-300 dark:border-gray-700 rounded-2xl p-10  w-full flex-wrap'>
            <div className='h-auto -mt-5 text-xl font-bold text-gray-800 dark:text-white mx-auto  gap-5 cursor-pointer border-2 border-gray-300 dark:border-gray-700 rounded-2xl p-4'>
                   <h3 className='text-center'>📈 <span className='text-indigo-500'>The Result?</span>  </h3>
                   <p className=' text-center text-9xl max-sm:text-5xl  text-gray-600 dark:text-white'>Better images  more clicks <span className='text-indigo-500'>= </span> more inquiries <span className='text-indigo-500'>=</span> faster sales. </p>
                   <p className=' text-center text-9xl max-sm:text-4xl  text-gray-600 dark:text-white'>Your listings don<span className='text-indigo-500'>’</span>t just look better 
                   <span className='text-indigo-500'>—</span> they perform better <span className='text-indigo-500'>.</span></p>
            </div>
              


              <h3 className='text-center text-2xl'>🎯 <span className='text-indigo-500'>Who We Work With</span> </h3>
          <div className='h-auto w-full text-xl font-bold text-gray-800 dark:text-white mx-auto flex items-center justify-center cursur-pointer gap-5 flex-wrap'> 
              <p className='text-center text-gray-600 dark:text-white text-xl' style={{ fontFamily: "system-ui" }}>✅ Real estate agents </p>
              <p className='text-center text-gray-600 dark:text-white text-xl' style={{ fontFamily: "system-ui" }}>✅ Property photographers</p>
              <p className='text-center text-gray-600 dark:text-white text-xl' style={{ fontFamily: "system-ui" }}>✅ Real estate agencies </p>
              <p className='text-center text-gray-600 dark:text-white text-xl' style={{ fontFamily: "system-ui" }}>✅ Marketing teams</p>
            </div>
              
          </div>

          {/* ---------------------------------------------- */}
                    <div className='flex items-center justify-evenly gap-10  mt-20  p-10  w-full flex-wrap'>
               <div className='h-auto -mt-5 text-xl font-bold text-gray-800 dark:text-white mx-auto  gap-5 cursur-pointer border-2 border-gray-300 dark:border-gray-700 rounded-2xl p-4'>
                   <h3>🎁 <span className='text-indigo-500'>Try It Risk-Free</span> </h3>
                  <p className=' text-xl  text-gray-600 dark:text-white'>Not sure yet?</p>
                  <p className=' text-gray-600 dark:text-white text-sm' style={{fontFamily:"system-ui"}}>We offer <span className='text-indigo-500 text-2xl'>2 FREE</span>  edited images so you can experience the quality before committing.</p>
            </div>
              
              {/* workflow section */}

              <Workflow />

        <div className='h-auto -mt-5 text-xl font-bold bg-white dark:bg-gray-950 dark: text-gray-800 dark:text-white mx-auto items-center justify-center flex-wrap gap-5 cursur-pointer border-0 dark:border-2 border-gray-300 dark:border-gray-700 rounded-2xl p-4 shadow-sm hover:shadow-lg transition duration-300'>
            <h3 className='text-center' >📩<span className='text-center text-indigo-500'>Get Started</span> </h3>
                 <p className=' text-gray-600 dark:text-white text-5xl max-sm:text-2xl p-2'><a href='#Contact'>👉 Send us your images or contact us today to get started.</a> </p>  
        </div>
          </div>  
           
          

    </div>
  )
}

export default Services
