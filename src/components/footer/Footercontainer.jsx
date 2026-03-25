 import React from 'react'
 import { GiPolarStar } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import { CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { PiFacebookLogoLight } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";
import BrightEditing_darklogo_cutout_new from '../../assets/BrightEditing_darklogo_cutout_new.png'
import BrightEditing_logo_cutout from '../../assets/BrightEditing_logo_cutout.png'
 
 const Footercontainer = ({theme}) => {

   return (
     <div className=''>

        <div className='flex flex-col justify-center items-center  gap-5 bg-gray-200 w-full p-15 dark:bg-gray-900'>
        <div className='text-amber-500 text-4xl'> <GiPolarStar /> </div>
        
        <h1 className='md:text-6xl sm:text-5xl max-sm:text-4xl text-center text-6xl text-gray-800 dark:text-white'>ready to transform your <span className='bg-linear-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent'>property photos?</span> </h1>
        <p className='text-center dark:text-white'>get started with a free trial and see the difference professional editing makes.</p>
       <NavLink to="/contact"><div className='flex justify-center items-center gap-1 cursor-pointer bg-amber-500 text-white  hover:bg-amber-600 transition-colors duration-300 px-4 py-2 rounded-md max-sm:px-2 max-sm:py-1'> <GiPolarStar /> <span>request free trial</span> </div></NavLink>
       

        </div>   

        <div className='conatiner flex flex-col justify-center items-center bg-gray-300 dark:bg-gray-950 gap-8'>
            <div className='flex  justify-evenly items-center border-b border-amber-50 w-full pt-5 pb-5 max-md:flex-col max-md:justify-center text-center max-md:gap-5 flex-wrap'>
             <div>
                <div className='flex justify-center items-center  -m-3'>
                <img src={theme==="dark" ? BrightEditing_darklogo_cutout_new  : BrightEditing_logo_cutout } alt="logo" className="w-25 min-w-15 h-20 min-h-7" />
                </div>
                <p className='dark:text-gray-300 text-sm text-left max-md:text-center'>professional reak estate photo editing services that <br></br> makes every property shine</p>
             </div>

             <div>
                <h2 className='dark:text-white'>contact us</h2>
                <div className='flex items-center dark:text-gray-300'>
                    
                   
                     <a
                        href="mailto:maneeshdangi56@gmail.com?subject=Photo Editing Inquiry"
                        style={{ fontFamily:"system-ui"}}
                      className="flex items-center gap-2 text-gray-700 hover:text-amber-500 transition  className='break-all text-[16px] '">
                        <CiMail />
                      maneeshdangi56@gmail.com
                    </a>
                </div>
                
             </div>

             <div>
                <h1 className='dark:text-white'>follow us</h1>
                <div className='flex gap-5 dark:text-white mt-1.5 '>
                  <div className='p-2 bg-gray-200 rounded dark:bg-gray-900 cursor-pointer  hover:text-amber-500 transition'><a href="https://www.instagram.com/bright_editing? igsh=dWdzN2RvdGszdDBo"
                           target="_blank"
                           rel="noopener noreferrer"><FaInstagram /></a>  </div>
                  <div className='p-2 bg-gray-200 rounded  dark:bg-gray-900 cursor-pointer  hover:text-amber-500 transition'><a href='https://www.facebook.com/share/1AvDZdKEbG/' target='blank'> <PiFacebookLogoLight /> </a></div>
                  <div className='p-2 bg-gray-200 rounded  dark:bg-gray-900 cursor-pointer  hover:text-amber-500 transition'> <a href='https://wa.me/919319744830?text=Hello%20I%20want%20to%20know%20about%20your%20photo%20editing%20services' target='blank'><FaWhatsapp /> </a> </div>
                  
                  
                  
                </div>

             </div>
            </div>
            
            <div className='pb-5'>
                <p className='dark:text-gray-300 text-sm '>@ 2026 Bright editing. all rights reserved.</p>
            </div>
            
            </div>    
     </div>
   )
 }
 
 export default Footercontainer
 