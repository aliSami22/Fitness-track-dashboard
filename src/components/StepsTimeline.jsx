import { useEffect, useState } from "react";

const StepsTimeline = () => {
  const [hourlyData, setHourlyData] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("hourlySteps")) || [];
    setHourlyData(data);
  }, []);

  const maxSteps = Math.max(...hourlyData.map((hour) => hour.steps), 1);

  const bestHour = hourlyData.reduce(
    (max, curr) => (curr.steps > max.steps ? curr : max),
    { steps: 0 }
  );
  const leastActiveHour = hourlyData
    .filter((hour) => hour.steps > 0)
    .reduce((min, curr) => (curr.steps < min.steps ? curr : min), {
      steps: Infinity,
    });

  return (
    <div className="w-full h-64 flex items-end justify-between">
      {hourlyData.map((hour, index) => {
        const height = (hour.steps / maxSteps) * 100;
        let color = "bg-blue-400";

        if (hour.time === bestHour.time && bestHour.steps > 0) {
          color = "bg-green-500";
        } else if (
          hour.time === leastActiveHour.time &&
          leastActiveHour.steps < bestHour.steps
        ) {
          color = "bg-orange-400";
        }

        return (
          <div
            key={index}
            className="flex flex-col items-center relative group"
          >
            <div
              className={`${color} w-6 rounded-sm transition-all transform hover:scale-110`}
              style={{ height: `${height}%` }}
            ></div>
            <div className="text-[10px] text-gray-600 mt-1">{hour.time}</div>
            {/* Tooltip */}
            <div className="absolute bottom-full mb-2 hidden group-hover:block text-xs text-white bg-black p-1 rounded">
              {hour.steps} Steps
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StepsTimeline;
