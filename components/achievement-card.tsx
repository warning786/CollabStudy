import { Card, CardContent } from "@/components/ui/card"
import { Award, BookOpen, Bot, CheckCircle, Flame, Share2, UserPlus, Users } from "lucide-react"

interface AchievementCardProps {
  title: string
  description: string
  icon: string
  unlocked: boolean
  progress?: number
}

export default function AchievementCard({ title, description, icon, unlocked, progress = 0 }: AchievementCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "Flame":
        return <Flame className="h-6 w-6" />
      case "Users":
        return <Users className="h-6 w-6" />
      case "BookOpen":
        return <BookOpen className="h-6 w-6" />
      case "UserPlus":
        return <UserPlus className="h-6 w-6" />
      case "CheckCircle":
        return <CheckCircle className="h-6 w-6" />
      case "Share2":
        return <Share2 className="h-6 w-6" />
      case "Bot":
        return <Bot className="h-6 w-6" />
      case "Award":
        return <Award className="h-6 w-6" />
      default:
        return <Award className="h-6 w-6" />
    }
  }

  return (
    <Card className={`${unlocked ? "bg-primary/5" : "bg-muted/50"}`}>
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div
          className={`p-3 rounded-full ${unlocked ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}
        >
          {getIcon()}
        </div>
        <h3 className={`mt-3 font-medium ${unlocked ? "" : "text-muted-foreground"}`}>{title}</h3>
        <p className="text-xs text-muted-foreground mt-1">{description}</p>

        {!unlocked && progress > 0 && (
          <div className="w-full mt-3 space-y-1">
            <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
              <div className="bg-primary h-full rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="text-xs text-muted-foreground text-right">{progress}%</div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

