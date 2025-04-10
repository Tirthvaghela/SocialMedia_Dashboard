import Image from "next/image"
import { Instagram, MessageSquare, Share2, ThumbsUp, Twitter } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function TopPosts() {
  return (
    <div className="space-y-6">
      <div className="border rounded-md p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder.svg" alt="Avatar" />
              <AvatarFallback>YB</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center">
                <span className="font-medium">Your Brand</span>
                <Twitter className="h-4 w-4 ml-2 text-blue-500" />
              </div>
              <p className="text-sm text-muted-foreground">Posted 5 days ago</p>
            </div>
          </div>
          <Button variant="outline" size="sm">
            Boost
          </Button>
        </div>
        <p className="mt-3">
          Excited to announce our new feature launch! Check out our website for more details on how this will transform
          your workflow.
        </p>
        <div className="mt-4 flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <ThumbsUp className="h-4 w-4 mr-1" />
            <span>1.2K</span>
          </div>
          <div className="flex items-center">
            <MessageSquare className="h-4 w-4 mr-1" />
            <span>89</span>
          </div>
          <div className="flex items-center">
            <Share2 className="h-4 w-4 mr-1" />
            <span>43</span>
          </div>
        </div>
      </div>

      <div className="border rounded-md p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder.svg" alt="Avatar" />
              <AvatarFallback>YB</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center">
                <span className="font-medium">Your Brand</span>
                <Instagram className="h-4 w-4 ml-2 text-pink-500" />
              </div>
              <p className="text-sm text-muted-foreground">Posted 1 week ago</p>
            </div>
          </div>
          <Button variant="outline" size="sm">
            Boost
          </Button>
        </div>
        <div className="mt-3 aspect-square relative rounded-md overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Post image"
            width={400}
            height={400}
            className="object-cover"
          />
        </div>
        <div className="mt-4 flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <ThumbsUp className="h-4 w-4 mr-1" />
            <span>928</span>
          </div>
          <div className="flex items-center">
            <MessageSquare className="h-4 w-4 mr-1" />
            <span>42</span>
          </div>
          <div className="flex items-center">
            <Share2 className="h-4 w-4 mr-1" />
            <span>12</span>
          </div>
        </div>
      </div>
    </div>
  )
}

