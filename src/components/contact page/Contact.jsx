import React,{useState ,useRef} from 'react'
import ContactformRight from "./ContactformRight"
import LeftsideContact from './LeftsideContact'
import { motion } from 'framer-motion'

const Contact = () => {

  return (
    <div className='mt-25' id='Contact'>
         <h2 className='md:text-6xl sm:text-5xl max-sm:text-4xl text-center text-6xl text-gray-800 dark:text-white'>GET IN <span className='bg-linear-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent'>touch</span> </h2>
           <p className=' text-center text-gray-600 dark:text-white'>have questions about our servics? ready to start your project?</p>
           <p className=' text-center text-gray-600 dark:text-white'>we are here to help you make your propeties shine</p>
            
            
             <div
             className='h-auto w-full text-xl font-bold text-gray-800 dark:text-white mx-auto p-4 inline-flex items-center justify-center flex-wrap gap-10  cursur-pointer '>
               
            
            <ContactformRight />
            <LeftsideContact  />

            <div className='h-auto w-full text-xl font-bold text-gray-800 dark:text-white mx-auto p-4 inline-flex items-center justify-center flex-wrap gap-10  cursur-pointer '>
                <h3 className='text-gray-800 dark:text-white text-center text-2xl'>We look forward to hearing from you and helping you achieve your real estate photography goals!</h3>
            </div>

             </div>


      
    </div>
  )
}

export default Contact
