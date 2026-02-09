"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Menu,
  X,
  Bell,
  LayoutDashboard,
  User,
  Dumbbell,
  CalendarDays,
  ClipboardCheck,
  Activity,
  CreditCard,
  HelpCircle,
  LogOut,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/client", icon: LayoutDashboard, label: "Home" },
  { href: "/client/profile", icon: User, label: "Profile" },
  { href: "/client/workouts", icon: Dumbbell, label: "Workouts" },
  { href: "/client/classes", icon: CalendarDays, label: "Classes" },
  { href: "/client/checkins", icon: ClipboardCheck, label: "Check-ins" },
  { href: "/client/metrics", icon: Activity, label: "Metrics" },
  { href: "/client/plan", icon: CreditCard, label: "Plan" },
  { href: "/client/support", icon: HelpCircle, label: "Support" },
  { href: "/client/notifications", icon: Bell, label: "Notifications" },
]

export function ClientHeader() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-30 flex items-center justify-between h-16 px-4 lg:px-6 border-b bg-card">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          <span className="text-sm font-medium text-muted-foreground hidden sm:block">Welcome back, Alex</span>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/client/notifications">
            <Button variant="ghost" size="icon" className="relative" aria-label="Notifications">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-destructive" />
            </Button>
          </Link>
          <Avatar className="w-8 h-8">
            <AvatarFallback className="bg-accent text-accent-foreground text-xs font-semibold">AX</AvatarFallback>
          </Avatar>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-foreground/20" onClick={() => setMobileOpen(false)} />
          <nav className="absolute left-0 top-0 bottom-0 w-72 bg-sidebar text-sidebar-foreground flex flex-col" aria-label="Mobile member navigation">
            <div className="flex items-center gap-2.5 px-6 py-5 border-b border-sidebar-border">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-sidebar-primary">
                <Dumbbell className="w-5 h-5 text-sidebar-primary-foreground" />
              </div>
              <span className="text-base font-bold font-heading text-sidebar-primary-foreground">FitLife</span>
            </div>
            <div className="flex-1 px-3 py-4 flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-sidebar-primary text-sidebar-primary-foreground"
                        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    )}
                  >
                    <item.icon className="w-4 h-4 shrink-0" />
                    {item.label}
                  </Link>
                )
              })}
            </div>
            <div className="px-3 py-4 border-t border-sidebar-border">
              <Link
                href="/"
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
              >
                <LogOut className="w-4 h-4 shrink-0" />
                Back to Home
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
