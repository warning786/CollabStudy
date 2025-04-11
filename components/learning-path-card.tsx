import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Layers } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface LearningPathCardProps {
  title: string
  description: string
  progress: number
  estimatedTime: string
  modules: number
  image: string
}

export default function LearningPathCard({
  title,
  description,
  progress,
  estimatedTime,
  modules,
  image,
}: LearningPathCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-32 w-full">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardHeader className="pb-2">
        <h3 className="font-bold">{title}</h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {estimatedTime}
          </div>
          <div className="flex items-center">
            <Layers className="h-4 w-4 mr-1" />
            {modules} modules
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        <div className="space-y-1">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
            <div className="bg-primary h-full rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="secondary" className="w-full" asChild>
          <Link href={`/learning-paths/${title.toLowerCase().replace(/\s+/g, "-")}`}>Continue Learning</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

