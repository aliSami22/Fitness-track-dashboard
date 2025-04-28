import React, { useEffect, useState } from "react";

const ExerciseList = ({ goal }) => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await fetch(
          "https://exercisedb.p.rapidapi.com/exercises",
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key": "هنا_تحط_مفتاحك_الحقيقي",
              "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
            },
          }
        );

        const data = await response.json();

        // فلترة حسب الهدف
        let filteredExercises = data;
        if (goal.toLowerCase() === "lose weight") {
          filteredExercises = data.filter((ex) =>
            ex.bodyPart.toLowerCase().includes("cardio")
          );
        } else if (goal.toLowerCase() === "gain muscle") {
          filteredExercises = data.filter(
            (ex) =>
              ex.target.toLowerCase().includes("chest") ||
              ex.target.toLowerCase().includes("legs") ||
              ex.target.toLowerCase().includes("back")
          );
        }

        // اختار 5 تمارين فقط
        const selected = filteredExercises
          .sort(() => 0.5 - Math.random())
          .slice(0, 5);
        setExercises(selected);
      } catch (error) {
        console.error(error);
      }
    };

    fetchExercises();
  }, [goal]);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">التمارين المناسبة</h2>
      {exercises.length > 0 ? (
        exercises.map((exercise) => (
          <div key={exercise.id} className="mb-4">
            <h3 className="font-semibold capitalize">{exercise.name}</h3>
            <img
              src={exercise.gifUrl}
              alt={exercise.name}
              className="w-full rounded-lg"
            />
          </div>
        ))
      ) : (
        <p>جاري تحميل التمارين...</p>
      )}
    </div>
  );
};

export default ExerciseList;
