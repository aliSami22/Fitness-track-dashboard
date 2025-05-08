// import React from "react";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   CardDescription,
// } from "../ui/card";
// import { Button } from "../ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "../ui/dropdown-menu";
// import { ChevronDown, TrendingUp, TrendingDown } from "lucide-react";

// const ActivityChart = () => {
//   const activityData = [
//     { day: "Mon", value: 3000, steps: 3000 },
//     { day: "Tue", value: 4500, steps: 4500 },
//     { day: "Wed", value: 6000, steps: 6000 },
//     { day: "Thu", value: 2000, steps: 2000 },
//     { day: "Fri", value: 8000, steps: 8000 },
//     { day: "Sat", value: 5000, steps: 5000 },
//     { day: "Sun", value: 3500, steps: 3500 },
//   ];
//   const maxValue = Math.max(...activityData.map((d) => d.value));
//   const totalSteps = activityData.reduce((sum, item) => sum + item.steps, 0);

//   return (
//     <Card className="h-full flex flex-col">
//       <CardHeader className="flex flex-row items-center justify-between">
//         <div>
//           <CardTitle>Activity</CardTitle>
//           <CardDescription className="flex items-center text-sm text-green-400">
//             <TrendingUp className="h-4 w-4 mr-1" /> +12% from last week
//           </CardDescription>
//         </div>
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button
//               variant="outline"
//               size="sm"
//               className="flex items-center gap-1 bg-white/5 hover:bg-white/10 border-white/20 text-foreground/80"
//             >
//               Weekly <ChevronDown className="h-4 w-4" />
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent
//             align="end"
//             className="bg-card/95 backdrop-blur-lg border-white/10"
//           >
//             <DropdownMenuItem>Daily</DropdownMenuItem>
//             <DropdownMenuItem>Weekly</DropdownMenuItem>
//             <DropdownMenuItem>Monthly</DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       </CardHeader>
//       <CardContent className="flex-grow flex flex-col justify-between">
//         <div className="h-56 sm:h-64 flex items-end space-x-1 sm:space-x-2 p-2 sm:p-4 bg-white/5 rounded-lg">
//           {activityData.map((item) => (
//             <div
//               key={item.day}
//               className="flex-1 flex flex-col items-center group cursor-pointer"
//             >
//               <div
//                 className="w-3/4 sm:w-1/2 md:w-3/5 rounded-t-md bg-gradient-to-t from-green-500/70 to-teal-400/70 group-hover:from-green-500 group-hover:to-teal-400 transition-all duration-300 ease-out relative"
//                 style={{ height: `${(item.value / maxValue) * 100}%` }}
//                 title={`${item.steps} steps`}
//               >
//                 <div className="absolute -top-5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-slate-800 text-white text-[10px] px-1.5 py-0.5 rounded-sm shadow-lg">
//                   {item.steps}
//                 </div>
//               </div>
//               <span className="text-[10px] sm:text-xs mt-1 text-muted-foreground/80">
//                 {item.day}
//               </span>
//             </div>
//           ))}
//         </div>
//         <div className="mt-4 text-center">
//           <p className="text-2xl font-semibold text-foreground/90">
//             {totalSteps.toLocaleString()} Steps
//           </p>
//           <p className="text-sm text-muted-foreground/80">This Week</p>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default ActivityChart;
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronDown, TrendingUp } from "lucide-react";
import WeeklyStepsChart from "../WeeklyStepsChart";

const ActivityChart = () => {
  const [activityData, setActivityData] = useState([
    { day: "Sun", value: 0, steps: 0 },
    { day: "Mon", value: 0, steps: 0 },
    { day: "Tue", value: 0, steps: 0 },
    { day: "Wed", value: 0, steps: 0 },
    { day: "Thu", value: 0, steps: 0 },
    { day: "Fri", value: 0, steps: 0 },
    { day: "Sat", value: 0, steps: 0 },
  ]);

  useEffect(() => {
    const rawData = localStorage.getItem("weeklySteps");
    if (rawData) {
      const parsed = JSON.parse(rawData); // parsed is an array
      const dayMap = {
        Sun: "Sunday",
        Mon: "Monday",
        Tue: "Tuesday",
        Wed: "Wednesday",
        Thu: "Thursday",
        Fri: "Friday",
        Sat: "Saturday",
      };

      const orderedData = Object.keys(dayMap).map((shortDay) => {
        const fullDay = dayMap[shortDay];
        const dayEntry = parsed.find((d) => d.day === fullDay);
        const steps = dayEntry?.steps || 0;
        return {
          day: shortDay,
          steps,
          value: steps, // same as steps unless you calculate something else
        };
      });

      setActivityData(orderedData);
    }
  }, []);

  const maxValue = Math.max(...activityData.map((d) => d.value));
  const totalSteps = activityData.reduce((sum, item) => sum + item.steps, 0);

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Activity</CardTitle>
          <CardDescription className="flex items-center text-sm text-green-400">
            <TrendingUp className="h-4 w-4 mr-1" /> +12% from last week
          </CardDescription>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild></DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bg-card/95 backdrop-blur-lg border-white/10"
          >
            <DropdownMenuItem>Daily</DropdownMenuItem>
            <DropdownMenuItem>Weekly</DropdownMenuItem>
            <DropdownMenuItem>Monthly</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>

      <CardContent className="flex-grow flex flex-col justify-between">
        <div className="h-56 sm:h-64 flex items-end space-x-1 sm:space-x-2 p-2 sm:p-4 bg-white/5 rounded-lg">
          {activityData.map((item) => (
            <div
              key={item.day}
              className="flex-1 flex flex-col items-center group cursor-pointer"
            >
              <div
                className="w-3/4 sm:w-1/2 md:w-3/5 rounded-t-md bg-gradient-to-t from-green-500/70 to-teal-400/70 group-hover:from-green-500 group-hover:to-teal-400 transition-all duration-300 ease-out relative"
                style={{ height: `${(item.value / (maxValue || 1)) * 100}%` }}
                title={`${item.steps} steps`}
              >
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-slate-800 text-white text-[10px] px-1.5 py-0.5 rounded-sm shadow-lg">
                  {item.steps}
                </div>
              </div>
              <span className="text-[10px] sm:text-xs mt-1 text-muted-foreground/80">
                {item.day}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 text-center">
          <p className="text-2xl font-semibold text-foreground/90">
            {totalSteps.toLocaleString()} Steps
          </p>
          <p className="text-sm text-muted-foreground/80">This Week</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityChart;
