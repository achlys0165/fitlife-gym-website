"use client"

import { useState } from "react"
import { Search, AlertTriangle, CreditCard, Receipt, DollarSign, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const kpis = [
  { title: "Total Revenue", value: "$48,520", icon: DollarSign },
  { title: "Pending Payments", value: "$2,340", icon: Clock },
  { title: "Failed Payments", value: "3", icon: AlertTriangle },
  { title: "Active Subscriptions", value: "1,186", icon: CreditCard },
]

const invoices = [
  { id: "INV-2401", member: "Sarah Johnson", amount: 79, date: "Feb 8, 2026", method: "Credit Card", status: "Paid" },
  { id: "INV-2402", member: "Mike Chen", amount: 29, date: "Feb 7, 2026", method: "Bank Transfer", status: "Paid" },
  { id: "INV-2403", member: "Emily Davis", amount: 79, date: "Feb 6, 2026", method: "Credit Card", status: "Pending" },
  { id: "INV-2404", member: "James Wilson", amount: 49, date: "Feb 5, 2026", method: "PayPal", status: "Paid" },
  { id: "INV-2405", member: "Anna Roberts", amount: 29, date: "Feb 3, 2026", method: "Credit Card", status: "Overdue" },
  { id: "INV-2406", member: "David Kim", amount: 79, date: "Feb 2, 2026", method: "Credit Card", status: "Failed" },
  { id: "INV-2407", member: "Laura Martinez", amount: 49, date: "Feb 1, 2026", method: "Bank Transfer", status: "Paid" },
  { id: "INV-2408", member: "Tom Brown", amount: 29, date: "Jan 30, 2026", method: "PayPal", status: "Overdue" },
]

const statusColor = {
  Paid: "bg-success/10 text-success border-0",
  Pending: "bg-warning/10 text-warning-foreground border-0",
  Overdue: "bg-destructive/10 text-destructive border-0",
  Failed: "bg-destructive/10 text-destructive border-0",
}

export default function PaymentsPage() {
  const [search, setSearch] = useState("")
  const filtered = invoices.filter(
    (inv) =>
      inv.member.toLowerCase().includes(search.toLowerCase()) ||
      inv.id.toLowerCase().includes(search.toLowerCase())
  )

  const alertPayments = invoices.filter((inv) => inv.status === "Overdue" || inv.status === "Failed")

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold font-heading tracking-tight text-foreground">Payments</h1>
        <p className="text-sm text-muted-foreground mt-1">Invoices, receipts, and billing management.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi) => (
          <Card key={kpi.title}>
            <CardContent className="flex items-center gap-4 p-5">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted shrink-0">
                <kpi.icon className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{kpi.title}</p>
                <p className="text-xl font-bold font-heading text-foreground">{kpi.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Invoices</TabsTrigger>
          <TabsTrigger value="alerts" className="gap-1">
            Alerts
            {alertPayments.length > 0 && (
              <span className="ml-1 flex items-center justify-center w-5 h-5 rounded-full bg-destructive text-destructive-foreground text-[10px] font-bold">
                {alertPayments.length}
              </span>
            )}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 rounded-lg bg-muted px-3 py-2 max-w-sm">
                <Search className="w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search invoices..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="bg-transparent text-sm outline-none placeholder:text-muted-foreground w-full"
                />
              </div>
            </CardHeader>
            <CardContent>
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left text-xs font-medium text-muted-foreground py-3 px-2">Invoice</th>
                      <th className="text-left text-xs font-medium text-muted-foreground py-3 px-2">Member</th>
                      <th className="text-left text-xs font-medium text-muted-foreground py-3 px-2">Amount</th>
                      <th className="text-left text-xs font-medium text-muted-foreground py-3 px-2">Date</th>
                      <th className="text-left text-xs font-medium text-muted-foreground py-3 px-2">Method</th>
                      <th className="text-left text-xs font-medium text-muted-foreground py-3 px-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((inv) => (
                      <tr key={inv.id} className="border-b last:border-0 hover:bg-muted/50 transition-colors">
                        <td className="py-3 px-2 text-sm font-medium font-mono text-foreground">{inv.id}</td>
                        <td className="py-3 px-2 text-sm text-foreground">{inv.member}</td>
                        <td className="py-3 px-2 text-sm font-medium text-foreground">${inv.amount}</td>
                        <td className="py-3 px-2 text-sm text-muted-foreground">{inv.date}</td>
                        <td className="py-3 px-2">
                          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                            <CreditCard className="w-3 h-3" /> {inv.method}
                          </div>
                        </td>
                        <td className="py-3 px-2">
                          <Badge variant="secondary" className={statusColor[inv.status]}>{inv.status}</Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="md:hidden flex flex-col gap-3">
                {filtered.map((inv) => (
                  <div key={inv.id} className="flex items-center justify-between p-3 rounded-lg border">
                    <div>
                      <p className="text-sm font-medium text-foreground">{inv.member}</p>
                      <p className="text-xs text-muted-foreground">{inv.id} &middot; ${inv.amount}</p>
                    </div>
                    <Badge variant="secondary" className={statusColor[inv.status]}>{inv.status}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="alerts">
          <Card>
            <CardHeader>
              <CardTitle className="text-base font-heading flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-destructive" />
                Payment Alerts
              </CardTitle>
              <CardDescription>Overdue and failed payments requiring attention.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-3">
                {alertPayments.map((inv) => (
                  <div key={inv.id} className="flex items-center justify-between p-4 rounded-lg border border-destructive/20 bg-destructive/5">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-destructive/10">
                        <AlertTriangle className="w-4 h-4 text-destructive" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{inv.member}</p>
                        <p className="text-xs text-muted-foreground">{inv.id} &middot; ${inv.amount} &middot; {inv.date}</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className={statusColor[inv.status]}>{inv.status}</Badge>
                  </div>
                ))}
                {alertPayments.length === 0 && (
                  <p className="text-sm text-muted-foreground text-center py-8">No payment alerts at this time.</p>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
