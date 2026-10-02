// components/ProjectCard.tsx
interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  liveLink: string
  githubLink: string
  features: string[]
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
      
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden bg-gray-300">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover hover:scale-110 transition duration-300"
        />
      </div>

      {/* Project Content */}
      <div className="p-8">
        
        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Features */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {project.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map(tech => (
              <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <a 
            href={project.liveLink} 
            target="_blank"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg text-center transition duration-300"
          >
            Live Demo
          </a>
          <a 
            href={project.githubLink} 
            target="_blank"
            className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-2 px-4 rounded-lg text-center transition duration-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}