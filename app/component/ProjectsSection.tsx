// components/ProjectsSection.tsx
import ProjectCard from './ProjectCard'

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "AZ Smart Tax Advisors",
      description: "Professional website for a tax advisory firm showcasing services and expertise.",
      image: "/images/project1.jpg",
      technologies: ["Next.js", "TypeScript", "Sanity CMS", "Tailwind CSS"],
      liveLink: "https://azsmarttax.com",
      githubLink: "https://github.com/yourusername/az-smart-tax",
      features: [
        "Responsive design for all devices",
        "Dynamic content from Sanity CMS",
        "Service showcase and client testimonials",
        "Contact form with email integration"
      ]
    },
    {
      id: 2,
      title: "Job Search Tracker",
      description: "Application to track job applications, interviews, and offers.",
      image: "/images/project2.jpg",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity"],
      liveLink: "https://job-tracker-demo.vercel.app",
      githubLink: "https://github.com/yourusername/job-tracker",
      features: [
        "Add and manage job applications",
        "Track interview dates and notes",
        "Status filtering and sorting",
        "Statistics dashboard"
      ]
    },
    {
      id: 3,
      title: "Todo App with Categories",
      description: "Stylish todo application with category organization and dark mode.",
      image: "/images/project3.jpg",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      liveLink: "https://todo-app-demo.vercel.app",
      githubLink: "https://github.com/yourusername/todo-app",
      features: [
        "Create, edit, delete tasks",
        "Organize by categories",
        "Dark and light mode toggle",
        "Local storage persistence"
      ]
    }
  ]

  return (
    <section id="projects" className="bg-gray-900 py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Projects
          </h2>
          <p className="text-gray-400 text-lg">
            Here are some of my best work showcasing my skills
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}