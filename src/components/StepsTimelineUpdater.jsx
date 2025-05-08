import { useEffect } from "react";

const HOURS = Array.from(
  { length: 24 },
  (_, i) => `${i === 0 ? 12 : i > 12 ? i - 12 : i} ${i < 12 ? "AM" : "PM"}`
);

const StepsTimelineUpdater = () => {
  useEffect(() => {
    const savedCalories =
      JSON.parse(localStorage.getItem("hourlyCalories")) || [];
    const currentCalories =
      parseFloat(localStorage.getItem("totalCalories")) || 0;
    const now = new Date();
    const currentHour = now.getHours(); // 0 to 23

    // Check if already added this hour
    const existingHour = savedCalories.find(
      (item) => item.hour === currentHour
    );
    if (!existingHour) {
      savedCalories.push({ hour: currentHour, calories: currentCalories });
      localStorage.setItem("hourlyCalories", JSON.stringify(savedCalories));
    }

    // Convert to steps per hour
    const hourlySteps = HOURS.map((label, i) => {
      const hourEntry = savedCalories.find((h) => h.hour === i);
      const nextEntry = savedCalories.find((h) => h.hour === i + 1);

      let caloriesDiff = 0;
      if (hourEntry && nextEntry) {
        caloriesDiff = nextEntry.calories - hourEntry.calories;
      }

      const steps = caloriesDiff > 0 ? Math.round(caloriesDiff * 125) : 0; // Example: 1 calorie ≈ 125 steps
      return { time: label, steps };
    });

    localStorage.setItem("hourlySteps", JSON.stringify(hourlySteps));
  }, []);

  return null;
};

export default StepsTimelineUpdater;
