import { useState, useEffect } from "react";
import MiniDrawer from "../components/MiniDrawer";
import WeeklyStepsUpdater from "../components/WeeklyStepsUpdater";
import WeeklyStepsChart from "../components/WeeklyStepsChart";
import ProgressBar from "../components/ProgressBar";

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
      <div className="flex h-screen  text-gray-800 pl-20">
        {/* Sidebar */}

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          {/* Header */}
          <header className="!p-6 pb-2 flex justify-between items-center">
            <div>
              <h1 className="  text-amber-50 text-4xl font-bold">
                Activity Dashboard
              </h1>
              <p className="text-white/70 text-sm">{formattedDate}</p>
            </div>
          </header>

          <div className="mx-6 bg-white !p-4 rounded-lg shadow-sm mb-4">
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
          </div>

          {/* Dashboard Lower Section */}
          <div className="grid grid-cols-2 gap-4 mx-6 ">
            {/* Daily Summary */}
            <div className="col-span-2 bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-6">Daily Summary</h2>

              <div className="grid grid-cols-2 gap-6">
                {/* Steps */}
                <div>
                  <div className="flex items-center mb-2">
                    <div className="p-2 rounded-full bg-blue-100 mr-3">
                      <IconBarChart className="text-blue-500" />
                    </div>
                    <span className="text-gray-600">Steps</span>
                  </div>
                  <div className="text-2xl font-bold">{totalCalories * 20}</div>
                  <ProgressBar
                    value={totalCalories * 20}
                    max={240 * 20}
                    color="bg-blue-500"
                  />
                </div>

                {/* Active Minutes */}
                <div>
                  <div className="flex items-center mb-2">
                    <div className="p-2 rounded-full bg-green-100 mr-3">
                      <IconBarChart className="text-green-500" />
                    </div>
                    <span className="text-gray-600">Active Minutes</span>
                  </div>
                  <div className="text-2xl font-bold">{totalTime}</div>
                  <ProgressBar
                    value={totalTime}
                    max={1800}
                    color="bg-green-500"
                  />
                </div>

                {/* Floors */}
                <div>
                  <div className="flex items-center mb-2">
                    <div className="p-2 rounded-full bg-purple-100 mr-3">
                      <IconBarChart className="text-purple-500" />
                    </div>
                    <span className="text-gray-600">Floors</span>
                  </div>
                  <div className="text-2xl font-bold">{totalExercises}</div>
                  <ProgressBar
                    value={totalExercises}
                    max={10}
                    color="bg-purple-500"
                  />
                </div>

                {/* Calories */}
                <div>
                  <div className="flex items-center mb-2">
                    <div className="p-2 rounded-full bg-orange-100 mr-3">
                      <IconBarChart className="text-orange-500" />
                    </div>
                    <span className="text-gray-600">Calories</span>
                  </div>
                  <div className="text-2xl font-bold">{totalCalories}</div>
                  <ProgressBar
                    value={totalCalories}
                    max={240}
                    color="bg-orange-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MiniDrawer>
  );
}
