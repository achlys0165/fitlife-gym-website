"use client"

import { Activity, Scale, TrendingDown, TrendingUp, Plus } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts"

const weightData = [
  { date: "Sep", weight: 185 },
  { date: "Oct", weight: 182 },
  { date: "Nov", weight: 180 },
  { date: "Dec", weight: 179 },
  { date: "Jan", weight: 177 },
  { date: "Feb", weight: 175 },
]

const bodyFatData = [
  { date: "Sep", fat: 22 },
  { date: "Oct", fat: 21.2 },
  { date: "Nov", fat: 20.5 },
  { date: "Dec", fat: 19.8 },
  { date: "Jan", fat: 19.2 },
  { date: "Feb", fat: 18.5 },
]

const muscleData = [
  { date: "Sep", muscle: 145 },
  { date: "Oct", muscle: 146 },
  { date: "Nov", muscle: 147.5 },
  { date: "Dec", muscle: 148 },
  { date: "Jan", muscle: 149.5 },
  { date: "Feb", muscle: 151 },
]

const metricCards = [
  {
    title: "Weight",
    current: "175 lbs",
    change: "-10 lbs",
    trend: "down" as const,
    icon: Scale,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    title: "Body Fat",
    current: "18.5%",
    change: "-3.5%",
    trend: "down" as const,
    icon: TrendingDown,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Muscle Mass",
    current: "151 lbs",
    change: "+6 lbs",
    trend: "up" as const,
    icon: TrendingUp,
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    title: "BMI",
    current: "24.1",
    change: "-1.4",
    trend: "down" as const,
    icon: Activity,
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
  },
]

export default function MetricsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-heading tracking-tight text-foreground">Body Metrics</h1>
          <p className="text-sm text-muted-foreground mt-1">Track your body composition and progress over time.</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" /> Log Measurement
        </Button>
      </div>

      {/* Metric Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metricCards.map((metric) => (
          <Card key={metric.title}>
            <CardContent className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${metric.bgColor}`}>
                  <metric.icon className={`w-5 h-5 ${metric.color}`} />
                </div>
                <Badge variant="secondary" className={`${metric.trend === "down" ? "bg-success/10 text-success" : "bg-primary/10 text-primary"} border-0 text-xs`}>
                  {metric.change}
                </Badge>
              </div>
              <p className="text-2xl font-bold font-heading text-foreground">{metric.current}</p>
              <p className="text-xs text-muted-foreground mt-1">{metric.title} (6 month change)</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-base font-heading">Weight Progress</CardTitle>
            <CardDescription>Weight over the last 6 months.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={weightData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(214,18%,89%)" />
                  <XAxis dataKey="date" tick={{ fontSize: 12 }} stroke="hsl(220,10%,46%)" />
                  <YAxis tick={{ fontSize: 12 }} stroke="hsl(220,10%,46%)" domain={["dataMin - 5", "dataMax + 5"]} />
                  <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid hsl(214,18%,89%)", fontSize: "12px" }} formatter={(v: number) => [`${v} lbs`, "Weight"]} />
                  <Line type="monotone" dataKey="weight" stroke="hsl(199, 89%, 48%)" strokeWidth={2} dot={{ fill: "hsl(199, 89%, 48%)" }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base font-heading">Body Fat %</CardTitle>
            <CardDescription>Body fat percentage progress.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={bodyFatData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(214,18%,89%)" />
                  <XAxis dataKey="date" tick={{ fontSize: 12 }} stroke="hsl(220,10%,46%)" />
                  <YAxis tick={{ fontSize: 12 }} stroke="hsl(220,10%,46%)" domain={["dataMin - 2", "dataMax + 2"]} />
                  <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid hsl(214,18%,89%)", fontSize: "12px" }} formatter={(v: number) => [`${v}%`, "Body Fat"]} />
                  <Line type="monotone" dataKey="fat" stroke="hsl(152, 60%, 48%)" strokeWidth={2} dot={{ fill: "hsl(152, 60%, 48%)" }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base font-heading">Muscle Mass</CardTitle>
            <CardDescription>Lean muscle mass development over 6 months.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={muscleData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(214,18%,89%)" />
                  <XAxis dataKey="date" tick={{ fontSize: 12 }} stroke="hsl(220,10%,46%)" />
                  <YAxis tick={{ fontSize: 12 }} stroke="hsl(220,10%,46%)" domain={["dataMin - 5", "dataMax + 5"]} />
                  <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid hsl(214,18%,89%)", fontSize: "12px" }} formatter={(v: number) => [`${v} lbs`, "Muscle Mass"]} />
                  <Line type="monotone" dataKey="muscle" stroke="hsl(43, 96%, 56%)" strokeWidth={2} dot={{ fill: "hsl(43, 96%, 56%)" }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Smart Scale Integration */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-muted shrink-0">
              <Scale className="w-6 h-6 text-muted-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-foreground">Smart Scale Integration</h3>
              <p className="text-xs text-muted-foreground mt-0.5">Connect your smart scale for automatic body composition tracking.</p>
            </div>
            <Button variant="outline" size="sm">Connect Device</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
