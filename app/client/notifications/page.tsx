"use client"

import { useState } from "react"
import {
  Bell,
  BellOff,
  Check,
  CheckCheck,
  Calendar,
  CreditCard,
  Dumbbell,
  Megaphone,
  Clock,
  Gift,
  AlertTriangle,
  Trash2,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

type Notification = {
  id: number
  type: "class" | "payment" | "announcement" | "workout" | "promo" | "alert"
  title: string
  message: string
  time: string
  read: boolean
}

const initialNotifications: Notification[] = [
  {
    id: 1,
    type: "class",
    title: "Class Reminder",
    message: "Yoga Flow with Maria Lopez starts in 2 hours. Studio A.",
    time: "2 hours ago",
    read: false,
  },
  {
    id: 2,
    type: "payment",
    title: "Payment Processed",
    message: "Your monthly subscription of $79.00 has been charged. Invoice INV-2026-012.",
    time: "1 day ago",
    read: false,
  },
  {
    id: 3,
    type: "announcement",
    title: "New Spin Class Added",
    message: "Every Wednesday at 7 PM. Book your spot now through the Class Calendar!",
    time: "2 days ago",
    read: false,
  },
  {
    id: 4,
    type: "promo",
    title: "Valentine Special Offer",
    message: "Refer a friend this week and get 1 month free on your membership!",
    time: "3 days ago",
    read: true,
  },
  {
    id: 5,
    type: "workout",
    title: "Workout Plan Updated",
    message: "Your trainer Jake has updated your Tuesday workout. Check the new exercises.",
    time: "4 days ago",
    read: true,
  },
  {
    id: 6,
    type: "class",
    title: "Booking Confirmed",
    message: "HIIT Blast on Feb 11 at 10:30 AM has been confirmed. See you there!",
    time: "5 days ago",
    read: true,
  },
  {
    id: 7,
    type: "alert",
    title: "Membership Renewal Notice",
    message: "Your membership expires in 222 days. Auto-renewal is enabled.",
    time: "1 week ago",
    read: true,
  },
  {
    id: 8,
    type: "payment",
    title: "Payment Receipt",
    message: "Your January payment of $79.00 was successful. Invoice INV-2026-011.",
    time: "1 month ago",
    read: true,
  },
]

const typeConfig = {
  class: { icon: Calendar, color: "text-primary", bg: "bg-primary/10" },
  payment: { icon: CreditCard, color: "text-accent", bg: "bg-accent/10" },
  announcement: { icon: Megaphone, color: "text-chart-4", bg: "bg-chart-4/10" },
  workout: { icon: Dumbbell, color: "text-primary", bg: "bg-primary/10" },
  promo: { icon: Gift, color: "text-warning", bg: "bg-warning/10" },
  alert: { icon: AlertTriangle, color: "text-destructive", bg: "bg-destructive/10" },
}

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications)
  const [preferences, setPreferences] = useState({
    classReminders: true,
    paymentAlerts: true,
    announcements: true,
    promos: false,
    workoutUpdates: true,
  })

  const unreadCount = notifications.filter((n) => !n.read).length

  const markAsRead = (id: number) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })))
  }

  const deleteNotification = (id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id))
  }

  const filterByType = (type: string) => {
    if (type === "all") return notifications
    if (type === "unread") return notifications.filter((n) => !n.read)
    return notifications.filter((n) => n.type === type)
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-heading tracking-tight text-foreground flex items-center gap-2">
            Notifications
            {unreadCount > 0 && (
              <Badge className="bg-primary text-primary-foreground">{unreadCount} new</Badge>
            )}
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Stay updated with your gym activity and announcements.
          </p>
        </div>
        {unreadCount > 0 && (
          <Button variant="outline" size="sm" onClick={markAllRead} className="gap-2 bg-transparent">
            <CheckCheck className="w-4 h-4" /> Mark all as read
          </Button>
        )}
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="unread">
            Unread {unreadCount > 0 && `(${unreadCount})`}
          </TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
        </TabsList>

        {/* All Notifications */}
        <TabsContent value="all" className="mt-6">
          <Card>
            <CardContent className="p-0">
              {notifications.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <BellOff className="w-10 h-10 text-muted-foreground mb-3" />
                  <p className="text-sm font-medium text-foreground">No notifications</p>
                  <p className="text-xs text-muted-foreground mt-1">You are all caught up!</p>
                </div>
              ) : (
                <div className="divide-y">
                  {notifications.map((notification) => {
                    const config = typeConfig[notification.type]
                    const Icon = config.icon
                    return (
                      <div
                        key={notification.id}
                        className={cn(
                          "flex items-start gap-3 p-4 transition-colors",
                          !notification.read && "bg-primary/[0.03]"
                        )}
                      >
                        <div className={cn("flex items-center justify-center w-9 h-9 rounded-lg shrink-0 mt-0.5", config.bg)}>
                          <Icon className={cn("w-4 h-4", config.color)} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <p className={cn("text-sm font-medium", notification.read ? "text-foreground" : "text-foreground")}>
                              {notification.title}
                            </p>
                            {!notification.read && (
                              <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {notification.message}
                          </p>
                          <div className="flex items-center gap-1 mt-1.5 text-[10px] text-muted-foreground">
                            <Clock className="w-3 h-3" /> {notification.time}
                          </div>
                        </div>
                        <div className="flex items-center gap-1 shrink-0">
                          {!notification.read && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => markAsRead(notification.id)}
                              className="h-8 w-8 p-0"
                              aria-label="Mark as read"
                            >
                              <Check className="w-3.5 h-3.5" />
                            </Button>
                          )}
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => deleteNotification(notification.id)}
                            className="h-8 w-8 p-0 text-muted-foreground hover:text-destructive"
                            aria-label="Delete notification"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </Button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Unread */}
        <TabsContent value="unread" className="mt-6">
          <Card>
            <CardContent className="p-0">
              {filterByType("unread").length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCheck className="w-10 h-10 text-success mb-3" />
                  <p className="text-sm font-medium text-foreground">All caught up!</p>
                  <p className="text-xs text-muted-foreground mt-1">No unread notifications.</p>
                </div>
              ) : (
                <div className="divide-y">
                  {filterByType("unread").map((notification) => {
                    const config = typeConfig[notification.type]
                    const Icon = config.icon
                    return (
                      <div key={notification.id} className="flex items-start gap-3 p-4 bg-primary/[0.03]">
                        <div className={cn("flex items-center justify-center w-9 h-9 rounded-lg shrink-0 mt-0.5", config.bg)}>
                          <Icon className={cn("w-4 h-4", config.color)} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <p className="text-sm font-medium text-foreground">{notification.title}</p>
                            <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed">{notification.message}</p>
                          <div className="flex items-center gap-1 mt-1.5 text-[10px] text-muted-foreground">
                            <Clock className="w-3 h-3" /> {notification.time}
                          </div>
                        </div>
                        <div className="flex items-center gap-1 shrink-0">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => markAsRead(notification.id)}
                            className="h-8 w-8 p-0"
                            aria-label="Mark as read"
                          >
                            <Check className="w-3.5 h-3.5" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => deleteNotification(notification.id)}
                            className="h-8 w-8 p-0 text-muted-foreground hover:text-destructive"
                            aria-label="Delete notification"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </Button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Preferences */}
        <TabsContent value="preferences" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base font-heading flex items-center gap-2">
                <Bell className="w-4 h-4 text-primary" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4 max-w-md">
                <div className="flex items-center justify-between py-2">
                  <div>
                    <p className="text-sm font-medium text-foreground">Class Reminders</p>
                    <p className="text-xs text-muted-foreground">Get notified before your scheduled classes</p>
                  </div>
                  <Switch
                    checked={preferences.classReminders}
                    onCheckedChange={(val) => setPreferences((p) => ({ ...p, classReminders: val }))}
                  />
                </div>
                <div className="flex items-center justify-between py-2 border-t">
                  <div>
                    <p className="text-sm font-medium text-foreground">Payment Alerts</p>
                    <p className="text-xs text-muted-foreground">Billing confirmations and payment receipts</p>
                  </div>
                  <Switch
                    checked={preferences.paymentAlerts}
                    onCheckedChange={(val) => setPreferences((p) => ({ ...p, paymentAlerts: val }))}
                  />
                </div>
                <div className="flex items-center justify-between py-2 border-t">
                  <div>
                    <p className="text-sm font-medium text-foreground">Announcements</p>
                    <p className="text-xs text-muted-foreground">Gym news, schedule changes, and updates</p>
                  </div>
                  <Switch
                    checked={preferences.announcements}
                    onCheckedChange={(val) => setPreferences((p) => ({ ...p, announcements: val }))}
                  />
                </div>
                <div className="flex items-center justify-between py-2 border-t">
                  <div>
                    <p className="text-sm font-medium text-foreground">Promotions & Offers</p>
                    <p className="text-xs text-muted-foreground">Special deals and referral bonuses</p>
                  </div>
                  <Switch
                    checked={preferences.promos}
                    onCheckedChange={(val) => setPreferences((p) => ({ ...p, promos: val }))}
                  />
                </div>
                <div className="flex items-center justify-between py-2 border-t">
                  <div>
                    <p className="text-sm font-medium text-foreground">Workout Updates</p>
                    <p className="text-xs text-muted-foreground">When your trainer updates your plan</p>
                  </div>
                  <Switch
                    checked={preferences.workoutUpdates}
                    onCheckedChange={(val) => setPreferences((p) => ({ ...p, workoutUpdates: val }))}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
