"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Award,
  Calendar,
  Compass,
  FileText,
  Home,
  Layers,
  Menu,
  MessageSquare,
  Settings,
  Users,
  Video,
  Bot,
} from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const isMobile = useMobile()
  const [open, setOpen] = useState(false)

  const routes = [
    {
      label: "Dashboard",
      icon: Home,
      href: "/",
      active: pathname === "/",
    },
    {
      label: "Study Groups",
      icon: Users,
      href: "/study-groups",
      active: pathname === "/study-groups" || pathname.startsWith("/study-groups/"),
    },
    {
      label: "Study Rooms",
      icon: Video,
      href: "/study-rooms",
      active: pathname === "/study-rooms" || pathname.startsWith("/study-rooms/"),
    },
    {
      label: "Learning Paths",
      icon: Compass,
      href: "/learning-paths",
      active: pathname === "/learning-paths" || pathname.startsWith("/learning-paths/"),
    },
    {
      label: "Calendar",
      icon: Calendar,
      href: "/calendar",
      active: pathname === "/calendar",
    },
    {
      label: "Resources",
      icon: FileText,
      href: "/resources",
      active: pathname === "/resources" || pathname.startsWith("/resources/"),
    },
    {
      label: "Chat",
      icon: MessageSquare,
      href: "/chat",
      active: pathname === "/chat",
    },
    {
      label: "AI Assistant",
      icon: Bot,
      href: "/ai-assistant",
      active: pathname === "/ai-assistant",
    },
    {
      label: "Achievements",
      icon: Award,
      href: "/achievements",
      active: pathname === "/achievements",
    },
    {
      label: "Settings",
      icon: Settings,
      href: "/settings",
      active: pathname === "/settings",
    },
  ]

  const SidebarContent = (
    <div className={cn("flex h-full flex-col", className)}>
      <div className="px-3 py-4">
        <Link href="/" className="flex items-center pl-3 mb-10">
          <Layers className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold ml-2">CollabStudy</span>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Button
              key={route.href}
              variant={route.active ? "secondary" : "ghost"}
              className={cn("w-full justify-start", route.active ? "bg-secondary" : "hover:bg-secondary/50")}
              asChild
              onClick={() => isMobile && setOpen(false)}
            >
              <Link href={route.href}>
                <route.icon className="mr-2 h-5 w-5" />
                {route.label}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  )

  if (isMobile) {
    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          <ScrollArea className="h-full">{SidebarContent}</ScrollArea>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <div className="hidden border-r bg-background md:block w-64">
      <ScrollArea className="h-full">{SidebarContent}</ScrollArea>
    </div>
  )
}

