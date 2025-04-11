import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Filter, Search } from "lucide-react"
import LearningPathCard from "@/components/learning-path-card"

export default function LearningPathsPage() {
  // Sample learning path data
  const learningPaths = [
    {
      title: "Full-Stack Web Development",
      description: "Master front-end and back-end technologies",
      progress: 65,
      estimatedTime: "12 weeks",
      modules: 8,
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      title: "Data Structures & Algorithms",
      description: "Essential computer science fundamentals",
      progress: 40,
      estimatedTime: "8 weeks",
      modules: 6,
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      title: "Machine Learning Fundamentals",
      description: "Introduction to AI and machine learning concepts",
      progress: 25,
      estimatedTime: "10 weeks",
      modules: 7,
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      title: "Mobile App Development",
      description: "Build cross-platform mobile applications",
      progress: 10,
      estimatedTime: "9 weeks",
      modules: 6,
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      title: "Cloud Computing",
      description: "Learn AWS, Azure, and GCP fundamentals",
      progress: 0,
      estimatedTime: "11 weeks",
      modules: 9,
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      title: "UI/UX Design",
      description: "Master user interface and experience design",
      progress: 0,
      estimatedTime: "7 weeks",
      modules: 5,
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      title: "Cybersecurity Basics",
      description: "Learn to protect systems and networks",
      progress: 0,
      estimatedTime: "10 weeks",
      modules: 8,
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      title: "Game Development",
      description: "Create games with modern engines and techniques",
      progress: 0,
      estimatedTime: "14 weeks",
      modules: 10,
      image: "/placeholder.svg?height=100&width=200",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Learning Paths</h1>
          <p className="text-muted-foreground">Follow structured learning paths to master new skills</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search learning paths..." className="pl-8" />
        </div>
        <Button variant="outline" className="md:w-auto">
          <Filter className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </div>

      <Tabs defaultValue="my-paths" className="space-y-4">
        <TabsList>
          <TabsTrigger value="my-paths">My Paths</TabsTrigger>
          <TabsTrigger value="all-paths">All Paths</TabsTrigger>
          <TabsTrigger value="recommended">Recommended</TabsTrigger>
        </TabsList>
        <TabsContent value="my-paths" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {learningPaths.slice(0, 4).map((path) => (
              <LearningPathCard
                key={path.title}
                title={path.title}
                description={path.description}
                progress={path.progress}
                estimatedTime={path.estimatedTime}
                modules={path.modules}
                image={path.image}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="all-paths" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {learningPaths.map((path) => (
              <LearningPathCard
                key={path.title}
                title={path.title}
                description={path.description}
                progress={path.progress}
                estimatedTime={path.estimatedTime}
                modules={path.modules}
                image={path.image}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="recommended" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {learningPaths.slice(4, 8).map((path) => (
              <LearningPathCard
                key={path.title}
                title={path.title}
                description={path.description}
                progress={path.progress}
                estimatedTime={path.estimatedTime}
                modules={path.modules}
                image={path.image}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

