import React from "react";
import logo from "../../assets/favicon.png"; 

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">

      <div className="relative flex items-center justify-center">

        {/* 🔄 Spinner Ring */}
        <div className="w-32 h-32 border-4 border-gray-600 border-t-white rounded-full animate-spin"></div>

        {/* 🖼️ Logo in Center */}
       <img
  src={logo}
  alt="Logo"
  className="absolute w-16 h-16 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
/>

      </div>

    </div>
  );
};

export default Loader;