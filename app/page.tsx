import Link from "next/link"
import { Dumbbell, Shield, User, ArrowRight, Activity, Users, Calendar, BarChart3 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const features = [
  { icon: Users, label: "Member Management", description: "Track and manage all your gym members" },
  { icon: Calendar, label: "Class Scheduling", description: "Organize classes and bookings seamlessly" },
  { icon: Activity, label: "Workout Tracking", description: "Monitor progress and plan routines" },
  { icon: BarChart3, label: "Analytics & Reports", description: "Gain insights with powerful dashboards" },
]

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b bg-card">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary">
            <Dumbbell className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold font-heading tracking-tight text-foreground">FitLife Gym</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/admin" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Admin</Link>
          <Link href="/client" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Member Portal</Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-6">
            <Activity className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Premium Gym Management Platform</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight text-foreground text-balance mb-4">
            Manage Your Gym Like a Pro
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
            A modern SaaS platform for gym owners and members. Streamline operations, track progress, and grow your fitness business.
          </p>

          {/* Role Selection Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Link href="/admin" className="group">
              <Card className="h-full border-2 border-transparent hover:border-primary transition-all duration-200 hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-8">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-sidebar text-sidebar-foreground mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Shield className="w-8 h-8" />
                  </div>
                  <h2 className="text-xl font-bold font-heading text-foreground mb-2">Admin Dashboard</h2>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    Manage members, payments, classes, analytics, and gym operations from one powerful dashboard.
                  </p>
                  <Button variant="outline" className="gap-2 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all bg-transparent">
                    Enter Admin <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/client" className="group">
              <Card className="h-full border-2 border-transparent hover:border-accent transition-all duration-200 hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-8">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-sidebar text-sidebar-foreground mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <User className="w-8 h-8" />
                  </div>
                  <h2 className="text-xl font-bold font-heading text-foreground mb-2">Member Dashboard</h2>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    View workouts, book classes, manage your membership plan, and more.
                  </p>
                  <Button variant="outline" className="gap-2 group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all bg-transparent">
                    Enter Portal <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-16">
          {features.map((feature) => (
            <div key={feature.label} className="flex flex-col items-center text-center p-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted mb-3">
                <feature.icon className="w-5 h-5 text-muted-foreground" />
              </div>
              <span className="text-sm font-medium text-foreground">{feature.label}</span>
              <span className="text-xs text-muted-foreground mt-1">{feature.description}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card px-6 py-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Dumbbell className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">FitLife Gym</span>
          </div>
          <p className="text-xs text-muted-foreground">Built for modern fitness businesses. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
