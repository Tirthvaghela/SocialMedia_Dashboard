import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart, Settings } from "lucide-react"

interface SocialAccountCardProps {
  platform: string
  username: string
  followers: number
  engagement: string
  icon: React.ReactNode
  color: string
}

export function SocialAccountCard({ platform, username, followers, engagement, icon, color }: SocialAccountCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className={`p-2 rounded-full ${color}`}>{icon}</div>
            <div>
              <CardTitle className="text-base">{platform}</CardTitle>
              <CardDescription>{username}</CardDescription>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 pt-4">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-muted-foreground">Followers</span>
            <span className="text-2xl font-bold">{followers.toLocaleString()}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-muted-foreground">Engagement</span>
            <span className="text-2xl font-bold">{engagement}</span>
          </div>
        </div>
        <div className="mt-6">
          <Button variant="outline" className="w-full">
            <BarChart className="mr-2 h-4 w-4" />
            View Analytics
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

