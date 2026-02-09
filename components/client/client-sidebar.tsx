"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  User,
  Dumbbell,
  CalendarDays,
  ClipboardCheck,
  Activity,
  CreditCard,
  HelpCircle,
  Bell,
  LogOut,
} from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/client", icon: LayoutDashboard, label: "Home" },
  { href: "/client/profile", icon: User, label: "Profile & Settings" },
  { href: "/client/workouts", icon: Dumbbell, label: "Workout Plan" },
  { href: "/client/classes", icon: CalendarDays, label: "Class Calendar" },
  { href: "/client/checkins", icon: ClipboardCheck, label: "Check-ins" },
  { href: "/client/metrics", icon: Activity, label: "Body Metrics" },
  { href: "/client/plan", icon: CreditCard, label: "Plan Management" },
  { href: "/client/support", icon: HelpCircle, label: "Support" },
  { href: "/client/notifications", icon: Bell, label: "Notifications" },
]

export function ClientSidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden lg:flex flex-col w-64 min-h-screen bg-sidebar text-sidebar-foreground border-r border-sidebar-border">
      <div className="flex items-center gap-2.5 px-6 py-5 border-b border-sidebar-border">
        <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-sidebar-primary">
          <Dumbbell className="w-5 h-5 text-sidebar-primary-foreground" />
        </div>
        <div>
          <span className="text-base font-bold font-heading tracking-tight text-sidebar-primary-foreground">FitLife</span>
          <span className="block text-[11px] text-sidebar-foreground/60 uppercase tracking-wider">Member</span>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 flex flex-col gap-1" aria-label="Member navigation">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
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
      </nav>

      <div className="px-3 py-4 border-t border-sidebar-border">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
        >
          <LogOut className="w-4 h-4 shrink-0" />
          Back to Home
        </Link>
      </div>
    </aside>
  )
}
