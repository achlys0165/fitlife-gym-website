"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell,
} from "recharts"

const revenueData = [
  { month: "Sep", revenue: 38100 },
  { month: "Oct", revenue: 41500 },
  { month: "Nov", revenue: 39800 },
  { month: "Dec", revenue: 44200 },
  { month: "Jan", revenue: 46800 },
  { month: "Feb", revenue: 48520 },
]

const memberGrowth = [
  { month: "Sep", newMembers: 42, churned: 8 },
  { month: "Oct", newMembers: 55, churned: 12 },
  { month: "Nov", newMembers: 38, churned: 6 },
  { month: "Dec", newMembers: 48, churned: 10 },
  { month: "Jan", newMembers: 62, churned: 9 },
  { month: "Feb", newMembers: 51, churned: 7 },
]

const attendanceByDay = [
  { day: "Mon", visits: 312 },
  { day: "Tue", visits: 298 },
  { day: "Wed", visits: 345 },
  { day: "Thu", visits: 321 },
  { day: "Fri", visits: 378 },
  { day: "Sat", visits: 256 },
  { day: "Sun", visits: 142 },
]

const peakHours = [
  { hour: "6am", mon: 45, tue: 42, wed: 48, thu: 44, fri: 50, sat: 30, sun: 15 },
  { hour: "8am", mon: 120, tue: 115, wed: 125, thu: 118, fri: 130, sat: 70, sun: 35 },
  { hour: "10am", mon: 85, tue: 80, wed: 90, thu: 82, fri: 88, sat: 95, sun: 60 },
  { hour: "12pm", mon: 98, tue: 95, wed: 100, thu: 96, fri: 102, sat: 78, sun: 45 },
  { hour: "2pm", mon: 60, tue: 55, wed: 65, thu: 58, fri: 62, sat: 45, sun: 30 },
  { hour: "4pm", mon: 78, tue: 75, wed: 82, thu: 76, fri: 80, sat: 55, sun: 25 },
  { hour: "6pm", mon: 140, tue: 135, wed: 145, thu: 138, fri: 150, sat: 90, sun: 40 },
  { hour: "8pm", mon: 95, tue: 90, wed: 100, thu: 92, fri: 98, sat: 50, sun: 20 },
]

const planDistribution = [
  { name: "Basic", value: 420, color: "hsl(199, 89%, 48%)" },
  { name: "Standard", value: 380, color: "hsl(43, 96%, 56%)" },
  { name: "Premium", value: 448, color: "hsl(152, 60%, 48%)" },
]

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold font-heading tracking-tight text-foreground">Analytics & Reports</h1>
        <p className="text-sm text-muted-foreground mt-1">Revenue, membership growth, attendance trends, and more.</p>
      </div>

      <Tabs defaultValue="revenue">
        <TabsList>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="members">Members</TabsTrigger>
          <TabsTrigger value="attendance">Attendance</TabsTrigger>
          <TabsTrigger value="peak">Peak Hours</TabsTrigger>
        </TabsList>

        <TabsContent value="revenue" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-base font-heading">Revenue Report</CardTitle>
                <CardDescription>Monthly revenue over the last 6 months.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={revenueData}>
                      <defs>
                        <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="hsl(152, 60%, 48%)" stopOpacity={0.3} />
                          <stop offset="100%" stopColor="hsl(152, 60%, 48%)" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(214,18%,89%)" />
                      <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="hsl(220,10%,46%)" />
                      <YAxis tick={{ fontSize: 12 }} stroke="hsl(220,10%,46%)" tickFormatter={(v) => `$${(v/1000).toFixed(0)}k`} />
                      <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid hsl(214,18%,89%)", fontSize: "12px" }} formatter={(v: number) => [`$${v.toLocaleString()}`, "Revenue"]} />
                      <Area type="monotone" dataKey="revenue" stroke="hsl(152, 60%, 48%)" strokeWidth={2} fill="url(#revGrad)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base font-heading">Plan Distribution</CardTitle>
                <CardDescription>Members by membership type.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={planDistribution} cx="50%" cy="50%" innerRadius={50} outerRadius={70} paddingAngle={4} dataKey="value">
                        {planDistribution.map((entry) => (
                          <Cell key={entry.name} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid hsl(214,18%,89%)", fontSize: "12px" }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex flex-col gap-2 mt-2">
                  {planDistribution.map((plan) => (
                    <div key={plan.name} className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: plan.color }} />
                      <span className="text-xs text-foreground flex-1">{plan.name}</span>
                      <span className="text-xs font-medium text-foreground">{plan.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="members" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base font-heading">Membership Growth & Churn</CardTitle>
              <CardDescription>New members vs. churned members over 6 months.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={memberGrowth}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(214,18%,89%)" />
                    <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="hsl(220,10%,46%)" />
                    <YAxis tick={{ fontSize: 12 }} stroke="hsl(220,10%,46%)" />
                    <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid hsl(214,18%,89%)", fontSize: "12px" }} />
                    <Bar dataKey="newMembers" name="New Members" fill="hsl(152, 60%, 48%)" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="churned" name="Churned" fill="hsl(0, 72%, 51%)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="attendance" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base font-heading">Attendance Trends</CardTitle>
              <CardDescription>Daily visit count this week.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={attendanceByDay}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(214,18%,89%)" />
                    <XAxis dataKey="day" tick={{ fontSize: 12 }} stroke="hsl(220,10%,46%)" />
                    <YAxis tick={{ fontSize: 12 }} stroke="hsl(220,10%,46%)" />
                    <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid hsl(214,18%,89%)", fontSize: "12px" }} />
                    <Bar dataKey="visits" name="Visits" fill="hsl(199, 89%, 48%)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="peak" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base font-heading">Peak Hours Heatmap</CardTitle>
              <CardDescription>Average check-ins by hour and day of week.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px]">
                  <thead>
                    <tr>
                      <th className="text-left text-xs font-medium text-muted-foreground py-2 px-2">Hour</th>
                      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                        <th key={d} className="text-center text-xs font-medium text-muted-foreground py-2 px-2">{d}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {peakHours.map((row) => (
                      <tr key={row.hour}>
                        <td className="text-xs font-medium text-muted-foreground py-1.5 px-2">{row.hour}</td>
                        {(["mon", "tue", "wed", "thu", "fri", "sat", "sun"] as const).map((day) => {
                          const val = row[day]
                          const intensity = Math.min(val / 150, 1)
                          return (
                            <td key={day} className="py-1.5 px-2">
                              <div
                                className="w-full h-8 rounded flex items-center justify-center text-[10px] font-medium"
                                style={{
                                  backgroundColor: `hsl(152, 60%, 48%, ${intensity * 0.7 + 0.05})`,
                                  color: intensity > 0.5 ? "white" : "hsl(220, 20%, 10%)",
                                }}
                              >
                                {val}
                              </div>
                            </td>
                          )
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
