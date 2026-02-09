"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Users,
  CreditCard,
  CalendarDays,
  ClipboardCheck,
  BarChart3,
  Dumbbell,
  Tag,
  LogOut,
} from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/admin", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/admin/members", icon: Users, label: "Members" },
  { href: "/admin/plans", icon: Tag, label: "Membership Plans" },
  { href: "/admin/payments", icon: CreditCard, label: "Payments" },
  { href: "/admin/classes", icon: CalendarDays, label: "Classes & Schedules" },
  { href: "/admin/checkins", icon: ClipboardCheck, label: "Check-ins" },
  { href: "/admin/analytics", icon: BarChart3, label: "Analytics & Reports" },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden lg:flex flex-col w-64 min-h-screen bg-sidebar text-sidebar-foreground border-r border-sidebar-border">
      <div className="flex items-center gap-2.5 px-6 py-5 border-b border-sidebar-border">
        <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-sidebar-primary">
          <Dumbbell className="w-5 h-5 text-sidebar-primary-foreground" />
        </div>
        <div>
          <span className="text-base font-bold font-heading tracking-tight text-sidebar-primary-foreground">FitLife</span>
          <span className="block text-[11px] text-sidebar-foreground/60 uppercase tracking-wider">Admin Panel</span>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 flex flex-col gap-1" aria-label="Admin navigation">
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
