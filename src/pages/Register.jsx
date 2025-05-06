import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import gymBackground from "../assets/gym1.png";
import { Link } from "react-router-dom";

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
          className="w-full h-full object-cover opacity-90"
        />
      </div>

      {/* Main */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-between !pt-40 !py-12">
        {/* Form */}
        <div className="w-full max-w-2xl  !mx-auto bg-white bg-opacity-90 !p-10 rounded shadow-xl">
          <h2 className="text-center text-green-700 text-3xl font-bold !mb-8">
            Register
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Name + Age */}
            <div className="!mb-4 flex !gap-4">
              <div className="w-1/2">
                <label className="block text-green-700 !mb-2">Name</label>
                <input
                  name="name"
                  placeholder="Full Name"
                  onChange={handleChange}
                  required
                  className="w-full !p-3 bg-gray-100 border border-gray-200 rounded"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-green-700 !mb-2">Age</label>
                <input
                  name="age"
                  type="number"
                  placeholder="Age"
                  onChange={handleChange}
                  className="w-full !p-3 bg-gray-100 border border-gray-200 rounded"
                />
              </div>
            </div>

            {/* Email + Password */}
            <div className="!mb-4 flex gap-4">
              <div className="w-1/2">
                <label className="block text-green-700 !mb-2">Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                  required
                  className="w-full !p-3 bg-gray-100 border border-gray-200 rounded"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-green-700 !mb-2">Password</label>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                  required
                  className="w-full !p-3 bg-gray-100 border border-gray-200 rounded"
                />
              </div>
            </div>

            {/* Gender + Goal */}
            <div className="!mb-4 flex gap-4">
              <div className="w-1/2">
                <label className="block text-green-700 !mb-2">Gender</label>
                <select
                  name="gender"
                  onChange={handleChange}
                  required
                  className="w-full !p-3 bg-gray-100 border border-gray-200 rounded"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="w-1/2">
                <label className="block text-green-700 !mb-2">Goal</label>
                <select
                  name="goal"
                  onChange={handleChange}
                  required
                  className="w-full !p-3 bg-gray-100 border border-gray-200 rounded"
                >
                  <option value="">Select Goal</option>
                  <option value="Lose Weight">Lose Weight</option>
                  <option value="Gain Muscle">Gain Muscle</option>
                  <option value="Stay Fit">Stay Fit</option>
                </select>
              </div>
            </div>

            {/* Weight + Height */}
            <div className="!mb-6 flex gap-4">
              <div className="w-1/2">
                <label className="block text-green-700 !mb-2">
                  Weight (kg)
                </label>
                <input
                  name="weight"
                  type="number"
                  placeholder="Weight"
                  onChange={handleChange}
                  className="w-full !p-3 bg-gray-100 border border-gray-200 rounded"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-green-700 !mb-2">
                  Height (cm)
                </label>
                <input
                  name="height"
                  type="number"
                  placeholder="Height"
                  onChange={handleChange}
                  className="w-full !p-3 bg-gray-100 border border-gray-200 rounded"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-800 hover:bg-green-900 text-white font-medium !py-3 !px-4 rounded transition duration-300"
            >
              Create Account
            </button>
            <div className="text-center !mt-4 text-gray-600 text-sm">
              Already have an acoount
              <br />
              <Link to="/register" className="text-green-700 hover:underline">
                Login
              </Link>
            </div>
          </form>
        </div>

        {/* Footer Logo */}
        <div className="w-full max-w-2xl !mx-auto !mt-auto  ">
          <h1 className="text-white text-6xl font-bold text-center">LifeFit</h1>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
