import { useEffect } from "react";

const WeeklyStepsUpdater = () => {
  useEffect(() => {
    // حاول تجيب البيانات من localStorage
    let storedSteps = JSON.parse(localStorage.getItem("weeklySteps"));

    // لو مش موجودة، أنشئ array فيها 0 لكل يوم من أيام الأسبوع
    if (!storedSteps || !Array.isArray(storedSteps)) {
      storedSteps = daysOfWeek.map((day) => ({
        day,
        steps: 0,
      }));
      localStorage.setItem("weeklySteps", JSON.stringify(storedSteps));
    }

    // بعدها ضيفها للـ state
    setWeeklyData(
      daysOfWeek.map((day) => {
        const found = storedSteps.find((entry) => entry.day === day);
        return {
          day,
          steps: found ? found.steps : 0,
        };
      })
    );
  }, []);

  return null;
};

export default WeeklyStepsUpdater;
