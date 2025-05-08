import React from "react";

const ProgressBar = ({ value, max, color }) => {
  const percentage = (value / max) * 100;
  return (
    <div className="w-full h-2 bg-gray-200 rounded-full mt-2 mb-4">
      <div
        className={`h-full rounded-full ${color}`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
