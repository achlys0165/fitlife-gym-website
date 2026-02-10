"use client"

import { Calendar, Clock, Users, MapPin, ChevronRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

const classes = [
  { id: "1", name: "Yoga Flow", instructor: "Maria Lopez", date: "Feb 10, 2026", time: "9:00 AM", duration: "60 min", capacity: 20, booked: 14, location: "Studio A", type: "Yoga" },
  { id: "2", name: "HIIT Blast", instructor: "Jake Turner", date: "Feb 10, 2026", time: "10:30 AM", duration: "45 min", capacity: 25, booked: 23, location: "Main Floor", type: "Cardio" },
  { id: "3", name: "Spin Class", instructor: "Lisa Park", date: "Feb 10, 2026", time: "12:00 PM", duration: "45 min", capacity: 15, booked: 12, location: "Spin Room", type: "Cycling" },
  { id: "4", name: "Pilates Core", instructor: "Maria Lopez", date: "Feb 10, 2026", time: "2:00 PM", duration: "60 min", capacity: 15, booked: 5, location: "Studio A", type: "Pilates" },
  { id: "5", name: "Boxing Basics", instructor: "Jake Turner", date: "Feb 10, 2026", time: "4:00 PM", duration: "60 min", capacity: 20, booked: 18, location: "Boxing Ring", type: "Boxing" },
  { id: "6", name: "Strength Training", instructor: "Tom Harris", date: "Feb 10, 2026", time: "5:30 PM", duration: "60 min", capacity: 20, booked: 20, location: "Weight Room", type: "Strength" },
  { id: "7", name: "Zumba Party", instructor: "Lisa Park", date: "Feb 11, 2026", time: "9:00 AM", duration: "50 min", capacity: 30, booked: 16, location: "Main Floor", type: "Dance" },
  { id: "8", name: "Power Yoga", instructor: "Maria Lopez", date: "Feb 11, 2026", time: "11:00 AM", duration: "75 min", capacity: 20, booked: 9, location: "Studio A", type: "Yoga" },
]

function getCapacityColor(booked: number, capacity: number) {
  const ratio = booked / capacity
  if (ratio >= 0.9) return "bg-destructive"
  if (ratio >= 0.6) return "bg-warning"
  return "bg-primary"
}

export default function ClassesPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-heading tracking-tight text-foreground">Classes & Schedules</h1>
          <p className="text-sm text-muted-foreground mt-1">Manage class schedule, instructors, and bookings.</p>
        </div>
        <Button className="gap-2">
          <Calendar className="w-4 h-4" /> Add Class
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-5">
            <p className="text-xs text-muted-foreground">Total Classes Today</p>
            <p className="text-2xl font-bold font-heading text-foreground">6</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-xs text-muted-foreground">Total Bookings</p>
            <p className="text-2xl font-bold font-heading text-foreground">92</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-xs text-muted-foreground">Avg. Capacity</p>
            <p className="text-2xl font-bold font-heading text-foreground">78%</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-xs text-muted-foreground">Full Classes</p>
            <p className="text-2xl font-bold font-heading text-foreground">1</p>
          </CardContent>
        </Card>
      </div>

      {/* Class List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {classes.map((cls) => {
          const pct = Math.round((cls.booked / cls.capacity) * 100)
          const isFull = cls.booked >= cls.capacity
          return (
            <Card key={cls.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-sm font-semibold text-foreground">{cls.name}</h3>
                      <Badge variant="secondary" className="text-[10px]">{cls.type}</Badge>
                      {isFull && <Badge className="bg-destructive text-destructive-foreground text-[10px]">Full</Badge>}
                    </div>
                    <p className="text-xs text-muted-foreground">{cls.instructor}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0" aria-label="View booking list">
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {cls.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {cls.time} ({cls.duration})</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {cls.location}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Progress value={pct} className="h-2 flex-1" />
                  <span className="text-xs font-medium text-foreground flex items-center gap-1">
                    <Users className="w-3 h-3" /> {cls.booked}/{cls.capacity}
                  </span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
