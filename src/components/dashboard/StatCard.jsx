import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";
import { cn } from "../../lib/utils";

const TinyLineChart = ({
  color = "white",
  data = [30, 50, 40, 70, 60, 90, 80],
}) => {
  const width = 60;
  const height = 30;
  const padding = 2;
  const maxY = Math.max(...data);
  const points = data
    .map(
      (d, i) =>
        `${(i / (data.length - 1)) * (width - 2 * padding) + padding},${
          height - (d / maxY) * (height - 2 * padding) - padding
        }`
    )
    .join(" ");

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-16 h-8 opacity-70">
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points}
      />
    </svg>
  );
};

const StatCard = ({
  title,
  value,
  unit,
  progress,
  icon: Icon,
  color,
  description,
  chartData,
  className,
}) => (
  <motion.div
    className={cn("h-full", className)} // Added h-full here
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
  >
    <Card
      className={cn(
        `bg-gradient-to-br ${color} text-white overflow-hidden h-full flex flex-col`,
        className
      )}
    >
      {" "}
      {/* Added h-full and flex flex-col */}
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <CardTitle className="text-sm font-medium text-white/90">
            {title}
          </CardTitle>
          <div className="text-3xl font-bold">
            {value} <span className="text-lg font-normal">{unit}</span>
          </div>
        </div>
        {Icon && <Icon className="h-6 w-6 text-white/80" />}
      </CardHeader>
      <CardContent className="pt-2 flex-grow flex flex-col justify-end">
        {" "}
        {/* Added flex-grow and justify-end for content to take space */}
        {progress !== undefined ? (
          <>
            {chartData && (
              <div className="mb-1 -ml-1">
                <TinyLineChart data={chartData} />
              </div>
            )}
            <p className="text-xs text-white/70 mt-1">
              {description || `${progress}% of your goals`}
            </p>
            <Progress
              value={progress}
              className="w-full h-1.5 mt-2 bg-white/20"
              indicatorClassName="bg-white"
            />
          </>
        ) : chartData ? (
          <div className="-ml-1">
            <TinyLineChart data={chartData} />
          </div>
        ) : (
          <p className="text-xs text-white/70 mt-1">{description}</p>
        )}
      </CardContent>
    </Card>
  </motion.div>
);

export default StatCard;
