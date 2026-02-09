"use client"

import { LogIn, Calendar, Flame, Clock, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const checkinHistory = [
  { id: 1, date: "Feb 9, 2026", checkIn: "7:15 AM", checkOut: "8:45 AM", duration: "1h 30m" },
  { id: 2, date: "Feb 8, 2026", checkIn: "6:00 AM", checkOut: "7:20 AM", duration: "1h 20m" },
  { id: 3, date: "Feb 7, 2026", checkIn: "5:45 PM", checkOut: "7:10 PM", duration: "1h 25m" },
  { id: 4, date: "Feb 6, 2026", checkIn: "7:00 AM", checkOut: "8:30 AM", duration: "1h 30m" },
  { id: 5, date: "Feb 5, 2026", checkIn: "6:30 AM", checkOut: "8:00 AM", duration: "1h 30m" },
  { id: 6, date: "Feb 4, 2026", checkIn: "7:00 AM", checkOut: "8:15 AM", duration: "1h 15m" },
  { id: 7, date: "Feb 3, 2026", checkIn: "6:00 PM", checkOut: "7:30 PM", duration: "1h 30m" },
  { id: 8, date: "Feb 2, 2026", checkIn: "7:30 AM", checkOut: "9:00 AM", duration: "1h 30m" },
]

const monthlyVisits = [
  { month: "Sep", visits: 18 },
  { month: "Oct", visits: 22 },
  { month: "Nov", visits: 19 },
  { month: "Dec", visits: 16 },
  { month: "Jan", visits: 24 },
  { month: "Feb", visits: 9 },
]

export default function ClientCheckInsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold font-heading tracking-tight text-foreground">Check-ins & Attendance</h1>
        <p className="text-sm text-muted-foreground mt-1">Your personal gym visit history and attendance stats.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-5 flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 mb-2">
              <Calendar className="w-5 h-5 text-primary" />
            </div>
            <p className="text-2xl font-bold font-heading text-foreground">48</p>
            <p className="text-xs text-muted-foreground">Visits This Month</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5 flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 mb-2">
              <Clock className="w-5 h-5 text-accent" />
            </div>
            <p className="text-2xl font-bold font-heading text-foreground">Feb 9</p>
            <p className="text-xs text-muted-foreground">Last Visit</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5 flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-destructive/10 mb-2">
              <Flame className="w-5 h-5 text-destructive" />
            </div>
            <p className="text-2xl font-bold font-heading text-foreground">14</p>
            <p className="text-xs text-muted-foreground">Day Streak</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5 flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-success/10 mb-2">
              <TrendingUp className="w-5 h-5 text-success" />
            </div>
            <p className="text-2xl font-bold font-heading text-foreground">1h 26m</p>
            <p className="text-xs text-muted-foreground">Avg. Duration</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Visit History */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base font-heading">Recent Visits</CardTitle>
            <CardDescription>Your check-in and check-out history.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left text-xs font-medium text-muted-foreground py-3 px-2">Date</th>
                    <th className="text-left text-xs font-medium text-muted-foreground py-3 px-2">Check-in</th>
                    <th className="text-left text-xs font-medium text-muted-foreground py-3 px-2">Check-out</th>
                    <th className="text-left text-xs font-medium text-muted-foreground py-3 px-2">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {checkinHistory.map((entry) => (
                    <tr key={entry.id} className="border-b last:border-0">
                      <td className="py-3 px-2 text-sm text-foreground">{entry.date}</td>
                      <td className="py-3 px-2">
                        <Badge variant="secondary" className="bg-success/10 text-success border-0 text-xs gap-1">
                          <LogIn className="w-3 h-3" /> {entry.checkIn}
                        </Badge>
                      </td>
                      <td className="py-3 px-2 text-sm text-muted-foreground">{entry.checkOut}</td>
                      <td className="py-3 px-2 text-sm font-medium text-foreground">{entry.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="md:hidden flex flex-col gap-3">
              {checkinHistory.map((entry) => (
                <div key={entry.id} className="flex items-center justify-between p-3 rounded-lg border">
                  <div>
                    <p className="text-sm font-medium text-foreground">{entry.date}</p>
                    <p className="text-xs text-muted-foreground">{entry.checkIn} - {entry.checkOut}</p>
                  </div>
                  <Badge variant="secondary" className="text-xs">{entry.duration}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Monthly Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base font-heading">Monthly Visits</CardTitle>
            <CardDescription>Total visits per month.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3">
              {monthlyVisits.map((m) => (
                <div key={m.month} className="flex items-center gap-3">
                  <span className="text-xs font-medium text-muted-foreground w-8">{m.month}</span>
                  <div className="flex-1 bg-muted rounded-full h-3 overflow-hidden">
                    <div
                      className="h-full bg-accent rounded-full transition-all"
                      style={{ width: `${(m.visits / 30) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs font-medium text-foreground w-6 text-right">{m.visits}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
