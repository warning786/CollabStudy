import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Filter, Plus, Search, Users, Video } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default function StudyRoomsPage() {
  // Sample study room data
  const activeRooms = [
    {
      id: "1",
      name: "Advanced Algorithms Discussion",
      group: "CS Study Group",
      participants: 4,
      maxParticipants: 8,
      duration: "1h 20m",
      topics: ["Algorithms", "Computer Science"],
    },
    {
      id: "2",
      name: "React Hooks Workshop",
      group: "Web Dev Masters",
      participants: 6,
      maxParticipants: 10,
      duration: "45m",
      topics: ["React", "JavaScript", "Web Development"],
    },
    {
      id: "3",
      name: "Database Design Principles",
      group: "Database Design",
      participants: 3,
      maxParticipants: 6,
      duration: "2h 5m",
      topics: ["SQL", "Database", "Architecture"],
    },
    {
      id: "4",
      name: "Machine Learning Basics",
      group: "AI Enthusiasts",
      participants: 5,
      maxParticipants: 8,
      duration: "1h 10m",
      topics: ["AI", "Machine Learning", "Python"],
    },
  ]

  const scheduledRooms = [
    {
      id: "5",
      name: "Mobile App Development",
      group: "Mobile App Developers",
      scheduledTime: "Today, 5:00 PM",
      participants: 0,
      maxParticipants: 12,
      topics: ["iOS", "Android", "Mobile"],
    },
    {
      id: "6",
      name: "Cloud Computing Fundamentals",
      group: "Cloud Computing",
      scheduledTime: "Tomorrow, 3:30 PM",
      participants: 0,
      maxParticipants: 10,
      topics: ["AWS", "Azure", "Cloud"],
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Study Rooms</h1>
          <p className="text-muted-foreground">Join live study sessions or create your own room</p>
        </div>
        <Button asChild>
          <Link href="/study-rooms/create">
            <Plus className="mr-2 h-4 w-4" />
            Create Study Room
          </Link>
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search study rooms..." className="pl-8" />
        </div>
        <Button variant="outline" className="md:w-auto">
          <Filter className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </div>

      <Tabs defaultValue="active" className="space-y-4">
        <TabsList>
          <TabsTrigger value="active">Active Rooms</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
          <TabsTrigger value="my-rooms">My Rooms</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {activeRooms.map((room) => (
              <Card key={room.id}>
                <CardHeader>
                  <CardTitle>{room.name}</CardTitle>
                  <CardDescription>{room.group}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-1" />
                      {room.participants}/{room.maxParticipants}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {room.duration}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {room.topics.map((topic) => (
                      <Badge key={topic} variant="secondary">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href={`/study-rooms/${room.id}`}>
                      <Video className="mr-2 h-4 w-4" />
                      Join Room
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="scheduled" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {scheduledRooms.map((room) => (
              <Card key={room.id}>
                <CardHeader>
                  <CardTitle>{room.name}</CardTitle>
                  <CardDescription>{room.group}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-1" />
                      {room.participants}/{room.maxParticipants}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {room.scheduledTime}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {room.topics.map((topic) => (
                      <Badge key={topic} variant="secondary">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/study-rooms/${room.id}`}>Set Reminder</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="my-rooms" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {activeRooms.slice(0, 2).map((room) => (
              <Card key={room.id}>
                <CardHeader>
                  <CardTitle>{room.name}</CardTitle>
                  <CardDescription>{room.group}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-1" />
                      {room.participants}/{room.maxParticipants}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {room.duration}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {room.topics.map((topic) => (
                      <Badge key={topic} variant="secondary">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href={`/study-rooms/${room.id}`}>
                      <Video className="mr-2 h-4 w-4" />
                      Join Room
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

