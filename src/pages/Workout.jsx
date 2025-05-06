import React, { useState, useEffect } from "react";
import ExerciseList from "../components/ExerciseList";
import MiniDrawer from "../components/MiniDrawer";
import GreenCard from "../components/GreenCard";
import clock from "../assets/clock.svg";
import cal from "../assets/cal.svg";
import poses from "../assets/poses.svg";
import sets from "../assets/sets.svg";

const Workout = () => {
  const [userData, setUserData] = useState(null);
  const [burnedCalories, setBurnedCalories] = useState(0);
  const [totalSets, setTotalSets] = useState(0);
  const [totalExercises, setTotalExercises] = useState(0);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
    const savedCalories = parseInt(localStorage.getItem("totalCalories")) || 0;
    const savedSets = parseInt(localStorage.getItem("totalSets")) || 0;
    const savedExercises =
      parseInt(localStorage.getItem("totalExercises")) || 0;

    setBurnedCalories(savedCalories);
    setTotalSets(savedSets);
    setTotalExercises(savedExercises);
  }, []);

  return (
    <MiniDrawer>
      <h2 className="!pl-20 text-amber-50 text-4xl font-bold !pt-10">
        Your Fitness Goals Today
      </h2>
      <p className="!pl-20 text-amber-50 text-xl !pt-3 ">
        Stay on track and crush your goals!
      </p>
      <div className="min-h-screen p-8 ">
        {!userData ? (
          <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-center">Loading...</h2>
          </div>
        ) : (
          <div>
            <ExerciseList goal={userData.goal} />
          </div>
        )}
      </div>
      <p className="!px-20 !pb-15 text-5xl text-amber-50 ">Achievements</p>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 xl:grid-col-6 !px-20 justify-items-center gap-6">
        <GreenCard image={clock} name="Minutes" num={totalSets * 10} />
        <GreenCard image={cal} name="Kcal" num={burnedCalories} />
        <GreenCard image={poses} name="poses" num={totalExercises} />
        <GreenCard image={sets} name="Sets" num={totalSets} />
      </div>
    </MiniDrawer>
  );
};

export default Workout;
