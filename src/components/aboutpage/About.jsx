import React from 'react'
import bgImage from "../../assets/aboutpageBgimg.jpg";
import { CgFontSpacing } from 'react-icons/cg';
import Workflow from '../WorkFlow/Workflow';

const About = () => {
  return (
      <div style={{ backgroundImage: `url(${bgImage})` }}
      className="bg-cover bg-center min-h-screen relative flex justify-center items-center">
          
          <div className="absolute inset-0 bg-black/70"></div>
          
          <div className="relative p-10 my-5 max-w-4xl backdrop-blur-sm bg-black/30 rounded-xl">
              <h1 className='md:text-6xl sm:text-5xl max-sm:text-4xl font-extrabold text-center text-indigo-500 inline-flex '>About Us-</h1>
          <p className="text-white font-thin tracking-wide" style={{fontFamily:"system-ui"}}>Welcome to our platform, a professional solution built specifically for real estate photo editing. Our mission is to help photographers and real estate professionals showcase properties with high-quality images that attract buyers and increase listing engagement.</p>

          <p className="text-white tracking-wide" style={{fontFamily:"system-ui"}}>We specialize in delivering fast, consistent, and professional real estate photo editing services. Our editing process focuses on enhancing property images while maintaining a natural and realistic look. From HDR blending and color correction to sky replacement, window view enhancement, and object removal, we ensure every image highlights the best features of a property.</p>

          <h1 className='md:text-6xl sm:text-5xl max-sm:text-4xl font-extrabold text-center text-indigo-500 inline-flex mt-10'>Our Mission-</h1>
          <p className="text-white" style={{fontFamily:"system-ui"}}>Our goal is to help real estate photographers, agents, and property marketers save time while delivering visually stunning property images. We understand how important high-quality photos are in the real estate industry, where strong visuals can significantly increase buyer interest and listing views.</p>

          <h1 className='md:text-6xl sm:text-5xl max-sm:text-4xl font-extrabold text-center  text-indigo-500 inline-flex mt-10 '>What We Offer-</h1>
          <p className="text-white" style={{fontFamily:"system-ui"}}>We provide a range of professional real estate photo enhancement services, including:</p>
          <ul className="text-white mt-5 list-disc pl-6 text-2xl">
              <li>HDR real estate photo editing</li>
              <li>Exposure and color correction</li>
              <li>Sky replacement</li>
              <li>Window view enhancement</li>
              <li>Perspective correction</li>
              <li>Object removal and decluttering</li>
              <li>Bright and natural property image enhancement</li>
          </ul>
          <p className="text-white mt-5" style={{fontFamily:"system-ui"}}>These services help properties look clean, bright, and inviting, making listings stand out on real estate <br />  platforms and marketing materials.</p>

          <h1 className='md:text-6xl sm:text-5xl max-sm:text-4xl font-extrabold text-center text-indigo-500 inline-flex mt-10 '>Why Choose Us-</h1>
          <p className="text-white mb-5" style={{fontFamily:"system-ui"}}>We provide a simple and efficient workflow for photographers and real estate professionals. You can send your images via Google Drive or similar platforms, share your editing instructions, and receive professionally edited photos with a fast turnaround time.</p>
               <Workflow />
          <p className="text-white mt-10" style={{fontFamily:"system-ui"}}>Our commitment is to deliver consistent quality, reliable service, and edits that enhance your  <br />unique photography style.</p>
          <p className="text-white mt-5" style={{fontFamily:"system-ui"}}>Whether you are a real estate photographer, property agent, or marketing team, we  are here to help you <br /> present  properties in the best possible way.</p>
              
          </div>

          
      
    </div>
  )
}

export default About
