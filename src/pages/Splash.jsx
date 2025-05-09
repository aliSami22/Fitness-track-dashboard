import React from "react";
import { useNavigate } from "react-router-dom";
import hero from "../assets/hero.svg"; // Replace with actual hero image from design
import { motion } from "framer-motion";
import ParticlesComponent from "../components/ParticlesComponents";

function Splash() {
  const navigate = useNavigate();

  return (
    <>
      <ParticlesComponent />
      <div className="min-h-screen text-white flex items-center justify-center !px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 max-w-7xl w-full">
          {/* Left Text Section */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight !mb-4">
              Achieve Your <br />
              <span className="text-gray-200 font-extrabold tracking-widest">
                FITNESS GOALS
              </span>
              <br />
              With{" "}
              <span className="text-white hover:text-teal-500 ">LifeFit</span>
            </h1>

            <p className="text-sm md:text-base text-gray-200 !mb-6 max-w-md">
              Your Fitness. Your Data. Your Journey. LifeFit is your personal
              fitness dashboard — log workouts, set goals, and visualize your
              progress like never before. Simple to use, powerful to track,
              built to keep you moving forward. Join now and start taking
              control.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/login")}
              className="bg-white text-green-800 !px-6 !py-3 rounded shadow  transition hover:cursor-pointer"
            >
              Start Your Journey
            </motion.button>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            className="flex-1"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img
              src={hero}
              alt="Athlete"
              className="w-full max-w-md !mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Splash;
