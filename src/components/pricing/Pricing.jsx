import React from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { FcOldTimeCamera } from "react-icons/fc";

const Pricing = () => {
   
  return (
    <div className=' flex items-center justify-center flex-col gap-10 mt-20 flex-wrap px-4  '>
          <div className='h-auto w-full'>
              <h2 className='md:text-6xl sm:text-5xl max-sm:text-4xl text-center text-6xl text-gray-800 dark:text-white'>simple <span className='bg-linear-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent'>pricing</span> </h2>
           <p className=' text-center text-gray-600 dark:text-white'>Affordable Real Estate Photo Editing Plans</p>
              <p className=' text-center text-gray-600 dark:text-white mt-5 text-xl' >Professional Real Estate Photo Editing with 24h Turnaround</p>
              <p className=' text-center text-gray-600 dark:text-white' style={{fontFamily:"ui-sans-serif"}}>Trusted by photographers worldwide 📸 </p>
              <p className=' text-center text-gray-600 dark:text-white mt-5 text-xl'>Limited slots available for bulk clients</p>
        </div>


        <div
        className='h-auto w-full  text-xl font-bold text-gray-800 dark:text-white mx-auto inline-flex items-center justify-center flex-wrap gap-10  cursur-pointer '> 

            <motion.div 
             initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.2,
                scale: { type: "spring", visualDuration: 0.2, bounce: 0.3 },
               }}
            className=' p-4 w-80 h-100 min-w-40 flex justify-center items-center flex-col  flex-wrap bg-gray-800 rounded-2xl hover:scale-105 transition-transform ease-in-out duration-300  hover:border-amber-50 gap-3 '>
                <h3 className='bg-linear-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent '>Basic Editing</h3>
                 <p className=' text-center text-white text-sm' style={{fontFamily:"system-ui", fontStyle:"italic"}}>Perfect for quick, clean edits</p>
                 <p className='text-center text-white text-xl'>₹25 / image · 24h Delivery</p>
                 <ul className='list-disc list-inside mt-2 text-sm font-normal  text-white'>
                    <li>Color correction</li>
                    <li>Exposure adjustment</li>
                    <li>HDR blending</li>
                    <li>Basic retouching</li>                   
                </ul>
            </motion.div>  

             <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.2,
                scale: { type: "spring", visualDuration: 0.2, bounce: 0.3 },
            }}
             className=' p-4 w-80 h-100 min-w-40 flex justify-center items-center flex-col  flex-wrap bg-gray-800 rounded-2xl hover:scale-105 transition-transform ease-in-out duration-300  hover:border-amber-50 gap-3 '>
                <h3 className='bg-linear-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent'>Pro Editing ⭐ Most Popular</h3>
                 <p className=' text-center text-white text-sm' style={{fontFamily:"system-ui", fontStyle:"italic"}} >For high-quality, professional results</p>
                 <p className='text-center text-white text-xl'>₹50 / image · 24h Delivery</p>
                 <ul className='list-disc list-inside mt-2 text-sm font-normal  text-white'>
                    <li>Advanced color correction</li>
                    <li>Sky replacement</li>
                    <li>Object removal</li>
                    <li>HDR blending</li>
                    <li>Window pulls</li>
                    <li>Perspective correction</li>
                </ul>
            </motion.div>  
            
            <motion.div 
          initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.2,
                scale: { type: "spring", visualDuration: 0.2, bounce: 0.3 },
            }}
            className='p-4 w-80 h-100 min-w-40 flex justify-center items-center flex-col  flex-wrap bg-gray-800 rounded-2xl hover:scale-105 transition-transform ease-in-out duration-300  hover:border-amber-50 gap-3 '>
                <h3 className='bg-linear-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent'>Bulk Plan</h3>
                 <p className=' text-center text-white text-sm'style={{fontFamily:"system-ui", fontStyle:"italic"}} >Best for high-volume photographers</p>
                 <p className='text-center text-white text-xl'>Starting at ₹35 / image <br /> <span style={{fontFamily:"ui-serif", fontStyle:"italic"}} className='text-sm'>300+ images / month</span> </p>
                 <ul className='list-disc list-inside mt-2 text-sm font-normal  text-white'>
                    <li>All Pro features</li>
                    <li>Priority delivery</li>
                    <li>Dedicated supportl</li>                  
                </ul>
            </motion.div>  
        </div>

          <div className='h-auto w-full text-xl font-bold text-gray-800 dark:text-white mx-auto  inline-flex items-center justify-center flex-wrap   cursur-pointer  flex-col '> 
              <h3 className='text-gray-800 dark:text-white text-center text-2xl'>Try Our Editing Risk-Free</h3>
              {/* <p className=' text-center text-gray-600 dark:text-white '>Send 1 photo and get a free sample edit.</p> */}
               <div className="w-full bg-yellow-400 text-black text-center py-2 text-xl font-medium mb-5">
                          Get your first 2 images edited FREE (No risk trial)
                           </div>

        <NavLink
        to='/contact'><button className='bg-amber-500 text-white px-6 py-3 rounded-full  hover:bg-amber-600 transition-colors duration-300 cursor-pointer '>Get Free Trial Edit</button></NavLink>
        </div>

        <div className='h-auto w-full text-xl font-bold text-gray-800 dark:text-white mx-auto p-4 inline-flex items-center justify-center flex-wrap gap-10  cursur-pointer max-[678px]:gap-2 min-[240px]:text-center -mt-8'>
        
        <h3 className='bg-linear-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent text-center text-2xl '>Custom Plans Available</h3>
       <p className=' text-center text-gray-600 dark:text-white '>Contact us for custom plans and enterprise solutions.</p>
       
        </div>
    </div>
  )
}

export default Pricing
