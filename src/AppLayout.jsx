import React , {useState} from 'react'
import { Outlet ,ScrollRestoration ,useLocation } from 'react-router-dom'
import NavbarComponent from './components/navbar/NavbarComponent'
import Footercontainer from './components/footer/Footercontainer'
import { motion, AnimatePresence } from "framer-motion";
import WhatsAppButton from './components/whatsappbutton/WhatsAppButton';



const AppLayout = () => {

  const [theme, setTheme] = useState(() => {
    
    if (localStorage.getItem("theme")) {
      const local = localStorage.getItem("theme")
      return local;
    }
    else {
      return "dark";
    }

  });
   const location = useLocation();
  return (
    <>
    <div className=' dark:bg-gray-950 scroll-smooth'>
      <div className='sticky top-0 right-0 left-0 z-50'> 
        <NavbarComponent theme={theme} setTheme={setTheme} />
        </div>

     
          
        <AnimatePresence mode="wait">
        <motion.div
          key={location.key}
         initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
       exit={{ opacity: 0, scale: 0.98 }}
       transition={{ duration: 0.35 }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
      
          <ScrollRestoration />
          </div>
      <Footercontainer theme={theme} />
      <WhatsAppButton />
    
    </>
  )
}

export default AppLayout
