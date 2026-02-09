"use client"

import { useState } from "react"
import { Search, Filter, MoreHorizontal, Eye, Edit, UserX, Plus } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type MemberStatus = "Active" | "Expired" | "Frozen"

interface Member {
  id: string
  name: string
  email: string
  membershipId: string
  plan: string
  status: MemberStatus
  joinDate: string
  expiryDate: string
}

const members: Member[] = [
  { id: "1", name: "Sarah Johnson", email: "sarah@email.com", membershipId: "FL-1001", plan: "Premium", status: "Active", joinDate: "Jan 15, 2025", expiryDate: "Jan 15, 2026" },
  { id: "2", name: "Mike Chen", email: "mike@email.com", membershipId: "FL-1002", plan: "Basic", status: "Active", joinDate: "Mar 10, 2025", expiryDate: "Mar 10, 2026" },
  { id: "3", name: "Emily Davis", email: "emily@email.com", membershipId: "FL-1003", plan: "Premium", status: "Frozen", joinDate: "Jun 22, 2025", expiryDate: "Jun 22, 2026" },
  { id: "4", name: "James Wilson", email: "james@email.com", membershipId: "FL-1004", plan: "Standard", status: "Active", joinDate: "Aug 5, 2025", expiryDate: "Aug 5, 2026" },
  { id: "5", name: "Anna Roberts", email: "anna@email.com", membershipId: "FL-1005", plan: "Basic", status: "Expired", joinDate: "Feb 1, 2025", expiryDate: "Feb 1, 2026" },
  { id: "6", name: "David Kim", email: "david@email.com", membershipId: "FL-1006", plan: "Premium", status: "Active", joinDate: "Sep 18, 2025", expiryDate: "Sep 18, 2026" },
  { id: "7", name: "Laura Martinez", email: "laura@email.com", membershipId: "FL-1007", plan: "Standard", status: "Active", joinDate: "Nov 3, 2025", expiryDate: "Nov 3, 2026" },
  { id: "8", name: "Tom Brown", email: "tom@email.com", membershipId: "FL-1008", plan: "Basic", status: "Expired", joinDate: "Apr 12, 2025", expiryDate: "Apr 12, 2026" },
]

const statusColor: Record<MemberStatus, string> = {
  Active: "bg-success/10 text-success border-0",
  Expired: "bg-destructive/10 text-destructive border-0",
  Frozen: "bg-accent/10 text-accent border-0",
}

export default function MembersPage() {
  const [filter, setFilter] = useState<"All" | MemberStatus>("All")
  const [search, setSearch] = useState("")

  const filtered = members.filter((m) => {
    const matchesFilter = filter === "All" || m.status === filter
    const matchesSearch =
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.email.toLowerCase().includes(search.toLowerCase()) ||
      m.membershipId.toLowerCase().includes(search.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-heading tracking-tight text-foreground">Members</h1>
          <p className="text-sm text-muted-foreground mt-1">Manage all gym members and their memberships.</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" /> Add Member
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 rounded-lg bg-muted px-3 py-2 flex-1 max-w-sm">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by name, email, or ID..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent text-sm outline-none placeholder:text-muted-foreground w-full"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              {(["All", "Active", "Expired", "Frozen"] as const).map((s) => (
                <Button
                  key={s}
                  variant={filter === s ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter(s)}
                  className="text-xs"
                >
                  {s}
                </Button>
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left text-xs font-medium text-muted-foreground py-3 px-2">Member</th>
                  <th className="text-left text-xs font-medium text-muted-foreground py-3 px-2">ID</th>
                  <th className="text-left text-xs font-medium text-muted-foreground py-3 px-2">Plan</th>
                  <th className="text-left text-xs font-medium text-muted-foreground py-3 px-2">Status</th>
                  <th className="text-left text-xs font-medium text-muted-foreground py-3 px-2">Join Date</th>
                  <th className="text-left text-xs font-medium text-muted-foreground py-3 px-2">Expiry</th>
                  <th className="text-right text-xs font-medium text-muted-foreground py-3 px-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((member) => (
                  <tr key={member.id} className="border-b last:border-0 hover:bg-muted/50 transition-colors">
                    <td className="py-3 px-2">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="bg-primary/10 text-primary text-xs font-semibold">
                            {member.name.split(" ").map((n) => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium text-foreground">{member.name}</p>
                          <p className="text-xs text-muted-foreground">{member.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-2 text-sm text-muted-foreground font-mono">{member.membershipId}</td>
                    <td className="py-3 px-2 text-sm text-foreground">{member.plan}</td>
                    <td className="py-3 px-2">
                      <Badge variant="secondary" className={statusColor[member.status]}>{member.status}</Badge>
                    </td>
                    <td className="py-3 px-2 text-sm text-muted-foreground">{member.joinDate}</td>
                    <td className="py-3 px-2 text-sm text-muted-foreground">{member.expiryDate}</td>
                    <td className="py-3 px-2 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="w-4 h-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem className="gap-2"><Eye className="w-4 h-4" /> View</DropdownMenuItem>
                          <DropdownMenuItem className="gap-2"><Edit className="w-4 h-4" /> Edit</DropdownMenuItem>
                          <DropdownMenuItem className="gap-2 text-destructive"><UserX className="w-4 h-4" /> Suspend</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden flex flex-col gap-3">
            {filtered.map((member) => (
              <div key={member.id} className="flex items-center justify-between p-3 rounded-lg border">
                <div className="flex items-center gap-3">
                  <Avatar className="w-9 h-9">
                    <AvatarFallback className="bg-primary/10 text-primary text-xs font-semibold">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium text-foreground">{member.name}</p>
                    <p className="text-xs text-muted-foreground">{member.plan} &middot; {member.membershipId}</p>
                  </div>
                </div>
                <Badge variant="secondary" className={statusColor[member.status]}>{member.status}</Badge>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-sm text-muted-foreground text-center py-8">No members found matching your criteria.</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
