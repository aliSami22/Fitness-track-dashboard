// import { useEffect, useState } from "react";

// const daysOfWeek = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// const WeeklyStepsChart = () => {
//   const [weeklyData, setWeeklyData] = useState([]);
//   const [displayedData, setDisplayedData] = useState([]);

//   useEffect(() => {
//     const todayIndex = new Date().getDay();
//     const todayName = daysOfWeek[todayIndex];

//     const burnedCalories =
//       parseFloat(localStorage.getItem("totalCalories")) || 0;
//     const estimatedSteps = Math.floor(burnedCalories * 20);

//     let storedSteps = JSON.parse(localStorage.getItem("weeklySteps"));
//     if (!storedSteps) {
//       storedSteps = daysOfWeek.map((day) => ({
//         day,
//         steps: 0,
//       }));
//     }

//     storedSteps = storedSteps.map((entry) =>
//       entry.day === todayName ? { ...entry, steps: estimatedSteps } : entry
//     );

//     localStorage.setItem("weeklySteps", JSON.stringify(storedSteps));
//     setWeeklyData(storedSteps);

//     // Initial zero display
//     const zeroed = storedSteps.map((entry) => ({
//       ...entry,
//       displayedSteps: 0,
//     }));
//     setDisplayedData(zeroed);

//     // Animate step count for each day
//     storedSteps.forEach((entry, index) => {
//       let current = 0;
//       const target = entry.steps;
//       const step = Math.ceil(target / 30); // سرعة العد

//       const interval = setInterval(() => {
//         current += step;
//         if (current >= target) {
//           current = target;
//           clearInterval(interval);
//         }

//         setDisplayedData((prev) => {
//           const updated = [...prev];
//           updated[index] = { ...updated[index], displayedSteps: current };
//           return updated;
//         });
//       }, 20);
//     });
//   }, []);

//   const maxSteps = Math.max(...weeklyData.map((d) => d.steps), 1);

//   return (
//     <div className="w-full h-[300px] bg-gray-200 p-4 rounded shadow flex items-end justify-between">
//       {displayedData.map((dayData, index) => {
//         const height = (dayData.steps / maxSteps) * 100;

//         return (
//           <div key={index} className="flex flex-col items-center w-20 relative">
//             {/* رقم الخطوات المتزايد */}
//             <div className="mb-1 text-xs text-teal-700 font-semibold">
//               {dayData.displayedSteps}
//             </div>

//             {/* العمود */}
//             <div
//               className="bg-teal-500 w-full rounded-t"
//               style={{
//                 height: `${height}px`,
//                 minHeight: height > 0 ? "10px" : "0px",
//                 transition: "height 0.8s ease",
//               }}
//             ></div>

//             {/* اسم اليوم */}
//             <div className="text-[10px] text-gray-700 mt-1 text-center">
//               {dayData.day.slice(0, 3)}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default WeeklyStepsChart;
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const WeeklyStepsChart = () => {
  const [weeklyData, setWeeklyData] = useState([]);
  const [displayedData, setDisplayedData] = useState([]);

  useEffect(() => {
    const todayIndex = new Date().getDay();
    const todayName = daysOfWeek[todayIndex];

    const burnedCalories =
      parseFloat(localStorage.getItem("totalCalories")) || 0;
    const estimatedSteps = Math.floor(burnedCalories * 20);

    let storedSteps = JSON.parse(localStorage.getItem("weeklySteps"));
    if (!storedSteps) {
      storedSteps = daysOfWeek.map((day) => ({
        day,
        steps: 0,
      }));
    }

    storedSteps = storedSteps.map((entry) =>
      entry.day === todayName ? { ...entry, steps: estimatedSteps } : entry
    );

    localStorage.setItem("weeklySteps", JSON.stringify(storedSteps));
    setWeeklyData(storedSteps);

    const zeroed = storedSteps.map((entry) => ({
      ...entry,
      displayedSteps: 0,
    }));
    setDisplayedData(zeroed);

    storedSteps.forEach((entry, index) => {
      let current = 0;
      const target = entry.steps;
      const step = Math.ceil(target / 30);

      const interval = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }

        setDisplayedData((prev) => {
          const updated = [...prev];
          updated[index] = { ...updated[index], displayedSteps: current };
          return updated;
        });
      }, 20);
    });
  }, []);

  const maxSteps = Math.max(...weeklyData.map((d) => d.steps), 1);

  return (
    <div className="w-full h-[300px] bg-gray-200 p-4 rounded shadow flex items-end justify-between">
      {displayedData.map((dayData, index) => {
        const height = (dayData.steps / maxSteps) * 100;

        return (
          <div key={index} className="flex flex-col items-center w-20 relative">
            <div className="mb-1 text-xs text-teal-700 font-semibold ">
              {dayData.displayedSteps}
            </div>

            {/* ✅ Bar with animation using framer-motion */}
            <motion.div
              className="bg-teal-500 w-full rounded-t"
              initial={{ height: 0 }}
              animate={{
                height: `${height}px`,
              }}
              transition={{ duration: 3, ease: "easeInOut" }}
              style={{
                minHeight: height > 0 ? "10px" : "0px",
              }}
            />

            <div className="text-[10px] text-gray-700 mt-1 text-center">
              {dayData.day.slice(0, 3)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WeeklyStepsChart;
