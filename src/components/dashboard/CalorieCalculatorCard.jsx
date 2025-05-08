import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";
import { useState, useEffect } from "react";

import { Button } from "../ui/button";
import { Flame, TrendingUp } from "lucide-react";

const CalorieCalculatorCard = () => {
  const dailyIntake = 1850;
  const dailyBurned = 2200;
  const netCalories = dailyBurned - dailyIntake;
  const [totalCalories, setTotalCalories] = useState(0);

  useEffect(() => {
    const calories = parseFloat(localStorage.getItem("totalCalories")) || 0;

    setTotalCalories(calories);
  }, []);

  return (
    <Card className="h-full flex flex-col text-amber-50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Calories</CardTitle>
          <Flame className="h-5 w-5 text-orange-400" />
        </div>
        <CardDescription>Today's Summary</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col items-center justify-center text-center">
        <div className="relative w-36 h-36 sm:w-40 sm:h-40 mb-4">
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-foreground/90">
              {`+${240 - totalCalories}`}
            </span>
            <span className="text-xs text-muted-foreground/80">
              Remaining Cal
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2 w-full max-w-xs mb-3">
          <div className="text-center p-2 bg-white/5 rounded-lg">
            <p className="text-xs text-muted-foreground/80">Burned</p>
            <p className="font-semibold text-accent">{totalCalories} Kcal</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CalorieCalculatorCard;
