"use client"

import { LogIn, LogOut, Clock, Users, CalendarDays } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface CheckIn {
  id: string
  name: string
  type: "check-in" | "check-out"
  time: string
  role: "Member" | "Staff"
}

const todayCheckins: CheckIn[] = [
  { id: "1", name: "Sarah Johnson", type: "check-in", time: "6:15 AM", role: "Member" },
  { id: "2", name: "Jake Turner", type: "check-in", time: "6:30 AM", role: "Staff" },
  { id: "3", name: "Mike Chen", type: "check-in", time: "7:02 AM", role: "Member" },
  { id: "4", name: "Emily Davis", type: "check-in", time: "7:45 AM", role: "Member" },
  { id: "5", name: "Sarah Johnson", type: "check-out", time: "7:50 AM", role: "Member" },
  { id: "6", name: "David Kim", type: "check-in", time: "8:10 AM", role: "Member" },
  { id: "7", name: "Maria Lopez", type: "check-in", time: "8:30 AM", role: "Staff" },
  { id: "8", name: "James Wilson", type: "check-in", time: "8:45 AM", role: "Member" },
  { id: "9", name: "Mike Chen", type: "check-out", time: "9:00 AM", role: "Member" },
  { id: "10", name: "Laura Martinez", type: "check-in", time: "9:15 AM", role: "Member" },
  { id: "11", name: "Tom Brown", type: "check-in", time: "9:32 AM", role: "Member" },
  { id: "12", name: "Emily Davis", type: "check-out", time: "9:40 AM", role: "Member" },
]

const dailySummary = [
  { day: "Mon", checkins: 312 },
  { day: "Tue", checkins: 298 },
  { day: "Wed", checkins: 345 },
  { day: "Thu", checkins: 321 },
  { day: "Fri", checkins: 378 },
  { day: "Sat", checkins: 256 },
  { day: "Sun", checkins: 142 },
]

export default function CheckInsPage() {
  const currentlyIn = todayCheckins.filter((c) => c.type === "check-in").length -
    todayCheckins.filter((c) => c.type === "check-out").length

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold font-heading tracking-tight text-foreground">Check-ins & Attendance</h1>
        <p className="text-sm text-muted-foreground mt-1">Real-time check-in logs and attendance tracking.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="flex items-center gap-4 p-5">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-success/10 shrink-0">
              <LogIn className="w-5 h-5 text-success" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Check-ins Today</p>
              <p className="text-xl font-bold font-heading text-foreground">{todayCheckins.filter((c) => c.type === "check-in").length}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-5">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 shrink-0">
              <LogOut className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Check-outs Today</p>
              <p className="text-xl font-bold font-heading text-foreground">{todayCheckins.filter((c) => c.type === "check-out").length}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-5">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 shrink-0">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Currently In</p>
              <p className="text-xl font-bold font-heading text-foreground">{currentlyIn}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-5">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted shrink-0">
              <Clock className="w-5 h-5 text-muted-foreground" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Avg. Duration</p>
              <p className="text-xl font-bold font-heading text-foreground">1h 24m</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Real-time Log */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base font-heading flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
              Live Check-in Log
            </CardTitle>
            <CardDescription>Real-time check-in and check-out activity.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2 max-h-96 overflow-y-auto">
              {todayCheckins.slice().reverse().map((entry) => (
                <div key={entry.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className={`text-xs font-semibold ${entry.type === "check-in" ? "bg-success/10 text-success" : "bg-accent/10 text-accent"}`}>
                      {entry.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium text-foreground truncate">{entry.name}</p>
                      <Badge variant="secondary" className="text-[10px]">{entry.role}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{entry.time}</p>
                  </div>
                  <Badge
                    variant="secondary"
                    className={entry.type === "check-in"
                      ? "bg-success/10 text-success border-0 gap-1"
                      : "bg-accent/10 text-accent border-0 gap-1"
                    }
                  >
                    {entry.type === "check-in" ? <LogIn className="w-3 h-3" /> : <LogOut className="w-3 h-3" />}
                    {entry.type === "check-in" ? "In" : "Out"}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Weekly Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base font-heading flex items-center gap-2">
              <CalendarDays className="w-4 h-4" />
              Weekly Summary
            </CardTitle>
            <CardDescription>Daily attendance this week.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3">
              {dailySummary.map((day) => (
                <div key={day.day} className="flex items-center gap-3">
                  <span className="text-xs font-medium text-muted-foreground w-8">{day.day}</span>
                  <div className="flex-1 bg-muted rounded-full h-3 overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all"
                      style={{ width: `${(day.checkins / 400) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs font-medium text-foreground w-8 text-right">{day.checkins}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
