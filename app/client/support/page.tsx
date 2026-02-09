"use client"

import { useState } from "react"
import {
  HelpCircle,
  MessageSquare,
  Phone,
  Mail,
  Search,
  ChevronDown,
  ChevronUp,
  Send,
  Clock,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const faqs = [
  {
    id: 1,
    question: "How do I freeze my membership?",
    answer:
      "You can freeze your membership for up to 30 days per year. Go to Plan Management and click 'Request Freeze'. A freeze request takes 24 hours to process and your billing will be paused during the freeze period.",
  },
  {
    id: 2,
    question: "How do I cancel a class booking?",
    answer:
      "Navigate to your Class Calendar page and find the booked class. Click the 'Cancel' button. Cancellations must be made at least 2 hours before the class start time to avoid a no-show penalty.",
  },
  {
    id: 3,
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "Yes! Go to Plan Management and select the 'Upgrade' tab. Choose your desired plan and the change will take effect at the start of your next billing cycle. Downgrades are processed the same way.",
  },
  {
    id: 4,
    question: "What are the gym operating hours?",
    answer:
      "Our gym is open Monday-Friday from 5:00 AM to 11:00 PM, Saturday 6:00 AM to 10:00 PM, and Sunday 7:00 AM to 9:00 PM. Elite members enjoy 24/7 access with their key card.",
  },
  {
    id: 5,
    question: "How do I track my body metrics?",
    answer:
      "Visit the Body Metrics page from your dashboard. You can log your weight, body fat %, measurements, and more. The system will automatically generate progress charts over time.",
  },
  {
    id: 6,
    question: "What is the guest pass policy?",
    answer:
      "Premium members get 1 guest pass per month, and Elite members get 2. Guests must sign a waiver at the front desk and be accompanied by the member at all times during their visit.",
  },
]

const tickets = [
  {
    id: "TKT-0045",
    subject: "Locker not opening",
    status: "Open",
    date: "Feb 8, 2026",
    lastReply: "Staff is investigating",
  },
  {
    id: "TKT-0039",
    subject: "Billing discrepancy in January",
    status: "Resolved",
    date: "Jan 22, 2026",
    lastReply: "Refund processed successfully",
  },
  {
    id: "TKT-0031",
    subject: "Request for personal trainer change",
    status: "Resolved",
    date: "Dec 15, 2025",
    lastReply: "New trainer assigned: Jake Turner",
  },
]

export default function SupportPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [newSubject, setNewSubject] = useState("")
  const [newMessage, setNewMessage] = useState("")

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold font-heading tracking-tight text-foreground">
          Support Center
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Get help, submit a ticket, or browse frequently asked questions.
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-5 flex items-center gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 shrink-0">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Call Us</p>
              <p className="text-xs text-muted-foreground">+1 (555) 123-4567</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5 flex items-center gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 shrink-0">
              <Mail className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Email</p>
              <p className="text-xs text-muted-foreground">support@fitlifegym.com</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5 flex items-center gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-warning/10 shrink-0">
              <MessageSquare className="w-5 h-5 text-warning" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Live Chat</p>
              <p className="text-xs text-muted-foreground">Mon-Fri, 8 AM - 8 PM</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="faq">
        <TabsList>
          <TabsTrigger value="faq">FAQs</TabsTrigger>
          <TabsTrigger value="tickets">My Tickets</TabsTrigger>
          <TabsTrigger value="new">Submit a Ticket</TabsTrigger>
        </TabsList>

        {/* FAQ Section */}
        <TabsContent value="faq" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <CardTitle className="text-base font-heading flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-primary" />
                  Frequently Asked Questions
                </CardTitle>
                <div className="relative sm:ml-auto sm:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search FAQs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9"
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                {filteredFaqs.length === 0 && (
                  <p className="text-sm text-muted-foreground py-6 text-center">
                    No FAQs match your search. Try a different query or submit a ticket.
                  </p>
                )}
                {filteredFaqs.map((faq) => (
                  <div key={faq.id} className="border rounded-lg">
                    <button
                      type="button"
                      onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                      className="w-full flex items-center justify-between p-4 text-left"
                    >
                      <span className="text-sm font-medium text-foreground pr-4">{faq.question}</span>
                      {expandedFaq === faq.id ? (
                        <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
                      )}
                    </button>
                    {expandedFaq === faq.id && (
                      <div className="px-4 pb-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* My Tickets */}
        <TabsContent value="tickets" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base font-heading">Support Tickets</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-3">
                {tickets.map((ticket) => (
                  <div
                    key={ticket.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg border gap-3"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-muted shrink-0 mt-0.5">
                        {ticket.status === "Open" ? (
                          <AlertCircle className="w-4 h-4 text-warning" />
                        ) : (
                          <CheckCircle2 className="w-4 h-4 text-success" />
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-xs font-medium text-muted-foreground">{ticket.id}</span>
                          <Badge
                            variant="secondary"
                            className={
                              ticket.status === "Open"
                                ? "bg-warning/10 text-warning border-0"
                                : "bg-success/10 text-success border-0"
                            }
                          >
                            {ticket.status}
                          </Badge>
                        </div>
                        <p className="text-sm font-medium text-foreground">{ticket.subject}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{ticket.lastReply}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 sm:flex-col sm:items-end">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" /> {ticket.date}
                      </div>
                      <Button variant="ghost" size="sm" className="text-xs gap-1">
                        View <ExternalLink className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Submit Ticket */}
        <TabsContent value="new" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base font-heading flex items-center gap-2">
                <Send className="w-4 h-4 text-primary" />
                Submit a Support Ticket
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setNewSubject("")
                  setNewMessage("")
                }}
                className="flex flex-col gap-4 max-w-lg"
              >
                <div>
                  <label htmlFor="subject" className="text-sm font-medium text-foreground mb-1.5 block">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Brief description of your issue"
                    value={newSubject}
                    onChange={(e) => setNewSubject(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground mb-1.5 block">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Provide details about your issue or request..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    rows={5}
                  />
                </div>
                <Button type="submit" className="w-fit gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                  <Send className="w-4 h-4" /> Submit Ticket
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
