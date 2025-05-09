import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import gymBackground from "../assets/gym1.png"; // غيّر المسار حسب صورتك
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userData", JSON.stringify(res.data.user));

      alert("Logged in Successfully!");
      navigate("/overview");
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Login Failed!");
    }
  };

  return (
    <div className="h-screen w-full relative overflow-hidden bg-black text-black font-sans">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={gymBackground}
          alt="Gym interior"
          onLoad={() => setIsImageLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-1000 ease-in-out ${
            isImageLoaded ? "blur-0 opacity-90" : "blur-lg opacity-60"
          }`}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-between p-6">
        {/* Form Container */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-md mx-auto my-auto"
        >
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-md shadow-xl p-8"
          >
            <motion.h2
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center text-green-700 text-2xl font-semibold mb-6"
            >
              LOGIN
            </motion.h2>

            <div className="mb-6">
              <label className="block text-green-700 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                className="w-full p-3 bg-gray-100 border border-gray-200 rounded"
              />
            </div>

            <div className="mb-6">
              <label className="block text-green-700 mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full p-3 bg-gray-100 border border-gray-200 rounded"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-800 hover:bg-green-900 text-white font-medium py-3 px-4 rounded transition duration-300 hover:cursor-pointer"
            >
              Start Your Journey
            </button>

            <div className="text-center mt-4 text-gray-600 text-sm">
              Don't have an account yet?
              <br />
              <Link to="/register" className="text-green-700 hover:underline">
                Register now!
              </Link>
            </div>
          </form>
        </motion.div>

        {/* Logo at Bottom */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full max-w-md mx-auto mt-auto mb-8"
        >
          <h1 className="text-white text-6xl font-bold text-center">LifeFit</h1>
        </motion.div>
      </div>
    </div>
  );
}

export default Login;
