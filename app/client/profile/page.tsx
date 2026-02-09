"use client"

import { User, Mail, Phone, Shield, Lock, AlertCircle, LogOut } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function ProfilePage() {
  return (
    <div className="flex flex-col gap-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold font-heading tracking-tight text-foreground">Profile & Settings</h1>
        <p className="text-sm text-muted-foreground mt-1">Manage your personal information and preferences.</p>
      </div>

      {/* Profile Card */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Avatar className="w-16 h-16">
              <AvatarFallback className="bg-primary text-primary-foreground text-xl font-bold">AX</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h2 className="text-lg font-bold font-heading text-foreground">Alex Thompson</h2>
              <p className="text-sm text-muted-foreground">Member since January 2025</p>
              <Badge className="mt-2 bg-primary text-primary-foreground">Premium Member</Badge>
            </div>
            <Button variant="outline" size="sm">Edit Profile</Button>
          </div>
        </CardContent>
      </Card>

      {/* Personal Info */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base font-heading">Personal Information</CardTitle>
          <CardDescription>Update your contact details and personal info.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium text-muted-foreground flex items-center gap-1.5 mb-1.5">
                <User className="w-3 h-3" /> Full Name
              </label>
              <input type="text" defaultValue="Alex Thompson" className="w-full rounded-lg border bg-card px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground flex items-center gap-1.5 mb-1.5">
                <Mail className="w-3 h-3" /> Email
              </label>
              <input type="email" defaultValue="alex@email.com" className="w-full rounded-lg border bg-card px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground flex items-center gap-1.5 mb-1.5">
                <Phone className="w-3 h-3" /> Phone
              </label>
              <input type="tel" defaultValue="+1 (555) 123-4567" className="w-full rounded-lg border bg-card px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground flex items-center gap-1.5 mb-1.5">
                <AlertCircle className="w-3 h-3" /> Emergency Contact
              </label>
              <input type="text" defaultValue="Jane Thompson - (555) 987-6543" className="w-full rounded-lg border bg-card px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
            </div>
          </div>
          <Button className="mt-4" size="sm">Save Changes</Button>
        </CardContent>
      </Card>

      {/* Security */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base font-heading flex items-center gap-2">
            <Lock className="w-4 h-4" />
            Security
          </CardTitle>
          <CardDescription>Manage your password and privacy settings.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex items-center justify-between p-3 rounded-lg border">
            <div>
              <p className="text-sm font-medium text-foreground">Change Password</p>
              <p className="text-xs text-muted-foreground">Last changed 3 months ago</p>
            </div>
            <Button variant="outline" size="sm">Update</Button>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg border">
            <div>
              <p className="text-sm font-medium text-foreground">Privacy Settings</p>
              <p className="text-xs text-muted-foreground">Control who can see your profile and activity</p>
            </div>
            <Button variant="outline" size="sm">Manage</Button>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg border border-destructive/20">
            <div>
              <p className="text-sm font-medium text-foreground flex items-center gap-2">
                <LogOut className="w-4 h-4 text-destructive" /> Sign Out
              </p>
              <p className="text-xs text-muted-foreground">Sign out of your account on this device</p>
            </div>
            <Button variant="destructive" size="sm">Logout</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
