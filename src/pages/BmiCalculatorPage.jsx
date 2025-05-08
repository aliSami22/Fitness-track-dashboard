import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Slider } from "../components/ui/slider";
import MiniDrawer from "../components/MiniDrawer";
import DashboardSection, {
  DashboardHeader as PageHeader,
} from "../components/dashboard/DashboardSection";
import {
  Calculator,
  TrendingDown,
  TrendingUp,
  Activity,
  Maximize2,
  Minimize2,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const BMICategoryInfo = ({ bmi }) => {
  if (!bmi || bmi <= 0) return null;

  let category = "";
  let advice = "";
  let colorClass = "";

  if (bmi < 18.5) {
    category = "Underweight";
    advice =
      "Consider consulting a healthcare provider to ensure you are getting adequate nutrition. Focus on nutrient-dense foods.";
    colorClass = "text-blue-400";
  } else if (bmi < 24.9) {
    category = "Normal weight";
    advice =
      "Great job! Maintain a balanced diet and regular physical activity to stay in this healthy range.";
    colorClass = "text-green-400";
  } else if (bmi < 29.9) {
    category = "Overweight";
    advice =
      "Consider adopting healthier eating habits and increasing physical activity. Small changes can make a big difference.";
    colorClass = "text-yellow-400";
  } else {
    category = "Obese";
    advice =
      "It's recommended to consult a healthcare provider for guidance on a safe and effective weight management plan.";
    colorClass = "text-red-400";
  }

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      className="mt-6 p-4 bg-muted/50 rounded-lg"
    >
      <h3 className={`text-lg font-semibold ${colorClass}`}>{category}</h3>
      <p className="text-sm text-muted-foreground">{advice}</p>
    </motion.div>
  );
};

const BmiCalculatorPage = () => {
  const [height, setHeight] = useState(170); // cm
  const [weight, setWeight] = useState(70); // kg
  const [unitSystem, setUnitSystem] = useState("metric"); // metric or imperial

  const bmi = useMemo(() => {
    if (unitSystem === "metric") {
      if (height > 0 && weight > 0) {
        const heightInMeters = height / 100;
        return (weight / (heightInMeters * heightInMeters)).toFixed(1);
      }
    } else {
      // imperial
      if (height > 0 && weight > 0) {
        // height is in inches, weight in lbs
        return ((weight / (height * height)) * 703).toFixed(1);
      }
    }
    return 0;
  }, [height, weight, unitSystem]);

  const handleHeightChange = (value) => {
    setHeight(value[0]);
  };

  const handleWeightChange = (value) => {
    setWeight(value[0]);
  };

  const toggleUnitSystem = () => {
    if (unitSystem === "metric") {
      // Convert current cm to inches, kg to lbs
      setHeight(Math.round(height * 0.393701));
      setWeight(Math.round(weight * 2.20462));
      setUnitSystem("imperial");
    } else {
      // Convert current inches to cm, lbs to kg
      setHeight(Math.round(height / 0.393701));
      setWeight(Math.round(weight / 2.20462));
      setUnitSystem("metric");
    }
  };

  return (
    <MiniDrawer>
      <motion.div
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <DashboardSection variants={itemVariants} className="text-3xl px-10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-amber-50">
            <PageHeader
              title="BMI Calculator"
              subtitle="Estimate your Body Mass Index."
            />
            <Button
              onClick={toggleUnitSystem}
              variant="outline"
              className="bg-card hover:bg-muted"
            >
              Switch to{" "}
              {unitSystem === "metric"
                ? "Imperial (lbs, in)"
                : "Metric (kg, cm)"}
            </Button>
          </div>
        </DashboardSection>

        <DashboardSection variants={itemVariants} className="px-10 pb-10">
          <Card className="text-amber-50">
            <CardHeader>
              <CardTitle>Calculate Your BMI</CardTitle>
              <CardDescription>
                Adjust the sliders or input your height and weight.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <Label htmlFor="height">
                    Height ({unitSystem === "metric" ? "cm" : "inches"})
                  </Label>
                  <Input
                    type="number"
                    id="height-input"
                    value={height}
                    onChange={(e) => setHeight(parseFloat(e.target.value) || 0)}
                    className="w-24 h-8 text-sm"
                    min={unitSystem === "metric" ? 100 : 40}
                    max={unitSystem === "metric" ? 250 : 100}
                  />
                </div>
                <Slider
                  id="height"
                  min={unitSystem === "metric" ? 100 : 40}
                  max={unitSystem === "metric" ? 250 : 100}
                  step={1}
                  value={[height]}
                  onValueChange={handleHeightChange}
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <Label htmlFor="weight">
                    Weight ({unitSystem === "metric" ? "kg" : "lbs"})
                  </Label>
                  <Input
                    type="number"
                    id="weight-input"
                    value={weight}
                    onChange={(e) => setWeight(parseFloat(e.target.value) || 0)}
                    className="w-24 h-8 text-sm"
                    min={unitSystem === "metric" ? 30 : 60}
                    max={unitSystem === "metric" ? 200 : 440}
                  />
                </div>
                <Slider
                  id="weight"
                  min={unitSystem === "metric" ? 30 : 60}
                  max={unitSystem === "metric" ? 200 : 440}
                  step={1}
                  value={[weight]}
                  onValueChange={handleWeightChange}
                />
              </div>

              {bmi > 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6 bg-white/5 rounded-lg"
                >
                  <p className="text-sm text-muted-foreground">Your BMI is</p>
                  <p className="text-5xl font-bold text-primary my-2">{bmi}</p>
                  <BMICategoryInfo bmi={parseFloat(bmi)} />
                </motion.div>
              )}
            </CardContent>
          </Card>
        </DashboardSection>

        <DashboardSection
          variants={itemVariants}
          className="text-amber-50 px-10 pb-10"
        >
          <Card>
            <CardHeader>
              <CardTitle>Understanding BMI</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>
                Body Mass Index (BMI) is a measure of body fat based on height
                and weight that applies to adult men and women.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <span className="font-semibold text-blue-400">
                    Underweight:
                  </span>{" "}
                  BMI less than 18.5
                </li>
                <li>
                  <span className="font-semibold text-green-400">
                    Normal weight:
                  </span>{" "}
                  BMI 18.5–24.9
                </li>
                <li>
                  <span className="font-semibold text-yellow-400">
                    Overweight:
                  </span>{" "}
                  BMI 25–29.9
                </li>
                <li>
                  <span className="font-semibold text-red-400">Obese:</span> BMI
                  30 or greater
                </li>
              </ul>
              <p className="mt-2">
                BMI is a screening tool and does not diagnose body fatness or
                health. A healthcare provider can assess your health status and
                risks.
              </p>
            </CardContent>
          </Card>
        </DashboardSection>
      </motion.div>
    </MiniDrawer>
  );
};

export default BmiCalculatorPage;
