import React from "react";
import { useNavigate } from "react-router-dom";
import hero from "../assets/hero.svg"; // Replace with actual hero image from design

function Splash() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen  text-white flex items-center justify-center !px-6">
      <div className="flex flex-col lg:flex-row items-center gap-8 max-w-7xl w-full">
        {/* Left Text Section */}
        <div className="flex-1 text-center lg:text-left">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight !mb-4">
              Achive Your <br />
              <span className="text-gray-200 font-extrabold tracking-widest">
                FITNESS GOALS
              </span>{" "}
              <br />
              With <span className="text-white">LifeFit</span>
            </h1>
          </div>
          <div>
            <p className="text-sm md:text-base text-gray-200 !mb-6 max-w-md">
              Your Fitness. Your Data. Your Journey.LifeFit is your personal
              fitness dashboard — log workouts, set goals, and visualize your
              progress like never before.Simple to use, powerful to track, built
              to keep you moving forward.Join now and start taking control.
            </p>

            <button
              onClick={() => navigate("/login")}
              className="bg-white text-green-800 !px-6 !py-3 rounded shadow hover:bg-green-100 transition"
            >
              Start Your Journey
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex-1">
          <img
            src={hero}
            alt="Athlete"
            className="w-full max-w-md !mx-auto  "
          />
        </div>
      </div>
    </div>
  );
}

export default Splash;
