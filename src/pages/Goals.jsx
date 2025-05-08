import React, { useState } from "react";
import MiniDrawer from "../components/MiniDrawer";

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
import { Progress } from "../components/ui/progress";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import DashboardSection, {
  DashboardGrid,
  DashboardHeader as PageHeader,
} from "../components/dashboard/DashboardSection";
import { Target, PlusCircle, Edit2, Trash2, CheckCircle } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const GoalItem = ({ goal, onEdit, onDelete }) => (
  <Card className="hover:shadow-primary/30 transition-shadow duration-300">
    <CardHeader>
      <div className="flex justify-between items-start">
        <CardTitle className="text-base">{goal.name}</CardTitle>
        <div className="flex space-x-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-muted-foreground hover:text-primary"
            onClick={() => onEdit(goal)}
          >
            <Edit2 className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-muted-foreground hover:text-destructive"
            onClick={() => onDelete(goal.id)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <CardDescription>
        {goal.type} - Target: {goal.targetValue} {goal.unit}
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm text-muted-foreground">
          Progress: {goal.currentValue} / {goal.targetValue} {goal.unit}
        </span>
        <span className="text-sm font-semibold text-primary">
          {Math.round((goal.currentValue / goal.targetValue) * 100)}%
        </span>
      </div>
      <Progress
        value={(goal.currentValue / goal.targetValue) * 100}
        className="h-2"
      />
      <p className="text-xs text-muted-foreground mt-2">Due: {goal.dueDate}</p>
    </CardContent>
  </Card>
);

const Goals = () => {
  const [goals, setGoals] = useState([
    {
      id: 1,
      name: "Run 5km",
      type: "Distance",
      currentValue: 2,
      targetValue: 5,
      unit: "km",
      dueDate: "2025-06-30",
      status: "active",
    },
    {
      id: 2,
      name: "Lose 5kg Body Weight",
      type: "Weight",
      currentValue: 1,
      targetValue: 5,
      unit: "kg",
      dueDate: "2025-07-31",
      status: "active",
    },
    {
      id: 3,
      name: "Drink 2L Water Daily",
      type: "Habit",
      currentValue: 20,
      targetValue: 30,
      unit: "days",
      dueDate: "2025-06-15",
      status: "active",
    },
    {
      id: 4,
      name: "Read 10 Fitness Articles",
      type: "Knowledge",
      currentValue: 10,
      targetValue: 10,
      unit: "articles",
      dueDate: "2025-05-30",
      status: "completed",
    },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [editingGoal, setEditingGoal] = useState(null);
  const [newGoal, setNewGoal] = useState({
    name: "",
    type: "Distance",
    targetValue: "",
    unit: "km",
    dueDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewGoal((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingGoal) {
      setGoals(
        goals.map((g) =>
          g.id === editingGoal.id
            ? {
                ...editingGoal,
                ...newGoal,
                targetValue: parseFloat(newGoal.targetValue),
              }
            : g
        )
      );
      setEditingGoal(null);
    } else {
      setGoals([
        ...goals,
        {
          ...newGoal,
          id: Date.now(),
          currentValue: 0,
          targetValue: parseFloat(newGoal.targetValue),
          status: "active",
        },
      ]);
    }
    setNewGoal({
      name: "",
      type: "Distance",
      targetValue: "",
      unit: "km",
      dueDate: "",
    });
    setShowForm(false);
  };

  const handleEdit = (goal) => {
    setEditingGoal(goal);
    setNewGoal({
      name: goal.name,
      type: goal.type,
      targetValue: goal.targetValue.toString(),
      unit: goal.unit,
      dueDate: goal.dueDate,
    });
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setGoals(goals.filter((g) => g.id !== id));
  };

  const activeGoals = goals.filter((g) => g.status === "active");
  const completedGoals = goals.filter((g) => g.status === "completed");

  return (
    <MiniDrawer>
      <motion.div
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <DashboardSection
          variants={itemVariants}
          className="text-amber-50 p-10"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground/90">
                Your Fitness Goals
              </h1>
              <p className="text-muted-foreground/80">
                Set, track, and achieve your ambitions.
              </p>
            </div>
            <Button
              onClick={() => {
                setShowForm(true);
                setEditingGoal(null);
                setNewGoal({
                  name: "",
                  type: "Distance",
                  targetValue: "",
                  unit: "km",
                  dueDate: "",
                });
              }}
              className="bg-gradient-to-r from-green-500 to-teal-500 text-white"
            >
              <PlusCircle className="mr-2 h-4 w-4" /> Set New Goal
            </Button>
          </div>
        </DashboardSection>

        {showForm && (
          <DashboardSection
            variants={itemVariants}
            className="text-amber-50 p-10"
          >
            <Card>
              <CardHeader>
                <CardTitle>
                  {editingGoal ? "Edit Goal" : "Set a New Goal"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Goal Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={newGoal.name}
                      onChange={handleInputChange}
                      placeholder="e.g., Run a 5K"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="type">Goal Type</Label>
                      <Input
                        id="type"
                        name="type"
                        value={newGoal.type}
                        onChange={handleInputChange}
                        placeholder="e.g., Distance, Weight"
                        required
                      />
                      {/* TODO: Replace with Select component */}
                    </div>
                    <div>
                      <Label htmlFor="targetValue">Target Value</Label>
                      <Input
                        id="targetValue"
                        name="targetValue"
                        type="number"
                        value={newGoal.targetValue}
                        onChange={handleInputChange}
                        placeholder="e.g., 5"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="unit">Unit</Label>
                      <Input
                        id="unit"
                        name="unit"
                        value={newGoal.unit}
                        onChange={handleInputChange}
                        placeholder="e.g., km, kg, reps"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="dueDate">Due Date</Label>
                    <Input
                      id="dueDate"
                      name="dueDate"
                      type="date"
                      value={newGoal.dueDate}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowForm(false)}
                    >
                      Cancel
                    </Button>
                    <Button type="submit">
                      {editingGoal ? "Save Changes" : "Add Goal"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </DashboardSection>
        )}

        <DashboardSection
          variants={itemVariants}
          className="text-amber-50 p-10"
        >
          <Tabs defaultValue="active" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="active">
                Active Goals ({activeGoals.length})
              </TabsTrigger>
              <TabsTrigger value="completed">
                Completed Goals ({completedGoals.length})
              </TabsTrigger>
            </TabsList>
            <TabsContent value="active">
              {activeGoals.length > 0 ? (
                <DashboardGrid className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {activeGoals.map((goal) => (
                    <GoalItem
                      key={goal.id}
                      goal={goal}
                      onEdit={handleEdit}
                      onDelete={handleDelete}
                    />
                  ))}
                </DashboardGrid>
              ) : (
                <p className="text-muted-foreground text-center py-8">
                  No active goals. Time to set some!
                </p>
              )}
            </TabsContent>
            <TabsContent value="completed">
              {completedGoals.length > 0 ? (
                <DashboardGrid className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {completedGoals.map((goal) => (
                    <Card
                      key={goal.id}
                      className="border-green-500/50 bg-green-500/5"
                    >
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-base text-green-400">
                            {goal.name}
                          </CardTitle>
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        </div>
                        <CardDescription>
                          {goal.type} - Target: {goal.targetValue} {goal.unit}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Completed on: {goal.dueDate}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </DashboardGrid>
              ) : (
                <p className="text-muted-foreground text-center py-8">
                  No goals completed yet. Keep pushing!
                </p>
              )}
            </TabsContent>
          </Tabs>
        </DashboardSection>
      </motion.div>
    </MiniDrawer>
  );
};

export default Goals;
