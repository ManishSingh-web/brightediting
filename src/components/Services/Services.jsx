
import React from 'react'

import { FiLayers } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";

import { CiEraser } from "react-icons/ci";
import { BsCloudSun } from "react-icons/bs";
import { IoColorFilterOutline } from "react-icons/io5";
import { MdWbTwilight } from "react-icons/md";
import { motion } from 'framer-motion';

const arrayofServices =[
    {
        id:1,
        icon:<AiOutlineHome />,
        title:"Photo Retouching",
        Discription:"Enhance the overall quality of your real estate photos with our expert retouching services. We can remove imperfections, adjust lighting, and enhance colors to make your property images look their best."
    
    },
    {
        id:2,
        icon: <FiLayers />,
        title:"HDR Blending",
        Discription:"Our HDR blending service combines multiple exposures of your real estate photos to create a single image with enhanced dynamic range. This technique helps to capture details in both shadows and highlights, resulting in stunning, well-balanced property images."
    
    },
    {
        id:3,
        icon:<BsCloudSun />,
        title:"Sky Replacement",
        Discription:"Transform the look of your real estate photos with our sky replacement service. We can replace dull or overexposed skies with vibrant, eye-catching ones, enhancing the overall appeal of your property images and making them more attractive to potential buyers."
    
    },
    {
        id:4,
        icon: <CiEraser />,
        title:"Object Removal",
        Discription:"Our object removal service allows you to eliminate unwanted elements from your real estate photos, such as power lines, trash cans, or distracting objects. We use advanced editing techniques to seamlessly remove these elements, resulting in cleaner and more appealing property images."
    
    },
    {
        id:5,
        icon: <IoColorFilterOutline />,
        title:"Color Correction",
        Discription:"Enhance the colors in your real estate photos with our color correction service. We can adjust the color balance, saturation, and contrast to make your property images more vibrant and visually appealing, helping them stand out in listings and attract potential buyers."
    
    },
    // {
    //     id:6,
    //     icon:<MdWbTwilight />,
    //     title:"twilight conversion",
    //     Discription:"Our twilight conversion service transforms your real estate photos taken during the day into stunning twilight images. We adjust the lighting and colors to create a warm, inviting atmosphere that can make your property listings more attractive to potential buyers."
    
    // }
]

const Services = () => {
  return (
    <div className=' flex items-center justify-center flex-col gap-10 mt-20 flex-wrap px-4 '>
        <div className='h-auto w-full mt-10'>
           <h2 className='md:text-6xl sm:text-5xl max-sm:text-4xl text-center text-6xl text-gray-800 dark:text-white'>our <span className='bg-linear-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent'>Services</span> </h2>
           <p className=' text-center text-gray-600 dark:text-white'>At Bright Editing, we specialize in professional real estate photo editing designed to enhance property images, improve visual appeal, < br /> and create market-ready listings for agents and photographers.
             </p>
        </div>

        {/* services we offer */}

        <div className='h-auto w-full   text-xl font-bold text-gray-800 dark:text-white mx-auto p-4 inline-flex items-center justify-center flex-wrap gap-10  cursur-pointer '>
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

                key={item.id} className='shadow-black p-4 w-80 h-100 min-w-40 flex justify-center items-center flex-col  flex-wrap bg-gray-800 rounded-2xl hover:scale-105 transition-transform ease-in-out duration-300  hover:border-amber-50 '>
                <div className='flex items-center gap-2 text-amber-500 text-2xl font-bold mb-4'>
                    {item.icon}
                </div>
                <h3 className='bg-linear-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent'>{item.title}</h3> 
                <p className='text-sm font-normal  text-white mt-2' style={{fontFamily:"system-ui"}}>{item.Discription}</p>
               </motion.div>
               )})
              }

         
        </div>

        <div className='h-auto w-full -mt-8 text-xl font-bold text-gray-800 dark:text-white mx-auto  inline-flex items-center justify-center flex-wrap gap-5 cursur-pointer '>
           <h3 className='text-center bg-linear-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent'>Turnaround Time </h3>
           <p className=' text-center text-gray-600 dark:text-white'>Standard delivery within 24 hours. Faster delivery available on request.
             </p>
        </div>
      
    </div>
  )
}

export default Services
