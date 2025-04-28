import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData); // لطباعة البيانات المتبعة للتأكد منها

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json", // تحديد الـ Content-Type هنا
          },
        }
      );

      // إذا كان الـ login ناجحًا
      localStorage.setItem("token", res.data.token); // حفظ التوكن في localStorage
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userData", JSON.stringify(res.data.user));
      alert("Logged in Successfully!");
      navigate("/dashboard"); // الانتقال إلى الـ Dashboard بعد الدخول بنجاح
    } catch (err) {
      console.error(err.response.data); // طباعة تفاصيل الخطأ
      alert("Login Failed!"); // عرض رسالة فشل تسجيل الدخول
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
