"use client"

import { useState } from "react"
import {
  CreditCard,
  Check,
  ArrowRight,
  Download,
  Clock,
  Shield,
  Star,
  Zap,
  CalendarDays,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const currentPlan = {
  name: "Premium",
  price: 79,
  billingCycle: "Monthly",
  startDate: "Mar 18, 2025",
  endDate: "Sep 18, 2026",
  daysRemaining: 222,
  totalDays: 548,
  status: "Active",
  features: [
    "Unlimited gym access",
    "All group classes included",
    "Personal trainer 2x/month",
    "Sauna & steam room access",
    "Locker room with storage",
    "Priority booking for classes",
  ],
}

const plans = [
  {
    name: "Basic",
    price: 29,
    period: "/month",
    description: "Great for beginners",
    icon: Shield,
    features: [
      "Gym floor access",
      "5 classes per month",
      "Basic locker usage",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: 79,
    period: "/month",
    description: "Most popular choice",
    icon: Star,
    features: [
      "Unlimited gym access",
      "All group classes",
      "Personal trainer 2x/month",
      "Sauna & steam room",
      "Locker with storage",
      "Priority booking",
    ],
    popular: true,
  },
  {
    name: "Elite",
    price: 129,
    period: "/month",
    description: "For serious athletes",
    icon: Zap,
    features: [
      "24/7 unlimited access",
      "All classes + private sessions",
      "Personal trainer 4x/month",
      "Full spa & recovery suite",
      "Nutrition planning",
      "Guest passes (2/month)",
    ],
    popular: false,
  },
]

const invoices = [
  { id: "INV-2026-012", date: "Feb 1, 2026", amount: 79, status: "Paid" },
  { id: "INV-2026-011", date: "Jan 1, 2026", amount: 79, status: "Paid" },
  { id: "INV-2025-010", date: "Dec 1, 2025", amount: 79, status: "Paid" },
  { id: "INV-2025-009", date: "Nov 1, 2025", amount: 79, status: "Paid" },
  { id: "INV-2025-008", date: "Oct 1, 2025", amount: 79, status: "Paid" },
]

export default function PlanManagementPage() {
  const [selectedTab, setSelectedTab] = useState("current")
  const progress = ((currentPlan.totalDays - currentPlan.daysRemaining) / currentPlan.totalDays) * 100

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold font-heading tracking-tight text-foreground">
          Plan Management
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          View your current plan, upgrade, or manage billing.
        </p>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList>
          <TabsTrigger value="current">Current Plan</TabsTrigger>
          <TabsTrigger value="upgrade">Upgrade</TabsTrigger>
          <TabsTrigger value="billing">Billing History</TabsTrigger>
        </TabsList>

        {/* Current Plan */}
        <TabsContent value="current" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2 border-primary/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-heading">Your Membership</CardTitle>
                  <Badge className="bg-success text-success-foreground">
                    {currentPlan.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Star className="w-5 h-5 text-primary" />
                      <h3 className="text-xl font-bold font-heading text-foreground">
                        {currentPlan.name} Plan
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      ${currentPlan.price}/month &middot; {currentPlan.billingCycle} billing
                    </p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted">
                    <p className="text-3xl font-bold font-heading text-foreground">
                      {currentPlan.daysRemaining}
                    </p>
                    <p className="text-xs text-muted-foreground">Days remaining</p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-muted-foreground">Membership progress</span>
                    <span className="text-xs font-medium text-foreground">
                      {Math.round(progress)}% elapsed
                    </span>
                  </div>
                  <Progress value={progress} className="h-2" />
                  <div className="flex items-center justify-between mt-1.5">
                    <span className="text-[10px] text-muted-foreground">{currentPlan.startDate}</span>
                    <span className="text-[10px] text-muted-foreground">{currentPlan.endDate}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3">Plan Features</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {currentPlan.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col gap-4">
              <Card>
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                      <CreditCard className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Payment Method</p>
                      <p className="text-xs text-muted-foreground">Visa ending in 4242</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Update Card
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10">
                      <CalendarDays className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Next Payment</p>
                      <p className="text-xs text-muted-foreground">Mar 1, 2026 &middot; $79.00</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Manage Auto-Pay
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-destructive/10">
                      <Clock className="w-5 h-5 text-destructive" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Freeze Plan</p>
                      <p className="text-xs text-muted-foreground">Pause up to 30 days</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full bg-transparent text-destructive border-destructive/30 hover:bg-destructive/5">
                    Request Freeze
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Upgrade Plans */}
        <TabsContent value="upgrade" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={
                  plan.popular
                    ? "border-2 border-primary relative"
                    : ""
                }
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                  </div>
                )}
                <CardContent className="p-6 flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <plan.icon className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-bold font-heading text-foreground">{plan.name}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-3xl font-bold font-heading text-foreground">
                      ${plan.price}
                    </span>
                    <span className="text-sm text-muted-foreground">{plan.period}</span>
                  </div>
                  <div className="flex flex-col gap-2.5 mb-6 flex-1">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    className={
                      plan.name === currentPlan.name
                        ? "w-full bg-transparent"
                        : plan.popular
                          ? "w-full bg-primary text-primary-foreground hover:bg-primary/90"
                          : "w-full bg-transparent"
                    }
                    variant={plan.name === currentPlan.name ? "outline" : plan.popular ? "default" : "outline"}
                    disabled={plan.name === currentPlan.name}
                  >
                    {plan.name === currentPlan.name ? (
                      "Current Plan"
                    ) : (
                      <>
                        Upgrade <ArrowRight className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Billing History */}
        <TabsContent value="billing" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-heading text-base">Payment History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left font-medium text-muted-foreground py-3 pr-4">Invoice</th>
                      <th className="text-left font-medium text-muted-foreground py-3 pr-4">Date</th>
                      <th className="text-left font-medium text-muted-foreground py-3 pr-4">Amount</th>
                      <th className="text-left font-medium text-muted-foreground py-3 pr-4">Status</th>
                      <th className="text-right font-medium text-muted-foreground py-3">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoices.map((invoice) => (
                      <tr key={invoice.id} className="border-b last:border-0">
                        <td className="py-3 pr-4 font-medium text-foreground">{invoice.id}</td>
                        <td className="py-3 pr-4 text-muted-foreground">{invoice.date}</td>
                        <td className="py-3 pr-4 text-foreground">${invoice.amount}.00</td>
                        <td className="py-3 pr-4">
                          <Badge variant="secondary" className="bg-success/10 text-success border-0">
                            {invoice.status}
                          </Badge>
                        </td>
                        <td className="py-3 text-right">
                          <Button variant="ghost" size="sm" className="gap-1.5 text-xs">
                            <Download className="w-3.5 h-3.5" /> PDF
                          </Button>
                        </td>
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
