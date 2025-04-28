import React, { useState, useEffect } from "react";
import ExerciseList from "../components/ExerciseList";
import MealList from "../components/MealList";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // هنجرب نقرأ بيانات اليوزر من localStorage (لو مخزنة)
    const userFromStorage = localStorage.getItem("userData");
    if (userFromStorage) {
      setUserData(JSON.parse(userFromStorage));
    }
  }, []);

  if (!userData) {
    return <div className="p-8">جاري التحميل...</div>;
  }

  return (
    <div className="min-h-screen p-8 bg-gray-100 grid grid-cols-1 md:grid-cols-2 gap-8">
      <ExerciseList userData={userData} />
      <MealList userData={userData} />
    </div>
  );
};

export default Dashboard;
