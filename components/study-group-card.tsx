import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface StudyGroupCardProps {
  name: string
  description: string
  members: number
  category: string
  image: string
}

export default function StudyGroupCard({ name, description, members, category, image }: StudyGroupCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-32 w-full">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold">{name}</h3>
            <Badge variant="outline" className="mt-1">
              {category}
            </Badge>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="h-4 w-4 mr-1" />
            {members}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="secondary" className="w-full" asChild>
          <Link href={`/study-groups/${name.toLowerCase().replace(/\s+/g, "-")}`}>View Group</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

