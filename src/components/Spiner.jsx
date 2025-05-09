import React from "react";

const Spinner = ({ type = "circle", size = 12, color = "green-600" }) => {
  const sizeClass = `w-${size} h-${size}`;

  const getSpinner = () => {
    switch (type) {
      case "dots":
        return (
          <div className="flex space-x-2 items-center justify-center">
            <div
              className={`w-4 h-4 bg-${color} rounded-full animate-bounce`}
            />
            <div
              className={`w-4 h-4 bg-${color} rounded-full animate-bounce`}
              style={{ animationDelay: "0.1s" }}
            />
            <div
              className={`w-4 h-4 bg-${color} rounded-full animate-bounce`}
              style={{ animationDelay: "0.2s" }}
            />
          </div>
        );
      case "pulse":
        return (
          <div
            className={`bg-${color} rounded-full animate-ping ${sizeClass}`}
          />
        );
      case "circle":
      default:
        return (
          <div
            className={`${sizeClass} border-4 border-t-transparent border-${color} rounded-full animate-spin`}
          />
        );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[200px]">
      {getSpinner()}
    </div>
  );
};

export default Spinner;
