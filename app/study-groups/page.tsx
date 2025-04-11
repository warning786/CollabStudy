import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Filter, Plus, Search } from "lucide-react"
import Link from "next/link"
import StudyGroupCard from "@/components/study-group-card"

export default function StudyGroupsPage() {
  // Sample study group data
  const studyGroups = [
    {
      name: "CS Study Group",
      description: "Algorithms, data structures, and computer science fundamentals",
      members: 12,
      category: "Computer Science",
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      name: "Web Dev Masters",
      description: "Modern web development with React, Node.js, and more",
      members: 24,
      category: "Web Development",
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      name: "AI Enthusiasts",
      description: "Machine learning, neural networks, and AI applications",
      members: 18,
      category: "Artificial Intelligence",
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      name: "Math Wizards",
      description: "Advanced mathematics for computer science and engineering",
      members: 9,
      category: "Mathematics",
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      name: "Mobile App Developers",
      description: "iOS, Android, and cross-platform mobile development",
      members: 15,
      category: "Mobile Development",
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      name: "Database Design",
      description: "SQL, NoSQL, and database architecture",
      members: 11,
      category: "Databases",
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      name: "UI/UX Design",
      description: "User interface and experience design principles",
      members: 20,
      category: "Design",
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      name: "Cloud Computing",
      description: "AWS, Azure, GCP, and cloud architecture",
      members: 14,
      category: "Cloud",
      image: "/placeholder.svg?height=100&width=200",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Study Groups</h1>
          <p className="text-muted-foreground">Join existing groups or create your own to study with peers</p>
        </div>
        <Button asChild>
          <Link href="/study-groups/create">
            <Plus className="mr-2 h-4 w-4" />
            Create New Group
          </Link>
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search study groups..." className="pl-8" />
        </div>
        <Button variant="outline" className="md:w-auto">
          <Filter className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Groups</TabsTrigger>
          <TabsTrigger value="my-groups">My Groups</TabsTrigger>
          <TabsTrigger value="recommended">Recommended</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {studyGroups.map((group) => (
              <StudyGroupCard
                key={group.name}
                name={group.name}
                description={group.description}
                members={group.members}
                category={group.category}
                image={group.image}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="my-groups" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {studyGroups.slice(0, 4).map((group) => (
              <StudyGroupCard
                key={group.name}
                name={group.name}
                description={group.description}
                members={group.members}
                category={group.category}
                image={group.image}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="recommended" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {studyGroups.slice(4, 8).map((group) => (
              <StudyGroupCard
                key={group.name}
                name={group.name}
                description={group.description}
                members={group.members}
                category={group.category}
                image={group.image}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

