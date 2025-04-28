import React, { useState, useEffect } from "react";
import ExerciseList from "../components/ExerciseList";
import MealList from "../components/MealList";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      {!userData ? (
        <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-center">Loading...</h2>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ExerciseList goal={userData.goal} />
          <MealList goal={userData.goal} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
