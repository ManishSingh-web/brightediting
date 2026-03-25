import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from 'framer-motion';



const data = [
    {
        id: 1,
        icon: <FiMapPin />,
        title: 'address',
        description: 'Noida (india)'
    },
     {
        id: 2,
        icon: <FaPhoneAlt />,
        title: 'phone',
        description: '9319744830'
    },
     {
        id: 3,
        icon: <MdEmail />,
        title: 'email',
        description: 'maneeshdangi56@gmail.com'
    },
     {
        id: 4,
        icon: <IoTimeOutline/>,
        title: 'working hours',
        description: 'monday to friday 9:00 am to 6:00 pm'
    }
]
    

const LeftsideContact = () => {

  return (
    <motion.div 
       initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
               }}
    className='flex flex-col items-start mt-10 font-sans px-10 py-10 rounded-2xl bg-gray-200 dark:bg-gray-900  min-w-0'>
        <h2 className='text-3xl font-bold mb-6 text-center'>CONTACT INFORMATION </h2>
        <p className='text-gray-400 text-center text-lg'>fill out the contact form or contact us directly using information below</p>

       {
        data.map((item)=>{

           return(
            <div key={item.id} className='flex items-center mt-4 font-sans  p-4 rounded-lg bg-gray-300 dark:bg-gray-700 flex-wrap max-sm:flex-col min-w-0'>
                                <div className='text-4xl text-yellow-600  px-2 py-2  rounded-2xl '>{item.icon}</div>
                          
                                <div className='ml-4 min-w-0'>
                                    <h3 className='text-gray-800 dark:text-white text-xl '>{item.title}</h3>
                                   
                                  
                                    <p style={item.id==3? { fontFamily:"system-ui"}:{}} className="text-gray-500 dark:text-gray-400 text-lg break-all">{item.description}</p>
                                   
                                
                                </div>
                            </div>
           ) 
           
            
        })
       }

       <hr className='my-10 border-gray-400 dark:border-gray-600 w-full' />
       <h2 className='text-3xl font-bold mb-6 text-center max-sm:text-2xl '>follow us</h2>

       <div className='flex items-center mt-4 gap-4 font-sans rounded-lg '>
            <a href="https://www.facebook.com/share/1AvDZdKEbG/" target="_blank" rel="noopener noreferrer" className='text-3xl max-sm:text-2xl text-yellow-600 rounded-2xl'> <SlSocialFacebook /> </a>
            <a href="https://www.instagram.com/bright_editing?igsh=dWdzN2RvdGszdDBo" target="_blank" rel="noopener noreferrer" className='text-3xl max-sm:text-2xl text-yellow-600 rounded-2xl'> <FaInstagram /> </a>
            <a href='https://wa.me/919319744830?text=Hello%20I%20want%20to%20know%20about%20your%20photo%20editing%20services' target="_blank" rel="noopener noreferrer" className='text-3xl max-sm:text-2xl text-yellow-600  rounded-2xl'> <FaWhatsapp /> </a>
       </div>
      

       
      
    </motion.div>

  )
}

export default LeftsideContact
