// // // import { useEffect, useState } from "react";

// // // const daysOfWeek = [
// // //   "Sunday",
// // //   "Monday",
// // //   "Tuesday",
// // //   "Wednesday",
// // //   "Thursday",
// // //   "Friday",
// // //   "Saturday",
// // // ];

// // // const WeeklyStepsChart = () => {
// // //   const [weeklyData, setWeeklyData] = useState([]);

// // //   useEffect(() => {
// // //     // Get data from localStorage
// // //     const storedSteps = JSON.parse(localStorage.getItem("weeklySteps")) || [];

// // //     // Ensure all days are present, fill missing with 0
// // //     const fullWeekData = daysOfWeek.map((day) => {
// // //       const found = storedSteps.find((entry) => entry.day === day);
// // //       return {
// // //         day,
// // //         steps: found ? found.steps : 0,
// // //       };
// // //     });

// // //     setWeeklyData(fullWeekData);
// // //   }, []);

// // //   const maxSteps = Math.max(...weeklyData.map((d) => d.steps), 1); // Avoid divide by zero

// // //   return (
// // //     <div className="w-full h-[300px] bg-gray-100 p-4 rounded shadow flex items-end justify-between">
// // //       {weeklyData.map((dayData, index) => {
// // //         const height = (dayData.steps / maxSteps) * 100;

// // //         return (
// // //           <div key={index} className="flex flex-col items-center w-10 ">
// // //             <div
// // //               className="bg-teal-500 w-full rounded-t"
// // //               style={{
// // //                 height: `${height}px`,
// // //                 minHeight: height > 0 ? "10px" : "0px", // لتفادي اختفاء البار بالكامل
// // //                 transition: "height 0.3s",
// // //               }}
// // //             ></div>
// // //             <div className="text-[10px] text-gray-700 mt-1 text-center">
// // //               {dayData.day.slice(0, 3)}
// // //             </div>
// // //           </div>
// // //         );
// // //       })}
// // //     </div>
// // //   );
// // // };

// // // export default WeeklyStepsChart;

// // export default WeeklyStepsChart;
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

//   useEffect(() => {
//     const daysOfWeek = [
//       "Sunday",
//       "Monday",
//       "Tuesday",
//       "Wednesday",
//       "Thursday",
//       "Friday",
//       "Saturday",
//     ];

//     const todayIndex = new Date().getDay(); // 0 - 6
//     const todayName = daysOfWeek[todayIndex];

//     // 1. السعرات الحالية من localStorage
//     const burnedCalories =
//       parseFloat(localStorage.getItem("totalCalories")) || 0;

//     // 2. نحولها لخطوات
//     const estimatedSteps = Math.floor(burnedCalories * 20); // تقدر تعدل المعامل ده

//     // 3. نجيب بيانات الأسبوع من localStorage أو نجهزها فاضية
//     let storedSteps = JSON.parse(localStorage.getItem("weeklySteps"));
//     if (!storedSteps) {
//       storedSteps = daysOfWeek.map((day) => ({
//         day,
//         steps: 0,
//       }));
//     }

//     // 4. نحدث يوم اليوم فقط
//     storedSteps = storedSteps.map((entry) =>
//       entry.day === todayName ? { ...entry, steps: estimatedSteps } : entry
//     );

//     // 5. نخزن التحديث ونحطها في state
//     localStorage.setItem("weeklySteps", JSON.stringify(storedSteps));
//     setWeeklyData(storedSteps);
//   }, []);

//   const maxSteps = Math.max(...weeklyData.map((d) => d.steps), 1); // Avoid divide by zero

//   return (
//     <div className="w-full h-[300px] bg-gray-100 p-4 rounded shadow flex items-end justify-between">
//       {weeklyData.map((dayData, index) => {
//         const height = dayData.steps;

//         return (
//           <div key={index} className="flex flex-col items-center w-10">
//             <div
//               className="bg-teal-500 w-full rounded-t"
//               style={{
//                 height: `${height / 20}px`,
//                 minHeight: height > 0 ? "10px" : "0px",
//                 transition: "height 0.3s",
//               }}
//             ></div>
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

    // Initial zero display
    const zeroed = storedSteps.map((entry) => ({
      ...entry,
      displayedSteps: 0,
    }));
    setDisplayedData(zeroed);

    // Animate step count for each day
    storedSteps.forEach((entry, index) => {
      let current = 0;
      const target = entry.steps;
      const step = Math.ceil(target / 30); // سرعة العد

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
            {/* رقم الخطوات المتزايد */}
            <div className="mb-1 text-xs text-teal-700 font-semibold">
              {dayData.displayedSteps}
            </div>

            {/* العمود */}
            <div
              className="bg-teal-500 w-full rounded-t"
              style={{
                height: `${height}px`,
                minHeight: height > 0 ? "10px" : "0px",
                transition: "height 0.8s ease",
              }}
            ></div>

            {/* اسم اليوم */}
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
