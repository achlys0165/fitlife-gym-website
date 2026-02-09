"use client"

import Link from "next/link"
import { CreditCard, Calendar, Dumbbell, Clock, Megaphone, ArrowRight, Flame, Timer } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const announcements = [
  { id: 1, title: "New Spin Class Added", message: "Every Wednesday at 7 PM. Book your spot now!", date: "Feb 8" },
  { id: 2, title: "Valentine Offer", message: "Refer a friend this week and get 1 month free!", date: "Feb 7" },
]

const upcomingBookings = [
  { id: 1, name: "Yoga Flow", instructor: "Maria Lopez", date: "Feb 10", time: "9:00 AM" },
  { id: 2, name: "HIIT Blast", instructor: "Jake Turner", date: "Feb 11", time: "10:30 AM" },
  { id: 3, name: "Pilates Core", instructor: "Maria Lopez", date: "Feb 12", time: "2:00 PM" },
]

export default function ClientDashboard() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold font-heading tracking-tight text-foreground">Welcome back, Alex</h1>
        <p className="text-sm text-muted-foreground mt-1">Here is your fitness overview for today.</p>
      </div>

      {/* Membership Status + Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border-primary/20">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-primary text-primary-foreground">Premium</Badge>
                  <Badge variant="secondary" className="bg-success/10 text-success border-0">Active</Badge>
                </div>
                <h2 className="text-lg font-bold font-heading text-foreground">Premium Membership</h2>
                <p className="text-sm text-muted-foreground mt-1">Expires on Sep 18, 2026 &middot; 222 days remaining</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-center p-3 rounded-lg bg-muted">
                  <p className="text-2xl font-bold font-heading text-foreground">12</p>
                  <p className="text-[11px] text-muted-foreground">Sessions left this week</p>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-muted-foreground">Monthly class usage</span>
                <span className="text-xs font-medium text-foreground">18/28 classes</span>
              </div>
              <Progress value={64} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-heading">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <Link href="/client/classes">
              <Button className="w-full gap-2 justify-start bg-transparent" variant="outline">
                <Calendar className="w-4 h-4" /> Book a Class
              </Button>
            </Link>
            <Link href="/client/plan">
              <Button className="w-full gap-2 justify-start bg-transparent" variant="outline">
                <CreditCard className="w-4 h-4" /> Pay Now
              </Button>
            </Link>
            <Link href="/client/workouts">
              <Button className="w-full gap-2 justify-start bg-transparent" variant="outline">
                <Dumbbell className="w-4 h-4" /> View Workouts
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Next Session + Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="sm:col-span-2 bg-sidebar text-sidebar-foreground">
          <CardContent className="p-5">
            <div className="flex items-center gap-2 mb-3">
              <Timer className="w-4 h-4 text-sidebar-primary" />
              <span className="text-xs font-medium uppercase tracking-wider text-sidebar-foreground/60">Next Session</span>
            </div>
            <h3 className="text-lg font-bold font-heading text-sidebar-primary-foreground">Yoga Flow</h3>
            <p className="text-sm text-sidebar-foreground/80 mt-1">Maria Lopez &middot; Studio A</p>
            <div className="flex items-center gap-4 mt-3">
              <div className="flex items-center gap-1.5 text-sm text-sidebar-foreground/80">
                <Calendar className="w-3.5 h-3.5" /> Feb 10, 2026
              </div>
              <div className="flex items-center gap-1.5 text-sm text-sidebar-foreground/80">
                <Clock className="w-3.5 h-3.5" /> 9:00 AM
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5 flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 mb-2">
              <Flame className="w-5 h-5 text-primary" />
            </div>
            <p className="text-2xl font-bold font-heading text-foreground">14</p>
            <p className="text-xs text-muted-foreground">Day Streak</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5 flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 mb-2">
              <Dumbbell className="w-5 h-5 text-accent" />
            </div>
            <p className="text-2xl font-bold font-heading text-foreground">48</p>
            <p className="text-xs text-muted-foreground">Visits This Month</p>
          </CardContent>
        </Card>
      </div>

      {/* Bookings & Announcements */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-heading">Upcoming Bookings</CardTitle>
              <Link href="/client/classes" className="text-xs text-primary hover:underline flex items-center gap-1">
                View all <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3">
              {upcomingBookings.map((booking) => (
                <div key={booking.id} className="flex items-center justify-between py-2 border-b last:border-0">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 shrink-0">
                      <Dumbbell className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{booking.name}</p>
                      <p className="text-xs text-muted-foreground">{booking.instructor}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-medium text-foreground">{booking.date}</p>
                    <p className="text-xs text-muted-foreground">{booking.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base font-heading flex items-center gap-2">
              <Megaphone className="w-4 h-4 text-accent" />
              Announcements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3">
              {announcements.map((ann) => (
                <div key={ann.id} className="p-3 rounded-lg bg-muted">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-medium text-foreground">{ann.title}</p>
                    <span className="text-[10px] text-muted-foreground">{ann.date}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{ann.message}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
