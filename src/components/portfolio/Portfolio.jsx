import React from 'react'
import PortfolioSlider from './PortfolioSlider'
import retouchingbefore from '../../assets/retouching before.jpg';
import retouchingaftermage from '../../assets/retouching after.jpg';
import hdrblendingbefore from '../../assets/HDRBefore.jpg';
import hdrblendingafter from '../../assets/HDRAfter.jpg';
import skyreplacementbefore from '../../assets/sky replacement before.jpg';
import skyreplacementafter from '../../assets/sky replacement after.jpg';
import objectremovelbefore from '../../assets/object removel before.jpg';
import objectremovelafter from '../../assets/object removel after.jpg';
import colorcorectionbefore from '../../assets/color corection before.jpg';
import colorcorectionafter from '../../assets/color corection after.jpg';
import windowpullbefore from '../../assets/window pull before.jpg';
import windowpullafter from '../../assets/window pull after.jpg';

import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';



const imgdata = [
    {
        id:1 ,
        img1:retouchingbefore,
        img2:retouchingaftermage,
        title:"Retouching"
    },
    {
        id:2,
        img1:hdrblendingbefore,
        img2:hdrblendingafter,
        title:"HDR Blending"
    },
    {
        id:3,
        img1:skyreplacementbefore,
        img2:skyreplacementafter,
        title:"Sky Replacement"
    },
    {
        id:4 ,
        img1:objectremovelbefore,
        img2:objectremovelafter,
        title:"Object Removal"
    },
    {
        id:5 ,
        img1:colorcorectionbefore,
        img2:colorcorectionafter,
         title:"Color Correction"
    },
    // {
    //     id:6 ,
    //     img1:twilightbefore,
    //     img2:twilightafter,
    //     title:"Twilight Conversion"
    // },
    {
        id:7 ,
        img1:windowpullbefore,
        img2:windowpullafter,
        title:"window pull"
    },
]


const Portfolio = () => {

  return (
    <div className='mt-20 px-4  py-10'>
        <h2 className='md:text-6xl sm:text-5xl max-sm:text-4xl text-center text-6xl text-gray-800 dark:text-white'>OUR <span className='bg-linear-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent'>PORTFOLIO</span> </h2>
        <p className='text-center text-gray-600 dark:text-white '>Here are some of my projects:</p>
        <div className='grid grid-cols-1  gap-4 mt-10 place-items-center '>

                {
                imgdata.map((item)=>{
             return(
              <motion.div
               initial={{ opacity: 0, }}
            whileInView={{ opacity: 1,  }}
            transition={{
                duration: 0.8, delay:0.5
            }}
              key={item.id} className='w-full flex flex-col justify-center items-center bg-gray-200 dark:bg-gray-950 p-4 rounded-lg shadow-md text-center'>
                <h3 className='text-4xl max-md:text-3xl font-bold mb-2 bg-linear-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent'>{item.title}</h3>
                     <PortfolioSlider beforeImage={item.img1} afterImage={item.img2} />
                     
                 </motion.div>)})}

            
        </div>
       <div className='flex items-center justify-center mt-10'>
       <button className='px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors duration-300 cursor-pointer'><NavLink to="/gallery">View gallery</NavLink></button></div>
        
    
    </div>
  )
}

export default Portfolio
