"use client"

import type React from "react"

import { useState } from "react"
import { CalendarIcon, Check, Instagram, Loader2, Twitter } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SchedulePage() {
  const [date, setDate] = useState<Date>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 3000)
    }, 1500)
  }

  return (
    <DashboardShell>
      <DashboardHeader heading="Schedule Post" text="Create and schedule content for your social media accounts" />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Create Post</CardTitle>
            <CardDescription>Compose your content and select platforms to post to</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="post-content">Post Content</Label>
                <Textarea id="post-content" placeholder="What's on your mind?" className="min-h-[120px]" required />
                <div className="text-xs text-muted-foreground text-right">0/280 characters</div>
              </div>

              <div className="space-y-2">
                <Label>Media (optional)</Label>
                <div className="border-2 border-dashed rounded-md p-8 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <CalendarIcon className="h-8 w-8 text-muted-foreground" />
                    <div className="text-sm font-medium">
                      Drag & drop files or <span className="text-primary underline cursor-pointer">browse</span>
                    </div>
                    <div className="text-xs text-muted-foreground">Supports images and videos up to 10MB</div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Platforms</Label>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="twitter" />
                    <Label htmlFor="twitter" className="flex items-center">
                      <Twitter className="h-4 w-4 mr-2 text-blue-500" />
                      Twitter
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="instagram" />
                    <Label htmlFor="instagram" className="flex items-center">
                      <Instagram className="h-4 w-4 mr-2 text-pink-500" />
                      Instagram
                    </Label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Schedule</Label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date" className="text-xs">
                      Date
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal mt-1",
                            !date && "text-muted-foreground",
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div>
                    <Label htmlFor="time" className="text-xs">
                      Time
                    </Label>
                    <Select defaultValue="12:00">
                      <SelectTrigger id="time" className="mt-1">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="09:00">9:00 AM</SelectItem>
                        <SelectItem value="12:00">12:00 PM</SelectItem>
                        <SelectItem value="15:00">3:00 PM</SelectItem>
                        <SelectItem value="18:00">6:00 PM</SelectItem>
                        <SelectItem value="21:00">9:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Advanced Options</Label>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="thread" />
                    <Label htmlFor="thread">Create thread (Twitter only)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="first-comment" />
                    <Label htmlFor="first-comment">Add first comment (Instagram only)</Label>
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting || isSuccess}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Scheduling...
                  </>
                ) : isSuccess ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Scheduled Successfully
                  </>
                ) : (
                  "Schedule Post"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Posts</CardTitle>
              <CardDescription>Your next scheduled posts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-md p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Twitter className="h-4 w-4 text-blue-500" />
                      <span className="text-sm font-medium">Today, 3:00 PM</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </div>
                  <p className="text-sm mt-2 line-clamp-2">
                    Excited to announce our new feature launch! Check out our website for more details...
                  </p>
                </div>
                <div className="border rounded-md p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Instagram className="h-4 w-4 text-pink-500" />
                      <span className="text-sm font-medium">Tomorrow, 12:00 PM</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </div>
                  <p className="text-sm mt-2 line-clamp-2">
                    Behind the scenes at our latest product shoot. Can't wait to share more!
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Scheduled Posts
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tips</CardTitle>
              <CardDescription>Optimize your social media strategy</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm">
                <div className="space-y-2">
                  <h4 className="font-medium">Best Times to Post</h4>
                  <p className="text-muted-foreground">
                    Twitter: Weekdays between 8am-4pm
                    <br />
                    Instagram: Monday, Wednesday at 11am and Friday at 10-11am
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Content Tips</h4>
                  <p className="text-muted-foreground">
                    Use relevant hashtags, engage with your audience, and post consistently to increase engagement.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardShell>
  )
}

