import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Instagram, MessageSquare, ThumbsUp, Twitter } from "lucide-react"

export function RecentActivity() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9 mr-3">
          <AvatarImage src="/placeholder.svg" alt="Avatar" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <p className="text-sm font-medium leading-none">
            <Twitter className="h-4 w-4 inline-block mr-1 text-blue-500" />
            New comment on your tweet
          </p>
          <p className="text-sm text-muted-foreground">"Great insights! Thanks for sharing."</p>
          <div className="flex items-center pt-1">
            <ThumbsUp className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">12 likes</span>
            <MessageSquare className="h-3.5 w-3.5 ml-3 mr-1 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">3 replies</span>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9 mr-3">
          <AvatarImage src="/placeholder.svg" alt="Avatar" />
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <p className="text-sm font-medium leading-none">
            <Instagram className="h-4 w-4 inline-block mr-1 text-pink-500" />
            Your post received 128 likes
          </p>
          <p className="text-sm text-muted-foreground">"Behind the scenes at our latest product shoot..."</p>
          <div className="flex items-center pt-1">
            <ThumbsUp className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">128 likes</span>
            <MessageSquare className="h-3.5 w-3.5 ml-3 mr-1 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">24 comments</span>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9 mr-3">
          <AvatarImage src="/placeholder.svg" alt="Avatar" />
          <AvatarFallback>RK</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <p className="text-sm font-medium leading-none">
            <Twitter className="h-4 w-4 inline-block mr-1 text-blue-500" />
            Your tweet was retweeted 43 times
          </p>
          <p className="text-sm text-muted-foreground">"Excited to announce our new feature launch..."</p>
          <div className="flex items-center pt-1">
            <ThumbsUp className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">89 likes</span>
            <MessageSquare className="h-3.5 w-3.5 ml-3 mr-1 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">12 replies</span>
          </div>
        </div>
      </div>
    </div>
  )
}

