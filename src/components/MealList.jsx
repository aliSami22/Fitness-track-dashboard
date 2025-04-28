import React, { useEffect, useState } from "react";

const MealList = ({ goal }) => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const mealPromises = Array.from({ length: 5 }, async () => {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/random.php"
        );
        const data = await response.json();
        return data.meals[0];
      });

      const results = await Promise.all(mealPromises);
      setMeals(results);
    };

    fetchMeals();
  }, [goal]);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">الوجبات المناسبة</h2>
      {meals.map((meal) => (
        <div key={meal.idMeal} className="mb-4">
          <h3 className="font-semibold">{meal.strMeal}</h3>
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default MealList;
