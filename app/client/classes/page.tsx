"use client"

import { useState } from "react"
import { Calendar, Clock, MapPin, User, Filter, Check } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const classSlots = [
  { id: "1", name: "Yoga Flow", instructor: "Maria Lopez", date: "Feb 10", time: "9:00 AM", duration: "60 min", location: "Studio A", type: "Yoga", capacity: 20, booked: 14, userBooked: true },
  { id: "2", name: "HIIT Blast", instructor: "Jake Turner", date: "Feb 10", time: "10:30 AM", duration: "45 min", location: "Main Floor", type: "Cardio", capacity: 25, booked: 23, userBooked: false },
  { id: "3", name: "Spin Class", instructor: "Lisa Park", date: "Feb 10", time: "12:00 PM", duration: "45 min", location: "Spin Room", type: "Cycling", capacity: 15, booked: 15, userBooked: false },
  { id: "4", name: "Pilates Core", instructor: "Maria Lopez", date: "Feb 10", time: "2:00 PM", duration: "60 min", location: "Studio A", type: "Pilates", capacity: 15, booked: 5, userBooked: true },
  { id: "5", name: "Boxing Basics", instructor: "Jake Turner", date: "Feb 11", time: "4:00 PM", duration: "60 min", location: "Boxing Ring", type: "Boxing", capacity: 20, booked: 18, userBooked: false },
  { id: "6", name: "Strength Training", instructor: "Tom Harris", date: "Feb 11", time: "5:30 PM", duration: "60 min", location: "Weight Room", type: "Strength", capacity: 20, booked: 12, userBooked: false },
  { id: "7", name: "Zumba Party", instructor: "Lisa Park", date: "Feb 12", time: "9:00 AM", duration: "50 min", location: "Main Floor", type: "Dance", capacity: 30, booked: 16, userBooked: false },
  { id: "8", name: "Power Yoga", instructor: "Maria Lopez", date: "Feb 12", time: "11:00 AM", duration: "75 min", location: "Studio A", type: "Yoga", capacity: 20, booked: 9, userBooked: true },
]

const types = ["All", "Yoga", "Cardio", "Cycling", "Pilates", "Boxing", "Strength", "Dance"]
const instructors = ["All", "Maria Lopez", "Jake Turner", "Lisa Park", "Tom Harris"]

export default function ClientClassesPage() {
  const [typeFilter, setTypeFilter] = useState("All")
  const [classes, setClasses] = useState(classSlots)

  const filtered = classes.filter((c) => typeFilter === "All" || c.type === typeFilter)

  const handleBook = (id: string) => {
    setClasses((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, userBooked: !c.userBooked, booked: c.userBooked ? c.booked - 1 : c.booked + 1 } : c
      )
    )
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold font-heading tracking-tight text-foreground">Class Calendar</h1>
        <p className="text-sm text-muted-foreground mt-1">Browse and book upcoming classes.</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-2">
        <Filter className="w-4 h-4 text-muted-foreground" />
        {types.map((t) => (
          <Button
            key={t}
            variant={typeFilter === t ? "default" : "outline"}
            size="sm"
            className="text-xs"
            onClick={() => setTypeFilter(t)}
          >
            {t}
          </Button>
        ))}
      </div>

      {/* Class Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((cls) => {
          const isFull = cls.booked >= cls.capacity
          const pct = Math.round((cls.booked / cls.capacity) * 100)
          return (
            <Card key={cls.id} className={cls.userBooked ? "border-primary/30" : ""}>
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-sm font-semibold text-foreground">{cls.name}</h3>
                      <Badge variant="secondary" className="text-[10px]">{cls.type}</Badge>
                      {cls.userBooked && (
                        <Badge className="bg-primary text-primary-foreground text-[10px] gap-0.5">
                          <Check className="w-2.5 h-2.5" /> Booked
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <User className="w-3 h-3" /> {cls.instructor}
                    </p>
                  </div>
                  <Button
                    variant={cls.userBooked ? "destructive" : "default"}
                    size="sm"
                    disabled={isFull && !cls.userBooked}
                    onClick={() => handleBook(cls.id)}
                    className="text-xs shrink-0"
                  >
                    {cls.userBooked ? "Cancel" : isFull ? "Full" : "Book"}
                  </Button>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {cls.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {cls.time} ({cls.duration})</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {cls.location}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Progress value={pct} className="h-1.5 flex-1" />
                  <span className="text-[10px] font-medium text-muted-foreground">{cls.booked}/{cls.capacity}</span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {filtered.length === 0 && (
        <p className="text-sm text-muted-foreground text-center py-8">No classes found for this filter.</p>
      )}
    </div>
  )
}
