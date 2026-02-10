"use client"

import { Dumbbell, Clock, Flame, TrendingUp, ChevronRight, CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const weeklyPlan = [
  {
    day: "Monday",
    name: "Upper Body Strength",
    exercises: [
      { name: "Bench Press", sets: 4, reps: "8-10", completed: true },
      { name: "Dumbbell Rows", sets: 3, reps: "10-12", completed: true },
      { name: "Shoulder Press", sets: 3, reps: "10", completed: true },
      { name: "Bicep Curls", sets: 3, reps: "12", completed: true },
      { name: "Tricep Dips", sets: 3, reps: "12", completed: false },
    ],
    completed: false,
  },
  {
    day: "Tuesday",
    name: "HIIT Cardio",
    exercises: [
      { name: "Burpees", sets: 3, reps: "45s", completed: true },
      { name: "Mountain Climbers", sets: 3, reps: "45s", completed: true },
      { name: "Jump Squats", sets: 3, reps: "45s", completed: true },
      { name: "Box Jumps", sets: 3, reps: "45s", completed: true },
    ],
    completed: true,
  },
  {
    day: "Wednesday",
    name: "Lower Body Power",
    exercises: [
      { name: "Squats", sets: 4, reps: "8-10", completed: false },
      { name: "Romanian Deadlift", sets: 3, reps: "10", completed: false },
      { name: "Leg Press", sets: 3, reps: "12", completed: false },
      { name: "Calf Raises", sets: 4, reps: "15", completed: false },
    ],
    completed: false,
  },
  {
    day: "Thursday",
    name: "Active Recovery",
    exercises: [
      { name: "Yoga Flow", sets: 1, reps: "30 min", completed: false },
      { name: "Foam Rolling", sets: 1, reps: "15 min", completed: false },
      { name: "Light Walking", sets: 1, reps: "20 min", completed: false },
    ],
    completed: false,
  },
  {
    day: "Friday",
    name: "Full Body Circuit",
    exercises: [
      { name: "Deadlifts", sets: 4, reps: "6-8", completed: false },
      { name: "Pull-ups", sets: 3, reps: "max", completed: false },
      { name: "Lunges", sets: 3, reps: "12 each", completed: false },
      { name: "Plank Hold", sets: 3, reps: "60s", completed: false },
    ],
    completed: false,
  },
]

export default function WorkoutsPage() {
  const totalExercises = weeklyPlan.reduce((acc, w) => acc + w.exercises.length, 0)
  const completedExercises = weeklyPlan.reduce((acc, w) => acc + w.exercises.filter((e) => e.completed).length, 0)
  const progressPct = Math.round((completedExercises / totalExercises) * 100)

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold font-heading tracking-tight text-foreground">Workout Plan</h1>
        <p className="text-sm text-muted-foreground mt-1">Your assigned weekly training program.</p>
      </div>

      {/* Progress Overview */}
      <Card>
        <CardContent className="p-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-sm font-medium text-muted-foreground">Weekly Progress</h2>
              <p className="text-2xl font-bold font-heading text-foreground mt-1">{completedExercises}/{totalExercises} exercises</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-destructive" />
                <div>
                  <p className="text-sm font-bold text-foreground">2,840</p>
                  <p className="text-[10px] text-muted-foreground">cal burned</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent" />
                <div>
                  <p className="text-sm font-bold text-foreground">4h 20m</p>
                  <p className="text-[10px] text-muted-foreground">total time</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                <div>
                  <p className="text-sm font-bold text-foreground">+8%</p>
                  <p className="text-[10px] text-muted-foreground">vs last week</p>
                </div>
              </div>
            </div>
          </div>
          <Progress value={progressPct} className="h-2 mt-4" />
        </CardContent>
      </Card>

      {/* Daily Workouts */}
      <div className="flex flex-col gap-4">
        {weeklyPlan.map((workout) => {
          const dayCompleted = workout.exercises.filter((e) => e.completed).length
          const dayTotal = workout.exercises.length
          return (
            <Card key={workout.day} className={workout.completed ? "border-success/30 bg-success/5" : ""}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${workout.completed ? "bg-success/10" : "bg-muted"}`}>
                      {workout.completed ? (
                        <CheckCircle2 className="w-5 h-5 text-success" />
                      ) : (
                        <Dumbbell className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                    <div>
                      <CardTitle className="text-sm font-heading">{workout.day}</CardTitle>
                      <CardDescription className="text-xs">{workout.name}</CardDescription>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs">{dayCompleted}/{dayTotal}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-2">
                  {workout.exercises.map((ex) => (
                    <div key={ex.name} className="flex items-center justify-between py-1.5">
                      <div className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${ex.completed ? "border-primary bg-primary" : "border-muted-foreground/30"}`}>
                          {ex.completed && <CheckCircle2 className="w-3 h-3 text-primary-foreground" />}
                        </div>
                        <span className={`text-sm ${ex.completed ? "text-muted-foreground line-through" : "text-foreground"}`}>{ex.name}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{ex.sets} x {ex.reps}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
