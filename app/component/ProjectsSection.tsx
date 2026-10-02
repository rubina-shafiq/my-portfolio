import ProjectCard from './ProjectCard'

export default function ProjectsSection() {
  const projects = [
    {
  id: 1,
  title: "AZ Advisory",
  description: "Professional website for tax and business advisory services. Modern design with service showcase and client testimonials.",
  technologies: ["Next.js", "TypeScript", "Sanity CMS", "Tailwind CSS"],
  liveLink: "https://azadvisory.vercel.app",
  githubLink: "https://github.com/rubina-shafiq/az_advisory",
  features: [
    "Responsive professional design",
    "Service showcase and pricing",
    "Client testimonials section",
    "Contact form integration"
  ]
},
    
  {
  id: 3,
  title: "Todo Application",
  description: "Task management app built with React and Next.js. Add, complete, and delete tasks with persistent storage.",
  technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  liveLink: "https://my-todo-app-dun-psi.vercel.app",
  githubLink: "https://github.com/rubina-shafiq/my-todo-app",
  features: [
    "Add and delete tasks",
    "Mark tasks complete",
    "Real-time stats dashboard",
    "Browser storage persistence"
  ]
}
  ]

  return (
    <section id="projects" className="bg-slate-900 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-2 mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A selection of recent work showcasing full-stack development skills and technical capabilities.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Projects Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}