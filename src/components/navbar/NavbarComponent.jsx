import React,{memo, useState} from 'react'
import Togglebutton from './Togglebutton'
import BrightEditing_logo_cutout from '../../assets/BrightEditing_logo_cutout.png'
import { ImMenu } from "react-icons/im";
import { GiSplitCross } from "react-icons/gi";
import BrightEditing_darklogo_cutout_new from '../../assets/BrightEditing_darklogo_cutout_new.png'
import { NavLink } from 'react-router-dom';



const NavbarComponent = ({theme, setTheme}) => {

  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const menubarToggle = (e)=>{
 setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className='relative h-20 flex items-center justify-around flex-nowrap  gap-10 max-sm:gap-0 max-sm:justify-between  bg-white shadow dark:bg-gray-950 dark:shadow-white'>
        {/* logoimg */}
        <img src={theme==="dark" ? BrightEditing_darklogo_cutout_new  : BrightEditing_logo_cutout } alt="logo" className="w-33 min-w-15 h-25 min-h-7" />

      <div className='flex items-center gap-4  shrink-0'>    
        <ul className={`max-md:bg-amber-400  max-md:items-start flex items-center gap-4 absolute md:static  md:w-auto  flex-col md:flex-row p-4 md:p-0 border md:border-none border-amber-500 transition-all duration-200 ` + (isMenuOpen ? '-top-90 left-0 w-full' : ' top-20 left-0 w-full overflow-hidden p-5 ') }>
          <NavLink to="/" 
          className={({ isActive }) =>
       `${
      isActive
        ? "text-blue-500 font-semibold border-b-2 border-blue-500"
        : "text-gray-600"
       }`}
          onClick={menubarToggle} end> <li className={` ${theme ==="dark" ? 'text-white' : ' text-black'} hover:text-gray-600 cursor-pointer`}>
              HOME</li></NavLink> 
          
          <NavLink to="/about" className={({ isActive }) =>
       `${
      isActive
        ? "text-blue-500 font-semibold border-b-2 border-blue-500"
        : "text-gray-600"
       }`} onClick={menubarToggle}> <li className={` ${theme ==="dark" ? 'text-white' : ' text-black'} hover:text-gray-600 cursor-pointer`}>
              About</li></NavLink> 
          
          <NavLink to="/services" className={({ isActive }) =>
       `${
      isActive
        ? "text-blue-500 font-semibold border-b-2 border-blue-500"
        : "text-gray-600"
       }`} onClick={menubarToggle}> <li className={` ${theme ==="dark" ? 'text-white' : ' text-black'} hover:text-gray-600 cursor-pointer`}>
              SERVICES</li></NavLink> 
          
          <NavLink to="/portfolio" prefetch='intent' className={({ isActive }) =>
       `${
      isActive
        ? "text-blue-500 font-semibold border-b-2 border-blue-500"
        : "text-gray-600"
       }`} onClick={menubarToggle}><li className={` ${theme ==="dark" ? 'text-white' : ' text-black'} hover:text-gray-600 cursor-pointer`}>
              PORTFOLIO</li></NavLink>  
          <NavLink to="/gallery" prefetch='intent' className={({ isActive }) =>
       `${
      isActive
        ? "text-blue-500 font-semibold border-b-2 border-blue-500"
        : "text-gray-600"
       }`} onClick={menubarToggle}><li className={` ${theme ==="dark" ? 'text-white' : ' text-black'} hover:text-gray-600 cursor-pointer`}>
              gallery</li></NavLink>  
          
          <NavLink to="/pricing" 
          className={({ isActive }) =>
       `${
      isActive
        ? "text-blue-500 font-semibold border-b-2 border-blue-500"
        : "text-gray-600"
       }`} onClick={menubarToggle}>  <li className={` ${theme ==="dark" ? 'text-white' : ' text-black'} hover:text-gray-600 cursor-pointer`}>
              PRICING</li></NavLink>
          
          <NavLink to="/contact" className={({ isActive }) =>
       `${
      isActive
        ? "text-blue-500 font-semibold border-b-2 border-blue-500"
        : "text-gray-600"
       }`} onClick={menubarToggle}>  <li className={` ${theme ==="dark" ? 'text-white' : ' text-black'} hover:text-gray-600 cursor-pointer`}>
              CONTACT US</li></NavLink>   
          
        </ul>
        <Togglebutton theme={theme} setTheme={setTheme} />
       
       <button onClick={()=>setIsMenuOpen(!isMenuOpen)} className={`md:hidden px-2 py-2 rounded-full transition duration-300 cursor-pointer hover:bg-amber-300 shrink-0' + ${theme ==="dark" ? 'text-white' : ' text-black'}`}>
        {isMenuOpen ? <ImMenu /> : <GiSplitCross />}
         {/* <ImMenu /> */}
       </button>      
      </div>

      

       
      {/* <div>
        
      </div> */}

    </div>
  )
}

const Navbar = memo(NavbarComponent)

export default Navbar
