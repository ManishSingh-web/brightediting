import React from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { FcOldTimeCamera } from "react-icons/fc";

const Pricing = () => {
   
  return (
    <div className=' flex items-center justify-center flex-col gap-10 mt-20 flex-wrap px-4  '>
          <div className='h-auto w-full'>
              <h2 className='md:text-6xl sm:text-5xl max-sm:text-4xl text-center text-6xl text-gray-800 dark:text-white'>💰 Real Estate Photo Editing |<span className='bg-linear-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent'>Pricing</span> </h2>
           <p className='text-center text-indigo-500 mt-10 text-2xl'>Simple, Transparent & Scalable Pricing</p>
              <p className='text-center text-gray-600 dark:text-white text-xl' style={{fontFamily:"system-ui"}}>Our real estate photo editing pricing is designed for agents, photographers, and agencies who want high-quality listing images at affordable rates.</p>
              <p className='text-center text-gray-600 dark:text-white text-xl' style={{ fontFamily: "system-ui" }}>We keep our pricing simple so you can scale your projects without worrying about quality or turnaround time.</p>
              
              <h3 className='text-gray-950 dark:text-white text-center text-2xl mt-10'>📸 Pricing Plans</h3>
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
            className=' p-4 w-80 h-100 min-w-40 flex justify-center items-center flex-col  flex-wrap bg-white dark:bg-gray-950 rounded-2xl gap-3 text-gray-600 border-0 dark:text-white dark:border-2 border-gray-300 shadow-sm hover:shadow-lg transition duration-300 dark:shadow-indigo-700'>
                <h3 className='text-indigo-500'>Basic Editing</h3>
                 <p className=' text-center  text-sm dark:text-gray-50' style={{fontFamily:"system-ui", fontStyle:"italic"}}>Perfect for quick, clean edits</p>
                 <p className='text-center  text-xl text-gray-950 dark:text-gray-50'>₹25 / image · 24h Delivery</p>
                 <ul className='list-disc list-inside mt-2 text-xl font-normal'>
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
             className='p-4 w-80 h-100 min-w-40 flex justify-center items-center flex-col  flex-wrap bg-white dark:bg-gray-950 rounded-2xl gap-3 text-gray-600 border-0 dark:text-white dark:border-2 border-gray-300 shadow-sm hover:shadow-lg transition duration-300 dark:shadow-indigo-700'>
                <h3 className='text-gray-950 dark:text-gray-50' >⭐Most Popular|<span className='text-indigo-500'>Pro Editing </span></h3>
                 <p className=' text-center text-sm dark:text-gray-50' style={{fontFamily:"system-ui", fontStyle:"italic"}}>For high-quality, professional results</p>
                 <p className='text-center text-xl text-gray-950 dark:text-gray-50'>₹50 / image · 24h Delivery</p>
                 <ul className='list-disc list-inside mt-2 text-xl font-normal'>
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
            className='p-4 w-80 h-100 min-w-40 flex justify-center items-center flex-col  flex-wrap bg-white dark:bg-gray-950 rounded-2xl gap-3 text-gray-600 border-0 dark:text-white dark:border-2 border-gray-300 shadow-sm hover:shadow-lg transition duration-300 dark:shadow-indigo-700'>
                <h3 className='text-indigo-500'>Bulk Plan</h3>
                 <p className=' text-center  text-sm dark:text-gray-50'style={{fontFamily:"system-ui", fontStyle:"italic"}} >Best for high-volume photographers</p>
                 <p className='text-center text-xl text-gray-950 dark:text-gray-50'>Starting at ₹35 / image <br /> <span style={{fontFamily:"system-ui", fontStyle:"italic"}} className='text-sm text-gray-600 dark:text-gray-50'>300+ images / month</span> </p>
                 <ul className='list-disc list-inside mt-2 text-xl font-normal'>
                    <li>All Pro features</li>
                    <li>Priority delivery</li>
                    <li>Dedicated supportl</li>                  
                </ul>
            </motion.div>  
        </div>

          <div className=' h-auto w-full text-xl font-bold text-gray-800 dark:text-white mx-auto flex items-center justify-center cursur-pointer gap-5 flex-wrap'> 
              <h3 className='text-gray-800 dark:text-white text-center text-2xl'>Try Our Editing Risk-Free</h3>
              <NavLink
                  to='/contact'><button className='bg-amber-500 text-white px-6 py-3 rounded-full  hover:bg-amber-600 transition-colors duration-300 cursor-pointer '>Get Free Trial Edit</button>
              </NavLink>
          </div>

          <h3 className='text-gray-800 dark:text-white text-center text-2xl'>What’s Included in Every Order</h3>
          <div className='h-auto w-full text-xl font-bold text-gray-800 dark:text-white mx-auto flex items-center justify-center cursur-pointer gap-5 flex-wrap'> 
              <p className='text-center text-gray-600 dark:text-white text-xl' style={{ fontFamily: "system-ui" }}>✅ Natural and realistic editing style</p>
              <p className='text-center text-gray-600 dark:text-white text-xl' style={{ fontFamily: "system-ui" }}>✅ High-resolution, listing-ready images</p>
              <p className='text-center text-gray-600 dark:text-white text-xl' style={{ fontFamily: "system-ui" }}>✅ Fast turnaround time (within 24 hours)</p>
              <p className='text-center text-gray-600 dark:text-white text-xl' style={{ fontFamily: "system-ui" }}>✅ Consistent quality across all images</p>
            </div>
           
          {/* button */}
          <div className="w-full bg-indigo-600 text-gray-100 text-center py-2 text-xl font-medium mb-5">
                          Get your first 2 images edited FREE (No risk trial)
          </div>

        <div className='h-auto w-full text-xl font-bold text-gray-800 dark:text-white mx-auto p-4 inline-flex items-center justify-center flex-wrap gap-10  cursur-pointer max-[678px]:gap-2 min-[240px]:text-center -mt-8'>
        
        <h3 className='text-indigo-500 text-center text-2xl '>Custom Plans Available</h3>
       <p className=' text-center text-gray-600 dark:text-white '>Contact us for custom plans and enterprise solutions.</p>
       
        </div>
    </div>
  )
}

export default Pricing
