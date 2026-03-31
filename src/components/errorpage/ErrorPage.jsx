import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ErrorPage = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden">

      {/* 🔮 Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-linear-to-br from-purple-700 via-pink-600 to-blue-600 opacity-20 blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* 🌟 Floating Glow Orbs */}
      <motion.div
        className="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30 top-10 left-10"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-30 bottom-10 right-10"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* 📦 Main Content */}
      <div className="relative z-10 text-center px-6">

        {/* 🔢 Animated 404 */}
        <motion.h1
          className="text-8xl md:text-9xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-white to-gray-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          404
        </motion.h1>

        {/* ✨ Subtitle */}
        <motion.h2
          className="text-2xl md:text-3xl font-semibold mt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Lost in Space 🚀
        </motion.h2>

        {/* 📝 Description */}
        <motion.p
          className="text-gray-400 mt-4 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          The page you’re looking for doesn’t exist or has been moved.
          Let’s get you back to something beautiful.
        </motion.p>

        {/* 🔘 Animated Button */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Link to="/">
            <button
              className="relative px-8 py-3 rounded-full bg-indigo-500 text-white font-medium overflow-hidden group cursor-pointer hover:bg-indigo-600 transition duration-300"
            >
              <span className="relative z-10">Go Back Home</span>

              {/* Hover glow effect */}
              <span className="absolute inset-0 bg-linear-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-30 transition duration-300 blur-xl"></span>
            </button>
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default ErrorPage;