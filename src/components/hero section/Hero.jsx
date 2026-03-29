
import { FaArrowRightFromBracket } from "react-icons/fa6";
import BeforeAfterSlider from './BeforeAfterSlider';
import beforeImage from '../../assets/IMG_1757-HDR befor.jpg';
import afterImage from '../../assets/IMG_1757-HDR after.jpg';
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const discription = "High-quality real estate photo editing including HDR blending, sky replacement,object removal and retouching with fast delivery."


const Hero = () => {
  return (
    <div className=' flex items-center justify-center flex-col gap-10 mt-10 flex-wrap px-4'>

    <div className='flex items-center justify-center flex-col px-4 mt-10'>
        <h1 className='md:text-6xl sm:text-5xl max-sm:text-4xl font-extrabold text-center text-gray-800 dark:text-white'>Real Estate Photo Editing Services | <span className='bg-linear-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent inline-flex'>Bright Editing</span></h1>

        <h2 className="md:text-4xl sm:text-4xl max-sm:text-3xl font-extrabold text-center text-gray-800  dark:text-white mt-10">Professional Real Estate Photo Editing Services</h2>
        <p className='text-center text-gray-600 dark:text-white'>{discription}</p>

         <div className='flex justify-center gap-4 mt-10 max-sm:flex-col max-sm:items-center'>
         
          <NavLink to="/contact"><div
          className=' flex gap-1 justify-center items-center py-2 px-4 bg-amber-500 text-white rounded-lg hover:bg-amber-600  duration-300 cursor-pointer hover:scale-105 transition-transform'>
              <h2>Get Free Trial Edit</h2>
                 <FaArrowRightFromBracket />
            </div> 
            </NavLink>

            <NavLink to="/portfolio"><div
               className="py-2 px-4 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors duration-300 cursor-pointer"             
               > VIEW PORTFOLIO </div> 
               </NavLink>
        </div>   
        
                             <div className="w-full bg-yellow-400 text-black text-center py-2 text-lg font-medium mt-5">
                          🎉 New here? 🎁 Free Trial: Get 2 images edited FREE (24h delivery)
                           </div>

    </div>
     <motion.div className=" w-full flex items-center justify-center " 
      animate={{ y:50 }}
     transition={{ type: "spring", stiffness: 200 ,duration:0.4}}
     >
      <BeforeAfterSlider beforeImage={beforeImage} afterImage={afterImage} />
    </motion.div>
    </div>  
  )
}

export default Hero
