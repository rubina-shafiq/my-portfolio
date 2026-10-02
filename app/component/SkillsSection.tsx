// components/SkillsSection.tsx
export default function SkillsSection() {
  const skills = {
    frontend: ["HTML", "CSS", "TypeScript", "JavaScript", "React", "Next.js", "Tailwind CSS"],
    backend: ["Python", "Sanity CMS", "API Integration"],
    tools: ["Git & GitHub", "Vercel", "Figma", "VS Code"]
  }

  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
          My Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Frontend Skills */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Frontend</h3>
            <div className="flex flex-wrap gap-3">
              {skills.frontend.map(skill => (
                <span key={skill} className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition cursor-pointer">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-cyan-900 mb-6">Backend & CMS</h3>
            <div className="flex flex-wrap gap-3">
              {skills.backend.map(skill => (
                <span key={skill} className="bg-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-cyan-700 transition cursor-pointer">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-purple-900 mb-6">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-3">
              {skills.tools.map(skill => (
                <span key={skill} className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-purple-700 transition cursor-pointer">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}