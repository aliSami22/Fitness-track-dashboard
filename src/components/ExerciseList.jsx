// import React, { useEffect, useState } from "react";

// const ExerciseList = () => {
//   const [bodyPart, setBodyPart] = useState("");
//   const [exercises, setExercises] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [activeExerciseId, setActiveExerciseId] = useState(null);

//   const bodyParts = [
//     "chest",
//     "back",
//     "shoulders",
//     "chest",
//     "back",
//     "shoulders",
//     "chest",
//   ];
//   const getBodyPartOfTheDay = () => {
//     const dayIndex = new Date().getDay();
//     return bodyParts[dayIndex % bodyParts.length];
//   };

//   useEffect(() => {
//     setBodyPart(getBodyPartOfTheDay());
//   }, []);

//   useEffect(() => {
//     if (!bodyPart) return;
//     (async () => {
//       try {
//         const res = await fetch(
//           `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
//           {
//             method: "GET",
//             headers: {
//               "X-RapidAPI-Key":
//                 "06087b2b7fmshdceb5f01bd6d5f6p107470jsn9660c9a9e84b",
//               "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
//             },
//           }
//         );
//         const data = await res.json();
//         if (Array.isArray(data) && data.length) {
//           setExercises(data.sort(() => 0.5 - Math.random()).slice(0, 10));
//         } else {
//           setError("No exercises found for this body part.");
//         }
//       } catch {
//         setError("Failed to fetch exercises.");
//       } finally {
//         setLoading(false);
//       }
//     })();
//   }, [bodyPart]);

//   if (loading) return <div className="text-center text-xl">Loading...</div>;
//   if (error)
//     return <div className="text-center text-xl text-red-600">{error}</div>;

//   return (
//     <div className="!p-20 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-5 xl:grid-cols-4 gap-6 lg:grid-cols-3">
//       {exercises.map((exercise) => (
//         <ExerciseCard
//           key={exercise.id}
//           exercise={exercise}
//           activeExerciseId={activeExerciseId}
//           setActiveExerciseId={setActiveExerciseId}
//         />
//       ))}
//     </div>
//   );
// };

// const ExerciseCard = ({ exercise, activeExerciseId, setActiveExerciseId }) => {
//   const [isTraining, setIsTraining] = useState(false);
//   const [timeLeft, setTimeLeft] = useState(60); // in seconds####################################################################################################
//   const [reps, setReps] = useState(
//     () => parseInt(localStorage.getItem(`reps-${exercise.id}`)) || 0
//   );
//   const [completed, setCompleted] = useState(reps >= 3);
//   const [caloriesBurned, setCaloriesBurned] = useState(0); // Calories burned during this exercise
//   const caloriesPerMinute = 8; // Define calories burned per minute of this exercise (adjustable)

//   const handleStart = () => {
//     if (isTraining || completed || activeExerciseId !== null) return;
//     setIsTraining(true);
//     setActiveExerciseId(exercise.id);
//   };

//   useEffect(() => {
//     let timer;
//     if (isTraining && timeLeft > 0) {
//       timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
//     }
//     if (isTraining && timeLeft === 0) {
//       clearInterval(timer);
//       setIsTraining(false);
//       setActiveExerciseId(null);

//       const newReps = reps + 1;
//       setReps(newReps);
//       localStorage.setItem(`reps-${exercise.id}`, newReps);

//       if (newReps >= 3) {
//         setCompleted(true);
//         const totalExercises =
//           parseInt(localStorage.getItem("totalExercises") || "0") + 1;
//         localStorage.setItem("totalExercises", totalExercises);
//       }

//       const totalSets = parseInt(localStorage.getItem("totalSets") || "0") + 1;
//       localStorage.setItem("totalSets", totalSets);

//       // Calculate calories burned for this exercise (time in minutes)
//       const calories = caloriesPerMinute * (60 / 60); // 600 seconds => 10 minutes####################################################################
//       setCaloriesBurned(calories);
//       const totalCalories =
//         parseInt(localStorage.getItem("totalCalories") || "0") + calories;
//       localStorage.setItem("totalCalories", totalCalories);

//       const totalTime = parseInt(localStorage.getItem("totalTime") || "0") + 60; // ##############################################################
//       localStorage.setItem("totalTime", totalTime);

//       setTimeLeft(60); //#################################################################
//     }
//     return () => clearInterval(timer);
//   }, [isTraining, timeLeft, reps, exercise.id, setActiveExerciseId]);

//   const minutes = Math.floor(timeLeft / 60);
//   const seconds = String(timeLeft % 60).padStart(2, "0");

//   return (
//     <div
//       className={`bg-white !p-4 rounded-xl flex flex-col h-full transition ${
//         completed ? "blur-sm opacity-60 pointer-events-none" : ""
//       }`}
//     >
//       <img
//         src={exercise.gifUrl}
//         alt={exercise.name}
//         className="w-full rounded-md !mb-4"
//       />
//       <h3 className="text-xl font-bold text-black text-center">
//         {exercise.name}
//       </h3>
//       <div>
//         <h3 className="font-semibold">Secondary Muscles:</h3>
//         <ul className="list-disc list-inside text-gray-700 !m-2">
//           {exercise.secondaryMuscles.map((m, i) => (
//             <li key={i}>{m}</li>
//           ))}
//         </ul>
//       </div>

//       <div className="flex-grow" />

//       <p className="text-sm text-center !mb-2"> Sets:{reps} / 3</p>

//       {isTraining && (
//         <p className="text-center text-lg font-semibold !mb-2">
//           Remaining Time: {minutes}:{seconds}
//         </p>
//       )}

//       <button
//         onClick={handleStart}
//         disabled={isTraining || completed || activeExerciseId !== null}
//         className={`${
//           completed
//             ? "bg-gray-400"
//             : isTraining
//             ? "bg-yellow-600"
//             : "bg-[#4C8050]"
//         } text-white !px-4 !py-2 rounded w-full cursor-pointer`}
//       >
//         {completed ? "تم الانتهاء" : isTraining ? "Training ...." : "Start"}
//       </button>

//       {/* Display Calories Burned after the exercise */}
//       {/* {completed && (
//         <p className="text-center text-lg font-semibold mt-2">
//           السعرات الحرارية المحروقة: {caloriesBurned} كيلو كالوري
//         </p>
//       )} */}
//     </div>
//   );
// };

// export default ExerciseList;
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Spiner from "./Spiner";

const ExerciseList = () => {
  const [bodyPart, setBodyPart] = useState("");
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeExerciseId, setActiveExerciseId] = useState(null);

  const bodyParts = [
    "chest",
    "back",
    "shoulders",
    "chest",
    "back",
    "shoulders",
    "chest",
  ];
  const getBodyPartOfTheDay = () => {
    const dayIndex = new Date().getDay();
    return bodyParts[dayIndex % bodyParts.length];
  };

  useEffect(() => {
    setBodyPart(getBodyPartOfTheDay());
  }, []);

  useEffect(() => {
    if (!bodyPart) return;
    (async () => {
      try {
        const res = await fetch(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key":
                "06087b2b7fmshdceb5f01bd6d5f6p107470jsn9660c9a9e84b",
              "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
            },
          }
        );
        const data = await res.json();
        if (Array.isArray(data) && data.length) {
          setExercises(data.sort(() => 0.5 - Math.random()).slice(0, 10));
        } else {
          setError("No exercises found for this body part.");
        }
      } catch {
        setError("Failed to fetch exercises.");
      } finally {
        setLoading(false);
      }
    })();
  }, [bodyPart]);

  if (loading) return <Spiner />;
  if (error)
    return <div className="text-center text-xl text-red-600">{error}</div>;

  return (
    <div className="!p-20 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-5 xl:grid-cols-4 gap-6 lg:grid-cols-3">
      {exercises.map((exercise, index) => (
        <ExerciseCard
          key={exercise.id}
          exercise={exercise}
          activeExerciseId={activeExerciseId}
          setActiveExerciseId={setActiveExerciseId}
          index={index}
        />
      ))}
    </div>
  );
};

const ExerciseCard = ({
  exercise,
  activeExerciseId,
  setActiveExerciseId,
  index,
}) => {
  const [isTraining, setIsTraining] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [reps, setReps] = useState(
    () => parseInt(localStorage.getItem(`reps-${exercise.id}`)) || 0
  );
  const [completed, setCompleted] = useState(reps >= 3);
  const [caloriesBurned, setCaloriesBurned] = useState(0);
  const caloriesPerMinute = 8;

  const handleStart = () => {
    if (isTraining || completed || activeExerciseId !== null) return;
    setIsTraining(true);
    setActiveExerciseId(exercise.id);
  };

  useEffect(() => {
    let timer;
    if (isTraining && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    }
    if (isTraining && timeLeft === 0) {
      clearInterval(timer);
      setIsTraining(false);
      setActiveExerciseId(null);

      const newReps = reps + 1;
      setReps(newReps);
      localStorage.setItem(`reps-${exercise.id}`, newReps);

      if (newReps >= 3) {
        setCompleted(true);
        const totalExercises =
          parseInt(localStorage.getItem("totalExercises") || "0") + 1;
        localStorage.setItem("totalExercises", totalExercises);
      }

      const totalSets = parseInt(localStorage.getItem("totalSets") || "0") + 1;
      localStorage.setItem("totalSets", totalSets);

      const calories = caloriesPerMinute * (60 / 60);
      setCaloriesBurned(calories);
      const totalCalories =
        parseInt(localStorage.getItem("totalCalories") || "0") + calories;
      localStorage.setItem("totalCalories", totalCalories);

      const totalTime = parseInt(localStorage.getItem("totalTime") || "0") + 60;
      localStorage.setItem("totalTime", totalTime);

      setTimeLeft(60);
    }
    return () => clearInterval(timer);
  }, [isTraining, timeLeft, reps, exercise.id, setActiveExerciseId]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
      className={`bg-white !p-4 rounded-xl flex flex-col h-full ${
        completed ? "blur-sm opacity-60 pointer-events-none" : ""
      }`}
    >
      <img
        src={exercise.gifUrl}
        alt={exercise.name}
        className="w-full rounded-md !mb-4"
      />
      <h3 className="text-xl font-bold text-black text-center">
        {exercise.name}
      </h3>
      <div>
        <h3 className="font-semibold">Secondary Muscles:</h3>
        <ul className="list-disc list-inside text-gray-700 !m-2">
          {exercise.secondaryMuscles.map((m, i) => (
            <li key={i}>{m}</li>
          ))}
        </ul>
      </div>

      <div className="flex-grow" />

      <p className="text-sm text-center !mb-2"> Sets: {reps} / 3</p>

      {isTraining && (
        <p className="text-center text-lg font-semibold !mb-2">
          Remaining Time: {minutes}:{seconds}
        </p>
      )}

      <motion.button
        onClick={handleStart}
        disabled={isTraining || completed || activeExerciseId !== null}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.4 }}
        className={`${
          completed
            ? "bg-gray-400"
            : isTraining
            ? "bg-yellow-600"
            : "bg-[#4C8050] cursor-pointer"
        } text-white !px-4 !py-2 rounded w-full `}
      >
        {completed ? "تم الانتهاء" : isTraining ? "Training ...." : "Start"}
      </motion.button>
    </motion.div>
  );
};

export default ExerciseList;
