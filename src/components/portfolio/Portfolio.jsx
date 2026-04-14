import React from 'react'
import PortfolioSlider from './PortfolioSlider'
import retouchingbefore from '../../assets/_02A1001-HDR-Edit before.jpg';
import retouchingaftermage from '../../assets/_02A1001-HDR-Edit.jpg';
import hdrblendingbefore from '../../assets/PICC5458-HDR-before.jpg';
import hdrblendingafter from '../../assets/PICC5458-HDR-Edit.jpg';
import skyreplacementbefore from '../../assets/sky replacement before.jpg';
import skyreplacementafter from '../../assets/sky replacement after.jpg';
import objectremovelbefore from '../../assets/object removel before.jpg';
import objectremovelafter from '../../assets/object removel after.jpg';
import colorcorectionbefore from '../../assets/_02A0947-HDR-Edit before.jpg';
import colorcorectionafter from '../../assets/_02A0947-HDR-Edit.jpg';
import windowpullbefore from '../../assets/IMG_3946-HDR-before_optimize.jpg';
import windowpullafter from '../../assets/IMG_3946-HDR-Edit_optimize.jpg';

import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';



const imgdata = [
    {
        id:1 ,
        img1:retouchingbefore,
        img2: retouchingaftermage,
        icon: "🏡",
        title: "Interior Living Room",
        imgDiscription:"Soft lighting and color adjustments were used to create a calm and comfortable atmosphere while maintaining a natural and realistic look."
    },
    {
        id:2,
        img1:hdrblendingbefore,
        img2: hdrblendingafter,
        icon: "✨",
        title: "HDR Blending",
        imgDiscription:"The image was enhanced using HDR blending to create a bright, balanced, and natural-looking interior that feels warm and inviting."
    },
    {
        id:3,
        img1:skyreplacementbefore,
        img2: skyreplacementafter,
        icon: "☁️",
        title: " Sky Replacement",
        imgDiscription:"The image was enhanced with sky replacement and color correction to create a vibrant, eye-catching exterior that stands out in listings."
    },
    {
        id:4 ,
        img1:objectremovelbefore,
        img2: objectremovelafter,
        icon: "🧹",
        title: " Object Removal",
        imgDiscription:"Unwanted objects and distractions were removed to create a clean, clutter-free space that improves the overall presentation of the property."
    },
    {
        id:5 ,
        img1:colorcorectionbefore,
        img2: colorcorectionafter,
        icon: "🎨",
        title: "Color Correction",
        imgDiscription:"White balance and colors were adjusted to achieve accurate tones and a natural, visually appealing result."
    },
    {
        id:7 ,
        img1:windowpullbefore,
        img2: windowpullafter,
        icon: "🪟 ",
        title: "Window Pull & perspective correction",
        imgDiscription:"Multiple exposures were blended to clearly show both interior and exterior details, eliminating overexposed windows for a high-end finish.."
    },
]


const Portfolio = () => {

  return (
    <div className='mt-20 px-4  py-10'>
          <h2 className='md:text-6xl sm:text-5xl max-sm:text-4xl text-center text-6xl text-gray-800 dark:text-white'> Real Estate Photo Editing |<span className='bg-linear-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent'>PORTFOLIO</span> </h2>
        
          
          <div className='grid grid-cols-1 my-20 place-items-center '>

                {
                imgdata.map((item)=>{
             return(
              <motion.div
               initial={{ opacity: 0, }}
            whileInView={{ opacity: 1,  }}
            transition={{
                duration: 0.8, delay:0.5
            }}
            key={item.id} className='w-full flex justify-center items-center max-md:flex-col bg-white dark:bg-gray-950 p-4 rounded-lg shadow-md text-center mt-10 border border-gray-300 dark:border-gray-700'>
            <div className='flex flex-col items-center justify-center p-6'>                    
                <h3 className='text-3xl max-sm:text-2xl font-bold mb-2'>{item.icon} <span className='text-indigo-500'>{item.title}</span>  </h3>
                <p className='max-sm:text-sm dark:text-white text-gray-600 max-w-150 h-auto' style={{ fontFamily: "system-ui" }}>{item.imgDiscription}</p>
                  </div>
                     <PortfolioSlider beforeImage={item.img1} afterImage={item.img2} />
                     
                 </motion.div>)})}

            
          </div>
          
       <div className='flex items-center justify-center mt-10'>
       <button className='px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300 cursor-pointer'><NavLink to="/gallery">View gallery</NavLink></button></div>
        
    
    </div>
  )
}

export default Portfolio
