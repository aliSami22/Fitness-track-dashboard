// src/axiosConfig.js
import axios from "axios";

// إعداد axios لربط الواجهة الخلفية
const api = axios.create({
  baseURL: "http://localhost:5000/api", // قم بتعديل هذا إلى URL الخاص بالسيرفر إذا كان مختلف
});

// إضافة التوكن إلى الـ Authorization header لكل طلب
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
