"use client"

import { useState } from "react"
import { Plus, Edit, Star, ToggleLeft, ToggleRight, Check } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const initialPlans = [
  { id: "1", name: "Basic", price: 29, duration: "Monthly", sessionsPerWeek: 3, classAccess: false, poolAccess: false, personalTrainer: false, featured: false, active: true },
  { id: "2", name: "Standard", price: 49, duration: "Monthly", sessionsPerWeek: 5, classAccess: true, poolAccess: false, personalTrainer: false, featured: false, active: true },
  { id: "3", name: "Premium", price: 79, duration: "Monthly", sessionsPerWeek: 7, classAccess: true, poolAccess: true, personalTrainer: true, featured: true, active: true },
  { id: "4", name: "Annual Basic", price: 290, duration: "Yearly", sessionsPerWeek: 3, classAccess: false, poolAccess: false, personalTrainer: false, featured: false, active: true },
  { id: "5", name: "Annual Premium", price: 790, duration: "Yearly", sessionsPerWeek: 7, classAccess: true, poolAccess: true, personalTrainer: true, featured: true, active: false },
]

const features = ["classAccess", "poolAccess", "personalTrainer"]
const featureLabels = {
  classAccess: "Class Access",
  poolAccess: "Pool Access",
  personalTrainer: "Personal Trainer",
}

export default function PlansPage() {
  const [plans, setPlans] = useState(initialPlans)

  const toggleActive = (id: string) => {
    setPlans((prev) =>
      prev.map((p) => (p.id === id ? { ...p, active: !p.active } : p))
    )
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-heading tracking-tight text-foreground">Membership Plans</h1>
          <p className="text-sm text-muted-foreground mt-1">Create, edit, and manage membership plans.</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" /> Create Plan
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card key={plan.id} className={`relative ${plan.featured ? "border-primary border-2" : ""} ${!plan.active ? "opacity-60" : ""}`}>
            {plan.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground gap-1">
                  <Star className="w-3 h-3" /> Featured
                </Badge>
              </div>
            )}
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-heading">{plan.name}</CardTitle>
                <Badge variant="secondary" className="text-xs">{plan.duration}</Badge>
              </div>
              <CardDescription>
                <span className="text-3xl font-bold font-heading text-foreground">${plan.price}</span>
                <span className="text-sm text-muted-foreground">/{plan.duration === "Monthly" ? "mo" : "yr"}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="w-4 h-4 text-primary" />
                  {plan.sessionsPerWeek} sessions/week
                </div>
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm">
                    <Check className={`w-4 h-4 ${plan[f] ? "text-primary" : "text-muted-foreground/30"}`} />
                    <span className={plan[f] ? "text-foreground" : "text-muted-foreground line-through"}>{featureLabels[f]}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 pt-2 border-t">
                <Button variant="outline" size="sm" className="flex-1 gap-1 bg-transparent">
                  <Edit className="w-3 h-3" /> Edit
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-1"
                  onClick={() => toggleActive(plan.id)}
                >
                  {plan.active ? (
                    <><ToggleRight className="w-4 h-4 text-primary" /> Active</>
                  ) : (
                    <><ToggleLeft className="w-4 h-4 text-muted-foreground" /> Inactive</>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
