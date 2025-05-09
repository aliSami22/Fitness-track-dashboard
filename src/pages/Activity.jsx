import { useState, useEffect } from "react";
import MiniDrawer from "../components/MiniDrawer";
import WeeklyStepsUpdater from "../components/WeeklyStepsUpdater";
import WeeklyStepsChart from "../components/WeeklyStepsChart";
import ProgressBar from "../components/ProgressBar";
import { motion } from "framer-motion";

//day of day
const formattedDate = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

const IconBarChart = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="20" x2="18" y2="10"></line>
    <line x1="12" y1="20" x2="12" y2="4"></line>
    <line x1="6" y1="20" x2="6" y2="14"></line>
  </svg>
);

export default function Activity() {
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

  return (
    <MiniDrawer>
      <div className="flex h-screen text-gray-800 pl-20">
        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="!p-6 pb-2 flex justify-between items-center"
          >
            <div>
              <h1 className="text-amber-50 text-4xl font-bold">
                Activity Dashboard
              </h1>
              <p className="text-white/70 text-sm">{formattedDate}</p>
            </div>
          </motion.header>

          {/* Weekly Chart Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-6 bg-white !p-4 rounded-lg shadow-sm mb-4"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-medium">Weekly Steps</h2>
              <div className="flex text-xs">
                <div className="bg-green-100 text-green-600 px-2 py-1 rounded mr-2">
                  Best Day
                </div>
                <div className="bg-orange-100 text-orange-600 px-2 py-1 rounded">
                  Least Active
                </div>
              </div>
            </div>
            <WeeklyStepsChart />
          </motion.div>

          {/* Daily Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4 mx-6"
          >
            <div className="col-span-2 bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-6">Daily Summary</h2>
              <div className="grid grid-cols-2 gap-6">
                {[
                  // Your metrics as array to map animations
                  {
                    title: "Steps",
                    value: totalCalories * 20,
                    color: "bg-blue-500",
                  },
                  {
                    title: "Active Minutes",
                    value: totalTime,
                    color: "bg-green-500",
                  },
                  {
                    title: "Floors",
                    value: totalExercises,
                    color: "bg-purple-500",
                  },
                  {
                    title: "Calories",
                    value: totalCalories,
                    color: "bg-orange-500",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + idx * 0.2 }}
                  >
                    <div className="flex items-center mb-2">
                      <div className={`p-2 rounded-full ${item.color}/20 mr-3`}>
                        <IconBarChart className={`${item.color}`} />
                      </div>
                      <span className="text-gray-600">{item.title}</span>
                    </div>
                    <div className="text-2xl font-bold">{item.value}</div>
                    <ProgressBar
                      value={item.value}
                      max={item.title === "Steps" ? 4800 : 240}
                      color={item.color}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </MiniDrawer>
  );
}
