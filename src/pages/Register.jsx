import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import gymBackground from "../assets/gym1.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    weight: "",
    height: "",
    goal: "",
  });
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );
      console.log("✅ Registered:", res.data);
      navigate("/login");
    } catch (err) {
      console.error(
        "❌ Registration failed:",
        err.response?.data || err.message
      );
      alert(
        "Registration failed: " + (err.response?.data?.message || err.message)
      );
    }
  };

  return (
    <div className="h-screen w-full relative overflow-hidden bg-black text-black font-sans">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={gymBackground}
          alt="Gym"
          onLoad={() => setIsImageLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-1000 ease-in-out ${
            isImageLoaded ? "blur-0 opacity-90" : "blur-lg opacity-60"
          }`}
        />
      </div>

      {/* Main */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-between pt-15 py-12">
        {/* Form Container */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-2xl mx-auto bg-white bg-opacity-90 p-10 rounded shadow-xl"
        >
          <motion.h2
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center text-green-700 text-3xl font-bold mb-8"
          >
            Register
          </motion.h2>

          <form onSubmit={handleSubmit}>
            {/* Name + Age */}
            <div className="mb-4 flex gap-4">
              <div className="w-1/2">
                <label className="block text-green-700 mb-2">Name</label>
                <input
                  name="name"
                  placeholder="Full Name"
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-100 border border-gray-200 rounded"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-green-700 mb-2">Age</label>
                <input
                  name="age"
                  type="number"
                  placeholder="Age"
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-100 border border-gray-200 rounded"
                />
              </div>
            </div>

            {/* Email + Password */}
            <div className="mb-4 flex gap-4">
              <div className="w-1/2">
                <label className="block text-green-700 mb-2">Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-100 border border-gray-200 rounded"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-green-700 mb-2">Password</label>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-100 border border-gray-200 rounded"
                />
              </div>
            </div>

            {/* Gender + Goal */}
            <div className="mb-4 flex gap-4">
              <div className="w-1/2">
                <label className="block text-green-700 mb-2">Gender</label>
                <select
                  name="gender"
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-100 border border-gray-200 rounded"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="w-1/2">
                <label className="block text-green-700 mb-2">Goal</label>
                <select
                  name="goal"
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-100 border border-gray-200 rounded"
                >
                  <option value="">Select Goal</option>
                  <option value="Lose Weight">Lose Weight</option>
                  <option value="Gain Muscle">Gain Muscle</option>
                  <option value="Stay Fit">Stay Fit</option>
                </select>
              </div>
            </div>

            {/* Weight + Height */}
            <div className="mb-6 flex gap-4">
              <div className="w-1/2">
                <label className="block text-green-700 mb-2">Weight (kg)</label>
                <input
                  name="weight"
                  type="number"
                  placeholder="Weight"
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-100 border border-gray-200 rounded"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-green-700 mb-2">Height (cm)</label>
                <input
                  name="height"
                  type="number"
                  placeholder="Height"
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-100 border border-gray-200 rounded"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-green-800 hover:bg-green-900 text-white font-medium py-3 px-4 rounded transition duration-300 hover:cursor-pointer"
            >
              Create Account
            </button>

            <div className="text-center mt-4 text-gray-600 text-sm">
              Already have an account?
              <br />
              <Link to="/login" className="text-green-700 hover:underline">
                Login
              </Link>
            </div>
          </form>
        </motion.div>

        {/* Footer Logo */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full max-w-2xl mx-auto mt-auto"
        >
          <h1 className="text-white text-6xl font-bold text-center">LifeFit</h1>
        </motion.div>
      </div>
    </div>
  );
};

export default RegisterPage;
