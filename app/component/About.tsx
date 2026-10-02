// components/About.tsx
export default function About() {
  return (
    <section id="about" className="bg-gray-50 py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* About Text */}
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              After 16 years in education as a teacher, I discovered my passion for web development.
              In 2024, I enrolled in an intensive Frontend Development program and haven't looked back.
            </p>
            
            <p className="text-lg">
              I specialize in building modern, responsive web applications using React and Next.js.
              I'm committed to writing clean code, optimizing performance, and creating exceptional 
              user experiences.
            </p>

            <p className="text-lg">
              Currently seeking my first role as a Frontend Developer. I'm ready to bring my skills,
              dedication, and work ethic to a growing team.
            </p>

            <div className="pt-4">
              <a href="/resume.pdf" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300">
                Download Resume
              </a>
            </div>
          </div>

          {/* Stats Card */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-600">
              <div className="text-4xl font-bold text-blue-600 mb-2">3+</div>
              <p className="text-gray-600 font-semibold">Portfolio Projects</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-cyan-600">
              <div className="text-4xl font-bold text-cyan-600 mb-2">100%</div>
              <p className="text-gray-600 font-semibold">Responsive Design</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-600">
              <div className="text-4xl font-bold text-blue-600 mb-2">7+</div>
              <p className="text-gray-600 font-semibold">Tech Skills</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-cyan-600">
              <div className="text-4xl font-bold text-cyan-600 mb-2">16</div>
              <p className="text-gray-600 font-semibold">Years Commitment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}