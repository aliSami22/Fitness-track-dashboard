import React from "react";
import { motion } from "framer-motion";

const ProgressBar = ({ value, max, color }) => {
  const percentage = (value / max) * 100;

  return (
    <div className="w-full h-2 bg-gray-200 rounded-full mt-2 mb-4 overflow-hidden">
      <motion.div
        className={`h-full rounded-full ${color}`}
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 3, ease: "easeInOut" }}
      />
    </div>
  );
};

export default ProgressBar;
