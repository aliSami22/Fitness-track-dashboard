import React from "react";
import { useState, useEffect } from "react";
import ActivityChart from "../components/dashboard/ActivityChart";
import CalorieCalculatorCard from "../components/dashboard/CalorieCalculatorCard";
import { Link } from "react-router-dom";

import MiniDrawer from "../components/MiniDrawer";
import { motion } from "framer-motion";

import DashboardSection, {
  DashboardHeader,
  DashboardGrid,
} from "../components/dashboard/DashboardSection";
import { Droplet, Activity as ActivityIcon, Heart, Flame } from "lucide-react";
import StatCard from "../components/dashboard/StatCard";
import WeeklyStepsChart from "../components/WeeklyStepsChart";

const OverView = () => {
  const [totalCalories, setTotalCalories] = useState(0);
  const [totalTime, setTotalTime] = useState(0); // in minutes
  const [totalExercises, setTotalExercises] = useState(0);

  useEffect(() => {
    const calories = parseFloat(localStorage.getItem("totalCalories")) || 0;
    const time = parseInt(localStorage.getItem("totalTime")) || 0;
    const exercises = parseInt(localStorage.getItem("totalExercises")) || 0;

    setTotalCalories(calories);
    setTotalTime(time);
    setTotalExercises(exercises);
  }, []);
  const stats = [
    {
      title: "Steps",
      unit: "Steps",
      value: `${totalCalories * 20}`,
      progress: `${(totalCalories / 240) * 100}`,
      icon: ActivityIcon,
      color: "from-teal-500 to-cyan-600",
      chartData: [10, 20, 15, 30, 25, 40, 35],
      description: `${(totalCalories / 240) * 100}% of daily goal`,
    },
    {
      title: "Water",
      value: `${totalCalories * 0.012}`,
      unit: "Liters",
      progress: `${((totalCalories * 0.012) / 2.88) * 100}`,
      icon: Droplet,
      color: "from-orange-500 to-amber-600",
      chartData: [5, 10, 8, 15, 12, 20, 18],
      description: `${((totalCalories * 0.012) / 2.88) * 100}% of daily goal`,
    },
    {
      title: "Calories Burned",
      value: `${totalCalories}`,
      unit: "Kcal",
      progress: `${(totalCalories / 240) * 100}`,
      icon: Flame,
      color: "from-pink-500 to-rose-600",
      chartData: [20, 15, 25, 10, 30, 22, 35],
      description: `${(totalCalories / 240) * 100}% of target`,
    },
    {
      title: "Heart Rate",
      value: "78",
      unit: "Bpm",
      icon: Heart,
      color: "from-purple-500 to-indigo-600",
      chartData: [70, 72, 75, 73, 78, 76, 77],
      description: "Avg. Resting",
    },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <motion.div
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <MiniDrawer>
        <DashboardHeader
          title="Good Morning"
          subtitle={
            <>
              Welcome Back{" "}
              <span role="img" aria-label="party popper">
                🎉
              </span>
            </>
          }
        />
        <DashboardGrid className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 p-5">
          {stats.map((stat, index) => (
            <div key={index} className="h-full">
              {""}
              <StatCard {...stat} className="h-full" />
            </div>
          ))}
        </DashboardGrid>
        <DashboardGrid className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-5">
          <DashboardSection className="lg:col-span-2">
            <Link to="/activity" className="text-amber-50 hover:underline">
              <ActivityChart />
            </Link>
          </DashboardSection>
          <DashboardSection>
            <Link to="/workout" className="text-amber-50 hover:underline">
              <CalorieCalculatorCard />
            </Link>
          </DashboardSection>
        </DashboardGrid>
      </MiniDrawer>
    </motion.div>
  );
};

export default OverView;
