"use client"

import { Users, DollarSign, Activity, Clock, TrendingUp, TrendingDown, ArrowUpRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const kpis = [
  {
    title: "Active Members",
    value: "1,248",
    change: "+12%",
    trend: "up" as const,
    icon: Users,
    description: "vs last month",
  },
  {
    title: "Revenue (This Month)",
    value: "$48,520",
    change: "+8.2%",
    trend: "up" as const,
    icon: DollarSign,
    description: "vs last month",
  },
  {
    title: "Avg. Daily Check-ins",
    value: "342",
    change: "-3.1%",
    trend: "down" as const,
    icon: Activity,
    description: "vs last month",
  },
  {
    title: "Expiring Soon",
    value: "23",
    change: "Next 7 days",
    trend: "neutral" as const,
    icon: Clock,
    description: "memberships",
  },
]

const revenueData = [
  { month: "Aug", revenue: 35200 },
  { month: "Sep", revenue: 38100 },
  { month: "Oct", revenue: 41500 },
  { month: "Nov", revenue: 39800 },
  { month: "Dec", revenue: 44200 },
  { month: "Jan", revenue: 46800 },
  { month: "Feb", revenue: 48520 },
]

const attendanceData = [
  { time: "6am", count: 45 },
  { time: "8am", count: 120 },
  { time: "10am", count: 85 },
  { time: "12pm", count: 98 },
  { time: "2pm", count: 60 },
  { time: "4pm", count: 78 },
  { time: "6pm", count: 140 },
  { time: "8pm", count: 95 },
  { time: "10pm", count: 30 },
]

const recentMembers = [
  { name: "Sarah Johnson", plan: "Premium", date: "Feb 8, 2026", status: "Active" },
  { name: "Mike Chen", plan: "Basic", date: "Feb 7, 2026", status: "Active" },
  { name: "Emily Davis", plan: "Premium", date: "Feb 6, 2026", status: "Active" },
  { name: "James Wilson", plan: "Standard", date: "Feb 5, 2026", status: "Active" },
  { name: "Anna Roberts", plan: "Basic", date: "Feb 4, 2026", status: "Expired" },
]

const upcomingClasses = [
  { name: "Yoga Flow", instructor: "Maria Lopez", time: "9:00 AM", spots: "8/20" },
  { name: "HIIT Blast", instructor: "Jake Turner", time: "10:30 AM", spots: "18/25" },
  { name: "Spin Class", instructor: "Lisa Park", time: "12:00 PM", spots: "12/15" },
  { name: "Pilates", instructor: "Maria Lopez", time: "2:00 PM", spots: "5/15" },
]

export default function AdminDashboard() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold font-heading tracking-tight text-foreground">Dashboard Overview</h1>
        <p className="text-sm text-muted-foreground mt-1">Welcome back. Here is what is happening at your gym today.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi) => (
          <Card key={kpi.title}>
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted">
                  <kpi.icon className="w-5 h-5 text-muted-foreground" />
                </div>
                {kpi.trend === "up" && (
                  <Badge variant="secondary" className="bg-success/10 text-success border-0 text-xs gap-1">
                    <TrendingUp className="w-3 h-3" /> {kpi.change}
                  </Badge>
                )}
                {kpi.trend === "down" && (
                  <Badge variant="secondary" className="bg-destructive/10 text-destructive border-0 text-xs gap-1">
                    <TrendingDown className="w-3 h-3" /> {kpi.change}
                  </Badge>
                )}
                {kpi.trend === "neutral" && (
                  <Badge variant="secondary" className="bg-warning/10 text-warning-foreground border-0 text-xs">
                    {kpi.change}
                  </Badge>
                )}
              </div>
              <p className="text-2xl font-bold font-heading text-foreground">{kpi.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{kpi.title} {kpi.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-base font-heading">Revenue Trend</CardTitle>
            <CardDescription>Monthly revenue over the last 7 months</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient id="revGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(152, 60%, 48%)" stopOpacity={0.3} />
                      <stop offset="100%" stopColor="hsl(152, 60%, 48%)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(214,18%,89%)" />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="hsl(220,10%,46%)" />
                  <YAxis tick={{ fontSize: 12 }} stroke="hsl(220,10%,46%)" tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
                  <Tooltip
                    contentStyle={{ borderRadius: "8px", border: "1px solid hsl(214,18%,89%)", fontSize: "12px" }}
                    formatter={(value: number) => [`$${value.toLocaleString()}`, "Revenue"]}
                  />
                  <Area type="monotone" dataKey="revenue" stroke="hsl(152, 60%, 48%)" strokeWidth={2} fill="url(#revGradient)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base font-heading">Attendance by Time</CardTitle>
            <CardDescription>Average check-ins per time slot today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={attendanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(214,18%,89%)" />
                  <XAxis dataKey="time" tick={{ fontSize: 12 }} stroke="hsl(220,10%,46%)" />
                  <YAxis tick={{ fontSize: 12 }} stroke="hsl(220,10%,46%)" />
                  <Tooltip
                    contentStyle={{ borderRadius: "8px", border: "1px solid hsl(214,18%,89%)", fontSize: "12px" }}
                    formatter={(value: number) => [value, "Check-ins"]}
                  />
                  <Bar dataKey="count" fill="hsl(199, 89%, 48%)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tables Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-heading">Recent Members</CardTitle>
              <a href="/admin/members" className="text-xs text-primary hover:underline flex items-center gap-1">
                View all <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3">
              {recentMembers.map((member) => (
                <div key={member.name} className="flex items-center justify-between py-2 border-b last:border-0">
                  <div>
                    <p className="text-sm font-medium text-foreground">{member.name}</p>
                    <p className="text-xs text-muted-foreground">{member.plan} &middot; {member.date}</p>
                  </div>
                  <Badge variant={member.status === "Active" ? "default" : "destructive"} className="text-xs">
                    {member.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-heading">Upcoming Classes</CardTitle>
              <a href="/admin/classes" className="text-xs text-primary hover:underline flex items-center gap-1">
                View all <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3">
              {upcomingClasses.map((cls) => (
                <div key={cls.name} className="flex items-center justify-between py-2 border-b last:border-0">
                  <div>
                    <p className="text-sm font-medium text-foreground">{cls.name}</p>
                    <p className="text-xs text-muted-foreground">{cls.instructor} &middot; {cls.time}</p>
                  </div>
                  <Badge variant="secondary" className="text-xs">{cls.spots} spots</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
