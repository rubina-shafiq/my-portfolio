// components/Hero.tsx
export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Hi, I'm 
            </h1>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">RUBINA SHAFIQ</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300">
              Frontend Developer | Next.js | React | TypeScript
            </p>

            <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
              I build fast, responsive web applications with modern technology. 
              From education to code - here's my journey into web development.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 text-center">
                View My Work
              </a>
              <a href="#contact" className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition duration-300 text-center">
                Let's Connect
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-4">
              <a href="https://www.linkedin.com/in/rubina-shafiq/" target="_blank" className="text-gray-400 hover:text-blue-400 transition">
                LinkedIn
              </a>
              <a href="https://github.com/rubina-shafiq" target="_blank" className="text-gray-400 hover:text-blue-400 transition">
                GitHub
              </a>
              <a href="mailto:Rubinashafiq088@gmail.com" className="text-gray-400 hover:text-blue-400 transition">
                Email
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <img 
                src="C:\Users\rubin\OneDrive\Documents\my-portfolio\my-portfolio\public\images\img.webp" 
                alt="Profile" 
                className="w-full h-full rounded-2xl object-cover border-4 border-blue-400 shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-400/20 to-cyan-400/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}