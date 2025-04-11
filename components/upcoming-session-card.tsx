import { Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface UpcomingSessionCardProps {
  title: string
  group: string
  time: string
  participants: number
}

export default function UpcomingSessionCard({ title, group, time, participants }: UpcomingSessionCardProps) {
  return (
    <div className="flex items-center justify-between p-3 border rounded-lg">
      <div className="space-y-1">
        <h4 className="font-medium">{title}</h4>
        <div className="text-sm text-muted-foreground">{group}</div>
        <div className="text-xs text-muted-foreground">{time}</div>
      </div>
      <div className="flex flex-col items-end gap-2">
        <div className="flex items-center text-sm text-muted-foreground">
          <Users className="h-3 w-3 mr-1" />
          {participants}
        </div>
        <Button size="sm" variant="outline" asChild>
          <Link href="/study-rooms/join">Join</Link>
        </Button>
      </div>
    </div>
  )
}

