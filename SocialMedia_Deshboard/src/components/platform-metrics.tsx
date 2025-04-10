import { Progress } from "@/components/ui/progress"
import { Instagram, Twitter } from "lucide-react"

export function PlatformMetrics() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Twitter className="h-4 w-4 mr-2 text-blue-500" />
            <span className="text-sm font-medium">Twitter</span>
          </div>
          <span className="text-sm font-medium">24,531 followers</span>
        </div>
        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span>Engagement Rate</span>
            <span className="font-medium">2.8%</span>
          </div>
          <Progress value={28} className="h-2" />
        </div>
        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span>Impressions</span>
            <span className="font-medium">850K</span>
          </div>
          <Progress value={70} className="h-2" />
        </div>
        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span>Click-through Rate</span>
            <span className="font-medium">1.9%</span>
          </div>
          <Progress value={19} className="h-2" />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Instagram className="h-4 w-4 mr-2 text-pink-500" />
            <span className="text-sm font-medium">Instagram</span>
          </div>
          <span className="text-sm font-medium">6,099 followers</span>
        </div>
        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span>Engagement Rate</span>
            <span className="font-medium">4.1%</span>
          </div>
          <Progress value={41} className="h-2" />
        </div>
        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span>Impressions</span>
            <span className="font-medium">350K</span>
          </div>
          <Progress value={35} className="h-2" />
        </div>
        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span>Click-through Rate</span>
            <span className="font-medium">3.2%</span>
          </div>
          <Progress value={32} className="h-2" />
        </div>
      </div>
    </div>
  )
}

