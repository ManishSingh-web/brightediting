
import React ,{useEffect, memo} from 'react'
import { MdSunny } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";


const Togglebutton = ({theme , setTheme}) => {

  // console.log(theme);
 
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
     root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    
      <div className=' cursor-pointer rounded-full p-2 text-white bg-indigo-500' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      {theme === 'light' ? <BsFillMoonStarsFill /> : <MdSunny />}
        
      </div>
    
  )
}

export default memo(Togglebutton);
