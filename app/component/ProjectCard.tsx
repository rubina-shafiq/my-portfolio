import { ExternalLink , CheckCircle2 } from "lucide-react"
import { FaGithub } from "react-icons/fa";


interface Project {
  id: number
  title: string
  description: string
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
    <div className="group relative bg-slate-800/80 border border-slate-700/60 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 backdrop-blur-sm">
      <div>
        {/* Header Title */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Key Features */}
        <div className="mb-6 space-y-2">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Key Features
          </h4>
          <ul className="space-y-1.5">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-300 gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        {/* Technologies Badges Grid */}
        <div className="mb-6 pt-4 border-t border-slate-700/50">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-slate-900/80 text-blue-300 border border-blue-500/20 px-2.5 py-1 rounded-md text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links Grid */}
        <div className="grid grid-cols-2 gap-3">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 px-3 rounded-lg text-sm transition-all duration-200 shadow-md shadow-blue-600/20"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Live Demo</span>
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-slate-700/60 hover:bg-slate-700 text-slate-200 hover:text-white font-medium py-2 px-3 rounded-lg text-sm border border-slate-600/50 transition-all duration-200"
          >

            <FaGithub className="w-4 h-4" />
            <span>Code</span>
          </a>
        </div>
      </div>
    </div>
  )
}