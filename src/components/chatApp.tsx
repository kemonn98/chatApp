/**
 * v0 by Vercel.
 * @see https://v0.dev/t/EMTQ6wy67oD
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function ChatApp() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "John Doe",
      text: "Hey, how's it going? I wanted to follow up on our discussion from yesterday.",
      timestamp: "10:30 AM",
      isSent: false,
    },
    {
      id: 2,
      sender: "You",
      text: "Hi John, I'm doing well. I'm free to chat now if you have some time.",
      timestamp: "11:00 AM",
      isSent: true,
    },
    {
      id: 3,
      sender: "John Doe",
      text: "Sounds good, let's hop on a call. I have a few things I want to discuss.",
      timestamp: "11:15 AM",
      isSent: false,
    },
  ])
  const [newMessage, setNewMessage] = useState("")
  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const newMessageObj = {
        id: messages.length + 1,
        sender: "You",
        text: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        isSent: true,
      }
      setMessages([...messages, newMessageObj])
      setNewMessage("")
    }
  }
  return (
    <div className="grid h-screen w-full grid-cols-[280px_1fr] bg-background">
      <div className="flex flex-col border-r bg-muted/40">
        <div className="sticky top-0 flex h-14 items-center justify-between border-b bg-background px-4">
          <div className="flex items-center gap-2">
            <UsersIcon className="h-5 w-5 text-muted-foreground" />
            <h3 className="text-lg font-medium">Users</h3>
          </div>
          <div className="relative">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search users..."
              className="h-8 w-40 rounded-md bg-muted pl-8 text-sm focus:outline-none"
            />
          </div>
        </div>
        <div className="flex-1 overflow-auto">
          <div className="grid gap-2 p-4">
            <Link
              href="#"
              className="flex items-center gap-3 rounded-md bg-muted/50 px-3 py-2 transition-colors hover:bg-muted"
              prefetch={false}
            >
              <Avatar className="h-8 w-8 border">
                <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex-1 truncate">
                <div className="font-medium">John Doe</div>
                <div className="text-sm text-muted-foreground">Hey, how's it going?</div>
              </div>
              <Badge className="bg-primary text-primary-foreground">3</Badge>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-md bg-muted/50 px-3 py-2 transition-colors hover:bg-muted"
              prefetch={false}
            >
              <Avatar className="h-8 w-8 border">
                <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <div className="flex-1 truncate">
                <div className="font-medium">Jane Smith</div>
                <div className="text-sm text-muted-foreground">Sounds good, let's discuss it.</div>
              </div>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-md bg-muted/50 px-3 py-2 transition-colors hover:bg-muted"
              prefetch={false}
            >
              <Avatar className="h-8 w-8 border">
                <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                <AvatarFallback>MJ</AvatarFallback>
              </Avatar>
              <div className="flex-1 truncate">
                <div className="font-medium">Michael Johnson</div>
                <div className="text-sm text-muted-foreground">Can you send me the file?</div>
              </div>
              <Badge className="bg-primary text-primary-foreground">1</Badge>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="sticky top-0 flex h-14 items-center justify-between border-b bg-background px-4">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8 border">
              <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">John Doe</div>
              <div className="text-sm text-muted-foreground">Online</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <PhoneIcon className="h-5 w-5" />
              <span className="sr-only">Call</span>
            </Button>
            <Button variant="ghost" size="icon">
              <VideoIcon className="h-5 w-5" />
              <span className="sr-only">Video Call</span>
            </Button>
            <Button variant="ghost" size="icon">
              <MoveHorizontalIcon className="h-5 w-5" />
              <span className="sr-only">More</span>
            </Button>
          </div>
        </div>
        <div className="flex-1 overflow-auto p-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex items-start gap-3 ${message.isSent ? "justify-end" : ""}`}>
              {!message.isSent && (
                <Avatar className="h-8 w-8 border">
                  <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                  <AvatarFallback>{message.sender.charAt(0)}</AvatarFallback>
                </Avatar>
              )}
              <div
                className={`flex-1 rounded-md p-3 ${
                  message.isSent ? "bg-primary text-primary-foreground" : "bg-muted/50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="font-medium">{message.isSent ? "You" : message.sender}</div>
                  <div className="text-xs text-muted-foreground">{message.timestamp}</div>
                </div>
                <div className="mt-2 text-sm">{message.text}</div>
              </div>
              {message.isSent && (
                <Avatar className="h-8 w-8 border">
                  <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                  <AvatarFallback>{message.sender.charAt(0)}</AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
        </div>
        <div className="sticky bottom-0 flex h-14 items-center justify-between border-t bg-background px-4">
          <Textarea
            placeholder="Type your message..."
            className="h-8 flex-1 resize-none rounded-md bg-muted pr-12 text-sm focus:outline-none"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <Button variant="ghost" size="icon" className="ml-2" onClick={handleSendMessage}>
            <SendIcon className="h-5 w-5" />
            <span className="sr-only">Send</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

function MoveHorizontalIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  )
}


function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function SendIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}


function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}


function VideoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  )
}